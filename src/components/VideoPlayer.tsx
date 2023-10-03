import React, {useCallback, useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//@ts-ignore


// import required modules
import {Pagination, Navigation} from "swiper";
import {classList} from "@/helpers/classList";

interface videoPlayerInterface {
    theme: 'green' | 'red',
    lessons: Array<{
        lessonName: string,
        videoHref: string,
        icon: string,
    }>
}

export default function VideoPlayer({theme, lessons}: videoPlayerInterface) {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const [currentVideo, setCurrentVideo] = useState(0)

    const [savedVideos,setSavedVideos]=useState<Array<{
        lessonName: string,
        videoHref: string,
        icon: string,
    }>>([])


    return (
        <div className={'overflow-visible'}>
            <iframe className={'w-full aspect-video sm:aspect-auto sm:h-[480px] mb-2 lg:mb-10 lg:rounded-xl lg:px-16'} style={{borderRadius: '20px'}}
                    src={lessons[currentVideo].videoHref}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            <div className={'flex items-center overflow-visible lg:pb-40'}>
                <div
                    className={'cursor-pointer mr-4 hidden lg:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handlePrev}>
                    <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
                </div>
                <Swiper ref={sliderRef}
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            640:{
                                slidesPerView:3,
                                spaceBetween:70
                            },
                            1280:{
                                slidesPerView:4,
                                spaceBetween:70
                            }
                        }}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        className="videoSwiper"
                >
                    {lessons.map((item, counter) => {
                        return (
                            <SwiperSlide key={counter}>
                                <div className={'h-32 lg:h-60 relative'}>
                                    {savedVideos.find(saved=>saved.lessonName==item.lessonName)?<img className={'w-4 z-20 cursor-pointer lg:w-8 aspect-square absolute right-3 top-3'} src={'/save_filled.svg'} onClick={()=>{
                                        let need_index=savedVideos.findIndex(saved=>saved.lessonName==item.lessonName)
                                        let temp=[...savedVideos];
                                        temp.splice(need_index,1);
                                        setSavedVideos(temp)
                                    }}/>:<img className={'w-4 z-20 cursor-pointer lg:w-8 aspect-square absolute right-3 top-3'} src={'/save.svg'} onClick={()=>{
                                        let temp=[...savedVideos]
                                        temp.push(item)
                                        setSavedVideos(temp)
                                    }}/>}

                                    <div
                                        className={classList(theme == 'red' ? 'bg-red' : 'bg-green', 'text-white lg:px-4 lg:py-10 transition-all w-full h-full duration-300 relative rounded-xl p-2', counter == currentVideo ? 'bg-opacity-100' : 'bg-opacity-50 cursor-pointer')}
                                        onClick={() => {
                                            setCurrentVideo(counter)
                                        }}><img className={'my-2 w-4 lg:w-12 aspect-square'} src={item.icon}/>
                                        <p className={'my-2 font-bold text-lg lg:text-2xl text-white'}>Урок {counter + 1}</p>
                                        <p className={'my-2 text-[0.5rem] sm:text-xs lg:text-xs'}>{item.lessonName}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={'cursor-pointer ml-4 hidden lg:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handleNext}>
                    <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
                </div>
            </div>
            {/*<div className={'flex items-center justify-center'}>*/}
            {/*    {lessons.map((item,counter)=>{*/}
            {/*        return(*/}
            {/*            <div key={counter} className={classList(counter==currentVideo?'bg-opacity-100':'bg-opacity-50',theme=='red'?'bg-red':'bg-green','rounded-full w-3 mt-7 aspect-square rounded-full mx-3 cursor-pointer')} onClick={()=>{setCurrentVideo(counter)}}>*/}

            {/*            </div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}

import React, {useCallback, useRef, useState} from "react";
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

    return (
        <div className={'overflow-visible'}>
            <iframe className={'w-full aspect-video sm:aspect-auto sm:h-[480px] mb-2 sm:mb-10 sm:rounded-xl sm:px-16'} style={{borderRadius: '20px'}}
                    src={lessons[currentVideo].videoHref}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            <div className={'flex items-center overflow-visible sm:pb-40'}>
                <div
                    className={'cursor-pointer mr-4 hidden sm:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
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
                                <div
                                    className={classList(theme == 'red' ? 'bg-red' : 'bg-green', 'text-white transition-all duration-300 h-32 sm:h-60 rounded-xl p-2 sm:px-4 sm:py-10', counter == currentVideo ? 'bg-opacity-100' : 'bg-opacity-50 cursor-pointer')}
                                    onClick={() => {
                                        setCurrentVideo(counter)
                                    }}>
                                    <img className={'my-2 w-4 sm:w-12 aspect-square'} src={item.icon}/>
                                    <p className={'my-2 font-bold text-sm sm:text-2xl text-white'}>Урок {counter + 1}</p>
                                    <p className={'my-2 text-[0.5rem] sm:text-xs'}>{item.lessonName}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={'cursor-pointer ml-4 hidden sm:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
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

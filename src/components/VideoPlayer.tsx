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
        <div>
            <iframe className={'w-full h-[480px] mb-10 rounded-xl px-16'} style={{borderRadius:'20px'}} src={lessons[currentVideo].videoHref}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            <div className={'flex items-center'}>
                <div
                    className={'cursor-pointer mr-4 flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handlePrev}>
                    <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
                </div>
                <Swiper ref={sliderRef}
                        slidesPerView={4}
                        spaceBetween={70}
                    // navigation={{
                    //     prevEl: navigationPrevRef.current,
                    //     nextEl: navigationNextRef.current,
                    // }}
                    // onBeforeInit={(swiper) => {
                    //     swiper.params.navigation.prevEl = navigationPrevRef.current;
                    //     swiper.params.navigation.nextEl = navigationNextRef.current;
                    // }}

                        modules={[Navigation]}
                        className="mySwiper"
                >
                    {lessons.map((item, counter) => {
                        return (
                            <SwiperSlide key={counter}>
                                <div
                                    className={classList(theme == 'red' ? 'bg-red' : 'bg-green', 'text-white transition-all duration-300 h-60 rounded-xl px-4 py-10', counter == currentVideo ? 'bg-opacity-100' : 'bg-opacity-50 cursor-pointer')}
                                    onClick={() => {
                                        setCurrentVideo(counter)
                                    }}>
                                    <img className={'my-2 w-12 aspect-square'} src={item.icon}/>
                                    <p className={'my-2 font-bold text-2xl text-white'}>Урок {counter + 1}</p>
                                    <p className={'my-2 '}>{item.lessonName}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={'cursor-pointer ml-4 flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handleNext}>
                    <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
                </div>
            </div>
            <div className={'flex items-center justify-center'}>
                {lessons.map((item,counter)=>{
                    return(
                        <div key={counter} className={classList(counter==currentVideo?'bg-opacity-100':'bg-opacity-50',theme=='red'?'bg-red':'bg-green','rounded-full w-3 mt-7 aspect-square rounded-full mx-3 cursor-pointer')} onClick={()=>{setCurrentVideo(counter)}}>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

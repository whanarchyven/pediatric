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
import {eden, useEden} from "@/helpers/sdk";
import VideoTab from "@/components/VideoTab";
import Loading from "@/components/Loading";

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

    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        uuid,
        saved
    } = data?.profile ?? {} as any;

    return (
        <div className={'overflow-visible'}>
            <iframe className={'w-full aspect-video sm:aspect-auto sm:h-[480px] mb-2 lg:mb-10 lg:rounded-xl lg:px-16'}
                    style={{borderRadius: '20px'}}
                    src={lessons[currentVideo].videoHref}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            <div className={'flex items-center overflow-visible lg:pb-40'}>
                <div
                    className={'cursor-pointer mr-4 hidden lg:flex items-center p-[15px] justify-center w-[3%] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handlePrev}>
                    <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
                </div>
                <Swiper ref={sliderRef}
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 70
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 70
                            }
                        }}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                        className="videoSwiper w-[90%]"
                >
                    {lessons.map((item, counter) => {
                        return (
                            <SwiperSlide key={counter}>
                                {saved ?
                                    <div>{saved?.find(savedCont => savedCont.href == item.videoHref) ?
                                        <VideoTab theme={theme} user_uuid={uuid} isSaved={true} lessonName={item.lessonName}
                                                  icon={item.icon} counter={counter} callback={() => {
                                            setCurrentVideo(counter)
                                        }} href={item.videoHref} currentVideo={currentVideo}></VideoTab> :
                                        <VideoTab theme={theme} user_uuid={uuid} isSaved={false} lessonName={item.lessonName}
                                                  icon={item.icon} counter={counter} callback={() => {
                                            setCurrentVideo(counter)
                                        }} href={item.videoHref} currentVideo={currentVideo}></VideoTab>}
                                    </div>:<Loading></Loading>}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={'cursor-pointer ml-4 hidden lg:flex items-center p-[15px] justify-center w-[3%] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
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

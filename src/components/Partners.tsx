import React, {useCallback, useRef} from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination, Navigation} from "swiper";
import Post from "@/components/Post";
import it from "node:test";
import Link from "next/link";

const News = () => {

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const news = [
        {
            image: '/pages/main/partners/ispd.png'
        },
        {
            image: '/pages/main/partners/дети бела.jpg'
        },
        {
            image: '/pages/main/partners/родвк.png'
        },
        {
            image: '/pages/main/partners/спр.png'
        },
        {
            image: '/pages/main/partners/ispd.png'
        },
        {
            image: '/pages/main/partners/дети бела.jpg'
        },
        {
            image: '/pages/main/partners/родвк.png'
        },
        {
            image: '/pages/main/partners/спр.png'
        },
    ]

    return (
        <div className={'flex w-full mt-5 items-center'}>
            <div
                className={'cursor-pointer mr-[50px] hidden sm:flex items-center p-[15px] justify-center  w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handlePrev}>
                <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
            </div>
            <Swiper ref={sliderRef}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 70
                        }
                    }}
                    className={'w-full'}
            >
                {news.map((item, counter) => {
                    return (
                        <SwiperSlide className={'relative group'} key={counter}>
                            <div className={'rounded-lg overflow-hidden'}>
                                <img
                                    className={'transition-all cursor-pointer duration-300 h-60 object-contain w-full group-hover:scale-125'}
                                    src={item.image}/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div
                className={'cursor-pointer ml-[50px] relative hidden sm:flex items-center p-[15px] justify-center w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
        </div>
    );
};

export default News;
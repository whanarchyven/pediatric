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

const Partners911 = () => {

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
            image: '/partners/LEO_Logo_Black_RGB.jpg',
            link:''
        },
        {
            image: '/partners/glenmark logo without tagline.jpg',
            link:''
        },
        {
            image: '/partners/GALDERMA_LOGO_BLACK_RGB 1.png',
            link:''
        },
        {
            image: '/partners/invar_logo_1.png',
            link:''
        },

        {
            image: '/partners/JJ_Logo_SingleLine_Red_RGB.png',
            link:''
        },
        {
            image: '/partners/RENO_AVENE_LOGO_210721_01_LOGO_B.png',
            link:''
        },
        {
            image: '/partners/Swixx.png',
            link:''
        },
        {
            image: '/partners/childs.png',
            link:''
        },
        {
            image: '/partners/IMG_0445.PNG',
            link:''
        },
        {
            image: '/partners/OUS_Viatris_Logo_Horiz_RGB.png',
            link:''
        },
        {
            image: '/partners/g14.png',
            link:''
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
                        640:{
                            slidesPerView:2,
                            spaceBetween:70
                        },
                        1280:{
                            slidesPerView:3,
                            spaceBetween:70
                        },
                    }}
                    className={'w-full'}
            >
                {news.map((item, counter) => {
                    return (
                        <SwiperSlide className={'relative group'} key={counter}>
                            {item.link!=''?<Link href={item.link} className={'rounded-lg cursor-pointer overflow-hidden'}>
                                <img
                                    className={'transition-all cursor-pointer duration-300 h-60 object-contain w-full sm:group-hover:scale-125'}
                                    src={item.image}/>
                            </Link>:<div className={'rounded-lg cursor-pointer overflow-hidden'}>
                                <img
                                    className={'transition-all cursor-pointer duration-300 h-60 object-contain w-full sm:group-hover:scale-125'}
                                    src={item.image}/>
                            </div>}
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

export default Partners911;
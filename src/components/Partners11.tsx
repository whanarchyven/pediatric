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

const Partners11 = () => {

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
            image: '/partners/g14.png',
            link:'https://www.ispedderm.com/'
        },
        {
            image: '/partners/glenmark logo without tagline.jpg',
            link:'https://www.espd.info/'
        },
        {
            image: '/partners/IMG_0439.PNG',
            link:'https://deti-bela.ru/'
        },
        {
            image: '/partners/invar_logo_1.png',
            link:'https://www.rodv.ru/'
        },
        {
            image: '/partners/jgl_only_logo.jpg',
            link:'https://www.pediatr-russia.ru/'
        },
        {
            image: '/partners/jsn_logo_jj_horz_color_rgb.jpg',
            link:''
        },
        {
            image: '/partners/larocheposay.png',
            link:''
        },
        {
            image: '/partners/LEO_Logo_Black_RGB.jpg',
            link:'https://www.ispedderm.com/'
        },
        {
            image: '/partners/logo black.png',
            link:'https://www.espd.info/'
        },
        {
            image: '/partners/MERZ THERAPEUTICS-Logo VC horizontal.png',
            link:'https://deti-bela.ru/'
        },
        {
            image: '/partners/OUS_Viatris_Logo_Horiz_RGB.png',
            link:'https://www.rodv.ru/'
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
                            slidesPerView:1,
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

export default Partners11;
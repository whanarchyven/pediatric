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
            image: '/pages/main/partners/ispd1.png',
            link:'https://www.ispedderm.com/'
        },
        {
            image: '/pages/main/partners/ESPD1 лого.jpg',
            link:'https://www.espd.info/'
        },
        {
            image: '/pages/main/partners/дети бела1.jpg',
            link:'https://deti-bela.ru/'
        },
        {
            image: '/pages/main/partners/родвк1.png',
            link:'https://www.rodv.ru/'
        },
        {
            image: '/pages/main/partners/спр1.png',
            link:'https://www.pediatr-russia.ru/'
        },
        {
            image: '/pages/main/partners/Ассоциация здоровье детей1.png',
            link:''
        },
        {
            image: '/pages/main/partners/НЦЗД1.jpg',
            link:''
        },
        {
            image: '/pages/main/partners/ispd1.png',
            link:'https://www.ispedderm.com/'
        },
        {
            image: '/pages/main/partners/ESPD1 лого.jpg',
            link:'https://www.espd.info/'
        },
        {
            image: '/pages/main/partners/дети бела1.jpg',
            link:'https://deti-bela.ru/'
        },
        {
            image: '/pages/main/partners/родвк1.png',
            link:'https://www.rodv.ru/'
        },
        {
            image: '/pages/main/partners/спр1.png',
            link:'https://www.pediatr-russia.ru/'
        },
        {
            image: '/pages/main/partners/Ассоциация здоровье детей1.png',
            link:''
        },
        {
            image: '/pages/main/partners/НЦЗД1.jpg',
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

export default News;
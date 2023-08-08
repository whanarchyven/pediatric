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

    const news=[
        {
            id:0,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 1',
            date:'23.06',
            image:'/pages/main/news/1.png'
        },
        {
            id:1,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 2',
            date:'23.06',
            image:'/pages/main/news/2.png'
        },
        {
            id:2,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 3',
            date:'23.06',
            image:'/pages/main/news/3.png'
        },
        {
            id:3,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 4',
            date:'23.06',
            image:'/pages/main/events/main_event.png'
        },
        {
            id:4,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 5',
            date:'23.06',
            image:'/pages/main/news/2.png'
        },
        {
            id:5,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 6',
            date:'23.06',
            image:'/pages/main/news/3.png'
        },
        {
            id:6,
            type:'Мероприятие',
            name:'Путь детской дерматологии: от истоков к перспективам. Часть 7',
            date:'23.06',
            image:'/pages/main/events/main_event.png'
        },

    ]

    return (
        <div className={'flex w-full items-center'}>
            <div
                className={'cursor-pointer mr-[50px] hidden sm:flex items-center p-[15px] justify-center w-[70px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handlePrev}>
                <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
            </div>
            <Swiper ref={sliderRef}
                    loop={true}
                    navigation={true}
                    modules={[ Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640:{
                            slidesPerView:3,
                            spaceBetween:70
                        }
                    }}
            >
                {news.map((item,counter)=>{
                    return (
                        <SwiperSlide className={'relative group'} key={counter}>
                            <Link href={{pathname:'/events/event', query:{id:item.id}} }>
                                <div className={'gap-4 flex cursor-pointer flex-col'}>
                                    <div className={'rounded-lg overflow-hidden'}>
                                        <img className={'transition-all duration-300 h-60 object-cover w-full group-hover:scale-125'} src={item.image}/>
                                    </div>
                                    <div className={'w-full flex items-center justify-between'}>
                                        <div className={'flex rounded-lg text-white p-2 w-[65%] items-center justify-center border-2 border-green-two bg-green-two'}>
                                            {item.type}
                                        </div>
                                        <div className={'flex rounded-lg text-green-two p-2 w-[30%] items-center justify-center border-2 border-green-two'}>
                                            {item.date}
                                        </div>
                                    </div>
                                    <p className={'text-center font-normal text-black'}>{item.name}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div
                className={'cursor-pointer ml-[50px] relative hidden sm:flex items-center p-[15px] justify-center w-[70px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
        </div>
    );
};

export default News;
import React, {useCallback, useRef} from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";


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
            id: 0,
            type: 'Конференция',
            name: 'IX Всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии»',
            date: '11.11.2023',
            image: '/pages/main/main_bg.png'
        },
        {
            id: 2,
            type: 'Конференция',
            name: 'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            date: '17.10-18.10',
            image: '/pages/events/ekb_bg.jpeg'
        },
        {
            id:12,
            type:'Конференция',
            name:'II научно-практическая конференция «Путь детской дерматологии: от истоков к перспективам»',
            date:'07.10.2023',
            image:'/pages/new2.png'
        },
        {
            id:11,
            type:'Конференция',
            name:'I научно-практическая конференция «Путь детской дерматологии: от истоков к перспективам. атопический дерматит»',
            date:'23.09.2023',
            image:'/pages/new.png'
        },

        // {
        //     id: 3,
        //     type: 'Конференция',
        //     date: '11.09.2023 - 11.11.2023',
        //     name: 'Воздушный рейс',
        //     image: '/pages/main/sliderBackgrounds/2.png'
        // },
        {
            id: 5,
            type: 'Конференция',
            date: '10.06.2023',
            name: 'I Научно-практическая конференция «Летняя академия детской дерматологии»',
            image: '/pages/events/summer_bg.jpeg'
        },
        {
            id: 6,
            type: 'Конференция',
            date: '01.06.2023',
            name: 'I Научно-практическая конференция "Дерматологические чтения в педиатрии" в г.Новосибирск',
            image: '/pages/events/novosib.jpeg'
        },
        {
            id: 7,
            type: 'Конференция',
            date: '19.05.2023',
            name: 'II научно-образовательная конференция "Актуальные вопросы дерматологии детского возраста: простые решения сложных проблем, разбор клинических случаев".',
            image: '/pages/events/clinick.jpeg'
        },
        {
            id: 8,
            type: 'Конференция',
            date: '29.04.2023',
            name: 'II Научно-практическая конференция дерматологов и педиатров в г.Грозный "Дерматологические чтения в педиатрии"',
            image: '/pages/events/grozny.jpeg'
        },
        {
            id: 9,
            type: 'Конференция',
            date: '22.04.2023',
            name: 'II Научно-образовательная конференция "Псориаз в детском возрасте: современные решения старых проблем"',
            image: '/pages/events/ocean.jpg'
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
                            slidesPerView:1,
                            spaceBetween:70
                        },
                        1280:{
                            slidesPerView:3,
                            spaceBetween:70
                        },
                    }}
            >
                {news.map((item,counter)=>{
                    return (
                        <SwiperSlide className={'relative group'} key={counter}>
                            <Link href={`/events/${item.id}`}>
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
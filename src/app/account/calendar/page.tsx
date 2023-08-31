
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";


import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import PublicationTab from "@/components/Publication Tab";
import Calendar from "@/components/Calendar";
import Link from "next/link";


// import required modules


export default function Home() {



    const images = '/pages/account'

    const news=[
        {
            id:3,
            type:'Марафон',
            name:'Поэзия детской дерматологии',
            date:'11.09-17.09',
            image:'/marafon.png'
        },
        {
            id:0,
            type:'Конференция',
            name:'IX Всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии»',
            date:'11.11',
            image:'/pages/main/news/2.png'
        },
        {
            id:1,
            type:'Конференция',
            name:'II научно-практическая конференция дерматовенерологов и педиатров Алтайского края и Республики Алтай',
            date:'26.09',
            image:'/АЛТАЙ.jpg'
        },
        {
            id:2,
            type:'Конференция',
            name:'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            date:'17.10-18.10',
            image:'/ЕКБ.jpg'
        },
        {
            id:1,
            type:'Конференция',
            name:'II научно-практическая конференция дерматовенерологов и педиатров Алтайского края и Республики Алтай',
            date:'26.09',
            image:'/АЛТАЙ.jpg'
        },
        {
            id:2,
            type:'Конференция',
            name:'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            date:'17.10-18.10',
            image:'/ЕКБ.jpg'
        },
    ]

    return (
        <main className={'p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Календарь <br/><span
                    className={'font-extrabold'}>Событий 2023</span></p>
            </div>
            <div className={'mt-8'}>
                <Calendar></Calendar>
            </div>
            <div className={'mt-12'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>МЕРОПРИЯТИЯ, НА КОТОРЫЕ <br/><span
                    className={'font-extrabold'}>ВЫ ЗАРЕГИСТРИРОВАЛИСЬ</span></p>
                <div className={'grid grid-cols-3 mt-12 gap-8'}>
                    {news.map((item,counter)=>{
                        return (
                            <Link key={counter} href={`/events/${item.id}`}>
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

                        )
                    })}

                </div>
            </div>
        </main>
    )
}

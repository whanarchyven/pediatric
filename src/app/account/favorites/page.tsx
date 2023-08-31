"use client"
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
import Post from "@/components/Post";


// import required modules


export default function Home() {

    const router = useRouter()

    const [activeTab, setActiveTab] = useState('docs')

    const images = '/pages/account'

    const news = [
        {
            id: 3,
            type: 'Марафон',
            name: 'Поэзия детской дерматологии',
            date: '11.09-17.09',
            image: '/marafon.png'
        },
        {
            id: 0,
            type: 'Конференция',
            name: 'IX Всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии»',
            date: '11.11',
            image: '/pages/main/news/2.png'
        },
        {
            id: 1,
            type: 'Конференция',
            name: 'II научно-практическая конференция дерматовенерологов и педиатров Алтайского края и Республики Алтай',
            date: '26.09',
            image: '/АЛТАЙ.jpg'
        },
        {
            id: 2,
            type: 'Конференция',
            name: 'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            date: '17.10-18.10',
            image: '/ЕКБ.jpg'
        },
        {
            id: 1,
            type: 'Конференция',
            name: 'II научно-практическая конференция дерматовенерологов и педиатров Алтайского края и Республики Алтай',
            date: '26.09',
            image: '/АЛТАЙ.jpg'
        },
        {
            id: 2,
            type: 'Конференция',
            name: 'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            date: '17.10-18.10',
            image: '/ЕКБ.jpg'
        },
    ]

    const posts=[
        {
            title:'Азбука атопика',
            caption:'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий.',
            image:'1',
        },
        {
            title:'Атопический дерматит и зуд',
            caption:'Беспокойный сон малыша как "страшный сон" мамы атопика...',
            image:'2',
        },
        {
            title:'Роль эмолентов в лечении атопического дерматита',
            caption:'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...',
            image:'3',
        },
        {
            title:'Азбука атопика',
            caption:'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий.',
            image:'1',
        },
        {
            title:'Атопический дерматит и зуд',
            caption:'Беспокойный сон малыша как "страшный сон" мамы атопика...',
            image:'2',
        },
        {
            title:'Роль эмолентов в лечении атопического дерматита',
            caption:'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...',
            image:'3',
        },

    ]


    return (
        <main className={'p-12'}>
            <div className={''}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Избранное</p>
                <div className={'flex mt-8 items-center gap-6'}>
                    {activeTab == 'docs' ?
                        <div className={'p-4 transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                            <img className={'w-4 aspect-square'} src={`${images}/docs_active.svg`}/>
                            <p className={'text-white font-inter font-normal'}>Материалы</p>
                        </div> : <div onClick={()=>{setActiveTab('docs')}} className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                            <img className={'w-4 aspect-square'} src={`${images}/docs.svg`}/>
                            <p className={'text-green font-inter font-normal'}>Материалы</p>
                        </div>}
                    {activeTab == 'events' ?
                        <div className={'p-4 transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                            <img className={'w-4 aspect-square'} src={`${images}/events_active.svg`}/>
                            <p className={'text-white font-inter font-normal'}>Мероприятия</p>
                        </div> : <div onClick={()=>{setActiveTab('events')}} className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                            <img className={'w-4 aspect-square'} src={`${images}/events.svg`}/>
                            <p className={'text-green font-inter font-normal'}>Мероприятия</p>
                        </div>}


                </div>
                <div className={'grid grid-cols-3 mt-12 gap-8'}>
                    {activeTab=='docs'?news.map((item, counter) => {
                        return (
                        <Link key={counter} href={`/events/${item.id}`}>
                        <div className={'gap-4 flex cursor-pointer flex-col'}>
                        <div className={'rounded-lg overflow-hidden'}>
                        <img
                        className={'transition-all duration-300 h-60 object-cover w-full group-hover:scale-125'}
                        src={item.image}/>
                        </div>
                        <div className={'w-full flex items-center justify-between'}>
                        <div
                        className={'flex rounded-lg text-white p-2 w-[65%] items-center justify-center border-2 border-green-two bg-green-two'}>
                    {item.type}
                        </div>
                        <div
                        className={'flex rounded-lg text-green-two p-2 w-[30%] items-center justify-center border-2 border-green-two'}>
                    {item.date}
                        </div>
                        </div>
                        <p className={'text-center font-normal text-black'}>{item.name}</p>
                        </div>
                        </Link>

                        )
                    }):posts.map((item, counter) => {
                        return (
                            <Link className={'relative'} key={counter} href={'/'}>
                                <div className={'w-5 z-20 bg-green rounded-full p-1 flex items-center justify-center cursor-pointer sm:w-8 aspect-square absolute right-7 top-7'}>
                                    <img src={'/save_filled.svg'}/></div>
                                <div className={'w-full p-4 flex gap-4 flex-col h-full items-center justify-center '} >
                                    <img className={'cursor-pointer w-full h-52 object-cover rounded-lg'} src={`/posts/${item.image}.jpg`} onClick={()=>{}}/>
                                    <p className={'text-black w-full truncate text-sm sm:text-lg text-center font-bold'}>
                                        {item.title}
                                    </p>
                                    <p className={'text-black truncate w-full sm:text-sm text-xs text-center'}>
                                        {item.caption}
                                    </p>
                                    <div className={'hover:bg-green justify-self-end hover:text-white duration-300 transition-all cursor-pointer mt-2 w-full sm:w-3/4 border-green border-2 sm:p-4 p-1 sm:text-xs text-sm text-green flex items-center rounded-lg font-bold justify-center'} onClick={()=>{
                                    }}>
                                        Читать статью
                                    </div>
                                </div>
                            </Link>

                        )
                    })
                    }
                </div>
            </div>
        </main>
    )
}

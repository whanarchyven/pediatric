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


// import required modules
import {Mousewheel, EffectCoverflow, Pagination, Autoplay, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const posts = [
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        },
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        },
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        }
    ]

    const employers=[
        {
            name:'Мурашкин Николай Николаевич',
            image:`${images}/employers/murashkin.png`,
            offer:'Президент',
            contact:'/',
            description:'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name:'Леонтьев Николай Николаевич',
            image:`${images}/employers/murashkin.png`,
            offer:'Доктор',
            contact:'/',
            description:'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name:'Гумеров Николай Николаевич',
            image:`${images}/employers/murashkin.png`,
            offer:'Директор',
            contact:'/',
            description:'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name:'Горшков Николай Николаевич',
            image:`${images}/employers/murashkin.png`,
            offer:'Глава нацбанка',
            contact:'/',
            description:'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
    ]




    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[70px] grid grid-cols-1 sm:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 sm:mt-0 mt-20 flex flex-col sm:items-start  justify-center'}>
                        <div className={'w-full'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={"coverflow"}
                                direction={"vertical"}
                                centeredSlides={true}
                                slidesPerView={1}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -100,
                                    depth: 300,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                loop={true}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, EffectCoverflow, Pagination, Autoplay]}
                                className={'myswiper h-96 w-full'}
                            >
                                {posts.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={'pl-[70px]'}>
                                            <div className={'flex flex-col gap-5'}>
                                                <div
                                                    className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                    {item.date}
                                                </div>
                                                <div className={'text-left text-5xl text-white '}
                                                     dangerouslySetInnerHTML={{__html: item.title}}>

                                                </div>
                                                <p className={'text-white font-normal'}>{item.description}</p>
                                                <Link
                                                    className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}
                                                    href={item.link}>
                                                    Подробнее
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>
            <div className={'bg-white h-[854px] items-center px-[140px] gap-20 grid grid-cols-2'}>
                <img className={'w-full aspect-square col-span-1 rounded-xl'} src={`${images}/kids.jpg`}/>
                <div className={'flex flex-col gap-6 items-start'}>
                    <p className={'uppercase font-extralight text-5xl text-black'}>О ДЕТСКОЙ
                        <br/><span className={'font-bold'}>ДЕРМАТОЛОГИИ</span></p>
                    <p className={'font-bold text-green text-xl'}>
                        Проблема заболеваний кожи детского возраста остается одной из наиболее значимых.
                    </p>
                    <p className={'font-normal text-black'}>
                        Это связано как с распространенностью патологии во всех возрастных группах, так и изменением
                        характера данной группы заболеваний: более частыми рецидивами, отсутствием стойкой
                        долговременной ремиссии, увеличением количества больных тяжелыми формами заболеваний, частым
                        развитием осложнений, формированием тяжелых инвалидизирующих форм, что оказывает негативное
                        влияние на качество жизни больных.
                        <br/><br/>
                        Именно поэтому так важно решение проблем, связанных с улучшением оказания медицинской
                        специализированной помощи детскому населению, увеличением подготовленных кадров, необходимостью
                        усовершенствования имеющихся алгоритмов маршрутизации пациентов и профилактических мероприятий
                        для раннего выявления и предотвращения новых случаев заболеваний кожи и подкожной клетчатки у
                        детей.
                    </p>
                </div>
            </div>
            <div className={'relative green-gradient overflow-hidden h-[700px] flex items-center sm:pl-[70px] sm:px-[140px]'}>
                <img className={'absolute asset w-full z-50 left-0 top-0'} src={'/about_us_offset_top.png'}/>
                <p className={'absolute top-28 pl-[70px] text-3xl font-extralight text-white'}>РУКОВОДСТВО ОБЩЕСТВА <br/> ДЕТСКИХ ДЕРМАТОЛОГОВ</p>
                <div className={'w-full'}>
                    <Swiper
                        speed={1000}
                        autoplay={{delay: 4000}}
                        effect={'fade'}
                        fadeEffect={{ crossFade:true}}
                        direction={"vertical"}
                        centeredSlides={true}
                        slidesPerView={1}
                        // coverflowEffect={{
                        //     rotate: 0,
                        //     stretch: -100,
                        //     depth: -300,
                        //     modifier: 1,
                        //     slideShadows: false,
                        // }}
                        loop={true}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, EffectFade, Pagination, Autoplay]}
                        className={'myswiper h-[700px] w-full'}
                    >
                        {employers.map((item, counter) => {
                            return (
                                <SwiperSlide key={counter} className={'pl-[70px]'}>
                                    <div className={'grid grid-cols-2 relative h-full gap-8 items-center'}>
                                        <div className={'flex flex-col gap-5'}>
                                            <p className={'text-3xl font-bold text-white'}>
                                                {item.name}
                                            </p>
                                            <div className={'flex gap-4 items-center'}>
                                                <div
                                                    className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                    {item.offer}
                                                </div>
                                                <div
                                                    className={'flex items-center rounded-full p-2 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                    <img src={`${images}/mail.svg`}/>
                                                </div>
                                            </div>
                                            <p className={'text-white font-normal'}>{concatStr(item.description,20)}</p>
                                            <p className={'text-white text-xl font-bold'}>Подробнее...</p>
                                        </div>
                                        <div className={'flex items-center relative h-full justify-center'}>
                                            <img src={`${images}/employers/avatar_layout.svg`}/>
                                            <img className={'absolute bottom-0 w-full'} src={item.image}/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
                <img className={'absolute w-full asset left-0 z-50 -bottom-[1px]'} src={'/about_us_offset_bot.png'}/>
            </div>
            <div className={'bg-white h-[750px] flex items-center sm:px-[140px]'}>
                <div>
                    <div className={'flex items-center justify-between'}>
                        <p className={'uppercase font-extralight text-black text-4xl'}>Задачи <br/><strong className={'font-extrabold'}>сообщества:</strong></p>
                        <div className={'flex items-center gap-4'}>
                            <img className={'w-10'} src={`${images}/help.svg`}/>
                            <p className={'lowercase'}>ЦЕЛЬ ОРГАНИЗАЦИИ - СОДЕЙСТВИЕ РАЗВИТИЮ <br/>
                                ДЕТСКОЙ ДЕРМАТОЛОГИИ </p>
                        </div>
                    </div>
                    <div className={'grid mt-10 grid-cols-3 gap-8 grid-rows-2'}>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white text-center'}>Оказание организационно-методической помощи членам Общества</p>
                        </div>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white text-center'}>Координация научной и практической деятельности членов Общества</p>
                        </div>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white text-center'}>Оказание помощи в маршрутизации пациентов в НИИ Дерматологии</p>
                        </div>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white text-center'}>Проведение научных исследований и ведение специализированных регистров</p>
                        </div>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white text-center'}>Участие в апробациях и внедрение результатов клинических исследований</p>
                        </div>
                        <div className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white text-center'}>Представление и защита интересов членов Общества в государственных и общественных организациях</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

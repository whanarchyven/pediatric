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
import {
    Mousewheel,
    EffectCoverflow,
    Pagination,
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip
} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";
import CountUp from "react-countup";


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

    const employers = [
        {
            name: 'Мурашкин Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Президент',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Леонтьев Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Доктор',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Гумеров Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Директор',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Горшков Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Глава нацбанка',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
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
                                mousewheel={false}
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
            <div
                className={'relative green-gradient overflow-hidden h-[700px] flex items-center sm:pl-[70px] sm:px-[140px]'}>
                <img className={'absolute asset w-full z-50 left-0 top-0'} src={'/about_us_offset_top.png'}/>
                <p className={'absolute top-28 pl-[70px] text-3xl font-extralight text-white'}>РУКОВОДСТВО
                    ОБЩЕСТВА <br/> ДЕТСКИХ ДЕРМАТОЛОГОВ</p>
                <div className={'w-full'}>
                    <Swiper
                        speed={1000}
                        autoplay={{delay: 4000}}
                        effect={'fade'}
                        fadeEffect={{crossFade: true}}
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
                        mousewheel={false}
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
                                            <p className={'text-white font-normal'}>{concatStr(item.description, 20)}</p>
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
            <div className={'bg-white h-[750px] flex items-center relative sm:px-[140px]'}>
                <img className={'w-full absolute bottom-0 left-0'} src={'/pages/about/prestige_top.svg'}/>
                <div>
                    <div className={'flex items-center justify-between'}>
                        <p className={'uppercase font-extralight text-black text-4xl'}>Задачи <br/><strong
                            className={'font-extrabold'}>сообщества:</strong></p>
                        <div className={'flex items-center gap-4'}>
                            <img className={'w-10'} src={`${images}/help.svg`}/>
                            <p className={'lowercase'}>ЦЕЛЬ ОРГАНИЗАЦИИ - СОДЕЙСТВИЕ РАЗВИТИЮ <br/>
                                ДЕТСКОЙ ДЕРМАТОЛОГИИ </p>
                        </div>
                    </div>
                    <div className={'grid mt-10 grid-cols-3 gap-8 grid-rows-2'}>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white text-center'}>Оказание организационно-методической помощи членам
                                Общества</p>
                        </div>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white text-center'}>Координация научной и практической деятельности
                                членов Общества</p>
                        </div>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white text-center'}>Оказание помощи в маршрутизации пациентов в НИИ
                                Дерматологии</p>
                        </div>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white text-center'}>Проведение научных исследований и ведение
                                специализированных регистров</p>
                        </div>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white text-center'}>Участие в апробациях и внедрение результатов
                                клинических исследований</p>
                        </div>
                        <div
                            className={'shadow-xl h-52 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-14 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white text-center'}>Представление и защита интересов членов Общества в
                                государственных и общественных организациях</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-[#7AC4B9] bg-opacity-10 py-20 flex justify-center items-center sm:px-[140px]'}>
                <div className={'grid sm:grid-cols-12 grid-cols-1 gap-10'}>
                    <div className={'sm:col-span-6 sm:row-start-1 row-start-2 flex justify-start'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg'}
                                    src={`/pages/about/prestige.png`}/>
                    </div>
                    <div className={'sm:col-span-5 sm:col-end-13 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'text-4xl font-extralight text-black'}>БЫТЬ ЧЛЕНОМ ОБЩЕСТВА <br/><span
                            className={'font-extrabold'}> - ПРЕСТИЖНО</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-center gap-6'}>
                            <p className={'text-xl font-bold text-green leading-[100%]'}>ПОЧЕМУ?</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Бонусы и привилегии в научно-образовательной
                                деятельности </p>
                        </motion.div>

                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-center gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Последние новости мировой детской дерматологии</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>
                                Доступ к публикациям отечественных и зарубежных коллег
                            </p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Свободный доступ к образовательным подкастам</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>
                                Официальный сертификат Общества детских дерматологов</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>
                                Выдается промокод на подписку к платным материалам Общества</p>
                        </motion.div>

                    </div>

                </div>
            </div>
            <div className={'bg-white h-[700px] flex flex-col items-start justify-center relative sm:px-[140px]'}>
                <img className={'w-full absolute top-0 z-[50] left-0'} src={'/pages/about/prestige_bottom.svg'}/>
                <img className={'w-full h-full object-cover z-[0] absolute top-0 left-0'} src={'/pages/about/bg.png'}/>
                <motion.div className={'flex h-28 mb-12 items-center gap-5'}
                            initial={{x: -40, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <div className={'h-20 bg-black w-[2px]'}>

                    </div>
                    <div className={'flex flex-col text-bold gap-3'}>
                        <CountUp enableScrollSpy={true}
                                 className={'text-5xl sm:text-8xl leading-[70%] font-extrabold font-inter'}
                                 useEasing={true} suffix={'+'} end={57} decimal={' '} separator={' '}>
                        </CountUp>
                        <p className={'text-lg leading-[70%] font-extralight'}>Субъектов РФ</p>
                    </div>
                </motion.div>
                <div className={'w-full grid grid-cols-2 gap-10'}>
                    <div className={'flex flex-col gap-8 items-start'}>
                        <p className={''}>На сегодняшний день в обществе детских дерматологов состоят врачи из более чем 57 субъектов
                            Рф наиболее активными из которых являются: </p>
                        <ul className={'pl-5'}>
                            <li>Южный Федеральный Округ</li>
                            <li>Республика Татарстан</li>
                            <li>Республика Узбекистан</li>
                            <li>Чеченская Республика</li>
                            <li>Ростовская Область</li>
                            <li>Самарская Область</li>
                            <li>Тюменская Область</li>
                            <li>Хабаровский Край</li>
                            <li>Алтайский Край</li>
                        </ul>
                    </div>
                    <div className={'flex flex-col gap-5'}>
                        <div className={'bg-green flex items-center gap-4 rounded-lg px-6 p-3'}>
                            <img className={'w-12 aspect-square'} src={'/pages/about/feature.svg'}/>
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ ПОМОЩИ</p>
                        </div>
                        <div className={'bg-green flex items-center gap-4 rounded-lg px-6 p-3'}>
                            <img className={'w-12 aspect-square'} src={'/pages/about/feature.svg'}/>
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ ПОМОЩИ</p>
                        </div>
                        <div className={'bg-green flex items-center gap-4 rounded-lg px-6 p-3'}>
                            <img className={'w-12 aspect-square'} src={'/pages/about/feature.svg'}/>
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ ПОМОЩИ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"sm:h-[700px] sm:pt-0 pt-12 px-[20px] sm:pl-[140px] sm:pr-[70px] flex flex-col justify-center overflow-hidden bg-cover relative bg-[url('/pages/main/results_bg.png')]"}>
                <img className={'absolute left-0 top-0'} src={`${images}/results_top_offset.png`} alt={''}></img>

                <div className={'grid sm:grid-cols-7 grid-cols-1 items-center h-full gap-2'}>
                    <div className={'sm:col-span-4 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'sm:text-4xl text-2xl font-extralight text-white'}>ПРИСОЕДИНЯЙСЯ К
                            НАШЕМУ<br/><span
                                className={'font-extrabold'}>ПРОФЕССИОНАЛЬНОМУ СООБЩЕСТВУ</span></motion.p>
                        <motion.div className={'flex h-28 items-center gap-5'}
                                    initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}>
                            <div className={'h-20 bg-white w-[2px]'}>

                            </div>
                            <div className={'flex flex-col text-white gap-3'}>
                                <CountUp enableScrollSpy={true}
                                         className={'text-5xl sm:text-8xl leading-[70%] font-extrabold font-inter'}
                                         useEasing={true} suffix={'+'} end={20000} decimal={' '} separator={' '}>
                                </CountUp>
                                {/*<p className={'text-8xl leading-[70%] font-extrabold'}>20 000+</p>*/}
                                <p className={'text-lg leading-[70%] font-extralight'}>Вылеченых детей</p>
                            </div>
                        </motion.div>
                        <div className={'flex sm:flex-row flex-col items-start gap-14'}>
                            <motion.div className={'flex h-full items-center gap-5'} initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={10} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Лет помогаем<br/>
                                        детям</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.6}}
                                        className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={150} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Проведено<br/>
                                        мероприятий</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.9}}
                                        className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={19146} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Членов<br/>
                                        сообщества</p>
                                </div>
                            </motion.div>
                        </div>
                        <Link href={'/registration'}>
                            <motion.div
                                initial={{y: -40, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}
                                className={'bg-white font-normal sm:self-auto self-center rounded-lg text-xl text-[#277B76] flex items-center justify-center w-72  py-5'}>
                                Подать заявку
                            </motion.div>
                        </Link>
                    </div>
                    <div className={'sm:col-span-3 sm:mt-0 mt-10 h-full relative flex items-center justify-center'}>
                        <img className={'sm:absolute bottom-0'} src={`${images}/results_doctor_sprite.svg`}/>
                        <motion.img initial={{y: 40, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'absolute bottom-0'}
                                    src={`/doctor.png`}/>
                    </div>
                </div>


                <img className={'absolute left-0 bottom-0'} src={`${images}/results_bottom_offset.png`} alt={''}></img>

            </div>
        </main>
    )
}

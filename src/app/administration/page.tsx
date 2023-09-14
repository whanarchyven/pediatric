"use client"
import React, {useCallback, useEffect, useRef, useState} from "react";
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
import {classList} from "@/helpers/classList";


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const posts = [
        {
            date: '11 ноября 2023',
            title: `<p class="font-extralight">IX Всероссийская научно-практическая конференция</p><span class="font-extrabold uppercase">«Дерматологические чтения в педиатрии»</span>`,
            description: '11 ноября пройдет IX Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/events/0',
            image: '/pages/main/main_bg.png',
        },
        // {
        //     date: '11-17 сентября 2023',
        //     title: `<p class="uppercase font-extralight">Поэзия</p><span class="font-extrabold uppercase">детской дерматологии</span>`,
        //     description: 'Научно-образовательный квест-марафон «Поэзия детской дерматологии» пройдёт уже 11-17 сентября 2023 года!',
        //     link: '/events/3',
        //     image: '/marafon.png',
        // },
        // {
        //     date: '1 июня – 31 августа 2023',
        //     title: `<p class="font-extralight">Розыгрыш</p><span class="font-extrabold uppercase">Летняя аптечка</span>`,
        //     description: 'Успейте принять участие в главном розыгрыше этого лета- "Летняя аптечка!',
        //     link: null,
        //     image: '/pages/main/sliderBackgrounds/1.png',
        // },
        {
            date: 'Присоединяйтесь!',
            title: `<p class="font-extralight">Членство в Обществе </p><span class="font-extrabold uppercase">детских дерматологов</span>`,
            description: ' Стань частью большой команды',
            link: '/registration',
            image: '/pravki/1.png',
        }
    ]
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const employers = [
        {
            name: 'Мурашкин Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Президент',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии, заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Профессор кафедры педиатрии и детской ревматологии Первого Московского государственного медицинского университета им. И.М. Сеченова (Сеченовский Университет), профессор кафедры дерматовенерологии и косметологии Федерального государственного бюджетного учреждения дополнительного профессионального образования «Центральная государственная медицинская академия» Управления делами Президента Российской Федерации, член правления Европейского общества детской дерматологии (European Society for Pediatric Dermatology), эксперт DEBRA International.'
        },
        {
            name: 'Аравийская Елена Александровна',
            image: `${images}/employers/araviyskaya.png`,
            offer: 'Вице-президент',
            contact: '/',
            description: 'Профессор кафедры дерматовенерологии с клиникой Первого Санкт-Петербургского ГМУ, руководитель Последипломного цикла обучения по косметологии для врачей. Член Совета директоров Европейской академии дерматологии и венерологии, член Правления Санкт-Петербургского общества дерматовенерологов, почетный член Общества дерматологов Франции и Сербии.'
        },
        {
            name: 'Белышева Татьяна Сергеевна',
            image: `${images}/employers/belysheva.png`,
            offer: 'Доктор медицинских наук',
            contact: '/',
            description: 'Является практикующим специалистом и обладает большим опытом работы в области диагностики и лечения детей с пигментными и сосудистыми новообразований кожи (свыше 10.000 пациентов). Разработала и внедрила в клиническую практику уникальную методику лазерного лечения сосудистой патологии кожи у детей, оказывая помощь пациентам со всей России и стран СНГ.'
        },
        {
            name: 'Бакулев Андрей Леонидович',
            image: `${images}/employers/bakulev.png`,
            offer: 'Вице-президент',
            contact: '/',
            description: 'Профессор, заведующий кафедрой дерматовенерологии и косметологии Саратовского ГМУ. Член Профильной комиссии Экспертного совета Минздрава России по дерматовенерологии и косметологии, член правления Российского общества дерматовенерологов и косметологов, член Европейской академии дерматологии и венерологии.'
        },
        {
            name: 'Савелова Алёна Андреевна',
            image: `${images}/employers/savelova.png`,
            offer: 'Врач-дерматовенеролог ',
            contact: '/',
            description: 'Врач-дерматовенеролог отделения дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).'
        },
        {
            name: 'Материкин Александр Игоревич',
            image: `${images}/employers/materikin.png`,
            offer: 'Кандидат медицинских наук',
            contact: 'mailto:al_m86@bk.ru',
            description: 'Врач-дерматовенеролог отделения дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).'
        },
        {
            name: 'Иванов Роман Александрович',
            image: `${images}/employers/ivanov.png`,
            offer: 'Кандидат медицинских наук',
            contact: '/',
            description: 'Врач-дерматовенеролог отделения дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).'
        }, {
            name: 'Епишев Роман Владимирович',
            image: `${images}/employers/epichev.png`,
            offer: 'Кандидат медицинских наук',
            contact: 'mailto:drepishev@gmail.com',
            description: 'Врач-дерматовенеролог отделения дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).'
        }, {
            name: 'Опрятин Леонид Андреевич',
            image: `${images}/employers/opryatin.png`,
            offer: 'Кандидат медицинских наук',
            contact: 'mailto:opryatin.l@gmail.com',
            description: 'Врач-дерматовенеролог отделения дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).'
        },
    ]

    const [employersPop,setEmployersPop]=useState(false)
    const [activeName,setActiveName]=useState('');
    const [activeDecription,setActiveDescription]=useState('')

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            {/*<motion.div*/}
            {/*    className={classList("min-h-screen sm:bg-top bg-[left_50rem_top_1rem] overflow-hidden bg-cover green-gradient relative ")}>*/}
            {/*    <div className={'absolute flex sm:hidden w-full h-full bg-green-two opacity-50 left-0 top-0'}>*/}

            {/*    </div>*/}

            {/*    <motion.div*/}
            {/*        className={'w-full min-h-screen h-auto'}>*/}
            {/*        <motion.div*/}
            {/*            className={'sm:col-span-12 sm:mt-0 flex flex-col sm:items-start  justify-center'}>*/}
            {/*            <div className={'sm:flex hidden w-screen'}>*/}
            {/*                <Swiper*/}
            {/*                    ref={sliderRef}*/}
            {/*                    speed={1000}*/}
            {/*                    autoplay={{delay: 4000}}*/}
            {/*                    effect={'fade'}*/}
            {/*                    direction={"vertical"}*/}
            {/*                    slidesPerView={1}*/}
            {/*                    loop={true}*/}
            {/*                    pagination={{*/}
            {/*                        clickable: true,*/}
            {/*                    }}*/}
            {/*                    modules={[Mousewheel, EffectFade, Pagination, Autoplay]}*/}
            {/*                    className={'mainswiper sm:h-screen absolute left-0 top-0 w-screen'}*/}
            {/*                >*/}
            {/*                    {posts.map((item, counter) => {*/}
            {/*                        return (*/}
            {/*                            <SwiperSlide key={counter} className={''}>*/}
            {/*                                <div*/}
            {/*                                    className={'flex h-full pl-[140px] flex-col justify-center items-center'}>*/}
            {/*                                    <div className={'grid w-full grid-cols-12'}>*/}
            {/*                                        <div className={'flex col-span-6 justify-center flex-col gap-5'}>*/}
            {/*                                            <div*/}
            {/*                                                className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>*/}
            {/*                                                {item.date}*/}
            {/*                                            </div>*/}
            {/*                                            <div className={'text-left text-5xl text-white '}*/}
            {/*                                                 dangerouslySetInnerHTML={{__html: item.title}}>*/}

            {/*                                            </div>*/}
            {/*                                            <p className={'text-white font-normal'}>{item.description}</p>*/}
            {/*                                            {item.link ? <Link*/}
            {/*                                                className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}*/}
            {/*                                                href={item.link}>*/}
            {/*                                                Подробнее*/}
            {/*                                            </Link> : null}*/}
            {/*                                            /!*<div className={'flex gap-5 items-center'}>*!/*/}
            {/*                                            /!*    <div*!/*/}
            {/*                                            /!*        className={'cursor-pointer  hidden sm:flex items-center p-[15px] justify-center  w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}*!/*/}
            {/*                                            /!*        onClick={handlePrev}>*!/*/}
            {/*                                            /!*        <img className={'w-full aspect-square'}*!/*/}
            {/*                                            /!*             src={'/arrow_prev.svg'}/>*!/*/}
            {/*                                            /!*    </div>*!/*/}
            {/*                                            /!*    <div*!/*/}
            {/*                                            /!*        className={'cursor-pointer   relative hidden sm:flex items-center p-[15px] justify-center w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}*!/*/}
            {/*                                            /!*        onClick={handleNext}>*!/*/}
            {/*                                            /!*        <img className={'w-full aspect-square'}*!/*/}
            {/*                                            /!*             src={'/arrow_next.svg'}/>*!/*/}
            {/*                                            /!*    </div>*!/*/}
            {/*                                            /!*</div>*!/*/}
            {/*                                        </div>*/}
            {/*                                        <div className={'absolute w-screen h-screen left-0 top-0 z-[-2]'}>*/}
            {/*                                            <img className={'w-full object-cover h-full'} src={item.image}/>*/}
            {/*                                        </div>*/}
            {/*                                        <div*/}
            {/*                                            className={'absolute green-gradient opacity-40 w-screen h-screen left-0 top-0 z-[-1]'}>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}

            {/*                            </SwiperSlide>*/}
            {/*                        )*/}
            {/*                    })}*/}

            {/*                </Swiper>*/}
            {/*            </div>*/}

            {/*            <div className={'sm:hidden flex h-screen w-screen'}>*/}
            {/*                <Swiper*/}
            {/*                    speed={1000}*/}
            {/*                    autoplay={{delay: 4000}}*/}
            {/*                    effect={'fade'}*/}
            {/*                    direction={"horizontal"}*/}
            {/*                    slidesPerView={1}*/}
            {/*                    loop={true}*/}
            {/*                    pagination={{*/}
            {/*                        clickable: true,*/}
            {/*                    }}*/}
            {/*                    modules={[Mousewheel, EffectFade, Pagination, Autoplay]}*/}
            {/*                    className={'mainswiper sm:h-screen h-screen absolute left-0 top-0 w-screen'}*/}
            {/*                >*/}
            {/*                    {posts.map((item, counter) => {*/}
            {/*                        return (*/}
            {/*                            <SwiperSlide key={counter} className={''}>*/}
            {/*                                <div*/}
            {/*                                    className={'flex h-full pl-[20px] sm:pl-[140px] flex-col justify-center items-center'}>*/}
            {/*                                    <div className={'grid w-full grid-cols-12'}>*/}
            {/*                                        <div className={'flex col-span-12 justify-center flex-col gap-5'}>*/}
            {/*                                            <div*/}
            {/*                                                className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>*/}
            {/*                                                {item.date}*/}
            {/*                                            </div>*/}
            {/*                                            <div className={'text-left text-2xl text-white '}*/}
            {/*                                                 dangerouslySetInnerHTML={{__html: item.title}}>*/}

            {/*                                            </div>*/}
            {/*                                            <p className={'text-white font-normal'}>{item.description}</p>*/}
            {/*                                            {item.link ? <Link*/}
            {/*                                                className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}*/}
            {/*                                                href={item.link}>*/}
            {/*                                                Подробнее*/}
            {/*                                            </Link> : null}*/}
            {/*                                        </div>*/}
            {/*                                        <div className={'absolute w-screen h-screen left-0 top-0 z-[-2]'}>*/}
            {/*                                            <img className={'w-full object-cover object-center h-full'}*/}
            {/*                                                 src={item.image}/>*/}
            {/*                                        </div>*/}
            {/*                                        <div*/}
            {/*                                            className={'absolute green-gradient opacity-70 w-screen h-screen left-0 top-0 z-[-1]'}>*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}

            {/*                            </SwiperSlide>*/}
            {/*                        )*/}
            {/*                    })}*/}

            {/*                </Swiper>*/}
            {/*            </div>*/}

            {/*        </motion.div>*/}
            {/*    </motion.div>*/}
            {/*    <div className={'absolute bottom-[-1px] z-[10] asset w-full'}>*/}
            {/*        <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}
            <div className={'bg-white sm:h-[854px] items-center px-[20px] pt-40 py-12 sm:px-[140px] gap-20 grid grid-cols-1 sm:grid-cols-2'}>
                <img className={'w-full aspect-square col-span-1 rounded-xl'} src={`${images}/kids.jpg`}/>
                <div className={'flex flex-col gap-6 items-start'}>
                    <p className={'uppercase font-extralight text-2xl sm:text-5xl text-black'}>О ДЕТСКОЙ
                        <br/><span className={'font-bold'}>ДЕРМАТОЛОГИИ</span></p>
                    <p className={'font-bold text-green text-xl sm:text-xl'}>
                        Проблема заболеваний кожи детского возраста остается одной из наиболее значимых.
                    </p>
                    <p className={'font-normal sm:text-lg text-sm text-black'}>
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
                className={'relative green-gradient overflow-hidden pt-12 px-[20px] sm:h-[700px] flex flex-col items-start sm:pl-[70px] sm:px-[140px]'}>
                <img className={'absolute asset w-full z-50 left-0 top-0'} src={'/about_us_offset_top.png'}/>
                <p className={'sm:absolute top-28 sm:pl-[70px] text-xl sm:text-3xl font-extralight text-white'}>РУКОВОДСТВО
                    ОБЩЕСТВА <br/> ДЕТСКИХ ДЕРМАТОЛОГОВ</p>
                {employersPop?<div className={'w-full h-full absolute left-0 top-0 z-[20] bg-black bg-opacity-70 flex items-center justify-center'}>
                    <div className={'w-full sm:w-2/3 p-9 gap-4 rounded-lg flex flex-col bg-white relative'}>
                        <img onClick={()=>{setEmployersPop(false)}} className={'w-8 aspect-square absolute top-4 right-4 cursor-pointer'} src={'/close_black.svg'}/>
                        <p className={'font-bold text-lg sm:text-4xl'}>{activeName}</p>
                        <p className={'text-xs sm:text-lg'}>{activeDecription}</p>
                    </div>
                </div>:null}
                <div className={'w-full hidden sm:flex'}>
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
                                                <Link href={item.contact}>
                                                    <div
                                                        className={'flex items-center rounded-full p-2 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                        <img src={`${images}/mail.svg`}/>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className={'text-white font-normal'}>{concatStr(item.description, 20)}</p>
                                            <p className={'text-white text-xl cursor-pointer font-bold'} onClick={()=>{
                                                setActiveName(item.name);
                                                setActiveDescription(item.description);
                                                setEmployersPop(true);
                                            }}>Подробнее...</p>
                                        </div>
                                        <div className={'flex items-center relative h-full justify-center'}>
                                            <img src={`${images}/employers/avatar_layout.svg`}/>
                                            <img className={'absolute bottom-16 w-full'} src={item.image}/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>


                <div className={'w-full mt-6 flex sm:hidden'}>
                    <Swiper
                        speed={1000}
                        autoplay={{delay: 4000}}
                        effect={'fade'}
                        fadeEffect={{crossFade: true}}
                        direction={"horizontal"}
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
                        className={'myswiper h-[550px] w-full'}
                    >
                        {employers.map((item, counter) => {
                            return (
                                <SwiperSlide key={counter} className={'sm:px-0 sm:pl-[70px]'}>
                                    <div className={'sm:grid flex flex-col gap-2 sm:grid-cols-2 relative h-full sm:gap-8 items-center'}>
                                        <div className={'flex flex-col gap-5'}>
                                            <p className={'text-xl sm:text-3xl font-bold text-white'}>
                                                {item.name}
                                            </p>
                                            <div className={'flex gap-4 items-center'}>
                                                <div
                                                    className={'flex items-center rounded-full p-2 px-4 uppercase sm:text-lg text-xs text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                    {item.offer}
                                                </div>
                                                <Link href={item.contact}>
                                                    <div
                                                        className={'flex items-center rounded-full p-2 uppercase text-white font-light opacity-50 border-white h-full aspect-square border-2 justify-center'}>
                                                        <img src={`${images}/mail.svg`}/>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className={'text-white sm:text-lg text-xs font-normal'}>{concatStr(item.description, 20)}</p>
                                            <p onClick={()=>{
                                                setActiveName(item.name);
                                                setActiveDescription(item.description);
                                                setEmployersPop(true);
                                            }} className={'text-white text-sm sm:text-xl font-bold'}>Подробнее...</p>
                                        </div>
                                        <div className={'flex items-center relative sm:h-full justify-center'}>
                                            <img src={`${images}/employers/avatar_layout.svg`}/>
                                            <img className={'absolute bottom-0 w-full sm:scale-100 scale-110'} src={item.image}/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>



                <img className={'absolute w-full asset left-0 z-50 -bottom-[1px]'} src={'/about_us_offset_bot.png'}/>
            </div>
            <div className={'bg-white py-12 px-[20px] sm:h-[750px] flex items-center relative sm:px-[140px]'}>
                <img className={'w-full absolute bottom-0 left-0'} src={'/pages/about/prestige_top.svg'}/>
                <div>
                    <div className={'flex items-start gap-4 sm:gap-0 sm:items-center flex-col sm:flex-row sm:justify-between'}>
                        <p className={'uppercase font-extralight text-black text-xl sm:text-4xl'}>Задачи <br/><strong
                            className={'font-extrabold'}>сообщества:</strong></p>
                        <div className={'flex items-center gap-4'}>
                            <img className={'w-10'} src={`${images}/help.svg`}/>
                            <p className={'lowercase sm:text-lg text-xs'}>ЦЕЛЬ ОРГАНИЗАЦИИ - СОДЕЙСТВИЕ РАЗВИТИЮ <br/>
                                ДЕТСКОЙ ДЕРМАТОЛОГИИ </p>
                        </div>
                    </div>
                    <div className={'grid mt-10 sm:grid-cols-3 gap-8 grid-cols-1 sm:grid-rows-2'}>
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
            <div className={'bg-[#7AC4B9] bg-opacity-10 py-20 px-[20px] flex justify-center items-center sm:px-[140px]'}>
                <div className={'grid sm:grid-cols-12 grid-cols-1 gap-10'}>
                    <div className={'sm:col-span-6 sm:row-start-1 row-start-2 flex justify-start'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg object-cover'}
                                    src={`/pages/about/prestige.png`}/>
                    </div>
                    <div className={'sm:col-span-5 sm:col-end-13 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'sm:text-4xl text-xl font-extralight text-black'}>БЫТЬ ЧЛЕНОМ ОБЩЕСТВА <br/><span
                            className={'font-extrabold'}> - ПРЕСТИЖНО</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-center gap-6'}>
                            <p className={'sm:text-xl text-sm font-bold text-green leading-[100%]'}>ПОЧЕМУ?</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>Бонусы и привилегии в научно-образовательной
                                деятельности </p>
                        </motion.div>

                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-center gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>Последние новости мировой детской дерматологии</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>
                                Доступ к публикациям отечественных и зарубежных коллег
                            </p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>Свободный доступ к образовательным подкастам</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>
                                Официальный сертификат Общества детских дерматологов</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'sm:w-8 sm:h-8 w-6 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'sm:text-xl text-md leading-[100%]'}>
                                Выдается промокод на подписку к платным материалам Общества</p>
                        </motion.div>

                    </div>

                </div>
            </div>
            <div className={'bg-white sm:h-[700px] py-12 px-[20px] flex flex-col items-start justify-center relative sm:px-[140px]'}>
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
                <div className={'w-full grid grid-cols-1 sm:grid-cols-2 gap-10'}>
                    <div className={'flex flex-col gap-8 items-start'}>
                        <p className={''}>На сегодняшний день в обществе детских дерматологов состоят врачи из более чем
                            57 субъектов
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
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ
                                ПОМОЩИ</p>
                        </div>
                        <div className={'bg-green flex items-center gap-4 rounded-lg px-6 p-3'}>
                            <img className={'w-12 aspect-square'} src={'/pages/about/feature.svg'}/>
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ
                                ПОМОЩИ</p>
                        </div>
                        <div className={'bg-green flex items-center gap-4 rounded-lg px-6 p-3'}>
                            <img className={'w-12 aspect-square'} src={'/pages/about/feature.svg'}/>
                            <p className={'text-white text-xl uppercase'}>УЛУЧШЕНИЕ КАЧЕСТВА ОКАЗАНИЯ МЕДИЦИНСКОЙ
                                ПОМОЩИ</p>
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

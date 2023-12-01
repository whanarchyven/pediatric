"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter, useSearchParams} from "next/navigation";
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
import {eden, useEden} from "@/helpers/sdk";
import EventTab from "@/components/EventTab";


export default function Home() {


    const images = '/pages/main'

    const params = useSearchParams();

    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        uuid,
        saved
    } = data?.profile ?? {} as any;

    console.log(saved)

    const [news,setNews]=useState<Array<{
        id?: string | undefined;
        description?: string | undefined;
        link?: string | undefined;
        dateEnd?: Date | undefined;
        onlinePrice?: number | undefined;
        offlinePrice?: number | undefined;
        prices?: {
            date: string;
            online: number;
            offline: number;
        }[] | undefined;
        isOnlyOnline?: boolean | undefined;
        isPassed?: boolean | undefined;
        isStream?: boolean | undefined;
        type: string;
        date: string;
        format: string;
        name: string;
        dateStart: Date;
        timePeriod: string;
        place: string;
        participants: number;
        layoutBg: string;
        avatar: string;
        announcement: string;
        speakers: {
            post: string;
            description: string;
            name: string;
            contact: string;
            photo: string;
        }[];
        halls: {
            name: string;
            program: Array<{
                timePeriod?: string | undefined;
                sponsor?: string | undefined;
                speaker?: string | undefined;
                substages?: {
                    description?: string | undefined;
                    sponsor?: string | undefined;
                    name: string;
                    timePeriod: string;
                }[] | undefined;
                name: string;
            }>;
        }[];
    }>>()

    const fetchEvent = async () => {
        const event: any = await eden.event.list.get().then((res: any) => {
            setNews([{
                announcement: "В ходе конференции будут разобраны наиболее значимые патологии в дерматологии детского возраста, а именно атопический дерматит, формы заболевания и этапы диагностики, а также инновационные технологии терапии. Вас ожидают клинические разборы и детальное рассмотрение тактики ведения пациентов.", avatar: "/pages/new.png", date: "02.01.2023", dateEnd: new Date('02.01.2023'), dateStart: new Date('02.01.2023'), description: 'В фокусе научной программы конференции обсуждение наиболее актуальной проблемы в ведении и лечении псориаза в детском возрасте, а также инновационные возможности в диагностике и профилактике заболеваний кожи у детей.', format: "online", halls: [
                    {
                        name: 'Трансляция',
                        program: [
                            {
                                name: 'Открытие конференции.',
                                timePeriod: '10:00-10:05',
                                speaker: 'Президент «Общества детских\n' +
                                    'дерматологов» д.м. н. , профессор Мурашкин Н.Н.'
                            },
                            {
                                name: 'Современные представления об этиологии и патогенезе псориаза\n' +
                                    'в детском возрасте',
                                timePeriod: '10:05-10:30',
                                speaker: 'к.м. н. Иванов Р.А.'
                            },
                            {
                                name: 'Коморбидности псориаза детского возраста: особенности\n' +
                                    'диагностики и терапевтической тактики',
                                timePeriod: '10:30 - 10:55',
                                speaker: 'к.м. н. Материкин А.И'
                            },
                            {
                                name: 'ПЕРЕРЫВ',
                                timePeriod: '10:55 -11:00',
                            },
                            {
                                name: 'Пустулезный псориаз у детей',
                                timePeriod: '11:00-11:25',
                                speaker: 'к.м.н. Епишев Р.В.'
                            },
                            {
                                name: 'Современные подходы к терапии псориаза у детей на примере\n' +
                                    'клинических случаев . д.м. н. ,',
                                timePeriod: '11:25 - 11:55',
                                speaker: 'д.м. н. , профессор Мурашкин Н.Н.',
                                sponsor:'Novartis'
                            },
                            {
                                name: 'ПЕРЕРЫВ',
                                timePeriod: '11:55 - 12:00',
                            },
                            {
                                name: 'Вульгарный псориаз и красный волосяной лишай Девержи:\n' +
                                    'клинико-диагностические параллели',
                                timePeriod: '12:00 - 12:15',
                                speaker: 'к.м.н. Опрятин Л.А.',
                            },
                            {
                                name: 'Перспективные направления использования ингибиторов IL-23\n' +
                                    'в лечении псориаза в детском возрасте',
                                timePeriod: '12:10 - 12:30',
                                speaker: 'к.м.н. Епишев Р.В.',
                                sponsor:'Janssen'
                            },
                            {
                                name: 'Закрытие конференции. Ответы на вопросы.',
                                timePeriod: '12:30 - 12:40',
                                speaker: 'Президент «Общества детских дерматологов» д.м. н., профессор Мурашкин Н. Н.',
                            }
                        ],
                        streamLink: 'https://www.youtube.com/embed/InCUbLX1IcI?si=xP4tZYm9jj-tBt2P&amp;controls=0'
                    }
                ], id: '3-npk-psoriaz', isOnlyOnline: true, isPassed: false, isStream: true, layoutBg: "/pages/new.png", link: '/', offlinePrice: 0, onlinePrice: 0, participants: 356, place: "Онлайн-трансляция", prices: [], speakers: [{
                    name: "Мурашкин Николай Николаевич",
                    post: "ПРЕЗИДЕНТ",
                    contact: "/",
                    description: "Руководитель НИИ детской дерматологии, Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России",
                    photo: "/pages/events/murashkin.png"
                },
                    {
                        name: "Епишев Роман Владимирович",
                        post: "Кандидат медицинских наук",
                        contact: "-",
                        description: "Врач-дерматовенеролог отделения дерматологии и аллергологии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).",
                        photo: "/pages/main/employers/epichev.png"
                    },
                    {
                        name: "Иванов Роман Александрович",
                        post: "Кандидат медицинских наук",
                        contact: "-",
                        description: "Врач-дерматовенеролог отделения дерматологии и аллергологии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).",
                        photo: "/pages/main/employers/ivanov.png"
                    },
                    {
                        name: "Материкин Александр Игоревич",
                        post: "Кандидат медицинских наук",
                        contact: "-",
                        description: "Врач-дерматовенеролог отделения дерматологии и аллергологии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).",
                        photo: "/pages/main/employers/materikin.png"
                    },
                    {
                        name: "Опрятин Леонид Андреевич",
                        post: "Кандидат медицинских наук",
                        contact: "-",
                        description: "Врач-дерматовенеролог отделения дерматологии и аллергологии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских дерматологов (European Society for Pediatric Dermatology).",
                        photo: "/pages/main/employers/opryatin.png"
                    },], timePeriod: "10:00-12:40", type: "Конференция",
                name: 'III НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ "Псориаз в детском возрасте: современные решения старых проблем"'

            },...res.data.events])
        })

    }
    useEffect(() => {
        fetchEvent()
    }, [])



    const categories = [
        'Конференция',
        'Марафон',
    ]



    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            {/*<motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">*/}
            {/*    <motion.div*/}
            {/*        className={'w-full min-h-screen h-auto px-[20px] sm:px-[70px] grid grid-cols-1 sm:grid-cols-12'}>*/}
            {/*        <motion.div*/}
            {/*            className={'col-span-6 sm:mt-0 mt-20 flex flex-col sm:items-start  justify-center'}>*/}
            {/*            <div className={'w-full'}>*/}
            {/*                <Swiper*/}
            {/*                    speed={1000}*/}
            {/*                    autoplay={{delay: 4000}}*/}
            {/*                    effect={"coverflow"}*/}
            {/*                    direction={"vertical"}*/}
            {/*                    centeredSlides={true}*/}
            {/*                    slidesPerView={1}*/}
            {/*                    coverflowEffect={{*/}
            {/*                        rotate: 0,*/}
            {/*                        stretch: -100,*/}
            {/*                        depth: 300,*/}
            {/*                        modifier: 1,*/}
            {/*                        slideShadows: false,*/}
            {/*                    }}*/}
            {/*                    loop={true}*/}
            {/*                    mousewheel={false}*/}
            {/*                    pagination={{*/}
            {/*                        clickable: true,*/}
            {/*                    }}*/}
            {/*                    modules={[Mousewheel, EffectCoverflow, Pagination, Autoplay]}*/}
            {/*                    className={'myswiper h-96 w-full'}*/}
            {/*                >*/}
            {/*                    {posts.map((item, counter) => {*/}
            {/*                        return (*/}
            {/*                            <SwiperSlide key={counter} className={'pl-[70px]'}>*/}
            {/*                                <div className={'flex flex-col gap-5'}>*/}
            {/*                                    <div*/}
            {/*                                        className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>*/}
            {/*                                        {item.date}*/}
            {/*                                    </div>*/}
            {/*                                    <div className={'text-left text-5xl text-white '}*/}
            {/*                                         dangerouslySetInnerHTML={{__html: item.title}}>*/}

            {/*                                    </div>*/}
            {/*                                    <p className={'text-white font-normal'}>{item.description}</p>*/}
            {/*                                    <Link*/}
            {/*                                        className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}*/}
            {/*                                        href={item.link}>*/}
            {/*                                        Подробнее*/}
            {/*                                    </Link>*/}
            {/*                                </div>*/}
            {/*                            </SwiperSlide>*/}
            {/*                        )*/}
            {/*                    })}*/}

            {/*                </Swiper>*/}
            {/*            </div>*/}
            {/*        </motion.div>*/}
            {/*    </motion.div>*/}
            {/*    <div className={'absolute bottom-[-4px] asset w-full'}>*/}
            {/*        <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>*/}
            {/*    </div>*/}
            {/*</motion.div>*/}
            <div id={'publications'} className={'bg-white py-20 sm:pt-40 flex flex-col items-center items-center px-[20px] lg:px-[140px] gap-12 '}>
                <p className={'font-extrabold text-black text-2xl sm:text-4xl uppercase'}>Мероприятия</p>
                <div className={'hidden sm:flex sm:flex-row flex-col items-center gap-6'}>
                    {!params.get('category') ? <Link href={'/events'}
                                                     className={'p-4 transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                        <p className={'text-white text-xs font-inter font-normal'}>Все</p>
                    </Link> : <Link href={'/events'} onClick={() => {

                    }}
                                    className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                        <p className={'text-green text-xs font-inter font-normal'}>Все</p>
                    </Link>}
                    {categories.map((item, counter) => {
                        if (params.get('category') == item) {
                            return (<Link key={counter} href={{pathname: '/events', query: {category: item}}}
                                          className={'p-4 transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                                <p className={'text-white text-xs font-inter font-normal'}>{item}</p>
                            </Link>)
                        } else {
                            return (
                                <Link key={counter} href={{pathname: '/events', query: {category: item}}} onClick={() => {

                                }}
                                      className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                                    <p className={'text-green text-xs font-inter font-normal'}>{item}</p>
                                </Link>)

                        }
                    })}
                </div>

                <div className={'w-[100vw] sm:hidden px-[20px]'}>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        className={'w-full events-slider'}>
                        <SwiperSlide>
                            {!params.get('category') ? <Link href={'/events'}
                                                             className={'p-4 transition-all duration-300 bg-green border-green border-2 w-32 flex items-center rounded-lg gap-2'}>
                                <p className={'text-white text-xs font-inter font-normal'}>Все</p>
                            </Link> : <Link href={'/events'} onClick={() => {

                            }}
                                            className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer flex w-32 items-center rounded-lg gap-2'}>
                                <p className={'text-green text-xs font-inter font-normal'}>Все</p>
                            </Link>}
                        </SwiperSlide>
                        {categories.map((item, counter) => {
                            if (params.get('category') == item) {
                                return (<SwiperSlide key={counter}>
                                    <Link  href={{pathname: '/events', query: {category: item}}}
                                          className={'p-4 transition-all duration-300 bg-green border-green border-2 flex w-32 items-center rounded-lg gap-2'}>
                                        <p className={'text-white text-xs font-inter font-normal'}>{item}</p>
                                    </Link>
                                </SwiperSlide>)
                            } else {
                                return (
                                    <SwiperSlide key={counter}>
                                        <Link  href={{pathname: '/events', query: {category: item}}} onClick={() => {

                                        }}
                                              className={'p-4 transition-all duration-300 border-green border-2 cursor-pointer w-32 flex items-center rounded-lg gap-2'}>
                                            <p className={'text-green text-xs font-inter font-normal'}>{item}</p>
                                        </Link>
                                    </SwiperSlide>)

                            }
                        })}

                    </Swiper>
                </div>

                {/*<div className={'sm:flex hidden items-center gap-6'}>*/}
                {/*    <div*/}
                {/*        className={'cursor-pointer mr-[50px] w-12 aspect-square hidden sm:flex items-center p-3 justify-center aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}>*/}
                {/*        <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>*/}
                {/*    </div>*/}
                {/*    {[1,2,3,4,5].map((item,counter)=>{*/}
                {/*        return (<p key={counter} className={classList('text-green text-2xl font-normal',item==1?'opacity-100':'opacity-30 cursor-pointer')}>{item}</p>)*/}
                {/*    })}*/}
                {/*    <div*/}
                {/*        className={'cursor-pointer ml-[50px] w-12 aspect-square relative hidden sm:flex items-center p-3 justify-center aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}>*/}
                {/*        <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={'mt-6 gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                    {news?.map((item, counter) => {
                        if(params.get('category')){
                            if(item.type==params.get('category')){
                                if(saved?.find(saved=>saved.title==item.type.concat(' - ',item.name))){
                                    return (
                                        <EventTab key={counter} isSaved={true} user_uuid={uuid} {...item}></EventTab>
                                    )
                                }
                                else{
                                    return (
                                        <EventTab key={counter} isSaved={false} user_uuid={uuid} {...item}></EventTab>
                                    )
                                }
                            }
                        }
                        else {
                            if(saved?.find(saved=>saved.title==item.type.concat(' - ',item.name))){
                                return (
                                    <EventTab key={counter} isSaved={true} user_uuid={uuid} {...item}></EventTab>
                                )
                            }
                            else{
                                return (
                                    <EventTab key={counter} isSaved={false} user_uuid={uuid} {...item}></EventTab>
                                )
                            }

                        }
                    })}
                </div>
            </div>
        </main>
    )
}

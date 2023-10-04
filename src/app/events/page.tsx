"use client"
import React from "react";
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


export default function Home() {


    const images = '/pages/main'

    const params = useSearchParams();


    const news = [
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


    const categories = [
        'Вебинар',
        'Конференция',
        'Марафон',
        'Подкаст',
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

                <div className={'sm:flex hidden items-center gap-6'}>
                    <div
                        className={'cursor-pointer mr-[50px] w-12 aspect-square hidden sm:flex items-center p-3 justify-center aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}>
                        <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
                    </div>
                    {[1,2,3,4,5].map((item,counter)=>{
                        return (<p key={counter} className={classList('text-green text-2xl font-normal',item==1?'opacity-100':'opacity-30 cursor-pointer')}>{item}</p>)
                    })}
                    <div
                        className={'cursor-pointer ml-[50px] w-12 aspect-square relative hidden sm:flex items-center p-3 justify-center aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}>
                        <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
                    </div>
                </div>

                <div className={'mt-6 gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                    {news.map((item, counter) => {
                        if(params.get('category')){
                            if(item.type==params.get('category')){
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
                                                    className={'flex rounded-lg text-white p-2 items-center justify-center border-2 border-green-two bg-green-two'}>
                                                    {item.type}
                                                </div>
                                                <div
                                                    className={'flex rounded-lg text-green-two p-2 whitespace-nowrap items-center justify-center border-2 border-green-two'}>
                                                    {item.date}
                                                </div>
                                            </div>
                                            <p className={'text-center font-normal text-black'}>{item.name}</p>
                                        </div>
                                    </Link>

                                )
                            }
                        }
                        else {
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
                                                className={'flex rounded-lg text-white p-2 items-center justify-center border-2 border-green-two bg-green-two'}>
                                                {item.type}
                                            </div>
                                            <div
                                                className={'flex rounded-lg text-green-two p-2 items-center justify-center border-2 border-green-two'}>
                                                {item.date}
                                            </div>
                                        </div>
                                        <p className={'text-center font-normal text-black'}>{item.name}</p>
                                    </div>
                                </Link>

                            )

                        }
                    })}
                </div>
            </div>
        </main>
    )
}

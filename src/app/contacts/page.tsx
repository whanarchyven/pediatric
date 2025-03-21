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


    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative contacts-bg">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] py-20 lg:px-[90px] justify-items-center gap-12 sm:gap-0 grid grid-cols-1 sm:grid-cols-2'}>
                    <div className={'flex items-start justify-center gap-6 flex-col'}>
                        <p className={'text-white uppercase text-xl lg:text-4xl font-extralight'}>Контакты</p>
                        <div className={'border-l-2 flex flex-col gap-8 border-white pl-4'}>
                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-extrabold text-white text-lg lg:text-2xl'}>+7 (926) 249 86 58</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>Единый информационный номер</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>(звонки/ сообщения только в What’s App)</p>
                            </div>

                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-extrabold text-white text-lg lg:text-2xl'}>+7 (926) 249 86 58</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>По вопросам рекламы и сотрудничества</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>(звонки/ сообщения только в What’s App)</p>
                            </div>

                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-extrabold text-white text-lg lg:text-2xl'}>pediatric-dermatology@mail.ru</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>Напишите нам</p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-8'}>
                            <Link href={'https://t.me/pediatric_dermatology_ru'} className={'flex items-center gap-2'}>
                                <img className={'w-8 aspect-square'} src={'/telegram.svg'}/>
                                <p className={'font-extralight text-xl text-white'}>Telegram</p>
                            </Link>
                            <Link href={'https://vk.com/pediatric_dermatology_ru'} className={'flex items-center gap-2'}>
                                <img className={'w-8 aspect-square'} src={'/vk.svg'}/>
                                <p className={'font-extralight text-xl text-white'}>ВКонтакте</p>
                            </Link>
                        </div>
                    </div>
                    <div className={'flex items-start justify-center gap-6 flex-col'}>
                        <p className={'text-white uppercase text-xl lg:text-4xl font-extralight'}>РЕКВИЗИТЫ:</p>
                        <div className={'border-l-2 flex flex-col gap-8 border-white pl-4'}>
                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-extrabold text-white text-lg lg:text-2xl'}>МОО «Общество детских <br/>дерматологов»</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>ИНН/КПП: 7736323518 / 773601001</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>ОГРН: 1197700011871</p>
                            </div>
                        </div>
                        <p className={'text-white uppercase text-xl lg:text-4xl font-extralight'}>АДРЕС:</p>
                        <div className={'border-l-2 flex flex-col gap-8 border-white pl-4'}>
                            <div className={'flex flex-col gap-2'}>
                                <p className={'font-extrabold text-white text-lg lg:text-2xl'}>Ломоносовский пр-кт., 2, стр. 1</p>
                                <p className={'font-extralight text-white lg:text-lg text-sm '}>Москва, 119034</p>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </motion.div>
            <div id={'publications'} className={'bg-white h-[500px] flex flex-col items-center relative items-center px-[140px] gap-12 '}>
                <img className={'absolute left-0 top-0 w-full h-full object-cover'} src={'/pages/about/map.png'}/>
            </div>
        </main>
    )
}

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


    return (
        <main className={'overflow-x-hidden'}>

            <div id={'publications'} className={'bg-white py-20 sm:pt-40 flex flex-col min-h-screen items-center px-[20px] lg:px-[140px] gap-12 '}>
                <p className={'font-extralight text-black text-2xl xl:text-4xl text-center uppercase'}>Сканируй QR-код  <br/> <span className={'font-extrabold'}>и открой для себя мир информации</span> </p>
                <p className={'xk:text-2xl text-lg text-center text-green font-bold font-inter'}>Оплати подписку за несколько секунд и получи доступ к мировым новостям и статьям по Дерматологии</p>
                <img src={'/news_qr.png'}/>
                <p className={'xl:text-xl text-center text-black font-normal font-inter'}>что бы оплатить, переходите по ссылке <a className={'text-green underline'} href={'https://yookassa.ru/my/i/ZmPka0aZapfD/l'}>https://yookassa.ru/my/i/ZmPka0aZapfD/l</a></p>
                <p className={'xl:text-xl text-center text-black font-normal font-inter'}>Специальная цена в честь запуска нашего бота — <strong>всего 490р вместо 3900р!</strong> Поторопись, предложение ограничено</p>
                <p className={'xl:text-xl text-center text-black font-normal font-inter'}>После оплаты пришлите чек об оплате в телеграмм и мы пришлем вам доступ <a className={'text-green font-bold underline'} href={'https://t.me/newschecker_dr/'}>@newschecker_dr</a></p>
            </div>
        </main>
    )
}

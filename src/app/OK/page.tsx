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


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const [checkboxRadio, setCheckboxRadio] = useState('yes')
    const [personal, setPersonal] = useState(false)
    const [showWarning,setShowWarning]=useState(false)

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">
                <motion.div
                    className={'w-full sm:min-h-screen h-auto px-[20px] lg:px-[120px] items-center sm:grid flex justify-between  gap-12 flex-col sm:grid-cols-1 sm:grid-cols-7'}>
                    <motion.div
                        className={'sm:col-span-4 sm:mt-0 mt-20 flex flex-col gap-8 sm:items-start justify-center'}>
                        <p className={'uppercase font-extralight text-2xl lg:text-6xl text-white'}><span className={'font-extrabold'}>Благодарим <br/> </span> за покупку!</p>
                        <p className={' font-extralight text-2xl sm:text-2xl font-medium text-white'}>Мы уже отправляем вам вашу копию книги</p>
                        <p className={' font-extralight text-2xl sm:text-xl text-white'}>Трек номер для отслеживания будет выслан вам на почтовый ящик</p>
                    </motion.div>
                    <div className={'sm:col-span-3 h-full flex  relative'}>
                        <img className={'sm:absolute scale-110 bottom-0 right-0'} src={'/pages/events/murashkin.png'}/>
                    </div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} className={'object-cover'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


        </main>
    )
}

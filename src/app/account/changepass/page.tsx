
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


// import required modules


export default function Home() {



    const images = '/pages/account'

    return (
        <main className={'p-12 h-full'}>
            <div className={'flex w-full h-full items-start justify-center'}>
                <div className={'flex flex-col mt-20 items-start gap-6'}>
                    <p className={'uppercase font-inter font-extralight text-3xl'}>Смена пароля</p>
                    <div className={'flex gap-2 flex-col'}>
                        <p>Новый пароль</p>
                        <input type={'password'} placeholder={''}
                               className={'p-4 transition-all duration-300 placeholder:font-extralight w-96 border-black border-[1px] cursor-pointer flex items-center rounded-full gap-2'}/>
                    </div>
                    <div className={'flex gap-2 flex-col'}>
                        <p>Подтвердите пароль</p>
                        <input type={'password'} placeholder={''}
                               className={'p-4 transition-all duration-300 placeholder:font-extralight w-96 border-black border-[1px] cursor-pointer flex items-center rounded-full gap-2'}/>
                    </div>
                    <div
                        className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 w-60 flex justify-center items-center rounded-lg gap-2'}>
                        <p className={'text-white font-inter font-normal'}>Изменить</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

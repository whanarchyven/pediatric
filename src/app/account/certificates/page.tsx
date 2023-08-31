
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
        <main className={'p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Мои <br/><span
                    className={'font-extrabold'}>Сертификаты</span></p>

            </div>
            <div className={'w-full mt-10 flex flex-col gap-20'}>
                <div className={'border-b-[1px] border-opacity-50 pb-10 border-green'}>
                    <PublicationTab isRateHidden={true}></PublicationTab>
                </div>
            </div>
            <div className={'w-full mt-10 flex flex-col gap-20'}>
                <div className={'border-b-[1px] border-opacity-50 pb-10 border-green'}>
                    <PublicationTab isRateHidden={true}></PublicationTab>
                </div>
            </div>
            <div className={'w-full mt-10 flex flex-col gap-20'}>
                <div className={'border-b-[1px] border-opacity-50 pb-10 border-green'}>
                    <PublicationTab isRateHidden={true}></PublicationTab>
                </div>
            </div>
            <div className={'w-full mt-10 flex flex-col gap-20'}>
                <div className={'border-b-[1px] border-opacity-50 pb-10 border-green'}>
                    <PublicationTab isRateHidden={true}></PublicationTab>
                </div>
            </div>
            <div className={'w-full mt-10 flex flex-col gap-20'}>
                <div className={'border-b-[1px] border-opacity-50 pb-10 border-green'}>
                    <PublicationTab isRateHidden={true}></PublicationTab>
                </div>
            </div>
        </main>
    )
}

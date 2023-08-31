
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
                <p className={'uppercase font-inter font-extralight text-3xl'}>Визитная <br/><span
                    className={'font-extrabold'}>Карточка</span></p>

            </div>
            <div className={'w-full mt-10 grid grid-cols-2'}>
                <div className={'border-r-[1px] flex flex-col pr-8 gap-16 border-green'}>
                    <div className={'flex gap-8 items-start'}>
                        <img className={'rounded-full aspect-square object-cover w-1/4'}
                             src={`${images}/temp_avatar.png`}/>
                        <div className={'flex flex-col gap-3'}>
                            <p className={'text-green-two text-2xl font-bold'}>Иванова Анна Сергеевна</p>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/phone.svg`}/>
                                <p className={'font-normal'}>+7 (952) 256 34 20</p>
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/email.svg`}/>
                                <p className={'font-normal'}>pediatric-dermatology@mail.ru</p>
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/location.svg`}/>
                                <p className={'font-normal'}>Москва, Россия</p>
                            </div>
                            <p className={'text-lg'}><span className={'font-bold'}>Пол:</span> Женский</p>
                            <p className={'text-lg'}><span className={'font-bold'}>Дата рождения:</span> 23.10.1996</p>
                            <div className={'flex items-center justify-between gap-3'}>
                                <div
                                    className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    Дерматология
                                </div>
                                <div
                                    className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    Стаж 21 год
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-6'}>
                        <p className={'uppercase font-inter font-extralight text-3xl'}>О себе и интересы</p>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>Профессиональные интересы:</p>
                            <p className={'text-black'}>современная медицина, заболевания опорно-двигательного аппарата,
                                особенности терапии болевых синдромов различного происхождения, головные боли у
                                детей</p>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>О себе:</p>
                            <p className={'text-black'}>Приветствую, я молодой дерматолог с широкими профессиональными
                                интересами, включая современную медицину и заболевания опорно-двигательного аппарата.
                                Мне также интересно изучение терапии болевых синдромов и головных болей у детей. Готова
                                помочь вам улучшить ваше здоровье!</p>
                        </div>
                    </div>
                    <div className={'flex gap-6 items-center'}>
                        <img className={'aspect-square w-1/4'} src={`${images}/qr.png`}/>
                        <div className={'flex flex-col gap-3'}>
                            <p className={'font-bold text-black text-2xl'}>QR- код</p>
                            <p className={'text-black text-sm'}>Чтобы увидеть вашу визитную карточку достаточно отсканировать этот QR-код</p>
                            <div className={'flex w-full gap-4'}>
                                <div className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                                    <p className={'text-white font-inter text-sm font-normal px-8'}>Открыть</p>
                                </div>
                                <div className={'p-2 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                                    <p className={'text-green-two font-inter text-sm font-normal px-8'}>Скачать</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex px-8 flex-col'}>
                    <p className={'font-bold text-xl text-black'}>Награды</p>
                    <div className={'grid grid-cols-4 mt-4 gap-8'}>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`}
                                 className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>

                    </div>
                    <div className={'flex flex-col gap-10 mt-8'}>
                        <p className={'font-bold text-xl text-black'}>Научные работы</p>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>

                    </div>
                </div>
            </div>
        </main>
    )
}

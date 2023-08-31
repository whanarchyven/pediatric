
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


    const images='/pages/account'

    return (
        <main className={'p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Основные данные</p>
                <div className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                    <img className={'w-4 aspect-square'} src={`${images}/edit.svg`}/>
                    <p className={'text-white font-inter font-normal'}>Редактировать профиль</p>
                </div>
            </div>
            <div className={'w-full mt-10 grid grid-cols-2'}>
                <div className={'border-r-[1px] flex flex-col pr-8 gap-16 border-green'}>
                    <div className={'flex gap-8 items-start'}>
                        <img className={'rounded-full aspect-square object-cover w-1/4'} src={`${images}/temp_avatar.png`}/>
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
                                <div className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    Дерматология
                                </div>
                                <div className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    Стаж 21 год
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <p className={'uppercase font-inter font-extralight mb-6 text-3xl'}>Образование</p>
                        <div className={'grid gap-4 w-4/5 grid-cols-2'}>
                            <p className={' font-bold'}> Первое образование:</p>
                            <p className={''}>1-й Московский</p>
                            <p className={' font-bold'}>Второе образование:</p>
                            <p className={''}>2-й Питерский</p>
                            <p className={' font-bold'}>Третье образование:</p>
                            <p className={''}>СамГМУ</p>
                            <p className={' font-bold'}>Ученая степень:</p>
                            <p className={''}>Доктор наук</p>
                            <p className={' font-bold'}>Ученое звание:</p>
                            <p className={''}>Профессор</p>
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                        <p className={'uppercase font-inter font-extralight mb-6 text-3xl'}>Карьера</p>
                        <div className={'grid gap-4 mb-6 w-4/5 grid-cols-2'}>
                            <p className={' font-bold'}>Опыт работы:</p>
                            <p className={''}>21 год</p>
                        </div>
                        <div className={'relative flex flex-col gap-7'}>
                            <div className={'h-full absolute left-1.5 w-[1px] bg-green'}>

                            </div>
                            <div className={'flex items-start gap-5'}>
                                <div className={'w-3 aspect-square rounded-full bg-green'}>

                                </div>
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'font-bold text-green-two leading-[80%]'}>Январь 2022 - Июнь 2023</p>
                                    <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>
                                    <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>
                                </div>
                            </div>
                            <div className={'flex items-start gap-5'}>
                                <div className={'w-3 aspect-square rounded-full bg-green'}>

                                </div>
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'font-bold text-green-two leading-[80%]'}>Январь 2021 - Июнь 2022</p>
                                    <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>
                                    <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>
                                </div>
                            </div>
                            <div className={'flex items-start gap-5'}>
                                <div className={'w-3 aspect-square rounded-full bg-green'}>

                                </div>
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'font-bold text-green-two leading-[80%]'}>Январь 2020 - Июнь 2021</p>
                                    <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>
                                    <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>
                                </div>
                            </div>
                            <div className={'flex items-start gap-5'}>
                                <div className={'w-3 aspect-square rounded-full bg-green'}>

                                </div>
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'font-bold text-green-two leading-[80%]'}>Январь 2019 - Июнь 2020</p>
                                    <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>
                                    <p className={'font-normal text-black leading-[80%]'}>Должность: врач</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-6'}>
                        <p className={'uppercase font-inter font-extralight text-3xl'}>О себе и интересы</p>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>Профессиональные интересы:</p>
                            <p className={'text-black'}>современная медицина, заболевания опорно-двигательного аппарата, особенности терапии болевых синдромов различного происхождения, головные боли у детей</p>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>О себе:</p>
                            <p className={'text-black'}>Приветствую, я молодой дерматолог с широкими профессиональными интересами, включая современную медицину и заболевания опорно-двигательного аппарата. Мне также интересно изучение терапии болевых синдромов и головных болей у детей. Готова помочь вам улучшить ваше здоровье!</p>
                        </div>
                    </div>
                </div>
                <div className={'flex px-8 flex-col'}>
                    <p className={'font-bold text-xl text-black'}>Награды</p>
                    <div className={'grid grid-cols-4 mt-4 gap-8'}>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>
                        <div className={'flex flex-col gap-3 items-center'}>
                            <img src={`${images}/temp_certificate.png`} className={'rounded-full cursor-pointer aspect-square object-cover'}/>
                            <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>
                        </div>

                    </div>
                    <div className={'flex flex-col gap-10 mt-8'}>
                        <p className={'font-bold text-xl text-black'}>Научные работы</p>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                        <PublicationTab></PublicationTab>
                    </div>
                </div>
            </div>
        </main>
    )
}

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
import {Mousewheel, EffectCoverflow, Pagination, Autoplay, EffectCards, EffectCreative, EffectCube, EffectFade, EffectFlip} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const [checkboxRadio,setCheckboxRadio]=useState('yes')
    const [personal,setPersonal]=useState(false)

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[120px] items-center grid grid-cols-1 sm:grid-cols-7'}>
                    <motion.div
                        className={'col-span-4 sm:mt-0 mt-20 flex flex-col gap-8 sm:items-start justify-center'}>
                        <Link href={'/'}>
                            <div className={'flex gap-4 items-center cursor-pointer'}>
                                <img className={'aspect-square w-5'} src={'/arrow_prev.svg'}/>
                                <p className={'text-white text-xl uppercase'}>Назад</p>
                            </div>
                        </Link>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'uppercase font-extralight text-2xl sm:text-5xl text-white'}>Регистрация
                            <br/><span className={'font-bold'}>нового участника общества</span></motion.p>
                    </motion.div>
                    <div className={'col-span-3 h-full flex  relative'}>
                        <img className={'absolute bottom-0 right-0'} src={'/pages/events/murashkin.png'}/>
                    </div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>
            <div className={'bg-white py-12 items-center sm:px-[140px] gap-20 grid px-[20px] grid-cols-1 sm:grid-cols-7'}>
                <div className={'w-full col-span-4 flex flex-col gap-6'}>
                    <p className={'text-xl sm:text-3xl font-extralight uppercase'}>Заполните <br/> <span className={'font-extrabold'}>регистрационную анкету</span></p>
                    <form className={'w-full flex flex-col gap-6'}>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Фамилия<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Имя<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Отчество<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Номер телефона<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Специальность<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Email<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Город<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Место работы<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Должность<sup className={'text-red '}>*</sup></p>
                            <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Пароль<sup className={'text-red '}>*</sup></p>
                            <input type={'password'} className={'w-full p-3 rounded-md text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-sm sm:text-xl font-light'}>Укажите пароль повторно<sup className={'text-red '}>*</sup></p>
                            <input type={'password'} className={'w-full p-3 rounded-md text-xl border-2 border-green-two'} name={'surname'}/>
                        </div>
                        <div className={'flex mt-10 flex-col gap-2 w-full'}>
                            <p className={'text-2xl font-light'}>ВСТУПИТЬ В СООБЩЕСТВО</p>
                            <div className={'flex items-center gap-12'}>
                                <div className={'flex cursor-pointer items-center gap-3'} onClick={()=>{setCheckboxRadio('yes')}}>
                                    <div className={'w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center'}>
                                        {checkboxRadio=='yes'?<div className={'w-1/2 aspect-square rounded-full bg-green-two'}>

                                        </div>:null}
                                    </div>
                                    <p className={'font-medium'}>ДА</p>
                                </div>
                                <div className={'flex cursor-pointer items-center gap-3'} onClick={()=>{setCheckboxRadio('no')}}>
                                    <div className={'w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center'}>
                                        {checkboxRadio=='no'?<div className={'w-1/2 aspect-square rounded-full bg-green-two'}>

                                        </div>:null}
                                    </div>
                                    <p className={'font-medium'}>НЕТ</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-2 w-full'}>
                            <p className={'text-xs font-light'}>Текущий сайт защищен reCAPTCHA от Google. Порядок защиты персональных данных и условия использования сервиса соблюдены.</p>
                            <div className={'flex items-center gap-12'}>
                                <div className={'flex cursor-pointer items-center gap-3'} onClick={()=>{setPersonal(!personal)}}>
                                    <div className={'w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center'}>
                                        {personal?<div className={'w-1/2 aspect-square rounded-full bg-green-two'}>

                                        </div>:null}
                                    </div>
                                    <p className={'font-light'}>Даю согласие на обработку персональных данных</p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col mt-5 gap-2 w-full'}>
                            <div className={'w-full p-3 flex items-center justify-center font-extrabold uppercase cursor-pointer rounded-md text-xl text-white bg-green-two'} name={'surname'}>Регистрация</div>
                        </div>
                    </form>
                </div>
                <div className={'hidden sm:flex flex-col col-span-3 justify-between items-center gap-20 h-full'}>
                    <div className={'w-full'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg object-cover w-full aspect-square'}
                                src={`${images}/feautures/1.png`}/>
                    </div>
                    <div className={'w-full'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg object-cover w-full aspect-square'}
                                src={`${images}/feautures/2.png`}/>
                    </div>
                    <div className={'w-full'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg object-cover w-full aspect-square'}
                                src={`${images}/feautures/3.png`}/>
                    </div>
                </div>
            </div>

        </main>
    )
}

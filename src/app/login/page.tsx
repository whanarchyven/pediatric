"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";
import {eden} from "@/helpers/sdk"


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
    const [showWarning,setShowWarning]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const doLogin = ()=>{
        eden.auth.login.post({email,password}).then(({data})=>{
        
            if (data.user_uuid){
                const userUuid = data.user_uuid;
                router.push(`/account/${userUuid}/profile`)
            }
            if (data.error) {
                
                return setShowWarning(data.error??"Неправильные логин или пароль")
            }
           
            
        }).catch(e=>{
            setShowWarning("Неправильные логин или пароль")
        })
    }

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[120px] items-center grid grid-cols-1 sm:grid-cols-7'}>
                    <motion.div
                        className={'col-span-4 sm:mt-0 mt-20 flex flex-col gap-8 sm:items-start justify-center'}>
                        <p className={'uppercase font-extralight text-2xl sm:text-4xl text-white'}>ВХОД</p>
                        <p className={' font-extralight text-2xl sm:text-lg text-white'}>Авторизация позволит Вам получить доступ<br/>
                            к дополнительным возможностям сайта.</p>
                        <div className={'flex gap-2 flex-col'}>
                            <p className={'text-white font-bold'}>E-mail</p>
                            {showWarning?<p className={'text-rose-500 font-normal'}>{showWarning}</p>:null}
                            <input type={'text'} onChange={(e)=>{setEmail(e.target.value)}} placeholder={'my.email@gmail.com'}
                                   className={'p-4 outline-0 text-white bg-transparent transition-all duration-300 placeholder:font-extralight w-96 border-white border-2 cursor-pointer flex items-center rounded-full gap-2'}/>
                        </div>
                        <div className={'flex gap-2 flex-col'}>
                            <p className={'text-white font-bold'}>Пароль</p>
                            <input onChange={(e)=>{setPassword(e.target.value)}} type={'password'} placeholder={''}
                                   className={'p-4 outline-0 text-white bg-transparent transition-all duration-300 placeholder:font-extralight w-96 border-white border-2 cursor-pointer flex items-center rounded-full gap-2'}/>
                        </div>
                        <div className={'flex justify-between w-2/3'}>
                            <div onClick={()=>{
                                // setShowWarning(true);
                                doLogin();

                            }}
                                className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-white border-white border-2 w-40 flex justify-center items-center rounded-lg gap-2'}>
                                <p className={'text-black font-inter font-normal'}>Войти</p>
                            </div>
                            <div className={'flex flex-col items-end'}>
                                <Link href={'/'} className={'text-white font-inter font-extralight'}>Забыли пароль?</Link>
                                <Link href={'/registration'} className={'text-white font-inter font-extralight'}>Регистрация</Link>
                            </div>
                        </div>
                    </motion.div>
                    <div className={'col-span-3 h-full flex  relative'}>
                        <img className={'absolute bottom-0 right-0'} src={'/pages/events/murashkin.png'}/>
                    </div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


        </main>
    )
}

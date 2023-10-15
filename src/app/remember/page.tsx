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
        eden.auth.login["request-otp"].post({email}).then((res)=>{

            console.log(res)

            // if (data?.user_uuid){
            //     const userUuid = data?.user_uuid;
            //     router.push(`/account/${userUuid}/profile`)
            // }
            // if (data?.error) {
            //
            //     return setShowWarning(data?.error??"Неправильные логин или пароль")
            // }


        }).catch(e=>{
            setShowWarning("")
        })
    }



    const [stages,setStages]=useState<'email'|'code'>('email')
    const [code,setCode]=useState('')

    const loginByCode=async ()=>{
        eden.auth.login["by-otp"].post({otp:code,email:email}).then((res)=>{

            console.log(res)

            if (res.data?.user_uuid){
                const userUuid = res.data?.user_uuid;
                router.push(`/account/${userUuid}/changepass`)
            }
            if (res.data?.error) {

                return setShowWarning(res.data?.error??"Введен неверный код")
            }


        }).catch(e=>{
            setShowWarning("")
        })
    }

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[120px] items-center grid grid-cols-1 sm:grid-cols-7'}>
                    <motion.div
                        className={'lg:col-span-4 sm:mt-0 mt-20 flex flex-col gap-8 sm:items-start justify-center'}>
                        <p className={'uppercase font-extralight text-2xl sm:text-4xl text-white'}>Восстановление пароля</p>
                        <p className={' font-extralight text-2xl sm:text-lg text-white'}>Авторизация позволит Вам получить доступ<br/>
                            к дополнительным возможностям сайта.</p>
                        {stages=='email'?<div className={'flex gap-2 flex-col'}>
                            <p className={'text-white font-bold'}>E-mail</p>
                            {showWarning?<p className={'text-rose-500 font-normal'}>{showWarning}</p>:null}
                            <input type={'text'} onChange={(e)=>{setEmail(e.target.value)}} placeholder={'my.email@gmail.com'}
                                   className={'p-4 outline-0 text-white max-w-screen-sm bg-transparent transition-all duration-300 placeholder:font-extralight lg:w-96 border-white border-2 cursor-pointer flex items-center rounded-full gap-2'}/>
                        </div>:<div className={'flex gap-2 flex-col'}>
                            <p className={'text-white font-bold'}>Введите 6-значный код из письма</p>
                            {showWarning?<p className={'text-rose-500 font-normal'}>{showWarning}</p>:null}
                            <input type={'text'} value={code} onChange={(e)=>{setCode(e.target.value)}} placeholder={'Введите код'}
                                   className={'p-4 outline-0 text-white max-w-screen-sm bg-transparent transition-all duration-300 placeholder:font-extralight lg:w-96 border-white border-2 cursor-pointer flex items-center rounded-full gap-2'}/>
                        </div>}
                        {stages=='email'?<div className={'flex justify-between lg:w-2/3'}>
                            <div onClick={()=>{
                                // setShowWarning(true);
                                doLogin();
                                setStages('code')
                            }}
                                 className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-white border-white border-2 w-96 flex justify-center items-center rounded-lg gap-2'}>
                                <p className={'text-black font-inter font-normal'}>Восстановить пароль</p>
                            </div>
                        </div>:<div className={'flex justify-between lg:w-2/3'}>
                            <div onClick={()=>{
                                // setShowWarning(true);
                                // doLogin();
                                loginByCode();

                            }}
                                 className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-white border-white border-2 w-96 flex justify-center items-center rounded-lg gap-2'}>
                                <p className={'text-black font-inter font-normal'}>Войти</p>
                            </div>
                        </div>}
                    </motion.div>
                    <div className={'lg:col-span-3 lg:mt-0 mt-12 lg:h-full flex relative'}>
                        <img className={'lg:absolute w-full lg:bottom-0 lg:right-0'} src={'/pages/events/murashkin.png'}/>
                    </div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


        </main>
    )
}

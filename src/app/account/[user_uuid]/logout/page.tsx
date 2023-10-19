"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {redirect, useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";
import {eden} from "@/helpers/sdk"


import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";
import Cookies from "js-cookie"
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
import {Cookie} from "elysia";
import axios from "axios";


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


    useEffect(() => {
        localStorage.setItem('loggedOut','true')
        axios.get('/api2/auth/logout').then(()=>{
            router.push('/')
        })
    }, []);

    return (
        <main className={'overflow-x-hidden'}>

        </main>
    )
}

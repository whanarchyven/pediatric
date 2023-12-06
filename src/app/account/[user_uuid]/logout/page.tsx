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



    useEffect(() => {
        sessionStorage.setItem('loggedOut','true')
        axios.get('/api2/auth/logout').then(()=>{
        })
        router.push('/login')
    }, []);

    return (
        <main className={'overflow-x-hidden'}>

        </main>
    )
}

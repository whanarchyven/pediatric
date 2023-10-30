"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter, useSearchParams} from "next/navigation";
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
import CountUp from "react-countup";
import {classList} from "@/helpers/classList";
import {eden, useEden} from "@/helpers/sdk";
import PostTab from "@/components/PostTab";
import Loading from "@/components/Loading";


export default function Home() {


    const images = '/pages/main'

    const searchParams=useSearchParams()

    const searchByName=searchParams.get('title')

    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        uuid,
        saved
    } = data?.profile ?? {} as any;

    const [posts,setPosts]=useState<Array<any>>([]);

    useEffect(() => {
        eden.post.list.get({$query:{search:searchByName??''}}).then((res)=>{
            if(res?.data?.posts){
                setPosts(res.data.posts)
            }
        })
    }, []);

    return (
        <main className={'overflow-x-hidden'}>

            <div id={'publications'} className={'bg-white py-20 sm:pt-40 flex flex-col items-center items-center px-[20px] lg:px-[140px] gap-12 '}>
                <p className={'font-extralight text-black text-4xl text-center uppercase'}>Статьи и <br/> <span className={'font-extrabold'}>полезное</span> </p>


                {posts&&saved?<div className={'mt-6 gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                    {posts.map((post, counter) => {
                        if(saved.find(item=>item.title==post.title)){
                            return(
                                <PostTab key={post.title} isSaved={true} user_uuid={uuid} {...post}></PostTab>
                            )
                        }
                        else{
                            return(
                                <PostTab key={post.title} user_uuid={uuid} {...post}></PostTab>
                            )
                        }
                    })}
                </div>:<Loading></Loading>}
            </div>
        </main>
    )
}

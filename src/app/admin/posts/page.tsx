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
import PublicationTab from "@/components/Publication Tab";
import {eden, useEden} from "@/helpers/sdk";
import Link from "next/link";
import NewPublicationPop from "@/components/NewPublicationPop";
import QrPop from "@/components/QrPop";
import NewPostPop from "@/components/NewPostPop";
import PostTab from "@/components/PostTab";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'
    // @ts-ignore
    const publicationsData = useEden(() => eden.publication.list.get())

    const {publications}=publicationsData?.data?? {} as any


    const {data} = useEden(() => eden.user[user_uuidTemp].profile.get())

    const {
        uuid,
    } = data?.profile ?? {} as any;




    const participationsTemp=useEden(()=>eden.user[user_uuidTemp].participations.get())
    const participations=participationsTemp?.data?? {} as any


    const [newPostPopOpen,setNewPostPopOpen]=useState(false)


    console.log(data)


    const [isQrCodeOpen,setIsQrCodeOpen]=useState(false)

    const [activeQr,setActiveQr]=useState('')

    const [posts,setPosts]=useState<Array<any>>([]);

    useEffect(() => {
        eden.post.list.get({$query:{}}).then((res)=>{
            if(res?.data?.posts){
                setPosts(res.data.posts)
            }
        })
    }, []);

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex mb-10 justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Публикации <br/><span
                    className={'font-extrabold'}>и контент</span></p>
                <div onClick={()=>{setNewPostPopOpen(true)}} className={'flex items-center justify-center p-2 rounded-lg h-12 cursor-pointer font-bold text-white bg-green'}>
                    Добавить публикацию
                </div>
            </div>
            {newPostPopOpen?<NewPostPop closeFunc={()=>{setNewPostPopOpen(false)}}/>:null}

            {posts?<div className={'grid grid-cols-3 gap-20'}>
                {posts.map((post)=>{
                    return(
                        <PostTab key={post.title} user_uuid={uuid} {...post}></PostTab>
                    )
                })}
            </div>:null}

        </main>
    )
}

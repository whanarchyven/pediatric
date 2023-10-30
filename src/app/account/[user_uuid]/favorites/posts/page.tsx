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
import axios from "axios";
import {Pagination} from "swiper";
import NewPublicationPop from "@/components/NewPublicationPop";
import Link from "next/link";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'

    const [publications,setPublications]=useState<any>([])
    const [allTags,setAllTags]=useState<string[]>([])
    // @ts-ignore



    const {data} = useEden(() => eden.user[user_uuidTemp].profile.get())

    const {
        uuid,email,saved
    } = data?.profile ?? {} as any;

    console.log(uuid)


    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between items-center'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Сохраненные <br/><span
                    className={'font-extrabold'}>материалы</span></p>

            </div>
            <div className={'flex my-4 items-center gap-6 lg:gap-12'}>
                <Link className={'font-light uppercase'} href={'/account/my/favorites/publications/'}>
                    Публикации
                </Link>
                <Link className={'font-light text-green border-b-2 border-green uppercase'} href={'/account/my/favorites/posts/'}>
                    Статьи
                </Link>
                <Link className={'font-light uppercase'} href={'/account/my/favorites/lessons/'}>
                    Уроки
                </Link>
            </div>

            {saved && saved.length > 0 ? <div className={'grid gap-12 mt-16 grid-cols-1 lg:grid-cols-3'}>
                {saved.map((post:typeof saved[0])=>{
                    if (post.category=='post'){
                        return(
                            <div key={post.title} className={'flex cursor-pointer flex-col gap-6'}>
                                <img className={'w-full aspect-video rounded-lg object-cover'} src={post.imageUrl}/>
                                <p className={'font-bold'}>{post.title}</p>
                                <Link className={'flex items-center justify-center text-red font-bold rounded-lg border-2 border-red p-2'} href={post.href}>Читать</Link>
                            </div>
                        )
                    }
                })}
            </div> : <div
                className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                <p className={'opacity-50'}>Статьи не найдены</p>
            </div>}
        </main>
    )
}

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

    console.log(uuid)

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Статьи и <br/><span
                    className={'font-extrabold'}>Публикации</span></p>

            </div>
            {/*<div className={'flex items-center mt-8 gap-4'}>*/}
            {/*    <input placeholder={'Введите данные для поиска'}*/}
            {/*        className={'p-4 transition-all duration-300 placeholder:font-extralight w-96 border-black border-[1px] cursor-pointer flex items-center rounded-lg gap-2'}/>*/}
            {/*    <div*/}
            {/*        className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>*/}
            {/*        <img className={'w-4 aspect-square'} src={`${images}/search.svg`}/>*/}
            {/*        <p className={'text-white font-inter font-normal'}>Поиск</p>*/}
            {/*    </div>*/}
            {/*    <div className={'p-4 px-12 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>*/}
            {/*        <img className={'w-4 aspect-square'} src={`${images}/filters.svg`}/>*/}
            {/*        <p className={'text-green font-inter font-normal'}>Фильтры</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'flex items-center mt-3 gap-4'}>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>Дерматология</p>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>2023</p>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>Мероприятия</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {publications && publications.length > 0 ? <div className={'flex gap-12 mt-16 flex-col'}>
                {publications.map((publication:typeof publications[0])=>{
                    return(
                        <PublicationTab user_uuid={uuid} {...publication} key={publication.title}></PublicationTab>
                    )
                })}
            </div> : <div
                className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                <p className={'opacity-50'}>Публикации не найдены</p>
            </div>}


        </main>
    )
}

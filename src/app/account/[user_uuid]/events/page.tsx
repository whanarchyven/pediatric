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
import {classList} from "@/helpers/classList";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'
    // @ts-ignore
    const publicationsData = useEden(() => eden.publication.list.get())

    const {publications}=publicationsData?.data?? {} as any


    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        uuid,
    } = data?.profile ?? {} as any;


    const participationsTemp=useEden(()=>eden.user.my.participations.get())
    console.log(participationsTemp,'asdasdasd123333333')
    const participations=participationsTemp?.data?? {} as any


    const eventsTempData=useEden(()=>eden.event.list.get())
    const events=eventsTempData?.data?.events

    const certLink = (event_id:string)=>
    `/api2/user/${user_uuidTemp}/participations/byEventId/${event_id}/getCert`


    console.log(participations,'asdasdasd')

    // console.log(events)

    const [isQrCodeOpen,setIsQrCodeOpen]=useState(false)

    const [activeQr,setActiveQr]=useState('')

    const router=useRouter();

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Мероприятия, на которые <br/><span
                    className={'font-extrabold'}>вы зарегистрировались</span></p>
            </div>
            {isQrCodeOpen?<QrPop closeFunc={()=>{setIsQrCodeOpen(false)}} activeQrLink={activeQr}></QrPop>:null}

            {participations && participations.length > 0 ? <div className={'flex mt-16 border-t-[1px] border-green flex-col'}>
                <div className={'lg:grid hidden border-b-[1px] border-green grid-cols-12'}>
                    <div className={'col-span-1 text-white font-bold bg-green text-sm flex items-center justify-start border-l-[1px] p-3 border-green'}>
                        Дата
                    </div>
                    <div className={'col-span-6 text-white font-bold bg-green text-sm  border-l-[1px] p-3 border-white'}>
                        Название мероприятия
                    </div>
                    <div className={'col-span-1 text-white font-bold bg-green text-sm lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Оплачено
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green text-sm lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Формат участия
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green text-sm lg:border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-r-green border-l-white'}>
                        Билет
                    </div>
                </div>
                {participations?.map((participation:typeof participations[0],counter:number)=>{
                    let nowDate = new Date();
                    nowDate.setHours(0, 0, 0, 0)
                    let lexems = events?.find(item=>item.id==participation.info.event_id)?.date.split('.')
                    let isTranslationAvailable=false
                    console.log(lexems);
                    if(lexems!=undefined){
                        if(lexems[0].length>2){
                            let sublexems=lexems[0].split('-')
                            if (events&&new Date(`${lexems[1]}/${sublexems[0]}/${lexems[2]}`) <= nowDate) {
                                isTranslationAvailable=true
                            }
                        }else{
                            if (events&&new Date(`${lexems[1]}/${lexems[0]}/${lexems[2]}`) <= nowDate) {
                                isTranslationAvailable=true
                            }
                        }
                    }
                    return(
                        // <PublicationTab user_uuid={uuid} {...participation} key={participation.title}></PublicationTab>
                        <div key={counter} className={'grid  border-b-[1px] border-green  lg:grid-cols-12'}>
                            <div className={'lg:col-span-1 flex items-center text-sm justify-start lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {events?.find(item=>item.id==participation?.info.event_id)?.date}
                            </div>
                            <div className={'lg:col-span-6 lg:border-r-0 text-sm border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {participation?.info.event_name}
                            </div>
                            <div className={'lg:col-span-1 lg:border-r-0 text-sm border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {participation?.sum}
                            </div>
                            <div className={'lg:col-span-2 lg:border-r-0 text-sm border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {participation?.info.participationType}
                            </div>
                            <div className={'lg:col-span-2 border-r-[1px] text-sm  border-l-[1px] border-r-[1px] p-3 border-green'}>
                                {participation?.info.participationType=='онлайн'&&participation?.status==="finished"?<div onClick={()=>{
                                    if(isTranslationAvailable) {
                                        router.push(`/events/${participation?.info.event_id}`)
                                    }
                                }} className={classList('p-4 flex rounded-lg cursor-pointer items-center justify-center font-bold text-white',isTranslationAvailable?'text-sm bg-green':'bg-zinc-700 text-xs')}>{isTranslationAvailable?'Перейти к трансляции':'Трансляция будет доступна в день мероприятия'}</div>:<div onClick={()=>{
                                    router.push(`/account/my/events/${participation?.info.event_id}`)
                                }} className={'p-4 bg-green flex rounded-lg cursor-pointer items-center justify-center font-bold text-white'}>
                                    Билет
                                </div>}
                                {participation?.cert&&<a
                                href={certLink(participation?.info.event_id)}
                                target={"blank"}
                                rel="noreferer"
                                className={'mt-2 p-4 bg-white flex border-2 border-green rounded-lg cursor-pointer items-center justify-center font-bold text-green text-sm'}>
                                    Скачать сертификат
                                </a>}
                            </div>
                        </div>
                    )
                })}
            </div> : <div
                className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                <p className={'opacity-50'}>Мероприятия не найдены</p>
            </div>}


        </main>
    )
}

"use client"
import React, {useEffect, useState} from "react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import {eden, useEden} from "@/helpers/sdk";
import Link from "next/link";



// import required modules

export const dynamic = "force-dynamic"
export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'
    // @ts-ignore
    const eventsData = useEden(() => eden.event.list.get())

    const {events}=eventsData?.data?? {} as any

    console.log(events)

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Мероприятия <br/><span
                    className={'font-extrabold'}>и списки участников</span></p>
            </div>

            {events && events.length > 0 ? <div className={'flex mt-16 border-t-[1px] border-green flex-col'}>
                <div className={'lg:grid hidden border-b-[1px] border-green grid-cols-12'}>
                    <div className={'col-span-1 text-white font-bold bg-green flex items-center justify-start border-l-[1px] p-3 border-green'}>
                        Дата
                    </div>
                    <div className={'col-span-1 text-white font-bold bg-green  border-l-[1px] p-3 border-white'}>
                        Обложка
                    </div>
                    <div className={'col-span-6 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Название мероприятия
                    </div>
                    <div className={'col-span-1 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Кол-во участников
                    </div>
                    <div className={'col-span-3 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-r-green border-l-white'}>

                    </div>
                </div>
                {events.map((event:typeof events[0],counter:number)=>{
                    return(
                        // <PublicationTab user_uuid={uuid} {...participation} key={participation.title}></PublicationTab>
                        <div key={counter} className={'grid  border-b-[1px] border-green  lg:grid-cols-12'}>
                            <div className={'lg:col-span-1 text-xs flex items-center justify-start lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {event.date}
                            </div>
                            <div className={'lg:col-span-1 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                <img className={'w-full h-full object-cover'} src={event.layoutBg}/>
                            </div>
                            <div className={'lg:col-span-6 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {event.name}
                            </div>
                            <div className={'lg:col-span-1 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {event.participants}
                            </div>
                            <div className={'lg:col-span-3 flex items-center gap-2 lg:border-r-0 border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-green'}>
                                <Link href={`/admin/events/participants/${event.id}`}  className={'p-4 bg-green text-sm flex rounded-lg cursor-pointer items-center justify-center font-bold text-white'} >
                                    Участники
                                </Link>
                                <Link href={`/admin/events/${event.id}`} className={'p-4 text-sm bg-green flex rounded-lg cursor-pointer items-center justify-center font-bold text-white'}>
                                    Редактировать
                                </Link>
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

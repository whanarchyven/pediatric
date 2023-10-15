"use client"
import React, {useEffect, useState} from "react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import {eden, useEden} from "@/helpers/sdk";



// import required modules

export const dynamic = "force-dynamic"
export default function Home(params: { params: { id: string } }) {

    const event_id = params.params.id
    const images = '/pages/account'

    const [events,setEvents]=useState<Array<any>>([])

    // @ts-ignore
    const eventsData = eden.event.byId[event_id].get().then((res)=>{
        if(res.data){

        }
    })

    const {event}=eventsData?.data?.events?? {} as any

    console.log(event)

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Редактирование <br/><span
                    className={'font-extrabold'}>Мероприятия</span></p>
            </div>
            <div className={'grid grid-cols-2 items-start'}>
                <div className={''}>

                </div>
            </div>
        </main>
    )
}

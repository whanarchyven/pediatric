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


export default function Home(params: { params: { user_uuid: string, event_id: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const event_id = params.params.event_id

    console.log(user_uuidTemp);
    console.log(event_id);


    const [event, setEvent] = useState<any>()

    const {data} = useEden(() => eden.user[user_uuidTemp].participation[event_id].get())
    console.log(data)

    const [ticketLink, setTicketLink] = useState('/')

    useEffect(() => {
        eden.event.byId[event_id].get().then((res) => {
            setEvent(res.data.events)
        })
    }, []);

    useEffect(() => {
        eden.user[user_uuidTemp].participation[event_id].getTicketLink.get().then((res) => {
            if (res?.data?.ticketLink) {
                setTicketLink(res?.data?.ticketLink)
            }
        })
    }, []);

    const user = useEden(() => eden.user.my.profile.get())
    const participation=useEden(()=>eden.user[user_uuidTemp].participation[event_id].get())
    console.log(user);
    console.log('PARTICIPATION',participation)



    const router = useRouter();

    const [isVisited,setIsVisited]=useState(false)

    useEffect(() => {
        if(participation?.data?.visitedEvent){
            setIsVisited(true)
        }
    }, [participation]);

    if(ticketLink=='/'){
        return <div className={'flex flex-col px-5 items-center justify-center gap-3 h-screen'}>
            <p className={'text-2xl font-bold text-center'}>Билет не найден или вы не авторизованы!</p>
            <Link href={'/login'} className={'bg-green text-white px-4 py-2 rounded-lg font-bold'}>Войти в аккаунт</Link>
        </div>
    }

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Ваш Билет <br/><span
                    className={'font-extrabold'}>на мероприятие</span></p>
            </div>
            <p className={'my-12 text-xl lg:text-2xl font-bold'}>{event?.name} <br/> <span
                className={'text-green'}>{event?.date}</span></p>
            <div className={'grid mt-10 grid-cols-1 lg:grid-cols-2 gap-12'}>
                <div className={'aspect-video flex items-center relative'}>
                    <img className={'w-full h-full object-cover rounded-lg'} src={event?.layoutBg}/>
                    <img className={'w-1/2 aspect-square absolute left-5'} src={data?.qrCodeUrl}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div className={'grid grid-cols-3'}>
                        <p className={'font-bold text-sm lg:text-xl'}>ФИО:</p>
                        <p className={'font-bold col-span-2 text-green text-sm lg:text-xl'}>{data?.info?.name}</p>
                    </div>
                    <div className={'grid grid-cols-3'}>
                        <p className={'font-bold text-sm lg:text-xl'}>Тип участия:</p>
                        <p className={'font-bold col-span-2 text-green text-sm lg:text-xl'}>{data?.info?.participationType}</p>
                    </div>
                    <div className={'grid grid-cols-3'}>
                        <p className={'font-bold text-sm lg:text-xl'}>Оплачено: </p>
                        <p className={'font-bold col-span-2 text-green text-sm lg:text-xl'}>{data?.sum} ₽</p>
                    </div>
                    <div className={'flex flex-col gap-5 mt-6'}>
                        <p className={'text-xl font-light'}>Предъявите данный QR-код на входе в место проведения
                            мероприятия</p>
                        {event?.date=='07.06.2025'?<p className={'text-xl font-light'}>Также вы можете <span
                            className={'font-bold'}>скачать</span> свой билет в Google Wallet или Apple Wallet</p>:null}
                        {event?.date=='07.06.2025'?<Link href={ticketLink}
                                                                className={'w-full lg:w-96 bg-green p-3 flex items-center justify-center rounded-lg font-bold text-white'}>
                            Скачать билет на телефон
                        </Link>:null}
                        {user?.data?.isAdmin ? <div>
                            {isVisited?<div
                                className={'p-4 lg:px-12 cursor-pointer transition-all duration-300 border-green border-2 w-auto lg:w-60 flex justify-center items-center rounded-lg gap-2'}>
                                <p className={'text-green font-inter font-normal'}>Билет уже проверен</p>
                            </div>:<div onClick={async ()=>{
                                eden.user[user_uuidTemp].participation[event_id]['visit-event'].post({visitedEvent:true}).then((res)=>{
                                    setIsVisited(true)
                                })
                            }}
                                        className={'p-4 lg:px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 lg:w-60 flex justify-center items-center rounded-lg gap-2'}>
                                <p className={'text-white font-inter font-normal'}>Проверить билет</p>
                            </div>}
                        </div> : null}
                    </div>
                </div>
            </div>

        </main>
    )
}

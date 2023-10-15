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


// import required modules

export const dynamic = "force-dynamic"
export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'
    // @ts-ignore
    const publicationsData = useEden(() => eden.publication.list.get())

    const {publications}=publicationsData?.data?? {} as any


    const [profile,setProfile]=useState()

    const some = () => eden.user.my.profile.get().then((res)=>{
        if(res?.data?.profile){
            setProfile(res.data.profile)
        }
    })

    const [users,setUsers]=useState<Array<any>>([])

    useEffect(() => {
        eden.user.my["user-list"].get({$query:{}}).then((res)=>{
            console.log(res)
            if(res?.data?.users){
                setUsers(res.data.users)
            }
        })
    }, [profile]);



    const participationsTemp=useEden(()=>eden.user[user_uuidTemp].participations.get())
    const participations=participationsTemp?.data?? {} as any


    const eventsTempData=useEden(()=>eden.event.list.get())
    const events=eventsTempData?.data?.events


    console.log(participations)

    console.log(events)

    const [isQrCodeOpen,setIsQrCodeOpen]=useState(false)

    const [activeQr,setActiveQr]=useState('')

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Список<br/><span
                    className={'font-extrabold'}>Пользователей</span></p>
            </div>
            {isQrCodeOpen?<QrPop closeFunc={()=>{setIsQrCodeOpen(false)}} activeQrLink={activeQr}></QrPop>:null}

            {participations && participations.length > 0 ? <div className={'flex mt-16 border-t-[1px] border-green flex-col'}>
                <div className={'lg:grid hidden border-b-[1px] border-green grid-cols-12'}>
                    <div className={'col-span-4 text-white font-bold bg-green flex items-center justify-start border-l-[1px] p-3 border-green'}>
                        Дата
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green  border-l-[1px] p-3 border-white'}>
                        Название мероприятия
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Оплачено
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Тип участия
                    </div>
                    <div className={'col-span-2 text-white font-bold bg-green lg:border-r-0 border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-r-green border-l-white'}>
                        Пропуск на мероприятие
                    </div>
                </div>
                {users.map((user:typeof users[0],counter:number)=>{
                    return(
                        // <PublicationTab user_uuid={uuid} {...participation} key={participation.title}></PublicationTab>
                        <div key={counter} className={'grid  border-b-[1px] border-green  lg:grid-cols-12'}>
                            <div className={'lg:col-span-4 flex items-center justify-start lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                <p>{user.lastName} {user.firstName} {user.middleName}</p>
                            </div>
                            <div className={'lg:col-span-2 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {user.email}
                            </div>
                            <div className={'lg:col-span-2 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {user.phoneNumber}
                            </div>
                            <div className={'lg:col-span-2 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                {user.specialty}
                            </div>
                            <div className={'lg:col-span-2 lg:border-r-[1px] border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-green'}>
                                <Link href={`/admin/users/${user.uuid}`}  className={'p-4 bg-green flex rounded-lg cursor-pointer items-center justify-center font-bold text-white'}>
                                    Профиль
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

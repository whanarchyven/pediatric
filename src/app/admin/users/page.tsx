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
    const currentPage=useSearchParams().get('page')??1

    const [count,setCount]=useState(0)






    const participationsTemp=useEden(()=>eden.user[user_uuidTemp].participations.get())
    const participations=participationsTemp?.data?? {} as any


    const eventsTempData=useEden(()=>eden.event.list.get())
    const events=eventsTempData?.data?.events


    console.log(participations)

    console.log(events)

    const [isQrCodeOpen,setIsQrCodeOpen]=useState(false)

    const [activeQr,setActiveQr]=useState('')

    const [search,setSearch]=useState<string>(useSearchParams().get('search')??'')

    useEffect(() => {
        eden.user.my["user-list"].get({$query:{limit:'20',skip:String((Number(currentPage)-1)*20),search:search}}).then((res)=>{
            console.log(res)
            if(res?.data?.users){
                setUsers(res.data.users)
                setCount(Math.floor(res.data.count/20))
            }
        })
    }, [profile]);

    return (
        <main className={'p-2 lg:p-12'}>
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Список<br/><span
                    className={'font-extrabold'}>Пользователей</span></p>
            </div>
            {isQrCodeOpen?<QrPop closeFunc={()=>{setIsQrCodeOpen(false)}} activeQrLink={activeQr}></QrPop>:null}

            <div className={'flex items-center mt-4 gap-2'}>
                <input value={search} onChange={(event)=>{setSearch(event.target.value)}} className={'w-96 border-green border-2 rounded-lg p-2 placeholder:text-zinc-500'} placeholder={'Поиск по email'}/>
                <a href={`/admin/users?page=1&search=${search}`} className={'bg-green p-2 flex items-center justify-center h-full rounded-lg px-12 border-2 border-green cursor-pointer text-white'}>
                    Поиск
                </a>
            </div>


            <div className={'flex mt-16 border-t-[1px] border-green flex-col'}>
                <div className={'grid bg-green border-b-[1px] border-green lg:grid-cols-12'}>
                    <div className={'lg:col-span-3 font-bold text-white flex items-center justify-start lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white border-l-green'}>
                        <p>ФИО</p>
                    </div>
                    <div className={'lg:col-span-3 font-bold text-white lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        E-mail
                    </div>
                    <div className={'lg:col-span-2 font-bold text-white lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Номер телефона
                    </div>
                    <div className={'lg:col-span-2 font-bold text-white lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-white'}>
                        Специализация
                    </div>
                    <div className={'lg:col-span-2 font-bold text-white lg:border-r-[1px] border-r-[1px] border-l-[1px] border-r-[1px] p-3 border-white border-r-green'}>

                    </div>
                </div>
                {users.map((user:typeof users[0],counter:number)=>{
                    return(
                        // <PublicationTab user_uuid={uuid} {...participation} key={participation.title}></PublicationTab>
                        <div key={counter} className={'grid border-b-[1px] border-green lg:grid-cols-12'}>
                            <div className={'lg:col-span-3 flex items-center justify-start lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
                                <p>{user.lastName} {user.firstName} {user.middleName}</p>
                            </div>
                            <div className={'lg:col-span-3 lg:border-r-0 border-r-[1px] border-l-[1px] p-3 border-green'}>
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
            </div>
            <div className={'flex items-center mt-4 justify-center w-full gap-4'}>
                <a href={`/admin/users?page=${Number(currentPage)-1}`}><img src={'/arrow_left.svg'}/></a>
                {Number(currentPage)>4?<a href={`/admin/users?page=1&search=${search}`}>{1}</a>:null}
                {Number(currentPage)>4?<p>...</p>:null}
                {Number(currentPage)-3>0?<a href={`/admin/users?page=${Number(currentPage)-3}&search=${search}`}>{Number(currentPage)-3}</a>:null}
                {Number(currentPage)-2>0?<a href={`/admin/users?page=${Number(currentPage)-2}&search=${search}`}>{Number(currentPage)-2}</a>:null}
                {Number(currentPage)-1>0?<a href={`/admin/users?page=${Number(currentPage)-1}&search=${search}`}>{Number(currentPage)-1}</a>:null}
                <p className={'text-green font-bold'}>{currentPage}</p>
                {Number(currentPage)+1<count?<a href={`/admin/users?page=${Number(currentPage)+1}&search=${search}`}>{Number(currentPage)+1}</a>:null}
                {Number(currentPage)+2<count?<a href={`/admin/users?page=${Number(currentPage)+2}&search=${search}`}>{Number(currentPage)+2}</a>:null}
                {Number(currentPage)+3<=count?<a href={`/admin/users?page=${Number(currentPage)+3}&search=${search}`}>{Number(currentPage)+3}</a>:null}
                {Number(currentPage)+3<=count?<p>...</p>:null}
                {Number(currentPage)+3<=count?<a href={`/admin/users?page=${count}&search=${search}`}>{count}</a>:null}
                <a href={`/admin/users?page=${Number(currentPage)+1}`}><img src={'/arrow_right.svg'}/></a>
            </div>

        </main>
    )
}
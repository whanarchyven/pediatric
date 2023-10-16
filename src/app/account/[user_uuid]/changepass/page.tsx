"use client"
import React, {useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import PublicationTab from "@/components/Publication Tab";
import {eden, useEden} from "@/helpers/sdk";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuid = params.params.user_uuid

    const {data} = useEden(() => eden.user[user_uuid].profile.get())

    const images = '/pages/account'
    const router=useRouter();

    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const {
        email,
    } = data?.profile ?? {} as any;

    const [showStatus,setShowStatus]=useState('Изменить')
    const updateProfile = async () => {
        eden.user[user_uuid].profile.post({
            uuid: user_uuid, password,
            email: email
        }).then((res) => {
            setShowStatus('Пароль успешно изменен');

        })
    }
    const [showError,setShowError]=useState(false)

    return (
        <main className={'lg:p-12 p-2 h-full'}>
            <div className={'flex w-full h-full items-start justify-center'}>
                <div className={'flex flex-col mt-20 items-start gap-6'}>
                    <p className={'uppercase font-inter font-extralight text-3xl'}>Смена пароля</p>
                    <div className={'flex gap-2 flex-col'}>
                        <p>Новый пароль</p>
                        <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type={'password'} placeholder={''}
                               className={'p-4 transition-all duration-300 placeholder:font-extralight lg:w-96 border-black border-[1px] cursor-pointer flex items-center rounded-full gap-2'}/>
                    </div>
                    <div className={'flex gap-2 flex-col'}>
                        <p>Подтвердите пароль</p>
                        {showError?<p className={'text-rose-500'}>Ошибка: пароли не совпадают</p>:null}
                        <input value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} type={'password'} placeholder={''}
                               className={'p-4 transition-all duration-300 placeholder:font-extralight lg:w-96 border-black border-[1px] cursor-pointer flex items-center rounded-full gap-2'}/>
                    </div>
                    <div onClick={()=>{
                        if(password==confirmPassword&&showStatus=='Изменить') {
                            setShowError(false);
                            updateProfile();
                            router.push('/account/my/profile')
                        }
                        else {
                            setShowError(true)
                        }
                    }}
                        className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 flex justify-center items-center rounded-lg gap-2'}>
                        <p className={'text-white font-inter font-normal'}>{showStatus}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

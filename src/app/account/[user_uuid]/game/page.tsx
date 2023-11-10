"use client"
import React from "react";
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
import Link from "next/link";
import {eden, useEden} from "@/helpers/sdk";


// import required modules


export default function Home() {



    const images = '/pages/account'

    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        lastName,
        firstName,
        middleName,
        phoneNumber,
        email,
        city,
        gender,
        specialty,
        birthDate,
        photoUrl, education, about, interests, career, position, uuid, awards,joinAlice
    } = data?.profile ?? {} as any;

    const updateProfile = async () => {
        eden.user[uuid].profile.post({uuid: uuid, email, joinAlice:true}).then((res) => {
            console.log(res)
            window.location.reload();
        })

    }

    console.log(data);

    return (
        <main className={'p-2 lg:p-12 h-full'}>
            <div className={'flex w-full h-full items-start justify-center'}>
                <div className={'flex w-full lg:flex-row flex-col lg:w-2/3 mt-20 items-center gap-4'}>
                    <div className={'flex gap-5 lg:w-2/3 flex-col'}>
                        <p className={'uppercase  font-inter font-extralight text-3xl'}>Оставьте заявку <br/><span
                            className={'font-extrabold'}>для доступа к игре</span></p>
                        <p>Регистрируйтесь, что бы первыми получить доступ к нашей игре</p>
                        {joinAlice?<div
                            className={'p-4 lg:px-12 cursor-pointer transition-all duration-300 border-green border-2 w-auto flex justify-center items-center rounded-lg gap-2'}>
                            <p className={'text-green font-inter font-normal'}>Вы уже оставили заявку, мы сообщим как игра будет готова</p>
                        </div>:<div onClick={async ()=>{
                            updateProfile();
                        }}
                            className={'p-4 lg:px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 lg:w-60 flex justify-center items-center rounded-lg gap-2'}>
                            <p className={'text-white font-inter font-normal'}>Оставить заявку</p>
                        </div>}
                    </div>
                </div>
            </div>
        </main>
    )
}

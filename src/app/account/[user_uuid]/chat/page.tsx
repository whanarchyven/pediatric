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


// import required modules


export default function Home() {



    const images = '/pages/account'

    return (
        <main className={'p-12 h-full'}>
            <div className={'flex w-full h-full items-start justify-center'}>
                <div className={'flex w-2/3 mt-20 items-center gap-4'}>
                    <div className={'flex gap-5 w-2/3 flex-col'}>
                        <p className={'uppercase  font-inter font-extralight text-3xl'}>Приглашаем вас <br/><span
                            className={'font-extrabold'}>в общий чат</span></p>
                        <p>Чтобы принять приглашение в чат, сканируйте QR-код или перейдите по ссылке ниже</p>
                        <Link href={'https://t.me/pediatric_dermatology_ru'}
                            className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 w-60 flex justify-center items-center rounded-lg gap-2'}>
                            <p className={'text-white font-inter font-normal'}>Перейти в чат</p>
                        </Link>
                    </div>
                    <div className={''}>
                        <img src={`${images}/big_qr.png`}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

"use client"
import React, {useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {usePathname, useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";
import QRCode from "react-qr-code";

import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import PublicationTab from "@/components/Publication Tab";
import {eden, useEden} from "@/helpers/sdk";
import EducationPop from "@/components/EducationPop";
import ShowEducationPop from "@/components/ShowEducationPop";
import NewCareerPop from "@/components/NewCareerPop";
import DragNDrop from "@/components/DragNDrop";
import {classList} from "@/helpers/classList";
import {uploadFile} from "@/helpers/uploadFile";
import DatePicker from "react-datepicker";
import Link from "next/link";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {
    const images = '/pages/account'
    const user_uuid = params.params.user_uuid

    const pathname=usePathname()

    // @ts-ignore
    const {data} = useEden(() => pathname.split('/')[2]!='my'?eden.user[user_uuid].card.get():eden.user[user_uuid].profile.get())



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
        photoUrl, education, about, interests, career, position,uuid
    } = data?.profile ?? {} as any;

    console.log(data);

    const [currentEducationShow, setCurrentEducationShow] = useState<typeof education[0]>()
    const [currentEducationShowCounter, setCurrentEducationShowCounter] = useState(1)
    const [educationShowOpen, setEducationShowOpen] = useState(false);


    const publicationsData = useEden(() => eden.user[uuid].publication.list["own-published"].get())

    const {publications}=publicationsData?.data?? {} as any

    return (
        <main className={'p-2 lg:p-12'}>

            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Визитная <br/><span
                    className={'font-extrabold'}>Карточка</span></p>
            </div>
            <div className={'w-full mt-10 grid lg:grid-cols-2'}>
                <div className={'flex w-full flex-col lg:pr-8 gap-16 lg:border-r-[1px] border-green'}>
                    <div className={'flex lg:flex-row flex-col gap-8 items-start'}>
                        <div className={'lg:w-1/4 w-1/2'}>
                            {photoUrl ? <img className={'rounded-full aspect-square object-cover w-full'}
                                             src={photoUrl}/> :
                                <img className={'rounded-full aspect-square object-cover w-full'}
                                     src={`/john_doe.svg`}/>}
                        </div>
                        <div className={'flex w-full flex-col gap-3'}>
                            <p className={'text-green text-2xl font-bold'}>{lastName} {firstName} {middleName}</p>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/phone.svg`}/>
                                <p className={'font-normal'}>{phoneNumber ? phoneNumber : 'Не указано'}</p>
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/email.svg`}/>
                                <p className={'font-normal'}>{email ? email : 'Не указано'}</p>
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/location.svg`}/>
                                <p className={'font-normal'}>{city ? city : 'Не указано'}</p>
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <p className={'font-bold text-lg'}>Пол:</p>
                                <p className={'font-normal text-lg'}>{gender ? gender : 'Не указано'}</p>

                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <p className={'font-bold text-lg'}>Дата рождения:</p>
                                <p className={'font-normal text-lg'}>{birthDate ? birthDate : 'Не указана'}</p>

                            </div>

                            <div className={'flex items-center  gap-3'}>
                                <div
                                    className={'border-2 border-green rounded-full font-light px-5 text-green text-sm p-2 flex items-center justify-center'}>
                                    {specialty}
                                </div>
                                {/*<div*/}
                                {/*    className={'border-2 border-green rounded-full font-light px-5 text-green text-sm p-2 flex items-center justify-center'}>*/}
                                {/*    Стаж 21 год*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    {/*<div className={'flex flex-col gap-2'}>*/}
                    {/*    <div className={'flex mb-6 gap-7 items-center'}>*/}
                    {/*        <p className={'uppercase font-inter font-extralight text-3xl'}>Образование</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'w-4/5 flex flex-col gap-2'}>*/}
                    {/*        {education?.map((item: typeof education[0], counter: number) => {*/}
                    {/*            return (*/}
                    {/*                <div key={counter} className={'w-full grid grid-cols-2 gap-3'}>*/}
                    {/*                    <p className={'font-bold'}>{counter + 1} образование</p>*/}
                    {/*                    <div className={'flex items-start gap-3'}>*/}
                    {/*                        <p>{item.faculty} факультет {item.university}</p>*/}
                    {/*                        <img onClick={() => {*/}
                    {/*                            setCurrentEducationShow(item)*/}
                    {/*                            setCurrentEducationShowCounter(counter + 1)*/}
                    {/*                            setEducationShowOpen(true)*/}
                    {/*                        }} className={'w-5 cursor-pointer aspect-square'} src={'/info.svg'}/>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*        /!*<p className={' font-bold'}>Ученая степень:</p>*!/*/}
                    {/*        /!*<p className={''}>Доктор наук</p>*!/*/}
                    {/*        /!*<p className={' font-bold'}>Ученое звание:</p>*!/*/}
                    {/*        /!*<p className={''}>Профессор</p>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'flex flex-col'}>*/}
                    {/*    <div className={'flex mb-6 items-center gap-7'}>*/}
                    {/*        <p className={'uppercase font-inter font-extralight text-3xl'}>Карьера</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'grid gap-4 mb-6 w-4/5 grid-cols-2'}>*/}
                    {/*        <p className={' font-bold'}>Текущая должность</p>*/}
                    {/*        <p className={''}>{position}</p>                        </div>*/}
                    {/*    <div className={'relative flex flex-col gap-7'}>*/}
                    {/*        <div className={'h-full absolute left-1.5 w-[1px] bg-green'}>*/}

                    {/*        </div>*/}
                    {/*        {career?.map((item:{*/}
                    {/*            placeName: string;*/}
                    {/*            start: string;*/}
                    {/*            end: string;*/}
                    {/*            post: string;*/}
                    {/*            description: string;*/}
                    {/*        })=>{*/}
                    {/*            return(*/}
                    {/*                <div className={'flex items-start gap-5'}>*/}
                    {/*                    <div className={'w-3 aspect-square rounded-full bg-green'}>*/}

                    {/*                    </div>*/}
                    {/*                    <div className={'flex flex-col gap-4'}>*/}
                    {/*                        <p className={'font-bold text-green leading-[80%]'}>{item.start} - {item.end}</p>*/}
                    {/*                        <p className={'font-normal text-black leading-[80%]'}>Место работы: {item.placeName}</p>*/}
                    {/*                        <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: {item.post}</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            )*/}
                    {/*        })}*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={'flex flex-col gap-6'}>
                        <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>О себе и интересы</p>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>Профессиональные интересы:</p>
                            <p className={'text-black'}>{interests ? interests : 'Не указано'}</p>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>О себе:</p>
                            <p className={'text-black'}>{about ? about : 'Не указано'}</p>
                        </div>
                    </div>
                    {pathname.split('/')[2]=='my'?<div className={'flex lg:flex-row flex-col items-center gap-12'}>
                        <div className={'aspect-square lg:w-1/3'}>
                            <QRCode className={'w-full h-full'}
                                    value={`https://www.pediatric-dermatology.ru/account/${uuid}/card/`}></QRCode>
                        </div>
                        <div className={'flex lg:items-start items-center flex-col gap-4'}>
                            <p className={'font-bold text-2xl'}>QR-код</p>
                            <p className={'lg:text-left text-center'}>Чтобы увидеть вашу визитную карточку достаточно отсканировать этот QR-код</p>
                            <div className={'flex items-center gap-4'}>
                                <Link href={`https://www.pediatric-dermatology.ru/account/${uuid}/card/`} className={'flex items-center justify-center font-bold text-white rounded-lg bg-green p-2 px-10'}>
                                    Открыть
                                </Link>
                            </div>
                        </div>

                    </div>:null}

                </div>
                <div className={'flex lg:px-8 max-w-screen lg:mt-0 mt-6 flex-col gap-10'}>
                    <p className={'font-bold text-xl text-black'}>Награды</p>
                    <div className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                        <p className={'opacity-50'}>Награды не найдены</p>
                    </div>
                    {/*<div className={'grid grid-cols-4 mt-4 gap-8'}>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <div className={'flex flex-col gap-10 mt-8'}>
                        <div className={' flex justify-between'}>
                            <p className={'font-bold text-xl text-black'}>Научные работы</p>

                        </div>
                        {publications && publications.length > 0 ? <div className={'flex gap-12 flex-col'}>
                            {publications.map((publication:typeof publications[0])=>{
                                return(
                                    <PublicationTab user_uuid={user_uuid} {...publication} key={publication.title}></PublicationTab>
                                )
                            })}
                        </div> : <div
                            className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                            <p className={'opacity-50'}>Публикации не найдены</p>
                        </div>}
                    </div>
                </div>
            </div>
        </main>
    )
}

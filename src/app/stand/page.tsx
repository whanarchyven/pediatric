"use client"
import React, {useEffect, useRef, useState} from 'react';
import {classList} from "@/helpers/classList";
import {useRouter} from "next/navigation";

const Page = () => {

    const row1 = [
        {
            name: 'LIPIKAR GEL LAVANT ДЛЯ ДУША 0+',
            duration: 16,
            description: 'Успокаивающий гель для душа с защитными свойствами для чувствительной кожи младенцев, детей и взрослых',
            video: 'LIPIKAR GEL LAVANT.webm',
            image: '1'
        },
        {
            name: 'LIPIKAR LAIT',
            duration: 13,
            description: 'Молочко для сухой и очень сухой кожи младенцев, детей и взрослых 0+',
            video: 'LIPIKAR LAIT.webm',
            image: '2'
        },
        {
            name: 'LIPIKAR SYNDET AP+',
            duration: 13,
            description: 'Липидовосстанавливающий очищающий крем-гель для лица и тела младенцев, детей и взрослых 0+ ',
            video: 'LIPIKAR SYNDET APplus.webm',
            image: '3'
        },
        {
            name: 'LIPIKAR OIL AP+',
            duration: 17,
            description: 'Липидовосполняющее смягчающее масло для ванны и душа для детей и взрослых 0+',
            video: 'LIPIKAR OIL APplus.webm',
            image: '4'
        },
        {
            name: 'LIPIKAR BAUME AP+M ',
            duration: 16,
            description: 'Липидовосполняющий бальзам тройного действия для лица и тела младенцев, детей и взрослых 0+',
            video: 'LIPIKAR BAUME AP+M.webm',
            image: '5'
        },
        {
            name: 'LIPIKAR LAIT UREA 10% ',
            duration: 16,
            description: 'Увлажняющее молочко для тела тройного действия  для сухой и очень сухой кожи детей, взрослых и пожилых людей 3+',
            video: 'LIPIKAR LAIT UREA.webm',
            image: '6'
        }
    ]

    const row2 = [
        {
            name: 'ANTHELIOS DERMO-PEDIATRICS ',
            duration: 18,
            description: 'СОЛНЦЕЗАЩИТНОЕ МОЛОЧКО ДЛЯ МЛАДЕНЦЕВ И ДЕТЕЙ SPF 50+/PPD 39 6м+',
            video: 'ANTHELIOS DERMO-PEDIATRICS.webm',
            image: '7'
        },
        {
            name: 'ANTHELIOS DERMO-PEDIATRICS',
            duration: 17,
            description: 'ДЕТСКИЙ СОЛНЦЕЗАЩИТНЫЙ ГЕЛЬ С ТЕХНОЛОГИЕЙ НАНЕСЕНИЯ НА ВЛАЖНУЮ КОЖУ ДЛЯ ЛИЦА И ТЕЛА SPF 50+ 3+',
            video: 'NTHELIOS_DERMO_PEDIATRICS.webm',
            image: '8'
        },
        {
            name: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS',
            duration: 17,
            description: 'СОЛНЦЕЗАЩИТНОЕ ДЕТСКОЕ УВЛАЖНЯЮЩЕЕ МОЛОЧКО ДЛЯ ЛИЦА И ТЕЛА SPF 50+ / PPD 26 3+',
            video: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS.webm',
            image: '9'
        },
        {
            name: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS',
            duration: 21,
            description: 'СОЛНЦЕЗАЩИТНЫЙ ДЕТСКИЙ СПРЕЙ ДЛЯ ЛИЦА И ТЕЛА SPF 50+ / PPD 27 3+',
            video: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS СОЛНЦЕЗАЩИТ.webm',
            image: '10'
        }
    ]


    const row3 = [
        {
            name: 'CICAPLAST LIPS',
            duration: 14,
            description: 'Восстанавливающий бальзам-барьер для губ для детей и взрослых 3+',
            video: 'CICAPLAST LIPS.webm',
            image: '11'
        },
        {
            name: 'CICAPLAST B5+',
            duration: 17,
            description: 'ВОССТАНАВЛИВАЮЩИЙ БАЛЬЗАМ 0+',
            video: 'CICAPLAST B5+.webm',
            image: '12'
        },
        {
            name: 'CICAPLAST B5 СПРЕЙ',
            duration: 14,
            description: 'Мультивосстанавливающий спрей для младенцев, детей и взрослых 0+',
            video: 'CICAPLAST B5 СПРЕЙ.webm',
            image: '13'
        },
        {
            name: 'EFFACLAR',
            duration: 13,
            description: 'ОЧИЩАЮЩИЙ ПЕНЯЩИЙСЯ ГЕЛЬ 14+',
            video: 'EFFACLAR.webm',
            image: '14'
        },
        {
            name: 'EFFACLAR DUO+M',
            duration: 22,
            description: 'Тройной корректирующий крем-гель для проблемной кожи 10+',
            video: 'EFFACLAR DUO+M.webm',
            image: '15'
        }
    ]

    const [currentDrug, setCurrentDrug] = useState({
            name: 'Особенности дерматологических проблем у детей: диагностика и лечение',
            duration: 22,
            description: 'В данной статье рассматриваются основные аспекты дерматологических проблем, с которыми сталкиваются дети. Обсуждаются методы диагностики и лечения таких распространенных заболеваний кожи, как...',
            video: 'hello.webm',
            image: '-'
        }
    )

    const handler = (item: typeof currentDrug) => {
        setCurrentDrug(item)
        setPageLoaded(true)
        // setIsVideoPlaying(true)
        // setTimeout(()=>{
        //     setIsVideoPlaying(false)
        // },item.duration*1000)
    }

    const videoRef = useRef<HTMLVideoElement>(null)

    const [pageLoaded, setPageLoaded] = useState(false)

    const [isVideoPlaying, setIsVideoPlaying] = useState(true)


    const handleTimeUpdate = (endTime) => {
        if (videoRef.current && videoRef.current.currentTime >= endTime) {
            videoRef.current.currentTime = endTime;
            videoRef.current.pause();
        }
    };

    const router = useRouter()

//https://dermatologicalbeauty.loreal.com.ru/
    return (
        <div
            className={'xl:h-screen p-5 pt-20 pb-0 xl:p-20 flex flex-col items-center bg-cover bg-[url("/stand_bg.png")]'}>
            <div className={'h-full w-full items-center grid grid-cols-1 xl:grid-cols-2  gap-4'}>
                <div className={'flex w-full xl:w-2/3 flex-col gap-3 xl:gap-8'}>
                    <p className={'xl:text-3xl text-xl font-inter font-extrabold text-white'}>{currentDrug.name}</p>
                    <p className={'xl:text-xl font-inter font-normal text-white'}>{currentDrug.description}</p>
                    <div onClick={() => {
                        if (!pageLoaded) {
                            setPageLoaded(true);
                            videoRef?.current?.play()
                        }
                        else{
                            window.open('https://dermatologicalbeauty.loreal.com.ru/','_blank')
                        }
                    }}
                        className={'bg-white cursor-pointer font-bold rounded-xl flex items-center justify-center p-4 xl:text-xl text-black'}>{currentDrug.image=='-'?'Начать !':'Купить'}</div>
                        </div>
                        <div className={'relative w-full aspect-square flex items-center justify-center'}>
                        <img src={'/wardrobe.png'} className={'w-full absolute'}/>
                        <div className={'w-[70%] -ml-8 xl:-ml-0 top-4 xl:top-8 2xl:top-12 absolute'}>
                            <div className={'flex  gap-5 justify-start items-end'}>
                                {row1.map((drug, counter) => {
                                    return (
                                        <img key={counter} onClick={() => {
                                            handler(drug)
                                        }} style={{width: `${100 / row1.length / 1.3}%`}}
                                             className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                             src={`/drugs/${drug.image}.png`}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={'w-[70%] -mt-6 xl:-mt-12 2xl:-mt-16 absolute'}>
                            <div className={'flex  gap-5 justify-start items-end'}>
                                {row2.map((drug, counter) => {
                                    return (
                                        <img key={counter} onClick={() => {
                                            handler(drug)
                                        }} style={{width: `${100 / row1.length / 1.4}%`}}
                                             className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                             src={`/drugs/${drug.image}.png`}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={'w-[70%] bottom-12 xl:bottom-24 2xl:bottom-36 absolute'}>
                            <div className={'flex  gap-5 justify-start items-end'}>
                                {row3.map((drug, counter) => {
                                    return (
                                        <img key={counter} onClick={() => {
                                            handler(drug)
                                        }} style={{width: `${100 / row1.length / 1.6}%`}}
                                             className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                             src={`/drugs/${drug.image}.png`}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {isVideoPlaying ? <video ref={videoRef}
                                         src={`/videos/${currentDrug.video}`}
                                         controls={false}
                                         autoPlay={true} onTimeUpdate={() => {
                    handleTimeUpdate(currentDrug.duration)
                }}
                                         className="w-60 2xl:w-96 xl:absolute right-0 bottom-0"
                                         style={{backgroundColor: 'transparent'}}
                > Ваш браузер не поддерживает видео тег.
                </video> : <img className={'w-72 2xl:w-96 xl:absolute right-0 bottom-0'} src={'/alena_ai.png'}/>}
            </div>
            );
            };

export default Page;
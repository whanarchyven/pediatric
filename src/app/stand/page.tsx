"use client"
import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {classList} from "@/helpers/classList";
import {useRouter} from "next/navigation";
import useSound from "use-sound";
import StandLoadingBar from "@/components/StandLoadingBar";

const Page = () => {

    const [play1, {stop: stop1}] = useSound(`/audio/croped/LIPIKAR GEL LAVANT.mp3`);
    const [play2, {stop: stop2}] = useSound(`/audio/croped/LIPIKAR LAIT.mp3`);
    const [play3, {stop: stop3}] = useSound(`/audio/croped/LIPIKAR SYNDET APplus.mp3`);
    const [play4, {stop: stop4}] = useSound(`/audio/croped/LIPIKAR OIL APplus.mp3`);
    const [play5, {stop: stop5}] = useSound(`/audio/croped/LIPIKAR BAUME APM.mp3`);
    const [play6, {stop: stop6}] = useSound(`/audio/croped/LIPIKAR LAIT UREA.mp3`);
    const [play7, {stop: stop7}] = useSound(`/audio/croped/ANTHELIOS DERMO-PEDIATRICS.mp3`);
    const [play8, {stop: stop8}] = useSound(`/audio/croped/NTHELIOS_DERMO_PEDIATRICS.mp3`);
    const [play9, {stop: stop9}] = useSound(`/audio/croped/ANTHELIOS UVMUNE400 DERMO-PEDIATRICS.mp3`);
    const [play10, {stop: stop10}] = useSound(`/audio/croped/ANTHELIOS UVMUNE400 DERMO-PEDIATRICS СОЛНЦЕЗАЩИТ.mp3`);
    const [play11, {stop: stop11}] = useSound(`/audio/croped/CICAPLAST LIPS.mp3`);
    const [play12, {stop: stop12}] = useSound(`/audio/croped/CICAPLAST B5.mp3`);
    const [play13, {stop: stop13}] = useSound(`/audio/croped/CICAPLAST_B5_SPRAY.mp3`);
    const [play14, {stop: stop14}] = useSound(`/audio/croped/EFFACLAR.mp3`);
    const [play15, {stop: stop15}] = useSound(`/audio/croped/EFFACLAR DUOM.mp3`);
    const [play16, {stop: stop16}] = useSound(`/audio/croped/hello.mp3`);


    // LIPIKAR GEL LAVANT.webm
    // LIPIKAR LAIT.webm
    // LIPIKAR SYNDET APplus.webm
    // LIPIKAR OIL APplus.webm
    // LIPIKAR BAUME AP+M.webm
    // LIPIKAR LAIT UREA.webm
    // ANTHELIOS DERMO-PEDIATRICS.webm
    // NTHELIOS_DERMO_PEDIATRICS.webm
    // ANTHELIOS UVMUNE400 DERMO-PEDIATRICS.webm
    // ANTHELIOS UVMUNE400 DERMO-PEDIATRICS СОЛНЦЕЗАЩИТ.webm
    // CICAPLAST LIPS.webm
    // CICAPLAST B5+.webm
    // CICAPLAST B5 СПРЕЙ.webm
    // EFFACLAR.webm
    // EFFACLAR DUO+M.webm
    // hello.webm

    const row1 = [
        {
            name: 'LIPIKAR GEL LAVANT ДЛЯ ДУША 0+',
            duration: 25,
            description: 'Успокаивающий гель для душа с защитными свойствами для чувствительной кожи младенцев, детей и взрослых',
            video: 'LIPIKAR GEL LAVANT.webm',
            audio: play1,
            image: '1'
        },
        {
            name: 'LIPIKAR LAIT',
            duration: 19,
            description: 'Молочко для сухой и очень сухой кожи младенцев, детей и взрослых 0+',
            video: 'LIPIKAR LAIT.webm',
            audio: play2,
            image: '2'
        },
        {
            name: 'LIPIKAR SYNDET AP+',
            duration: 21,
            description: 'Липидовосстанавливающий очищающий крем-гель для лица и тела младенцев, детей и взрослых 0+ ',
            video: 'LIPIKAR SYNDET APplus.webm',
            audio: play3,
            image: '3'
        },
        {
            name: 'LIPIKAR OIL AP+',
            duration: 24,
            description: 'Липидовосполняющее смягчающее масло для ванны и душа для детей и взрослых 0+',
            video: 'LIPIKAR OIL APplus.webm',
            audio: play4,
            image: '4'
        },
        {
            name: 'LIPIKAR BAUME AP+M ',
            duration: 30,
            description: 'Липидовосполняющий бальзам тройного действия для лица и тела младенцев, детей и взрослых 0+',
            video: 'LIPIKAR BAUME AP+M.webm',
            audio: play5,
            image: '5'
        },
        {
            name: 'LIPIKAR LAIT UREA 10% ',
            duration: 24,
            description: 'Увлажняющее молочко для тела тройного действия  для сухой и очень сухой кожи детей, взрослых и пожилых людей 3+',
            video: 'LIPIKAR LAIT UREA.webm',
            audio: play6,
            image: '6'
        }
    ]

    const row2 = [
        {
            name: 'ANTHELIOS DERMO-PEDIATRICS ',
            duration: 18,
            description: 'Солнцезащитное молочко для младенцев и детей SPF 50+/PPD 39 6м+',
            video: 'ANTHELIOS DERMO-PEDIATRICS.webm',
            audio: play7,
            image: '7'
        },
        {
            name: 'ANTHELIOS DERMO-PEDIATRICS',
            duration: 26,
            description: 'Детский солнцезащитный гель с технологией нанесения на влажную кожу для лица и тела SPF 50+ 3+',
            video: 'NTHELIOS_DERMO_PEDIATRICS.webm',
            audio: play8,
            image: '8'
        },
        {
            name: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS',
            duration: 26,
            description: 'Солнцезащитное детское увлажняющее молочко для лица и тела SPF 50+ / PPD 26 3+',
            video: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS.webm',
            audio: play9,
            image: '9'
        },
        {
            name: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS',
            duration: 27,
            description: 'Солнцезащитный детский спрей для лица и тела SPF 50+ / PPD 27 3+',
            video: 'ANTHELIOS UVMUNE400 DERMO-PEDIATRICS СОЛНЦЕЗАЩИТ.webm',
            audio: play10,
            image: '10'
        }
    ]


    const row3 = [
        {
            name: 'CICAPLAST LIPS',
            duration: 19,
            description: 'Восстанавливающий бальзам-барьер для губ для детей и взрослых 3+',
            video: 'CICAPLAST LIPS.webm',
            audio: play11,
            image: '11'
        },
        {
            name: 'CICAPLAST B5+',
            duration: 18,
            description: 'Восстанавливающий бальзам 0+',
            video: 'CICAPLAST B5+.webm',
            audio: play12,
            image: '12'
        },
        {
            name: 'CICAPLAST B5 СПРЕЙ',
            duration: 18,
            description: 'Мультивосстанавливающий спрей для младенцев, детей и взрослых 0+',
            video: 'CICAPLAST B5 СПРЕЙ.webm',
            audio: play13,
            image: '13'
        },
        {
            name: 'EFFACLAR',
            duration: 13,
            description: 'Очищающий пенящийся гель 14+',
            video: 'EFFACLAR.webm',
            audio: play14,
            image: '14'
        },
        {
            name: 'EFFACLAR DUO+M',
            duration: 27,
            description: 'Тройной корректирующий крем-гель для проблемной кожи 10+',
            video: 'EFFACLAR DUO+M.webm',
            audio: play15,
            image: '15'
        }
    ]

    const [currentDrug, setCurrentDrug] = useState({
            name: '',
            duration: 19,
            description: 'Интерактивный стенд по изучению наружной терапии для пациентов страдающих кожными заболеваниями в детской дерматологии',
            video: 'hello.webm',
            audio: play16,
            image: '-'
        }
    )


    const stopAll = () => {
        stop1();
        stop2();
        stop3();
        stop4();
        stop5();
        stop6();
        stop7();
        stop8();
        stop9();
        stop10();
        stop11();
        stop12();
        stop13();
        stop14();
        stop15();
        stop16();
    }

    const timeoutRef = useRef<number | null>(null);

    const handler = (item: typeof currentDrug) => {
        setCurrentDrug(item)
        setPageLoaded(true)
        stopAll()
        item.audio()
        setIsVideoPlaying(true)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            setIsVideoPlaying(false);
        }, item.duration * 1000);
    }

    const videoRef = useRef<HTMLVideoElement>(null)

    const [pageLoaded, setPageLoaded] = useState(false)

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)


    const [isGifLoaded, setIsGifLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/asset_ai-min.gif';
        img.onload = () => {
            setIsGifLoaded(true);
        };
    }, []);

    const router = useRouter()

//https://dermatologicalbeauty.loreal.com.ru/

    if (isGifLoaded) {
        return (
            <div
                className={'xl:h-screen p-5 pt-32 pb-0 xl:p-20 flex flex-col items-center bg-cover bg-[url("/stand_bg.png")]'}>
                <div className={'h-full w-full items-center grid grid-cols-1 xl:grid-cols-2  gap-4'}>
                    <div className={'flex w-full xl:w-2/3 flex-col gap-3 xl:gap-8'}>
                        <p className={'xl:text-3xl text-xl font-inter font-extrabold text-white'}>{currentDrug.name}</p>
                        <p className={'xl:text-xl font-inter font-normal  text-white'}>{currentDrug.description}</p>
                        <div onClick={() => {
                            if (!pageLoaded&&currentDrug.video=='hello.webm') {
                                setPageLoaded(true);
                                setIsVideoPlaying(true)
                                play16()
                            } else if(currentDrug.video!='hello.webm') {
                                window.open('https://dermatologicalbeauty.loreal.com.ru/', '_blank')
                            }
                        }}
                             className={'bg-white cursor-pointer font-bold rounded-xl flex items-center justify-center p-4 xl:text-xl text-black'}>{currentDrug.image == '-' ? 'Начать !' : 'Купить'}</div>
                    </div>
                    <div className={'w-full flex items-center justify-center'}>
                        <div
                            className={'relative w-[340px] md:w-[800px] xl:w-[600px] 2xl:w-[900px] aspect-square flex items-center justify-center'}>
                            <img src={'/wardrobe.png'} className={'w-full absolute'}/>
                            <div
                                className={'w-[70%] -ml-8 xl:-ml-[0px] top-[24px] md:top-[55px] xl:top-[40px] 2xl:top-[60px] absolute'}>
                                <div className={'flex  gap-5 justify-start items-end'}>
                                    {row1.map((drug, counter) => {
                                        return (
                                            <img key={counter} onClick={() => {
                                                handler(drug)
                                            }}
                                                 style={{width: `${100 / row1.length / 1.5}%`}}
                                                 className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                                 src={`/drugs/${drug.image}.png`}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={'w-[70%] -mt-[12px] md:-mt-[35px] xl:-mt-[25px] 2xl:-mt-[35px] absolute'}>
                                <div className={'flex  gap-5 justify-start items-end'}>
                                    {row2.map((drug, counter) => {
                                        return (
                                            <img key={counter} onClick={() => {
                                                handler(drug)
                                            }}
                                                 style={{width: `${100 / row1.length / 1.4}%`}}
                                                 className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                                 src={`/drugs/${drug.image}.png`}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={'w-[70%] bottom-[55px] md:bottom-[130px] xl:bottom-[95px] 2xl:bottom-[140px] absolute'}>
                                <div className={'flex  gap-5 justify-start items-end'}>
                                    {row3.map((drug, counter) => {
                                        return (
                                            <img key={counter} onClick={() => {
                                                handler(drug)
                                            }}
                                                 style={{width: `${100 / row1.length / 1.6}%`}}
                                                 className={classList('cursor-pointer', currentDrug.name == drug.name ? 'drop-shadow-[0_0px_35px_rgba(255,212,39,1)]' : '')}
                                                 src={`/drugs/${drug.image}.png`}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isVideoPlaying ? <img
                        className={'w-72  2xl:w-[300px] mt-10 xl:mt-0 relative xl:absolute right-0 bottom-0'}
                        src={'/asset_ai-min.gif'}/> :
                    <img
                        className={'w-72 2xl:w-[300px] mt-10 xl:mt-0 relative  xl:absolute right-0 bottom-0'}
                        src={'/default_asset.gif'}/>}
            </div>
        );
    } else {
        return (
            <StandLoadingBar/>
        )
    }
};

export default Page;
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


// import required modules
import {
    Mousewheel,
    EffectCoverflow,
    Pagination,
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip
} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";
import {classList} from "@/helpers/classList";
import SpeakersSlider from "@/components/SpeakersSlider";
import News from "@/components/News";
import Partners from "@/components/Partners";
import PopUp from "@/components/PopUp";
import compareDates from "@/helpers/compareDates";
import ConfirmForm from "@/components/ConfirmForm";
import BackButton from "@/components/BackButton";
import {eden} from "@/helpers/sdk";
import QRCode from "react-qr-code";

export const dynamic = "force-dynamic"

export default function Page({params}: any) {

    const router = useRouter()
    const images = '/pages/events'

    //temp data


    const id = params?.id
    const [event, setEvent] = useState<{
        id?: string | undefined;
        description?: string | undefined;
        link?: string | undefined;
        dateEnd?: Date | undefined;
        onlinePrice?: number | undefined;
        offlinePrice?: number | undefined;
        prices?: {
            date: string;
            online: number;
            offline: number;
        }[] | undefined;
        isOnlyOnline?: boolean | undefined;
        isPassed?: boolean | undefined;
        isStream?: boolean | undefined;
        type: string;
        date: string;
        format: string;
        name: string;
        dateStart: Date;
        timePeriod: string;
        place: string;
        participants: number;
        layoutBg: string;
        avatar: string;
        announcement: string;
        speakers: {
            post: string;
            description: string;
            name: string;
            contact: string;
            photo: string;
        }[];
        halls: {
            name: string;
            program: Array<{
                timePeriod?: string | undefined;
                sponsor?: string | undefined;
                speaker?: string | undefined;
                substages?: {
                    description?: string | undefined;
                    sponsor?: string | undefined;
                    name: string;
                    timePeriod: string;
                }[] | undefined;
                name: string;
            }>;
        }[];
    }>()

    const fetchEvent = async () => {
        await eden.event.byId[id].get().then((res: any) => {
            console.log('aaaaaa', {...res.data.events})
            setEvent({...res.data.events})
        })

    }
    useEffect(() => {
        fetchEvent()
    }, [])


    const [isPopPriceOpen, setIsPopPriceOpen] = useState(false);
    const [isConfirmPopOpen, setIsConfirmPopOpen] = useState(false)

    const [currentPrice, setCurrentPrice] = useState(0);
    const [participationType, setParticipationType] = useState<'online' | 'offline' | 'online-free'>('online');

    const query = useSearchParams().toString();

    const [currentProgram, setCurrentProgram] = useState<{
        name: string, program: Array<{
            timePeriod?: string | undefined;
            sponsor?: string | undefined;
            speaker?: string | undefined;
            substages?: {
                description?: string | undefined;
                sponsor?: string | undefined;
                name: string;
                timePeriod: string;
            }[] | undefined;
            name: string;
        }>
    }>();


    const [needPrice, setNeedPrice] = useState<any>({})

    useEffect(() => {
        let nowDate = new Date();
        nowDate.setHours(0, 0, 0, 0)
        let tempPrice = event?.prices ? event?.prices[0] : null
        event?.prices?.map((price, counter) => {
            let lexems = price.date.split('.')
            if (new Date(`${lexems[1]}/${lexems[0]}/${lexems[2]}`) < nowDate && event?.prices && counter + 1 < event?.prices?.length) {
                tempPrice = event?.prices[counter + 1]
            }
        })

        setNeedPrice(tempPrice)

    }, [event]);


    const [registration, setRegistration] = useState<any>()

    const [ticketLink, setTicketLink] = useState('/')


    const [uuid, setUuid] = useState('')

    useEffect(() => {
        eden.user.my.profile.get().then((res) => {
            console.log(res?.data?.profile?.uuid)
            res?.data?.profile?.uuid&&setUuid(res?.data?.profile?.uuid)
            if (res?.data?.profile?.uuid&&event?.id) {
                eden.user.my.participation[event.id].get().then((res) => {
                    console.log(res.data)
                    if (res.data?.info) setRegistration(res?.data)
                    event?.id&&eden.user.my.participation[event.id].getTicketLink.get().then((res) => {
                        if(res.data){
                            setTicketLink(res.data.ticketLink)
                        }
                    }).catch(console.log);
                }).catch(console.log)  
            }
        }).catch(e=>console.log(e))
    }, [event]);


    const [qrCodeUrl, setQrCodeUrl] = useState()

    useEffect(() => {
        setCurrentProgram(event?.halls[0])
    }, [event]);

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div
                className="lg:min-h-screen overflow-hidden py-20 lg:py-8 bg-cover relative">
                <div className={'w-full h-full absolute left-0 top-0 z-[-2]'}>
                    <img className={'w-full h-full object-cover'} src={event?.layoutBg}/>
                </div>
                <div className={'w-full h-full absolute green-gradient opacity-50 left-0 top-0 z-[-1]'}>

                </div>
                <motion.div
                    className={'w-full lg:min-h-screen h-auto px-[20px] lg:px-[140px] grid grid-cols-1 lg:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 lg:mt-0 sm:mt-20 flex flex-col gap-6 sm:items-start lg:justify-center'}>
                        <BackButton></BackButton>
                        <div className={'flex gap-4 items-center'}>
                            <div
                                className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                {event?.type}
                            </div>
                        </div>
                        <div className={'flex items-center gap-7'}>
                            <p className={'text-white leading-[100%] opacity-50'}>{event?.date}</p>
                            <div className={'h-full w-[2px] bg-white opacity-50'}>

                            </div>
                            <p className={'text-white leading-[100%] opacity-50'}>{event?.timePeriod}</p>
                        </div>
                        <p className={'text-white text-2xl sm:text-3xl'}>{event?.name}</p>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}><strong>Место проведения:</strong> {event?.place}
                                </p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}><strong>Формат: </strong> {event?.format}</p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}>
                                    <strong>Зарегистрировались</strong> {event?.participants} участников</p>
                            </div>
                        </div>
                        <Link href={event?.link ? event?.link : '#form'}>
                            <div
                                className={'bg-white text-lg flex items-center justify-center p-3 px-5 rounded-md cursor-pointer hover:opacity-100 transition-all duration-300 opacity-50 text-black'}>
                                Подтвердить участие
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-0.5px] sm:bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>
            <div
                className={'bg-white items-center py-12 px-[20px] grid-cols-1 lg:px-[140px] gap-20 grid lg:grid-cols-2'}>
                <img className={'w-full aspect-square col-span-1 object-cover rounded-xl'} src={event?.avatar}/>
                <div className={'flex flex-col gap-6 items-start'}>
                    <p className={'uppercase font-extralight text-3xl sm:text-5xl text-black'}>Информация
                        <br/><span className={'font-extrabold'}>о мероприятии</span></p>
                    <p className={'font-bold uppercase text-green xl:text-3xl text-xl'}>
                        Анонс
                    </p>
                    <p className={'font-normal xl:text-lg text-black'}>
                        {event?.announcement}
                    </p>
                    {event?.description ? <p className={'font-bold uppercase text-green xl:text-3xl text-xl'}>
                        Описание
                    </p> : null}
                    {event?.description ? <p className={'font-normal xl:text-lg text-black'}>
                        {event?.description}
                    </p> : null}
                </div>
            </div>
            {/*{event?.speakers?<div*/}
            {/*    className={'relative green-gradient overflow-hidden px-[20px] pt-12 sm:h-[900px] flex flex-col items-start sm:pl-[70px] sm:px-[140px]'}>*/}
            {/*    <img className={'absolute asset w-full z-50 left-0 top-[-0.5px] sm:top-0'} src={'/about_us_offset_top.png'}/>*/}
            {/*    <p className={'text-xl sm:text-5xl sm:px-0 px-[20px] sm:absolute sm:top-[140px] sm:left-[195px] uppercase font-extralight text-white'}>Спикеры <span*/}
            {/*        className={'font-extrabold'}>Конференции</span></p>*/}
            {/*    <SpeakersSlider speakers={event?.speakers}></SpeakersSlider>*/}
            {/*    <img className={'absolute w-full asset left-0 z-50 bottom-[-0.5px]'} src={'/about_us_offset_bot.png'}/>*/}
            {/*</div>:null}*/}

            {currentProgram ? <div className={'bg-white py-12 px-[20px] lg:px-[140px]'}>
                <p className={'uppercase font-extralight text-2xl lg:text-5xl text-black'}>Программа
                    <br/><span className={'font-extrabold'}>Конференции</span></p>

                <div className={'flex mt-20 items-center gap-16'}>
                    {event?.halls.map((hall, counter) => {
                        return (
                            <div key={counter} onClick={() => {
                                setCurrentProgram(hall)
                            }}
                                 className={classList('flex cursor-pointer items-center text-2xl font-bold justify-center', currentProgram.name == hall.name ? 'border-b-2 border-green-two text-green-two' : 'text-black')}>
                                {hall.name}
                            </div>
                        )
                    })
                    }
                </div>
                <div className={'flex mt-20 flex-col gap-14'}>
                    {currentProgram.program.map((item, counter) => {
                        return (
                            <div key={counter} className={'flex gap-8 flex-col'}>
                                <div
                                    className={'flex lg:grid lg:grid-cols-12 gap-2 lg:gap-6 flex-col lg:flex-row items-start'}>
                                    {item.timePeriod ? <div className={'col-span-2 mr-4 flex items-center gap-2'}>
                                        <img className={'w-4 lg:w-6 aspect-square'} src={`${images}/time.svg`}/>
                                        <div
                                            className={'text-lg lg:text-2xl text-green-two whitespace-nowrap contents font-bold'}>{item.timePeriod}</div>
                                    </div> : null}
                                    <div
                                        className={'text-lg col-span-10 lg:text-2xl whitespace-pre-wrap lg:text-justify font-bold'}>{item.name}</div>
                                </div>
                                {item.speaker ? <div
                                    className={'bg-[#DBEAE8] text-lg p-3 lg:px-14 lg:p-6 lg:text-xl rounded-lg flex items-center justify-start'}>
                                    {item?.sponsor ?
                                        <p>{item.speaker}<span
                                            className={'font-bold'}><br/>При поддержке компании {item.sponsor}</span>
                                        </p> : item.speaker}
                                </div> : null}
                                {item.substages ?
                                    <div className={'p-3 lg:p-8'}>
                                        {item.substages.map((substage, subCounter) => {
                                            if (item.substages) {
                                                return (
                                                    <div key={subCounter} className={'grid grid-cols-12 items-start'}>
                                                        <div
                                                            className={'col-span-1 flex relative items-center h-full flex-col justify-center'}>
                                                            <div
                                                                className={'lg:w-6 w-4 lg:h-6 h-4 absolute top-0 aspect-square rounded-full bg-green-two'}>

                                                            </div>
                                                            <div className={'h-full w-[2px] bg-green-two'}>

                                                            </div>
                                                        </div>
                                                        <div
                                                            className={classList('col-span-11 flex lg:gap-0 gap-3 h-fit flex-col', subCounter < item?.substages?.length - 1 ? 'pb-6 lg:pb-14' : '')}>
                                                            <p className={'lg:text-2xl text-lg w-full text-green-two contents font-bold'}>{substage?.timePeriod}</p>
                                                            <p className={'lg:text-2xl text-lg w-full text-black font-medium'}>{substage?.name}</p>
                                                            {substage?.description ? <div
                                                                className={'bg-[#DBEAE8] p-3 text-lg lg:px-14 lg:p-6 lg:text-xl rounded-lg flex items-center justify-start'}>
                                                                {substage?.sponsor ?
                                                                    <p>{substage.description}<span
                                                                        className={'font-bold'}><br/>При поддержке компании {substage.sponsor}</span>
                                                                    </p> : substage.description}
                                                            </div> : null}
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })
                                        }
                                    </div>

                                    : null}
                            </div>
                        )
                    })}
                </div>
            </div> : null}

            {/*<div className={'bg-[#F2F9F8] relative py-12 lg:py-40 flex items-center px-[20px]'}>*/}
            {/*    <img className={'absolute left-0 -top-1'} src={`/pages/main/about_us_offset.png`}*/}
            {/*         alt={'asset_bottom'}></img>*/}
            {/*    <div className={'w-full'}>*/}
            {/*        <div*/}
            {/*            className={'flex sm:flex-col flex-col gap-8 items-center justify-center sm:items-start sm:justify-between'}>*/}
            {/*            <motion.p initial={{x: -40, opacity: 0}}*/}
            {/*                      whileInView={{x: 0, opacity: 1}}*/}
            {/*                      viewport={{once: true}}*/}
            {/*                      transition={{ease: 'easeInOut', duration: 0.7}}*/}
            {/*                      className={'uppercase sm:pl-[140px] font-extralight text-black sm:text-left text-left text-2xl sm:text-4xl'}>Спонсоры <strong*/}
            {/*                className={'font-extrabold'}>конференции</strong></motion.p>*/}
            {/*            <div className={'sm:px-[40px] w-full '}>*/}
            {/*                <Partners></Partners>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <img className={'absolute left-0 bottom-0'} src={`/pages/main/about_us_offset_bottom.png`}*/}
            {/*         alt={'asset_bottom'}></img>*/}
            {/*</div>*/}
            {!event?.isOnlyOnline ?
                <div className={'bg-white relative lg:py-0 py-12 px-[20px] lg:px-[140px] '}>
                    <div id={'form'} className={'absolute -top-40'}></div>
                    <div
                        className={'flex lg:mt-7 items-center px-[20px] lg:px-[140px] justify-center lg:justify-center'}>
                        {registration ? <motion.p initial={{y: -40, opacity: 0}}
                                                           whileInView={{y: 0, opacity: 1}}
                                                           viewport={{once: true}}
                                                           transition={{ease: 'easeInOut', duration: 0.7}}
                                                           className={'uppercase font-extralight text-black lg:text-left text-center lg:text-2xl lg:text-4xl'}>Ваш
                                приобретённый <strong
                                    className={'font-extrabold'}>Пакет Участия</strong></motion.p> :
                            <motion.p initial={{y: -40, opacity: 0}}
                                      whileInView={{y: 0, opacity: 1}}
                                      viewport={{once: true}}
                                      transition={{ease: 'easeInOut', duration: 0.7}}
                                      className={'uppercase font-extralight text-black lg:text-left text-left text-2xl lg:text-4xl'}>Стоимость <strong
                                className={'font-extrabold'}>Участия</strong></motion.p>}
                    </div>
                    {registration?
                        <div className={'grid grid-cols-1 lg:grid-cols-2 mt-10 lg:my-32 gap-10 lg:gap-32 items-start'}>
                            <div className={'flex flex-col gap-4'}>
                                <p className={'lg:text-2xl uppercase font-black'}>Формат: <span
                                    className={'font-light'}>{registration?.info?.participationType}</span></p>
                                <p className={'lg:text-2xl uppercase font-black'}>Дата и время: <span
                                    className={'font-light'}>{event?.date} в {event?.timePeriod}</span></p>
                                <p className={'lg:text-2xl uppercase font-black'}>Место: <span
                                    className={'font-light'}>{event?.place}</span></p>
                                <p className={'lg:text-2xl uppercase font-light'}>Свой билет вы можете скачать по ссылке
                                    ниже:</p>
                                <Link href={ticketLink}
                                      className={'flex text-white lg:w-96 font-bold items-center justify-center p-3 bg-green-two rounded-lg'}>
                                    Скачать билет на телефон
                                </Link>
                            </div>
                            <div className={'flex items-start lg:items-center justify-end'}>
                                <img className={'w-full lg:w-2/5'} src={registration?.qrCodeUrl}/>
                            </div>
                        </div> : null}
                    <div
                        className={classList('grid grid-cols-1 gap-9 mt-10', event?.prices ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}>
                        {event?.prices ? <div className={'flex flex-col items-center gap-8'}>
                            <div
                                className={'rounded-xl w-full h-96 flex flex-col gap-4 justify-around items-center p-4 bg-green-two'}>
                                <div className={'flex items-center gap-3'}>
                                    <img className={'w-7 aspect-square'} src={'/online.svg'}/>
                                    <p className={'font-extralight text-3xl text-white'}>Онлайн</p>
                                </div>
                                <p className={'text-3xl lg:text-5xl text-white font-bold'}>БЕСПЛАТНО</p>
                                <p className={'font-extralight text-xl text-center text-white'}>Доступ к
                                    онлайн-трансляции в день мероприятия</p>
                            </div>
                            <div onClick={() => {
                                setIsConfirmPopOpen(true);
                                setCurrentPrice(0);
                                setParticipationType('online-free')
                            }}
                                 className={'w-full lg:w-auto p-4 bg-green-two text-white cursor-pointer text-lg font-light rounded-xl flex items-center justify-center'}>
                                Подтвердить участие
                            </div>
                        </div> : null}
                        <div className={'flex flex-col items-center gap-8'}>
                            <div
                                className={'rounded-xl w-full h-96 flex flex-col gap-4 justify-around items-center p-4 bg-green-two'}>
                                <div className={'flex items-center gap-3'}>
                                    <img className={'w-7 aspect-square'} src={'/online.svg'}/>
                                    <p className={'font-extralight text-3xl text-white'}>Онлайн</p>
                                </div>
                                <p className={'text-3xl lg:text-5xl text-white font-bold'}>{event?.onlinePrice ? needPrice?.online + ' руб.' : 'БЕСПЛАТНО'}</p>
                                <p className={'font-extralight text-xl text-center text-white'}>Доступ к
                                    онлайн-трансляции мероприятия <span
                                        className={'font-extrabold'}>{event?.onlinePrice ? '+ запись трансляции' : ''}</span>
                                </p>
                            </div>
                            <div onClick={() => {
                                setIsConfirmPopOpen(true);
                                if (event?.onlinePrice) {
                                    setCurrentPrice(needPrice?.online);
                                }
                                setParticipationType('online')
                            }}
                                 className={'w-full lg:w-auto p-4 bg-green-two text-white cursor-pointer text-lg font-light rounded-xl flex items-center justify-center'}>
                                Подтвердить участие
                            </div>
                        </div>
                        <div className={'flex flex-col items-center gap-8'}>
                            <div
                                className={'rounded-xl w-full h-96 flex flex-col gap-4 justify-around items-center p-4 border-green-two border-4'}>
                                <div className={'flex items-center gap-3'}>
                                    <img className={'w-7 aspect-square'} src={'/offline.svg'}/>
                                    <p className={'font-extralight text-3xl text-green-two'}>Оффлайн</p>
                                </div>

                                <p className={'text-3xl lg:text-5xl text-green-two font-bold'}>{event?.offlinePrice ? needPrice?.offline + ' руб.' : 'БЕСПЛАТНО'}</p>
                                {event?.prices ?
                                    <p className={'font-extralight text-xl text-center text-green-two'}>Цена действует
                                        до <br/>
                                        {needPrice?.date}</p> : null}
                                {event?.prices ? <p onClick={() => {
                                        setIsPopPriceOpen(true)
                                    }} className={'font-bold cursor-pointer text-xl text-green-two'}>Смотреть график
                                        цен</p> :
                                    <p className={'font-extralight text-xl text-center text-green-two'}>Очное посещение
                                        мероприятия, активное участие</p>}
                            </div>
                            <div onClick={() => {
                                setIsConfirmPopOpen(true);
                                if (event?.offlinePrice) {
                                    setCurrentPrice(needPrice?.offline);
                                }
                                setParticipationType('offline')
                            }}
                                 className={'w-full lg:w-auto p-4 bg-green-two text-white cursor-pointer text-lg font-light rounded-xl flex items-center justify-center'}>
                                Подтвердить участие
                            </div>
                        </div>
                    </div>
                    {isConfirmPopOpen && event?.name && event?.id ? <PopUp icon={'/confirm.svg'} closeFunc={() => {
                        {
                            setIsConfirmPopOpen(false)
                        }
                    }}>
                        <ConfirmForm layotBg={event.layoutBg} query={query} participationType={participationType} closeFunc={() => {
                            setIsConfirmPopOpen(false)
                        }} price={currentPrice} event_id={event?.id} event_name={event?.name}></ConfirmForm>
                    </PopUp> : null}

                    {isPopPriceOpen ? <PopUp icon={'/price.svg'} closeFunc={() => {
                        {
                            setIsPopPriceOpen(false)
                        }
                    }}>
                        <div className={'flex gap-4 h-full flex-col'}>
                            <p className={'text-[#0F5F5A] text-2xl lg:text-4xl font-light'}>ГРАФИК <br/> <span
                                className={'font-extrabold'}>СТОИМОСТИ</span></p>
                            <div className={'grid p-2 w-full grid-cols-2'}>
                                <div className={'text-[#0F5F5A] font-light flex items-center '}>
                                    Дата
                                </div>
                                <div className={'text-[#0F5F5A] gap-2 font-light flex items-center '}>
                                    <p className={'text-[#0F5F5A] font-light'}>Стоимость</p>
                                </div>
                            </div>
                            {event?.prices?.map((item: any, counter: any) => {
                                return (
                                    <div key={counter}
                                         className={'grid p-2 bg-[#7AB8AD] bg-opacity-10 rounded-lg w-full grid-cols-2'}>
                                        <div className={'text-[#0F5F5A] font-light flex items-center '}>
                                            до {item.date}
                                        </div>
                                        <div className={'text-[#0F5F5A] gap-2 font-light flex items-center '}>
                                            <p className={'text-[#0F5F5A] font-light'}>{item.offline} рублей</p>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className={'w-full grid grid-cols-2 gap-3'}>
                                <div onClick={() => {
                                    setIsPopPriceOpen(false)
                                }}
                                     className={'p-4 cursor-pointer bg-green-two text-white text-sm font-light rounded-xl flex items-center justify-center'}>Вернуться
                                    к мероприятию
                                </div>
                            </div>
                        </div>
                    </PopUp> : null}
                </div> : null}


            {event?.isStream && event?.date == '07.10.2023' ?
                <div className={'bg-white relative lg:py-0 py-12 px-[20px] lg:px-[140px] '}>
                    <div id={'form'} className={'absolute -top-40'}></div>
                    <div
                        className={'flex lg:mt-7 items-center px-[20px] lg:px-[140px] justify-center lg:justify-center'}>
                        <motion.p initial={{y: -40, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'uppercase font-extralight text-black lg:text-left text-center text-left text-2xl lg:text-4xl'}>Онлайн-трансляция <strong
                            className={'font-extrabold'}>мероприятия</strong></motion.p>
                    </div>

                    <div className={'lg:flex items-center hidden my-12 justify-center'}>
                        <iframe width="1280" height="720"
                                src="https://www.youtube.com/embed/n6v4RRVKa6I?si=Da8QRwG5Gr2Y8FnL&controls=0"
                                title="II НПК «Путь детской дерматологии: от истоков к перспективам"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <div className={'lg:hidden items-center flex my-12 justify-center'}>
                        <iframe width="100%" height="400"
                                src="https://www.youtube.com/embed/n6v4RRVKa6I?si=Da8QRwG5Gr2Y8FnL&controls=0"
                                title="II НПК «Путь детской дерматологии: от истоков к перспективам"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>

                    <div
                        className={classList('grid grid-cols-1 gap-9 mt-10', event?.prices ? 'lg:flex lg:justify-center' : 'lg:grid-cols-2')}>
                        {event?.prices ? <div className={'flex flex-col items-center gap-8'}>
                            <div
                                className={'rounded-xl w-full h-96 flex flex-col gap-4 justify-around items-center p-4 bg-green-two'}>
                                <div className={'flex items-center gap-3'}>
                                    <img className={'w-7 aspect-square'} src={'/online.svg'}/>
                                    <p className={'font-extralight text-3xl text-white'}>Онлайн</p>
                                </div>
                                <p className={'text-3xl lg:text-5xl text-white font-bold'}>БЕСПЛАТНО</p>
                                <p className={'font-extralight text-xl text-center text-white'}>Доступ к
                                    онлайн-трансляции в
                                    день мероприятия</p>
                            </div>
                            <div onClick={() => {
                                setIsConfirmPopOpen(true);
                                setCurrentPrice(0);
                                setParticipationType('online-free')
                            }}
                                 className={'w-full lg:w-auto p-4 bg-green-two text-white cursor-pointer text-lg font-light rounded-xl flex items-center justify-center'}>
                                Подтвердить участие
                            </div>
                        </div> : null}
                    </div>

                    {isConfirmPopOpen && event.id ? <PopUp icon={'/confirm.svg'} closeFunc={() => {
                        {
                            setIsConfirmPopOpen(false)
                        }
                    }}>
                        <ConfirmForm layotBg={event.layoutBg} query={query} participationType={participationType} closeFunc={() => {
                            setIsConfirmPopOpen(false)
                        }} price={currentPrice} event_id={event?.id} event_name={event?.name}></ConfirmForm>
                    </PopUp> : null}

                    {isPopPriceOpen ? <PopUp icon={'/price.svg'} closeFunc={() => {
                        {
                            setIsPopPriceOpen(false)
                        }
                    }}>
                        <div className={'flex gap-4 h-full flex-col'}>
                            <p className={'text-[#0F5F5A] text-2xl lg:text-4xl font-light'}>ГРАФИК <br/> <span
                                className={'font-extrabold'}>СТОИМОСТИ</span></p>
                            <div className={'grid p-2 w-full grid-cols-2'}>
                                <div className={'text-[#0F5F5A] font-light flex items-center '}>
                                    Дата
                                </div>
                                <div className={'text-[#0F5F5A] gap-2 font-light flex items-center '}>
                                    <p className={'text-[#0F5F5A] font-light'}>Стоимость</p>
                                </div>
                            </div>
                            {event?.prices?.map((item: any, counter: any) => {
                                return (
                                    <div key={counter}
                                         className={'grid p-2 bg-[#7AB8AD] bg-opacity-10 rounded-lg w-full grid-cols-2'}>
                                        <div className={'text-[#0F5F5A] font-light flex items-center '}>
                                            до {item.date}
                                        </div>
                                        <div className={'text-[#0F5F5A] gap-2 font-light flex items-center '}>
                                            <p className={'text-[#0F5F5A] font-light'}>{item.offline} рублей</p>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className={'w-full grid grid-cols-2 gap-3'}>
                                <div onClick={() => {
                                    setIsPopPriceOpen(false)
                                }}
                                     className={'p-4 cursor-pointer bg-green-two text-white text-sm font-light rounded-xl flex items-center justify-center'}>Вернуться
                                    к мероприятию
                                </div>
                            </div>
                        </div>
                    </PopUp> : null}
                </div> : null}

            <div className={'my-12 flex flex-col'}>
                {event?.date == '11.11.2023' ?
                    <Link className={' text-dark-green underline mb-12 text-xl font-bold px-[20px] lg:px-[140px]'}
                          target={'_blank'}
                          href={'/kpfile.pdf'}>Коммерческое предложение</Link> : null}
                {event?.date == '11.11.2023' ?
                    <div className={'flex flex-col gap-2'}>
                        <p className={'whitespace-pre-wrap mt-2 px-[20px] text-dark-green  lg:px-[140px] font-bold'}>Участие
                            в мероприятии</p>
                        <p className={'whitespace-pre-wrap mt-2 px-[20px] lg:px-[140px] text-black'}>
                            1) Для участия в мероприятии (онлайн-трансляция) необходимо зарегистрироваться на сайте <a
                            className={'font-bold text-green-two'}
                            href={'https://pediatric-dermatology.ru'}>https://pediatric-dermatology.ru</a> (https://pediatric-dermatology.ru/),
                            указав следующие данные: <br/>1. ФИО, <br/>2.Электронный адрес <br/>3. Место работы, <br/>4.
                            Должность, <br/>5. Специальность, <br/>6. Номер телефона. <br/>Учет участников
                            осуществляется с помощью индивидуальной регистрации на интернет-сессию и контроля
                            подключения по IP адресу. Контроль присутствия будет обеспечивать интерактивные опросы через
                            разные временные интервалы. Вход на трансляцию осуществляется не ранее, чем за 2 часа до её
                            начала. При завершении трансляции, сеанс у всех присутствующих прекращается. Инструментами
                            обратной связи являются `&quot;`Чат трансляции`&quot;`. Участниками мероприятия будут
                            признаны слушатели, присутствующие 11 ноября 2023 года (1 день) - не менее 270 минут для
                            программы НМО на трансляции и подтвердившие 5 контролей присутствия из шести. Участникам
                            выполнившим все требования в мероприятии, выдаются индивидуальные коды.
                            <br/><br/>
                            2) Для участия в мероприятии (очное присутствие) необходимо обязательно предварительно
                            зарегистрироваться на сайте <a className={'font-bold text-green-two'}
                                                           href={'https://pediatric-dermatology.ru'}>https://pediatric-dermatology.ru</a>,
                            (https://pediatric-dermatology.ru/) указав следующие данные: <br/>1. ФИО, <br/>2.Электронный
                            адрес <br/>3. Место работы, <br/>4. Должность, <br/>5. Специальность, <br/>6. Номер
                            телефона. <br/>Перед началом мероприятия, все заранее зарегистрированные лица получат бейджи
                            с последующим контролем присутствия до окончания мероприятия. Участниками мероприятия будут
                            признаны слушатели, присутствующие 11 ноября 2023 года (1 день) по адресу город Москва,
                            кластер `&quot;`Ломоносов`&quot;` (ИНТЦ МГУ Воробьёвы горы, Раменский бульвар, 1) с 10:00 -
                            18:30. Участникам выполнившим все требования в мероприятии, выдаются индивидуальные коды
                        </p>
                    </div> : null}

            </div>

            <div className={'bg-white lg:py-0 py-12 lg:h-[600px]'}>
                <div className={'flex lg:mt-7 items-center px-[20px] lg:px-[140px] justify-center lg:justify-between'}>
                    <motion.p initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}
                              className={'uppercase font-extralight text-black lg:text-left text-left text-2xl lg:text-4xl'}>Другие <strong
                        className={'font-extrabold'}>Мероприятия</strong></motion.p>
                </div>
                <motion.div className={'mt-12 w-full flex px-[20px] lg:px-[40px]'}
                            initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <News></News>
                </motion.div>
            </div>
        </main>
    )
}

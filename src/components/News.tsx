import React, {useCallback, useEffect, useRef, useState} from 'react';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import required modules
import {Pagination, Navigation} from "swiper";
import Post from "@/components/Post";
import it from "node:test";
import Link from "next/link";
import {eden} from "@/helpers/sdk";

interface newsInterface {
    currentId?:string
}

const News = ({currentId}:newsInterface) => {


    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [news,setNews]=useState<Array<{
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
    }>>([])

    const fetchEvent = async () => {
        const event: any = await eden.event.list.get().then((res: any) => {
            let temp=[...res.data.events];
            setNews([...news,...temp])
        })

    }
    useEffect(() => {
        fetchEvent()
    }, [])

    return (
        <div className={'flex w-full items-center'}>
            <div
                className={'cursor-pointer mr-[50px] hidden sm:flex items-center p-[15px] justify-center w-[70px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handlePrev}>
                <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
            </div>
            {news&&(<Swiper ref={sliderRef}
                            loop={true}
                            navigation={true}
                            modules={[ Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10
                                },
                                640:{
                                    slidesPerView:1,
                                    spaceBetween:70
                                },
                                1280:{
                                    slidesPerView:3,
                                    spaceBetween:70
                                },
                            }}
            >
                {news.map((item,counter)=>{
                    if(item.id!=currentId){
                        return (
                            <SwiperSlide className={'relative group'} key={counter}>
                                <Link href={`/events/${item.id}`}>
                                    <div className={'gap-4 flex cursor-pointer flex-col'}>
                                        <div className={'rounded-lg overflow-hidden'}>
                                            <img className={'transition-all duration-300 h-60 object-cover w-full group-hover:scale-125'} src={item.layoutBg}/>
                                        </div>
                                        <div className={'w-full flex items-center justify-between'}>
                                            <div className={'flex rounded-lg text-white p-2 w-[65%] items-center justify-center border-2 border-green-two bg-green-two'}>
                                                {item.type}
                                            </div>
                                            <div className={'flex rounded-lg text-green-two p-2 w-[30%] items-center justify-center border-2 border-green-two'}>
                                                {item.date}
                                            </div>
                                        </div>
                                        <p className={'text-center font-normal text-black'}>{item.name}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>


                        )
                    }
                })}
            </Swiper>)}
            <div
                className={'cursor-pointer ml-[50px] relative hidden sm:flex items-center p-[15px] justify-center w-[70px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
        </div>
    );
};

export default News;
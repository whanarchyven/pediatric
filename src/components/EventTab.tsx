"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {eden} from "@/helpers/sdk";

interface eventTabInterface {
    isSaved?: boolean
    user_uuid?:string;
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
}
const EventTab = ({isSaved, avatar, format, dateEnd, date, dateStart, user_uuid, halls, id, description, type, layoutBg, announcement, isPassed, link, name, place, isStream, speakers, participants, offlinePrice, prices, onlinePrice, isOnlyOnline, timePeriod}:eventTabInterface) => {
    const [saved,setSaved]=useState(isSaved == true)

    useEffect(() => {
        setSaved(isSaved??false)
    }, [isSaved]);
    const saveContent=async ()=>{
        if(user_uuid){
            eden.user[user_uuid].profile["content-save"].post({title:type.concat(' - ',name),imageUrl:layoutBg,category:'event',href:`https://pediatric-dermatology.ru/events/${id}`}).then((res)=>{
                console.log(res)
                if (res?.data?.success){
                    setSaved(true)
                }
            })
        }
    }

    const undoSave=async ()=> {
        if (user_uuid) {
            eden.user[user_uuid].profile["content-save-undo"].post({href:`https://pediatric-dermatology.ru/events/${id}`}).then((res) => {
                console.log(res)
                if (res?.data?.success) {
                    setSaved(false)
                }
            })
        }
    }
    return (
        <div className={'relative'}>
            {user_uuid ? <div>{saved ? <div onClick={async ()=>{await undoSave()}}
                                            className={'w-5 z-50 bg-green rounded-full p-1 flex items-center justify-center cursor-pointer sm:w-8 aspect-square absolute right-5 top-5'}>
                <img src={'/save_green_filled.svg'}/></div> : <div onClick={async ()=>{await saveContent()}}
                                                             className={'w-5 z-50 bg-green rounded-full p-1 flex items-center justify-center cursor-pointer sm:w-8 aspect-square absolute right-5 top-5'}>
                <img src={'/save_green.svg'}/>
            </div>}
            </div> : null}

            <Link href={`/events/${id}`} className={'gap-4 flex cursor-pointer flex-col'}>
                <div className={'rounded-lg overflow-hidden'}>
                    <img
                        className={'transition-all duration-300 h-60 object-cover w-full group-hover:scale-125'}
                        src={layoutBg}/>
                </div>
                <div className={'w-full flex items-center justify-between'}>
                    <div
                        className={'flex rounded-lg text-white p-2 items-center justify-center border-2 border-green bg-green'}>
                        {type}
                    </div>
                    <div
                        className={'flex rounded-lg text-green p-2 whitespace-nowrap items-center justify-center border-2 border-green'}>
                        {date}
                    </div>
                </div>
                <p className={'text-center font-normal text-black'}>{name}</p>
            </Link>
        </div>
    );
};

export default EventTab;
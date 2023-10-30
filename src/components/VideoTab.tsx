"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {eden} from "@/helpers/sdk";
interface videoTabInterface {
    isAdmin?: string
    user_uuid?: string
    lessonName:string
    icon:string
    counter:number
    callback:()=>any
    href:string
    currentVideo:number,
    isSaved:boolean,
    theme:'red'|'green'
}
const VideoTab = ({currentVideo, href, icon, isAdmin, isSaved, callback, counter, lessonName, user_uuid, theme}:videoTabInterface) => {

    const [saved,setSaved]=useState(isSaved??false)

    const saveContent=async ()=>{
        if(user_uuid){
            eden.user[user_uuid].profile["content-save"].post({title:`Урок ${counter+1} - ${lessonName}`,imageUrl:icon,category:'video',href:href}).then((res)=>{
                console.log(res)
                if (res?.data?.success){
                    setSaved(true)
                }
            })
        }
    }

    const undoSave=async ()=>{
        if(user_uuid){
            eden.user[user_uuid].profile["content-save-undo"].post({href:href}).then((res)=>{
                console.log(res)
                if (res?.data?.success){
                    setSaved(false)
                }
            })
        }
    }

    return (
        <div className={'h-32 lg:h-60 relative'}>
            {user_uuid?<div className={'w-4 z-20 cursor-pointer lg:w-8 aspect-square absolute right-3 top-3'}>
                {saved ? <img onClick={()=>{undoSave()}}
                    className={'w-full h-full object-cover'}
                    src={'/save_filled.svg'}/> : <img onClick={()=>{saveContent()}}
                    className={'w-full h-full object-cover'}
                    src={'/save.svg'}/>}

            </div>:null}
            <div
                className={classList(theme=='green'?'bg-green':'bg-red','text-white lg:px-4 lg:py-10 transition-all w-full h-full duration-300 relative rounded-xl p-2', counter == currentVideo ? 'bg-opacity-100' : 'bg-opacity-50 cursor-pointer')}
                onClick={() => {
                    callback()
                }}><img className={'my-2 w-4 lg:w-12 aspect-square'} src={icon}/>
                <p className={'my-2 font-bold text-lg lg:text-2xl text-white'}>Урок {counter + 1}</p>
                <p className={'my-2 text-[0.5rem] sm:text-xs lg:text-xs'}>{lessonName}</p>
            </div>
        </div>
    );
};

export default VideoTab;
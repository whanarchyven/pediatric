"use client"
import React, {useState} from 'react';
import EditPostPop from "@/components/EditPostPop";
import {eden} from "@/helpers/sdk";

interface postTabInterface {
    saved?: {
        title: string,
        imageUrl: string,
        href: string,
        category: string
    }[]
    isAdmin?: string
    user_uuid?: string
    uuid: string,
    imageUrl: string,
    title: string,
    description: string,
    contentMd: string
    isSaved?: boolean
}

const PostTab = ({uuid, contentMd, imageUrl, description, title, isSaved, user_uuid, isAdmin}: postTabInterface) => {
    const [isPopVisible, setIsPopVisible] = useState(false)
    const [isEditPop, setIsEditPop] = useState(false)

    const [saved,setSaved]=useState(isSaved??false)

    const saveContent=async ()=>{
        if(user_uuid){
            eden.user[user_uuid].profile["content-save"].post({title:title,imageUrl:imageUrl,category:'post',href:`https://pediatric-dermatology.ru/posts?title=${title}`}).then((res)=>{
                console.log(res)
                if (res?.data?.success){
                    setSaved(true)
                }
            })
        }
    }

    const undoSave=async ()=>{
        if(user_uuid){
            eden.user[user_uuid].profile["content-save-undo"].post({href:`https://pediatric-dermatology.ru/posts?title=${title}`}).then((res)=>{
                console.log(res)
                if (res?.data?.success){
                    setSaved(false)
                }
            })
        }
    }

    return (
        <div className={'w-full flex gap-4 flex-col h-full relative items-center justify-center '}>
            {user_uuid ? <div>{saved ? <div onClick={async ()=>{await undoSave()}}
                                                          className={'w-5 z-20 bg-red rounded-full p-1 flex items-center justify-center cursor-pointer sm:w-8 aspect-square absolute right-7 top-7'}>
                <img src={'/save_filled.svg'}/></div> : <div onClick={async ()=>{await saveContent()}}
                className={'w-5 z-20 bg-red rounded-full p-1 flex items-center justify-center cursor-pointer sm:w-8 aspect-square absolute right-7 top-7'}>
                <img src={'/save.svg'}/>
            </div>}
            </div> : null}
            <img className={'cursor-pointer w-full h-96 object-cover rounded-lg'} src={imageUrl}/>
            <p className={'text-black w-full truncate text-sm sm:text-xl text-center font-bold'}>
                {title}
            </p>
            <p className={'text-black truncate w-full sm:text-lg text-xs text-center'}>
                {description}
            </p>
            <div onClick={() => {
                setIsPopVisible(true)
            }}
                 className={'hover:bg-red justify-self-end hover:text-white duration-300 transition-all cursor-pointer mt-2 w-full sm:w-3/4 border-red border-2 sm:p-4 p-1 sm:text-xs text-sm text-red flex items-center rounded-lg font-bold justify-center'}>
                Читать статью
            </div>
            {isAdmin ? <div onClick={() => {
                setIsEditPop(true)
            }}
                            className={'hover:bg-red justify-self-end hover:text-white duration-300 transition-all cursor-pointer mt-2 w-full sm:w-3/4 border-red border-2 sm:p-4 p-1 sm:text-xs text-sm text-red flex items-center rounded-lg font-bold justify-center'}>
                Редактировать
            </div> : null}
            {isPopVisible ? <div
                className={'fixed h-screen top-0 w-full left-0 bg-black z-[999] bg-opacity-50 flex items-center justify-center p-[10px] lg:px-[20px]'}>
                <img className={'w-9 right-5 top-5 aspect-square cursor-pointer hidden lg:flex absolute'}
                     src={'/close.svg'} onClick={() => {
                    setIsPopVisible(false)
                }}/>
                <img className={'w-6 right-2 top-4 aspect-square cursor-pointer flex lg:hidden absolute'}
                     src={'/close_black.svg'} onClick={() => {
                    setIsPopVisible(false)
                }}/>
                <div
                    className={'p-5 flex flex-col h-full lg:h-[600px] overflow-y-scroll gap-4 bg-white rounded-xl w-full lg:w-1/2'}>
                    <img className={'object-cover aspect-video w-full'} src={imageUrl}/>
                    <p className={'font-bold text-2xl'}>{title}</p>
                    <p className={'text-sm'}>{description}</p>
                    <text className={'postText flex flex-col gap-5'} dangerouslySetInnerHTML={{__html: contentMd}}>

                    </text>
                    <div onClick={() => {
                        setIsPopVisible(false)
                    }} className={'cursor-pointer flex items-center gap-3 text-2xl text-red font-bold'}><img
                        src={'/arrow_back.svg'}/> Назад
                    </div>
                </div>
            </div> : null}
            {isEditPop ? <EditPostPop description={description} title={title} contentMd={contentMd} imageUrl={imageUrl}
                                      uuid={uuid} closeFunc={() => {
                setIsEditPop(false)
            }}/> : null}
        </div>
    );
};

export default PostTab;
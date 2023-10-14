import React from 'react';
import Link from "next/link";
import {eden} from "@/helpers/sdk";


interface PublicationTabInterface {
    isRateHidden?: boolean
    isAuthorsHidden?: boolean
    authors: string[]
    category: string
    createdAt: string
    date: string
    fileUrl: string
    likedByUserUuids: string[]
    publishedByUserUuid: string
    savedByUserUuids: string[]
    title: string
    updatedAt: string
    uuid: string
    viewCount: number
    __v: string
    _id: string,
    user_uuid:string

}

const PublicationTab = ({isRateHidden, isAuthorsHidden, authors, _id, __v, updatedAt, date, fileUrl, likedByUserUuids, publishedByUserUuid, savedByUserUuids, uuid, createdAt, viewCount, category, title,user_uuid}: PublicationTabInterface) => {
    const images = '/pages/account'

    const dateTemp=date.split('-')


    return (
        <div className={'flex items-start gap-4'}>
            <div className={'flex lg:w-14 flex-col gap-2'}>
                <img className={'w-full'} src={`${images}/temp_file.svg`}/>
                <p className={'font-medium text-green-two text-center text-sm'}>PDF</p>
            </div>
            <div className={'flex flex-col w-full gap-3'}>
                <div className={'flex flex-wrap justify-between w-full'}>
                    <div className={'flex gap-3'}>
                        <p className={'text-black opacity-50 text-xs'}>{dateTemp[2].split('T')[0]}.{dateTemp[1]}.{dateTemp[0]}</p>
                        <div className={'h-full w-[1px] bg-black opacity-30'}>

                        </div>
                        <p className={'text-green-two text-xs'}>{category}</p>
                    </div>
                    {isRateHidden ? null : <div className={'flex gap-4 items-center'}>
                        <div className={'flex gap-2 items-center'}>
                            <img className={'w-4'} src={`${images}/views.svg`}/>
                            <p className={'text-green-two text-xs'}>{viewCount}</p>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <img className={'w-4'} src={`/like.svg`}/>
                            <p className={'text-green-two text-xs'}>{likedByUserUuids.length}</p>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <img className={'w-4'} src={`/favorite.svg`}/>
                            <p className={'text-green-two text-xs'}>{savedByUserUuids.length}</p>
                        </div>
                    </div>}
                </div>
                <p className={'text-sm text-black'}>{title}</p>
                {isAuthorsHidden ? null :
                    <p className={'text-sm opacity-50 text-black'}>Авторы: {authors.map((author,counter)=> {
                        return author+(counter==authors.length-1?`.`:`, `)
                    })}</p>}
                <div className={'flex w-full flex-wrap gap-4'}>
                    <div className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                        <a href={fileUrl} target={'_blank'} className={'text-white font-inter lg:text-xl text-xs font-normal whitespace-nowrap px-2 lg:px-8'}>Читать</a>
                    </div>
                    <div className={'p-2 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                        <Link href={fileUrl} target={'_blank'} download className={'text-green-two font-inter lg:text-xl text-xs font-normal whitespace-nowrap px-2 lg:px-8'}>Скачать PDF</Link>
                    </div>
                    <div onClick={async ()=>{
                        if(likedByUserUuids.includes(user_uuid)){
                            await eden.user[user_uuid].publication["undo-like"].post({uuid:uuid}).then((res)=>{
                                window.location.reload()
                                console.log(res)
                            })
                        }
                        else{
                            await eden.user[user_uuid].publication.like.post({uuid:uuid}).then((res)=>{
                                window.location.reload()
                                console.log(res)
                            })
                        }
                    }} className={'lg:w-12 w-6 cursor-pointer'}>
                        <img className={'w-full aspect-square'} src={likedByUserUuids.includes(user_uuid)?'/like.svg':'/like_outlined.svg'}/>
                    </div>
                    <div onClick={async ()=>{
                        if(savedByUserUuids.includes(user_uuid)){
                            await eden.user[user_uuid].publication["undo-save"].post({uuid:uuid}).then((res)=>{
                                window.location.reload()
                                console.log(res)
                            })
                        }
                        else{
                            await eden.user[user_uuid].publication.save.post({
                                uuid: uuid,
                                // date: date,
                                // title: title,
                                // category: category,
                                // fileUrl: fileUrl
                            }).then((res)=>{
                                window.location.reload()
                                console.log(res)
                            })
                        }
                    }} className={'lg:w-12 w-6 cursor-pointer'}>
                        <img className={'w-full aspect-square'} src={savedByUserUuids.includes(user_uuid)?'/favorite.svg':'/favorite_outlined.svg'}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PublicationTab;
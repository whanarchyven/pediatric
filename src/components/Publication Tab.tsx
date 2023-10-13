import React from 'react';
import Link from "next/link";


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
    _id: string

}

const PublicationTab = ({isRateHidden, isAuthorsHidden, authors, _id, __v, updatedAt, date, fileUrl, likedByUserUuids, publishedByUserUuid, savedByUserUuids, uuid, createdAt, viewCount, category, title}: PublicationTabInterface) => {
    const images = '/pages/account'

    const dateTemp=date.split('-')


    return (
        <div className={'flex items-start gap-4'}>
            <div className={'flex w-14 flex-col gap-2'}>
                <img className={'w-full'} src={`${images}/temp_file.svg`}/>
                <p className={'font-medium text-green-two text-center text-sm'}>PDF</p>
            </div>
            <div className={'flex flex-col w-full gap-3'}>
                <div className={'flex justify-between w-full'}>
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
                <div className={'flex w-full gap-4'}>
                    <div className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                        <a href={fileUrl} target={'_blank'} className={'text-white font-inter text-xl font-normal px-8'}>Читать</a>
                    </div>
                    <div className={'p-2 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                        <Link href={fileUrl} target={'_blank'} download className={'text-green-two font-inter text-xl font-normal px-8'}>Скачать PDF</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PublicationTab;
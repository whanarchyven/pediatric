"use client"
import React from 'react';
import {classList} from "@/helpers/classList";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { eden, useEden } from '@/helpers/sdk';

const Sidebar = ({user_uuid}:{user_uuid:string}) => {

    const links=[
        {
            name:'Мой профиль',
            icon:'/pages/account/sidebar/account.svg',
            link:'profile'
        },
        {
            name:'Визитная карточка',
            icon:'/pages/account/sidebar/card.svg',
            link:'card'
        },
        {
            name:'Сертификаты',
            icon:'/pages/account/sidebar/certificates.svg',
            link:'certificates'
        },
        {
            name:'Календарь событий',
            icon:'/pages/account/sidebar/calendar.svg',
            link:'calendar'
        },
        // {
        //     name:'Избранное',
        //     icon:'/pages/account/sidebar/favorites.svg',
        //     link:'favorites'
        // },
        // {
        //     name:'Статьи и публикации',
        //     icon:'/pages/account/sidebar/publications.svg',
        //     link:'publications'
        // },
        {
            name:'Приглашение в чат',
            icon:'/pages/account/sidebar/chat.svg',
            link:'chat'
        },
        {
            name:'Сменить пароль',
            icon:'/pages/account/sidebar/change_password.svg',
            link:'changepass'
        },
        {
            name:'Выйти',
            icon:'/pages/account/sidebar/logout.svg',
            link:'logout'
        },
    ]
    const pathname=usePathname()
    const {data} = useEden(()=>eden.user[user_uuid].profile.get())
    if (!data?.profile) return null
    const {lastName,firstName,position,photoUrl}=data.profile;

    
    return (
        <div className={'flex flex-col sticky top-40 items-start gap-4'}>
            {/* {JSON.stringify(data)} */}
            <Link href={'/account/my/profile'} className={'flex mb-12 gap-4'}>
                <img className={'rounded-full w-12 aspect-square object-cover'} src={photoUrl?photoUrl:'/john_doe.svg'}/>
                <div className={'flex flex-col h-12 justify-between'}>
                    <p className={'font-bold font-inter text-dark-green'}>{lastName} {firstName}</p>
                    <p className={'font-light text-sm font-inter text-dark-green'}>{position}</p>
                </div>
            </Link>
            {links.map((link,counter)=>{
                return <Link href={`/account/${user_uuid}/${link.link}`} className={classList('flex cursor-pointer items-center gap-3',pathname.split('/')[3]==link.link?'opacity-100':'opacity-30',counter==links.length-2?'mt-12':'')} key={link.link}>
                    <img className={'w-5 aspect-square'} src={link.icon}/>
                    <p className={'font-inter text-dark-green font-normal'}>{link.name}</p>
                </Link>
            })}
        </div>
    );
};

export default Sidebar;
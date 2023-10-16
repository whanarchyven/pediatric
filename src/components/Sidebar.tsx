"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { eden, useEden } from '@/helpers/sdk';

interface sideBarInterface {
    user_uuid:any,
    isCloseBurger?:()=>any
}

const Sidebar = ({user_uuid,isCloseBurger}:sideBarInterface) => {

    const links=[
        {
            name:'Мой профиль',
            icon:'/pages/account/sidebar/account.svg',
            iconWhite:'/pages/account/sidebar/white/account.svg',
            link:'profile'
        },
        {
            name:'Визитная карточка',
            icon:'/pages/account/sidebar/card.svg',
            iconWhite:'/pages/account/sidebar/white/card.svg',
            link:'card'
        },
        // {
        //     name:'Сертификаты',
        //     icon:'/pages/account/sidebar/certificates.svg',
        //     iconWhite:'/pages/account/sidebar/white/certificates.svg',
        //     link:'certificates'
        // },
        {
            name:'Календарь событий',
            icon:'/pages/account/sidebar/calendar.svg',
            iconWhite:'/pages/account/sidebar/white/calendar.svg',
            link:'calendar'
        },
        {
            name:'Мои мероприятия',
            icon:'/pages/account/sidebar/events.svg',
            iconWhite:'/pages/account/sidebar/white/events.svg',
            link:'events'
        },
        {
            name:'Избранное',
            icon:'/pages/account/sidebar/favorites.svg',
            link:'favorites'
        },
        {
            name:'Статьи и публикации',
            icon:'/pages/account/sidebar/publications.svg',
            iconWhite:'/pages/account/sidebar/white/publications.svg',
            link:'publications'
        },
        {
            name:'Приглашение в чат',
            icon:'/pages/account/sidebar/chat.svg',
            iconWhite:'/pages/account/sidebar/white/chat.svg',
            link:'chat'
        },
        {
            name:'Сменить пароль',
            icon:'/pages/account/sidebar/change_password.svg',
            iconWhite:'/pages/account/sidebar/white/change_password.svg',
            link:'changepass'
        },
        {
            name:'Выйти',
            icon:'/pages/account/sidebar/logout.svg',
            iconWhite:'/pages/account/sidebar/white/logout.svg',
            link:'logout'
        },
    ]
    const pathname=usePathname()
    const {data} = useEden(()=>eden.user[user_uuid].profile.get())

    if (!data?.profile) return null
    const {lastName,firstName,position,photoUrl}=data.profile;
    console.log(pathname.split('/'))





    return (
        <div className={'flex flex-col lg:sticky w-full lg:top-40 pt-12 items-start gap-4'}>
            {/* {JSON.stringify(data)} */}
            {pathname.split('/')[3]=='card'&&pathname.split('/')[2]!='my'?<Link onClick={()=>{isCloseBurger?isCloseBurger(): null}} href={'/account/my/profile'} className={'flex mb-12 gap-4'}>
                <img className={'rounded-full w-12 aspect-square object-cover'} src={'/john_doe.svg'}/>
                <div className={'flex flex-col h-12 justify-between'}>
                    <p className={'font-bold font-inter text-white lg:text-dark-green'}>Войти</p>
                    <p className={'font-light text-sm font-inter text-white lg:text-dark-green'}>В свой профиль</p>
                </div>
            </Link>:<Link onClick={()=>{isCloseBurger?isCloseBurger(): null}} href={'/account/my/profile'} className={'flex mb-12 gap-4'}>
                <img className={'rounded-full w-12 aspect-square object-cover'} src={photoUrl?photoUrl:'/john_doe.svg'}/>
                <div className={'flex flex-col h-12 justify-between'}>
                    <p className={'font-bold font-inter text-white lg:text-dark-green'}>{lastName} {firstName}</p>
                    <p className={'font-light text-sm font-inter text-white lg:text-dark-green'}>{position}</p>
                </div>
            </Link>}
            {links.map((link,counter)=>{
                if (pathname.split('/')[3]=='card'&&pathname.split('/')[2]!='my'){
                    return null
                }
                else{
                    return( <Link onClick={()=>{isCloseBurger?isCloseBurger(): null}} href={`/account/my/${link.link}`} className={classList('flex cursor-pointer items-center gap-3',pathname.split('/')[3]==link.link?'opacity-100':'opacity-30',counter==links.length-2?'mt-12':'')} key={link.link}>
                        <img className={'w-5 lg:flex hidden aspect-square'} src={link.icon}/>
                        <img className={'w-5 flex lg:hidden aspect-square'} src={link.iconWhite}/>
                        <p className={'font-inter text-white lg:text-dark-green font-normal'}>{link.name}</p>
                    </Link>)
                }
            })}
        </div>
    );
};

export default Sidebar;
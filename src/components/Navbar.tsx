"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {classList} from "@/helpers/classList";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import { eden, useEden } from '@/helpers/sdk';
import { Router } from 'next/router';
import Sidebar from "@/components/Sidebar";
import AdminSidebar from "@/components/AdminSidebar";

interface navbarInterface {
    isInteractive:boolean
}

const Navbar = ({isInteractive}:navbarInterface) => {

    const router=useRouter()
    const pathname=usePathname()
    const links=[
        {
            title:'Об обществе',
            link:'/administration',
        },
        {
            title:'Статьи',
            link:'/posts',
        },
        {
            title:'Мероприятия',
            link:'/events',
        },
        // {
        //     title:'Новости',
        //     link:'/news',
        // },
        {
            title:'Контакты',
            link:'/contacts',
        },
        {
            title:'Азбука атопии',
            link:'/azbuka',
        },
    ]

    const [scrolled,setScrolled]=useState(0)
    const {data} = useEden(e=>e.user.my.profile.get())
    const loggedIn = !!data?.profile
    

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            setScrolled(window.scrollY)
        });
    },[])

    const [burgerOpen,setBurgerOpen]=useState(false)

    return (
        <div className={classList('sm:px-[15px] lg:px-[70px] px-[20px] fixed z-[999]  top-0 left-0 py-1 sm:py-[35px] w-full grid sm:grid-cols-12 grid-cols-6 gap-4 items-center transition-all duration-300',scrolled>120||pathname.split('/')[1]=='account'||pathname.split('/')[1]=='events'||pathname.split('/')[1]=='news'||pathname.split('/')[1]=='administration'||pathname.split('/')[1]=='admin'||pathname.split('/')[1]=='posts'?'navbar-gradient bg-opacity-80 backdrop-blur-sm':'bg-green sm:bg-transparent')}>
            <Link href={'/'} className={'col-span-2 relative h-12'}>
                <Image src={'/logo.svg'} alt={'logo'} layout={'fill'}></Image>
            </Link>
            <div className={'col-span-8 hidden sm:flex items-center justify-start sm:gap-5 lg:gap-20'}>
                {links.map((link)=>{
                    return (<Link key={link.title} className={'font-inter text-xs xl:text-sm font-normal whitespace-nowrap text-white'} href={link.link}>{link.title}</Link>)
                })}

            </div>
            <div className={'col-span-2 hidden gap-1 sm:flex items-center justify-end'}>
                <div className={'flex items-center'}>
                    <Link href={'https://t.me/pediatric_dermatology_ru'}>
                        <img src={'/telegram.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                        </img>
                    </Link>
                </div>
                <div className={'flex items-center'}>
                    <Link href={'https://vk.com/pediatric_dermatology_ru'}>
                        <img src={'/vk.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                        </img>
                    </Link>
                </div>
                <div  className={'flex items-center cursor-pointer'} onClick={()=>{setBurgerOpen(false);loggedIn&&sessionStorage.getItem('loggedOut')!='true'?router.push('/account/my/profile'):router.push('/login')}}>
                    <div className={'w-5 mx-2 aspect-square relative'}>
                        <Image src={'/account.svg'} alt={'account'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-white lg:text-lg text-sm font-inter font-normal'}>{loggedIn&&sessionStorage.getItem('loggedOut')!='true'?"Профиль":"Войти"}</p>
                </div>
            </div>
            <div className={'sm:hidden col-span-1 flex justify-end items-center col-end-7'}>
                <img className={'aspect-square w-5'} src={burgerOpen?'/close.svg':'/burger.svg'} onClick={()=>{setBurgerOpen(!burgerOpen)}}/>
            </div>
            {burgerOpen&&!pathname.includes('/account')&&!pathname.includes('/admin/')?<div className={'h-screen overflow-y-scroll pt-10 pb-20 flex flex-col col-span-6 gap-6'}>
                {links.map((link)=>{
                    return (<a onClick={()=>{setBurgerOpen(false)}} key={link.title} className={'font-inter text-sm font-normal text-white'} href={link.link}>{link.title}</a>)
                })}
                <div className={'flex flex-row-reverse justify-end items-center cursor-pointer'} onClick={()=>{setBurgerOpen(false);loggedIn&&sessionStorage.getItem('loggedOut')!='true'?router.push('/account/my/profile'):router.push('/login')}}>
                    <div className={'w-5 mx-2 aspect-square relative'}>
                        <Image src={'/account.svg'} alt={'account'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-white lg:text-lg text-sm font-inter font-normal'}>{loggedIn&&sessionStorage.getItem('loggedOut')!='true'?"Профиль":"Войти"}</p>
                </div>
            </div>:null}
            {burgerOpen&&(pathname.includes('/account'))?<div className={'h-screen overflow-y-scroll pt-10 pb-20 flex flex-col col-span-6 gap-6'}>
                <Sidebar isCloseBurger={()=>{setBurgerOpen(false)}} user_uuid={data?.profile.uuid}></Sidebar>
            </div>:null}
            {burgerOpen&&(pathname.includes('/admin/'))?<div className={'h-screen overflow-y-scroll pt-10 pb-20 flex flex-col col-span-6 gap-6'}>
                <AdminSidebar isCloseBurger={()=>{setBurgerOpen(false)}}></AdminSidebar>
            </div>:null}

        </div>
    );
};

export default Navbar;
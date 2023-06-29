"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {classList} from "@/helpers/classList";

const Navbar = () => {

    const links=[
        {
            title:'Об обществе',
            link:'',
        },
        {
            title:'Публикации',
            link:'',
        },
        {
            title:'Мероприятия',
            link:'',
        },
        {
            title:'Новости',
            link:'',
        },
        {
            title:'Контакты',
            link:'',
        },
        {
            title:'Азбука атопии',
            link:'',
        },
    ]

    const [scrolled,setScrolled]=useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            setScrolled(window.scrollY)
        });
    })

    return (
        <div className={classList('px-[70px] fixed z-50  top-0 left-0 py-[35px] w-full grid grid-cols-12 transition-all duration-300',scrolled>120?'bg-green bg-opacity-80 backdrop-blur-sm':'bg-transparent')}>
            <div className={'col-span-2 relative h-12'}>
                <Image src={'/logo.svg'} alt={'logo'} layout={'fill'}></Image>
            </div>
            <div className={'col-span-8 flex items-center justify-around'}>
                {links.map((link)=>{
                    return (<a key={link.title} className={'font-inter font-normal text-white'} href={link.link}>{link.title}</a>)
                })}
            </div>
            <div className={'col-span-2 flex items-center justify-end'}>
                <div className={'flex items-center'}>
                    <img src={'/telegram.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                    </img>
                </div>
                <div className={'flex items-center'}>
                    <img src={'/vk.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                    </img>
                </div>
                <div className={'flex items-center'}>
                    <div className={'w-5 mx-2 aspect-square relative'}>
                        <Image src={'/account.svg'} alt={'account'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-white font-inter font-normal'}>Профиль</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
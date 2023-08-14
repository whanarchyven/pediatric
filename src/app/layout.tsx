import './globals.css'
import {Inter} from 'next/font/google'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Азбука атопического дерматита',
    description: 'наметки лендоса',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar isInteractive={true}></Navbar>
        <div>
            {children}
        </div>
        {/*ФУТЕР*/}
        <div className={'bg-black grid gap-12 grid-cols-1 items-start justify-center sm:grid-cols-12 py-20 px-[20px] sm:px-[70px] items-start'}>
            <div className={'sm:col-span-3 gap-8 flex flex-col relative justify-between'}>
                <img className={'w-48'} src={'/logo.svg'}/>
                <Link href={'https://t.me/pediatric_dermatology_ru'}>
                    <div className={'flex items-center gap-3'}>
                    <img src={'/telegram.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                        </img>
                    <p className={'text-white font-extralight'}>Telegram</p>
                </div>
                </Link>
                <Link href={'https://vk.com/pediatric_dermatology_ru'}>
                    <div className={'flex items-center gap-3'}>
                    <img src={'/vk.svg'} className={'w-5 mx-2 rounded-full aspect-square relative'}>

                        </img>
                    <p className={'text-white font-extralight'}>ВКонтакте</p>
                </div>
                </Link>
                <p className={'text-white opacity-20 font-extralight'}>
                    © Межрегиональная общественная организация «Общество детских дерматологов», 2023
                </p>
            </div>
            <div className={'sm:col-span-3 gap-8 flex flex-col sm:text-left text-center text-white font-extralight flex items-start'}>
                <div className={'flex flex-col text-white gap-3'}>
                    <p className={'font-bold text-xl'}>Контакты:</p>
                    <p className={'font-extralight'}>+7 (952) 256 34 20</p>
                    <p className={'font-extralight'}>pediatric-dermatology@mail.ru</p>
                    <p className={'font-extralight'}>Ломоносовский проспект, 2, строение 1Москва, 119034</p>
                </div>
                <div className={'flex flex-col text-white gap-3'}>
                    <p className={'font-bold text-xl'}>По вопросам рекламы
                        и сотрудничества:</p>
                    <p className={'font-extralight'}>+7 (926) 249 86 58</p>
                    <p className={'font-extralight'}>savelova.derma@gmail.com</p>
                </div>
            </div>
            <div className={'sm:col-span-3 gap-5 flex flex-col text-white font-extralight flex flex-col h-full justify-start'}>
                <Link href={'/'} className={'font-extralight sm:text-left text-center'}>Об обществе</Link>
                <Link href={'/azbuka'} className={'font-extralight sm:text-left text-center'}>Азбука атопии</Link>
                {/*<a className={'font-extralight sm:text-left text-center'}>Публикации</a>*/}
                {/*<a className={'font-extralight sm:text-left text-center'}>Новости</a>*/}
                {/*<a className={'font-extralight sm:text-left text-center'}>Мероприятия</a>*/}
                {/*<a className={'font-extralight sm:text-left text-center'}>Контакты</a>*/}
                {/*<a className={'font-extralight sm:text-left text-center'}>Политика конфиденциальности</a>*/}
                {/*<a className={'font-extralight sm:text-left text-center'}>Договор-оферта</a>*/}
            </div>
            <div className={'sm:col-span-3 gap-8 flex flex-col text-white font-extralight '}>
                <p className={'font-bold text-xl'}>Стань членом сообщества:</p>
                <p className={'font-extralight'}>Взаимодействуйте с обществом совершенно по-новому.<br/> <br/>
                    Члены общества получают эксклюзивный доступ к мероприятиям, вдохновляющим беседам и многому другому.</p>
                <Link href={'/registration'}>
                    <div
                        className={'bg-transparent border-2 border-white font-normal rounded-lg text-xl text-white flex items-center justify-center w-60 py-5'}>
                        Подать заявку
                    </div>
                </Link>
            </div>
            {/*<div*/}
            {/*    className={'col-span-3 text-white rounded-full cursor-pointer p-4 h-full flex items-center justify-center bg-red'}>*/}
            {/*    Программы ухода за кожей*/}
            {/*</div>*/}
        </div>
        </body>
        </html>
    )
}

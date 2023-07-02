import './globals.css'
import {Inter} from 'next/font/google'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Азбука атропического дерматита',
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
        <div className={'bg-[#333333] grid gap-12 grid-cols-1 items-center justify-center sm:grid-cols-12 py-20 px-[20px] sm:px-[70px] items-center'}>
            <div className={'sm:col-span-3 relative h-12'}>
                <Image src={'/logo.svg'} alt={'logo'} layout={'fill'}></Image>
            </div>
            <div className={'sm:col-span-2 sm:text-left text-center text-white font-extralight flex items-start'}>
                Политика в отношении
                обработки персональных
                данных
            </div>
            <div className={'sm:col-span-2 text-white font-extralight flex flex-col h-full justify-between'}>
                <p className={'font-extralight sm:text-left text-center'}>Мамы советуют</p>
                <p className={'font-extralight sm:text-left text-center'}>Полезные ресурсы</p>
            </div>
            <div className={'sm:col-span-2 text-white font-extralight flex flex-col h-full justify-between'}>
                <p className={'font-extralight sm:text-left text-center'}>О проекте</p>
                <p className={'font-extralight sm:text-left text-center'}>Видео уроки</p>
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

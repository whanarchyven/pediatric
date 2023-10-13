"use client"
import '@/app/globals.css'
import {Inter} from 'next/font/google'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React, {useState} from "react";
import Link from "next/link";
import {classList} from "@/helpers/classList";
import {usePathname} from "next/navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({subsets: ['latin']})

// export const metadata = {
//     title: 'Азбука атопического дерматита',
//     description: 'наметки лендоса',
// }

export default function AccountLayout(props: {
    children: React.ReactNode
}) {
const {children,params:{user_uuid}} = props;
    console.log(props)
    const [isOpenBurger,setIsOpenBurger]=useState(false)

    return (
        <div className={'lg:grid lg:pt-28 pt-14 pb-0 lg:grid-cols-10'}>
            <div className={'lg:col-span-2 top-0 z-[99] hidden w-full lg:relative bg-[#E3F1EF] lg:flex items-start pl-[20px] p-12 lg:p-12 min-h-screen'}>
                <Sidebar user_uuid={user_uuid}></Sidebar>
            </div>
            <div className={'lg:col-span-8'}>
                {children}
            </div>
        </div>
    )
}

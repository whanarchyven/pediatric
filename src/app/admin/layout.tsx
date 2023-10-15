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
import AdminSidebar from "@/components/AdminSidebar";
import {eden} from "@/helpers/sdk";

const inter = Inter({subsets: ['latin']})

// export const metadata = {
//     title: 'Азбука атопического дерматита',
//     description: 'наметки лендоса',
// }
export const dynamic = "force-dynamic"
export default function AdminLayout(props: {
    children: React.ReactNode
}) {
const {children} = props;
    console.log(props)
    const [isOpenBurger,setIsOpenBurger]=useState(false)
    const [loading,setLoading]=useState(true)
    const[isAdmin,setIsAdmin]=useState(false)
    const [uuid,setUuid]=useState('')
    const data = eden.user.my.profile.get().then((res) => {
        if (res?.data?.isAdmin) {
            setIsAdmin(true)
            setUuid(res?.data?.profile.uuid)
            console.log('true');
        }
        setLoading(false)
    })
    if(loading){
        return (
            <div className={'h-screen w-screen flex items-center justify-center green-gradient'}>
                <img className={'w-20 aspect-square animate-spin'} src={'/loading.svg'}/>
            </div>
        )
    }else{
        if(isAdmin){
            return (
                <div className={'lg:grid lg:pt-28 pt-14 pb-0 lg:grid-cols-10'}>
                    <div className={'lg:col-span-2 top-0 z-[99] hidden w-full lg:relative bg-[#E3F1EF] lg:flex items-start pl-[20px] p-12 lg:p-12 min-h-screen'}>
                        <AdminSidebar user_uuid={uuid}></AdminSidebar>
                    </div>
                    <div className={'lg:col-span-8'}>
                        {children}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={'lg:grid lg:pt-28 pt-14 pb-0 lg:grid-cols-10'}>
                    <div className={'lg:col-span-2 top-0 z-[99] hidden w-full lg:relative bg-[#E3F1EF] lg:flex items-start pl-[20px] p-12 lg:p-12 min-h-screen'}>

                    </div>
                    <div className={'lg:col-span-8 flex items-center justify-center'}>
                        <p className={'text-3xl font-bold'}>Доступ запрещен.</p>
                    </div>
                </div>
            )
        }
    }
}

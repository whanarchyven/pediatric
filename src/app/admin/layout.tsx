import '@/app/globals.css';
import AdminSidebar from "@/components/AdminSidebar";
import { eden } from "@/helpers/sdk";
import { edenServer } from '@/helpers/sdk-server';
import { Inter } from 'next/font/google';
import React from "react";


// export const metadata = {
//     title: 'Азбука атопического дерматита',
//     description: 'наметки лендоса',
// }
export const dynamic = "force-dynamic"
export default async function AdminLayout(props: {
    children: React.ReactNode
}) {
const {children} = props;
    console.log(props)
    
        
    let isAdmin = false;
    let uuid = '';
    const res = await edenServer.user.my.profile.get()
    if (res?.data?.isAdmin) {
        isAdmin = true
        uuid = res?.data?.profile.uuid
        
    }
    
    
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

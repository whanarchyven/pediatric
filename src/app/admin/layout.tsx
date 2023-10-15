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

    return (
        <div className={'lg:grid lg:pt-28 pt-14 pb-0 lg:grid-cols-10'}>
            <div className={'lg:col-span-2 top-0 z-[99] hidden w-full lg:relative bg-[#E3F1EF] lg:flex items-start pl-[20px] p-12 lg:p-12 min-h-screen'}>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className={'lg:col-span-8'}>
                {children}
            </div>
        </div>
    )
    
}

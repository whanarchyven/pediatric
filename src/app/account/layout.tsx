import '@/app/globals.css'
import {Inter} from 'next/font/google'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import {classList} from "@/helpers/classList";
import {usePathname} from "next/navigation";
import Sidebar from "@/components/Sidebar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Азбука атопического дерматита',
    description: 'наметки лендоса',
}

export default function AccountLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {



    return (
        <div className={'grid pt-28 pb-0 grid-cols-10'}>
            <div className={'col-span-2 relative bg-[#E3F1EF] flex items-start p-12 min-h-screen'}>
                <Sidebar></Sidebar>
            </div>
            <div className={'col-span-8'}>
                {children}
            </div>
        </div>
    )
}

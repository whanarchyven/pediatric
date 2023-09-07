"use client"

import React from 'react';
import {useRouter} from "next/navigation";

const BackButton = () => {

    const router=useRouter()
    return (
        <div onClick={()=>{
            router.back()
        }} className={'flex gap-4 items-center cursor-pointer'}>
            <img className={'aspect-square w-5'} src={'/arrow_prev.svg'}/>
            <p className={'text-white text-xl uppercase'}>Назад</p>
        </div>
    );
};

export default BackButton;
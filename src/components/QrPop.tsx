"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface educationPopInterface {
    closeFunc:()=>any
    activeQrLink:string
}

const EducationPop = ({activeQrLink,closeFunc}:educationPopInterface) => {

    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-3/5 w-full bg-white p-6 rounded-lg border-green-two border-2 flex gap-8 flex-col'}>
                <div className={'flex justify-between'}>
                    <p className={'font-bold text-center w-full text-3xl'}>Ваш пропуск на конференцию</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex justify-center items-center'}>
                    <img className={'w-96 aspect-square'} src={activeQrLink}/>
                </div>
            </div>
        </div>
    );
};

export default EducationPop;
"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface awardInterface {
    closeFunc:()=>any
    award:{
        title?: string | undefined;
        imageUrl?: string | undefined;
    },
}

const ShowAwardPop = ({award,closeFunc}:awardInterface) => {

    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-3/5 w-full bg-white p-3 max-h-screen overflow-y-scroll rounded-lg border-green-two border-2 flex gap-8 flex-col'}>
                <div className={'flex justify-between items-center'}>
                    <p className={'font-semibold text-sm lg:text-3xl'}>{award.title}</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <img src={award.imageUrl} className={'w-full'}/>
            </div>
        </div>
    );
};

export default ShowAwardPop;
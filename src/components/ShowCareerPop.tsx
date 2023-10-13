"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface educationPopInterface {
    closeFunc:()=>any
    workplace:{
        placeName: string;
        start: string;
        end: string;
        post: string;
        description: string;
    },
}

const EducationPop = ({workplace,closeFunc}:educationPopInterface) => {

    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-3/5 w-full bg-white p-3 rounded-lg border-green-two border-2 flex gap-8 flex-col'}>
                <div className={'flex justify-between'}>
                    <p className={'font-bold text-3xl'}>Информация о месте работы</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal lg:text-xl'}>Начало работы в организации:</p>
                    <p className={'font-semibold lg:text-xl'}>{workplace.start}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal lg:text-xl'}>Окончание работы в организации:</p>
                    <p className={'font-semibold lg:text-xl'}>{workplace.end}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal lg:text-xl'}>Наименоване организации:</p>
                    <p className={'font-semibold lg:text-xl'}>{workplace.placeName}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal lg:text-xl'}>Занимаемая должность:</p>
                    <p className={'font-semibold lg:text-xl'}>{workplace.post}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal lg:text-xl'}>Описание:</p>
                    <p className={'font-semibold lg:text-xl'}>{workplace.description}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationPop;
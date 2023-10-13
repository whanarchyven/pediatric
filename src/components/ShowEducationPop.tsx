"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface educationPopInterface {
    closeFunc:()=>any
    education:{
        faculty?: string | undefined;
        degree?: string | undefined;
        diploma?: string | undefined;
        yearStart: number;
        yearEnd: number;
        university: string;
    },
    counter:number
}

const EducationPop = ({education,closeFunc,counter}:educationPopInterface) => {

    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-3/5 w-full bg-white p-3 rounded-lg border-green-two border-2 flex gap-8 flex-col'}>
                <div className={'flex justify-between'}>
                    <p className={'font-bold text-3xl'}>{counter} образование</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal text-sm lg:text-xl'}>Год начала обучения:</p>
                    <p className={'font-semibold text-sm lg:text-xl'}>{education.yearStart}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal text-sm lg:text-xl'}>Год окончания обучения:</p>
                    <p className={'font-semibold text-sm lg:text-xl'}>{education.yearEnd}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal text-sm lg:text-xl'}>Наименование учебного заведения:</p>
                    <p className={'font-semibold text-sm lg:text-xl'}>{education.university}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal text-sm lg:text-xl'}>Наименование факультета:</p>
                    <p className={'font-semibold text-sm lg:text-xl'}>{education.faculty}</p>
                </div>
                <div className={'grid-cols-2 grid gap-2'}>
                    <p className={'font-normal text-sm lg:text-xl'}>Образование:</p>
                    <p className={'font-semibold text-sm lg:text-xl'}>{education.degree}</p>
                </div>
                <a target={"_blank"} href={education.diploma} className={'bg-green-two flex items-center justify-center w-96 cursor-pointer p-3 font-bold text-white rounded-lg'}>
                    Посмотреть диплом
                </a>
            </div>
        </div>
    );
};

export default EducationPop;
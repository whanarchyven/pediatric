"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";
import {isArray} from "util";


interface educationPopInterface {
    closeFunc:()=>any
    user_uuid:string,
    email:string,
    awards:[],
}

const EducationPop = ({closeFunc,user_uuid,email,awards}:educationPopInterface) => {
    const [title,setName]=useState('')
    const [imageTemp,setImageTemp]=useState<FileList>()
    const updateAwards=async (imageUrl:string)=>{
        if(isArray(awards)){
            eden.user[user_uuid].profile.post({
                uuid: user_uuid, awards: [...awards,{title:title, imageUrl:imageUrl}],email:email
            }).then((res)=>{
                console.log(res)
                closeFunc()
            })
        }
        else{
            eden.user[user_uuid].profile.post({
                uuid: user_uuid, awards: [{title:title, imageUrl:imageUrl}],email:email
            }).then((res)=>{
                console.log(res)
                closeFunc()
            })

        }
        window.location.reload();
    }



    return (
        <div className={'fixed z-[999] w-full h-full left-0 p-3 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-1/3 w-full overflow-y-scroll max-h-screen bg-white p-3 rounded-lg border-green border-2 flex gap-4 flex-col'}>
                <div className={'flex items-start justify-between'}>
                    <p className={'font-bold text-3xl'}>Добавить награду</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Название награды</p>
                    <input value={title}
                           onChange={(event) => {
                               setName(event.target.value)
                           }} placeholder={'Введите название награды'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <DragNDrop setFile={setImageTemp}></DragNDrop>
                <div onClick={()=>{
                    if(imageTemp){
                        uploadFile(imageTemp).then((res)=>{
                            console.log(res)
                            updateAwards(res);
                        })
                    }
                }} className={'bg-green p-4 flex text-white cursor-pointer justify-center items-center rounded-lg mt-5 text-2xl'}>
                    Добавить
                </div>
            </div>
        </div>
    );
};

export default EducationPop;
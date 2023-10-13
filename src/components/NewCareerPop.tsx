"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface newCareerPopInterface {
    closeFunc:()=>any
    afterPostCallback:()=>any,
    user_uuid:string,
    email:string,
    career:[],
}

const NewCareerPop = ({closeFunc,afterPostCallback,user_uuid,email,career}:newCareerPopInterface) => {
    const [start,setYearStart]=useState('')
    const [end,setYearEnd]=useState('')
    const [placeName,setPlaceName]=useState('')
    const [post,setPost]=useState('')
    const[description,setDescription]=useState('')



    const updateNewCareer=async ()=>{
        eden.user[user_uuid].profile.post({
            uuid: user_uuid, career: [...career,{start, end, placeName, post, description}],email:email
        }).then((res)=>{
            console.log(res)
            closeFunc()
        })
        window.location.reload();
    }



    return (
        <div className={'fixed z-[999] w-full h-full left-0 p-3 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-1/3 w-full overflow-y-scroll max-h-screen bg-white p-3 rounded-lg border-green border-2 flex gap-4 flex-col'}>
                <div className={'flex items-start justify-between'}>
                    <p className={'font-bold text-3xl'}>Добавить данные о Месте работы</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Начало работы</p>
                    <input value={start}
                           onChange={(event) => {
                               setYearStart(event.target.value)
                           }} placeholder={'Январь 2023'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Окончание работы</p>
                    <input value={end}
                           onChange={(event) => {
                               setYearEnd(event.target.value)
                           }} placeholder={'Октябрь 2023'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование организации</p>
                    <input value={placeName}
                           onChange={(event) => {
                               setPlaceName(event.target.value)
                           }} placeholder={'Полное наименование организации'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Занимаемая должность</p>
                    <input value={post}
                           onChange={(event) => {
                               setPost(event.target.value)
                           }} placeholder={'Врач'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Описание</p>
                    <textarea value={description}
                           onChange={(event) => {
                               setDescription(event.target.value)
                           }} placeholder={'Опишите, какие задачи решали, каких достигли успехов'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></textarea>
                </div>
                <div onClick={()=>{
                    updateNewCareer();
                }} className={'bg-green p-4 flex text-white cursor-pointer justify-center items-center rounded-lg mt-5 text-2xl'}>
                    Добавить
                </div>
            </div>
        </div>
    );
};

export default NewCareerPop;
"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";
import Loading from "@/components/Loading";


interface newPublicationPopInterface {
    closeFunc:()=>any,
}

const NewPostPop = ({closeFunc}:newPublicationPopInterface) => {

    const [description,setDescription]=useState('')
    const [title,setTitle]=useState('')
    const[file,setFile]=useState<FileList>()
    const [content,setContent]=useState('')
    const [loading,setLoading]=useState(false);
    const newPost=async (fileUrl:string)=>{
        eden.post.create.post({
             contentMd:content, title, imageUrl:fileUrl, description,
        }).then((res)=>{
            console.log(res)
            closeFunc()
            setLoading(false);
            window.location.reload();
        })

    }



    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 p-3 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-1/3 w-full overflow-y-scroll max-h-screen bg-white p-3 pb-10 max-h-[90%] overflow-y-scroll rounded-lg border-green-two border-2 flex gap-5 flex-col'}>
                <div className={'flex items-start justify-between'}>
                    <p className={'font-bold text-3xl'}>Добавить новую публикацию</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Заголовок</p>
                    <input value={title}
                           onChange={(event) => {
                               setTitle(event.target.value)
                           }} placeholder={'Заголовок поста'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Описание</p>
                    <input value={description}
                           onChange={(event) => {
                               setDescription(event.target.value)
                           }} placeholder={'Описание поста'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Контент</p>
                    <textarea value={content} rows={10}
                              onChange={(event) => {
                                  setContent(event.target.value)
                              }} placeholder={'Содержание'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></textarea>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <div className={'flex flex-col my-2 gap-3'}>
                        <p className={'font-normal lg:w-[70%] text-xl'}>Загрузите обложку публикации</p>
                        <div className={'lg:w-full]'}>
                            <DragNDrop setFile={setFile}></DragNDrop>
                        </div>
                    </div>
                    <div onClick={()=>{
                        setLoading(true)
                        if(file){
                            uploadFile(file).then((res)=>{
                                newPost(res)
                            })
                        }
                    }} className={'bg-green lg:w-full p-4 flex text-white cursor-pointer justify-center items-center rounded-lg mt-5 text-xl'}>
                        {loading?<Loading></Loading>:'Опубликовать'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostPop;
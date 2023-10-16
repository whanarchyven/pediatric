"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface newPublicationPopInterface {
    closeFunc:()=>any,
    user_uuid:string,
    email:string,
}

const NewPublicationPop = ({closeFunc,user_uuid,email}:newPublicationPopInterface) => {

    const [category,setCategory]=useState('')
    const [title,setTitle]=useState('')
    const[file,setFile]=useState<FileList>()
    const [authors,setAuthors]=useState<string[]>([])
    const [tempAuthor,setTempAuthor]=useState('')

    const newPublication=async (fileUrl:string)=>{
        eden.user[user_uuid].publication.post({
             category, title, fileUrl, authors,
            date: new Date().toDateString()
        }).then((res)=>{
            console.log(res)
            closeFunc()
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
                    <p className={'font-normal text-xl'}>Научная область</p>
                    <input value={category}
                           onChange={(event) => {
                               setCategory(event.target.value)
                           }} placeholder={'Детская дерматология'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование работы</p>
                    <input value={title}
                           onChange={(event) => {
                               setTitle(event.target.value)
                           }} placeholder={'Заголовок научной публикации'}
                           className={'text-green-black p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Авторы</p>
                    {authors.map((author)=>{
                        return(
                            <div key={author} className={'flex gap-3 items-center'}>
                                <p className={'font-bold text-xl my-2'}>{author}</p>
                                <img onClick={()=>{
                                    let temp=[...authors]
                                    let index=temp.findIndex(item=>item==author)
                                    temp.splice(index,1)
                                    setAuthors([...temp])
                                }} className={'w-6 aspect-square cursor-pointer'} src={'/close_black.svg'}/>
                            </div>

                        )
                    })}
                    <div className={'flex lg:flex-row flex-col items-center justify-between gap-3'}>
                        <input value={tempAuthor}
                               onChange={(event) => {
                                   setTempAuthor(event.target.value)
                               }} placeholder={'ФИО автора / соавтора'}
                               className={'text-green-black flex w-full lg:w-[70%] p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                        <div onClick={() => {
                            let temp=[...authors]
                            temp.push(tempAuthor)
                            setAuthors([...temp])
                            setTempAuthor('');
                        }} className={'bg-green lg:w-[30%] w-full text-white cursor-pointer text-center text-sm whitespace-nowrap font-normal p-3 rounded-lg'}>Добавить автора +</div>
                    </div>
                    <div className={'flex flex-col my-2 gap-3'}>
                        <p className={'font-normal lg:w-[70%] text-xl'}>Загрузите файл публикации (pdf)</p>
                        <div className={'lg:w-full]'}>
                            <DragNDrop setFile={setFile}></DragNDrop>
                        </div>
                    </div>
                    <div onClick={()=>{
                        if(file){
                            uploadFile(file).then((res)=>{
                                newPublication(res)
                            })
                        }
                    }} className={'bg-green lg:w-full p-4 flex text-white cursor-pointer justify-center items-center rounded-lg mt-5 text-xl'}>
                        Опубликовать
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPublicationPop;
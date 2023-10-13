"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";


interface educationPopInterface {
    closeFunc:()=>any
    afterPostCallback:()=>any,
    user_uuid:string,
    email:string,
    education:[],
}

const EducationPop = ({closeFunc,afterPostCallback,user_uuid,email,education}:educationPopInterface) => {
    const [yearStart,setYearStart]=useState<number>(0)
    const [yearEnd,setYearEnd]=useState<number>(0)
    const [university,setUniversity]=useState('')
    const [faculty,setFaculty]=useState('')
    const [degree,setDegree]=useState('')
    const[diploma,setDiploma]=useState('')
    const[diplomaTemp,setDiplomaTemp]=useState(null)



    const updateEducation=async (diplomaURL:string)=>{
        eden.user[user_uuid].profile.post({
            uuid: user_uuid, education: [...education,{yearStart, yearEnd, university, faculty, degree, diploma:diplomaURL}],email:email
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
                    <p className={'font-bold text-3xl'}>Добавить данные об образовании</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Год начала обучения</p>
                    <input value={yearStart}
                           onChange={(event) => {
                               setYearStart(Number(event.target.value))
                           }} placeholder={'Введите год'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Год окончания обучения</p>
                    <input value={yearEnd}
                           onChange={(event) => {
                               setYearEnd(Number(event.target.value))
                           }} placeholder={'Введите год'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование учебного заведения</p>
                    <input value={university}
                           onChange={(event) => {
                               setUniversity(event.target.value)
                           }} placeholder={'Полное название ВУЗ\'а'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование факультета</p>
                    <input value={faculty}
                           onChange={(event) => {
                               setFaculty(event.target.value)
                           }} placeholder={'Медицинский'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Образование</p>
                    <input value={degree}
                           onChange={(event) => {
                               setDegree(event.target.value)
                           }} placeholder={'Бакалавриат'}
                           className={'text-green p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <DragNDrop setFile={setDiplomaTemp}></DragNDrop>
                <div onClick={()=>{
                    if(diplomaTemp){
                        uploadFile(diplomaTemp).then((res)=>{
                            updateEducation(res);
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
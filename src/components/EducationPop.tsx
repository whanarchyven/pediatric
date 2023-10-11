"use client"
import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";


interface educationPopInterface {
    closeFunc:()=>any
    afterPostCallback:()=>any,
    user_uuid:string
}

const EducationPop = ({closeFunc,afterPostCallback,user_uuid}:educationPopInterface) => {
    const [yearStart,setYearStart]=useState('')
    const [yearEnd,setYearEnd]=useState('')
    const [university,setUniversity]=useState('')
    const [faculty,setFaculty]=useState('')
    const [degree,setDegree]=useState('')
    const[diploma,setDiploma]=useState(null)


    const updateEducation=async ()=>{
        eden.user[user_uuid].profile.post({uuid:user_uuid,education:{yearStart,yearEnd,university,faculty,degree}}).then((res)=>{
            console.log(res)
            closeFunc()
        })
    }



    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'w-1/3 bg-white p-3 rounded-lg border-green-two border-2 flex gap-4 flex-col'}>
                <div className={'flex justify-between'}>
                    <p className={'font-bold text-3xl'}>Добавить данные об образовании</p>
                    <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Год начала обучения</p>
                    <input value={yearStart}
                           onChange={(event) => {
                               setYearStart(event.target.value)
                           }} placeholder={'Введите год'}
                           className={'text-green-two p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Год окончания обучения</p>
                    <input value={yearEnd}
                           onChange={(event) => {
                               setYearEnd(event.target.value)
                           }} placeholder={'Введите год'}
                           className={'text-green-two p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование учебного заведения</p>
                    <input value={university}
                           onChange={(event) => {
                               setUniversity(event.target.value)
                           }} placeholder={'Полное название ВУЗ\'а'}
                           className={'text-green-two p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Наименование факультета</p>
                    <input value={faculty}
                           onChange={(event) => {
                               setFaculty(event.target.value)
                           }} placeholder={'Медицинский'}
                           className={'text-green-two p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'font-normal text-xl'}>Образование</p>
                    <input value={degree}
                           onChange={(event) => {
                               setDegree(event.target.value)
                           }} placeholder={'Бакалавриат'}
                           className={'text-green-two p-2 border-green border-2 text-lg rounded-lg font-normal'}></input>
                </div>
                <DragNDrop setFile={setDiploma}></DragNDrop>
                <div className={'bg-green-two p-4 flex text-white cursor-pointer justify-center items-center rounded-lg mt-5 text-2xl'}>
                    Добавить
                </div>
            </div>
        </div>
    );
};

export default EducationPop;
"use client"

import React, {useState} from 'react';

interface confirmPopInterface {
    closeFunc:()=>any,
    price:number,
    event_id:number,
}

const ConfirmForm = ({closeFunc, price, event_id}:confirmPopInterface) => {

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')

    const sendForm=async ()=>{
        fetch('https://ars.ptq.pw/mg/pderm/crm/getLink', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization':'Bearer dBNSFaf9hwHEx7ZLRS9mFaUM7MvD4U2ZVfdHZJ8qgKELpQ8MJL',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                customer: name,
                event:event_id,
                transactions:{
                    initial:{
                        amountRub:price,
                    }
                }
            })
        }).then((res)=>{
            console.log(res)
        })
    }

    return (
        <div className={'flex gap-4 h-full flex-col'}>
            <p className={'text-[#0F5F5A] text-2xl sm:text-4xl font-light'}>ВЫ ПОДТВЕРЖДАЕТЕ <br/> <span className={'font-extrabold'}>СВОЕ УЧАСТИЕ?</span></p>
            <p className={'text-[#0F5F5A] text-lg sm:text-xl'}>После подтверждения участия в мероприятии произойдет оплата стоимости билета.
                <br/>
                <br/>
                Рекомендуем проверить правильность выбора формата мероприятия перед подтверждением.</p>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>ФИО<sup className={'text-red '}>*</sup></p>
                <input value={name} onChange={(event)=>{setName(event.target.value)}} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>E-mail<sup className={'text-red '}>*</sup></p>
                <input value={email} onChange={(event)=>{setEmail(event.target.value)}} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Телефон<sup className={'text-red '}>*</sup></p>
                <input className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two'} name={'surname'}/>
            </div>
            <div className={'w-full grid grid-cols-2 gap-3'}>
                <div onClick={()=>{
                    if(email!=''&&name!=''){
                        sendForm();
                    }
                }}
                    className={'p-4 cursor-pointer bg-green-two text-white text-sm font-light rounded-xl flex items-center justify-center'}>
                    Подтвердить участие
                </div>
                <div onClick={()=>{closeFunc()}}
                     className={'p-4 cursor-pointer border-green-two border-2 text-green-two text-sm font-light rounded-xl flex items-center justify-center'}>Вернуться к мероприятию</div>
            </div>
        </div>
    );
};

export default ConfirmForm;
"use client";
import React, { useEffect, useState } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { eden, useEden } from "@/helpers/sdk";

import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import Link from "next/link";
import Loading from "@/components/Loading";
import {classList} from "@/helpers/classList";
import axios from "axios";
import {codes} from "@/app/admin/events/participants/[id]/getCodes";

// import required modules

function TailwindTextInput(props:any) {
    return (
      <input
        className="border rounded p-2"
        type="text"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
      />
    );
  }

export const dynamic = "force-dynamic";
export default function Home(params: { params: { id: string } }) {
  const event_id = params.params.id;
  const images = "/pages/account";

  const [events, setEvents] = useState<Array<any>>([]);

  // @ts-ignore
  // const eventsData = eden.event.byId[event_id].get().then((res)=>{
  //     if(res.data){

  //     }
  // })

  
  const { data } = useEden(() => eden.user.my.admin.participations.byEventId[event_id].get())

  console.log(data)
  const certLink = (email:string, event_id:string)=>
    `/api2/user/my/admin/participations/byEventId/${event_id}/getCertByEmail/${email}`



  const [loading,setLoading]=useState(false);

  const changeParticipationType=async (participationType: string, id: string,)=>{
    // console.log('aaaa',participationType)
    setLoading(true);
    // @ts-ignore
    eden.user.my.admin.participations.update.byParticipation_id[id].post({participationType:participationType}).then((res)=>{
      setLoading(false)
      // console.log(res);
      window.location.reload();
    })
  }

  const deleteParticipation=async (id:string)=>{
    // console.log('aaaa',participationType)
    setLoading(true);
    eden.user.my.admin.participations.update.byParticipation_id[id].post({deleted:true}).then((res)=>{
      setLoading(false)
      // console.log(res);
      window.location.reload();
    })
  }

  // const {event}=eventsData?.data?.events?? {} as any

  // console.log(event)
  const log = (text: string) => {
    console.log(text);
  };
  if (!data) return null;

  console.log(data.filter(p=>p.email=='ivanlom227@gmail.com'))
  const uniqueEmails = {};
  const uniqueData = data.filter(item => {
    if (uniqueEmails[item.email]) {
      return false;
    } else {
      uniqueEmails[item.email] = true;
      return true;
    }
  });

  // Функция для чтения кодов из файла
  const readCodesFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
      fetch(filePath)
          .then(response => response.text())
          .then(data => {
            const codes = data.split('\n').map(code => code.trim()).filter(code => code);
            resolve(codes);
          })
          .catch(error => reject(error));
    });
  };

  const makeCert = async (code, participationId) => {
    try {
      const response = await axios.post(`/api2/user/my/admin/participations/update/byParticipation_id/${participationId}`, { cert: code });
      return response.data;
    } catch (error) {
      throw new Error(`Error assigning certificate ${code} to ${participationId}: ${error}`);
    }
  };

  const assignCertificates = async (uniqueData, codes) => {
    for (let i = 0; i < uniqueData.length; i++) {
      const item = uniqueData[i];
      const code = codes[i];
      const participationId = item._id;

      try {
        const result = await makeCert(code, participationId);
        console.log(`Certificate ${code} assigned to ${participationId}:`, result);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const handleClick = () => {
    console.log(uniqueData)
    assignCertificates(uniqueData, codes);
  };

  // const temp=uniqueData.filter(item=>item.email=='ivanlom227@gmail.com')
  // console.log(temp)
  // const res=makeCert('X60D-VIVB013C',temp[0]._id)
  // console.log(res);

  return (
    <main className={"p-2 lg:p-12"}>
      <div className={"flex justify-between"}>
        <p
          className={
            "uppercase font-inter font-extralight text-2xl lg:text-3xl"
          }
        >
          Список участников <br />
          <span className={"font-extrabold"}>Мероприятия</span>
        </p>
      </div>
      <div className={""}>
        <div className={""}>
          <div onClick={handleClick} className={' p-2 my-12 bg-green flex items-center justify-center'}>
            Выпустить сертификаты
          </div>
          <div>Всего: {data?.length}</div>
          <div>Завершившие регистрацию: {data?.filter(p=>p.status==="finished").length}</div>
          <div>Завершившие регистрацию(онлайн): {data?.filter(p=>(p.sum>0&&p.status==="finished"&&p?.info?.participationType==="онлайн")).length}</div>
          <div>Завершившие регистрацию(оффлайн): {data?.filter(p=>(p.sum>0&&p.status==="finished"&&p?.info?.participationType==="очное участие")).length}</div>
          <div>Количество платных: {data?.filter(p=>(p.sum>0&&p.status==="finished")).length}</div>
          
          <div className="mt-10">
          {data.filter(p=>p.status==="finished").map((d,i)=><div className="grid grid-cols-12 gap-4 items-center my-5 justify-center" key={i}>
            <span className={classList("text-xs",d?.sum!=0?'font-bold':'')}>{d?.meta?.participationType=='online-free'?'онлайн (свободное)':''}{d?.meta?.participationType=='online'?`онлайн (платное)`:''}{d?.info?.participationType=='очное участие'||d?.info?.participationType=='оффлайн'?'очное участие':''}</span>
            <span className={classList("col-span-1",d?.sum!=0?'font-bold':'')}>{d?.sum}</span>
            <span className="col-span-2">{d?.info?.name}</span>
            <span className="col-span-3"> {d.email}</span>
            <div className={'col-span-2'}><a className="underline cursor-pointer text-xs" href={(d.info?.event_id&&d.email)&&certLink(d?.email, d.info?.event_id)} target="_blank" rel={"noreferer"}>{d.cert?"Посмотреть Сертификат":"Выпуск сертификата"}</a></div>
            <div className={'col-span-2'}>
              <select placeholder={'Сменить тариф'} className={'border-2 border-green w-full rounded-lg p-2 text-xs text-green cursor-pointer flex items-center justify-center'} onChange={async (event)=>{
                await changeParticipationType(event.target.value,d?._id)
              }}>
                <option value={'offline'} selected={d?.info?.participationType=='оффлайн'||d?.info?.participationType=='очное участие'}>очное участие</option>
                <option value={'online'} selected={d?.info?.participationType=='онлайн'}>онлайн</option>
                <option value={'online-free'} selected={d?.info?.participationType=='онлайн (свободное)'}>онлайн (свободное)</option>
              </select>
            </div>
            <div className={'bg-green rounded-lg p-2 text-xs text-white cursor-pointer flex items-center justify-center'} onClick={async ()=>{
              await deleteParticipation(d?._id)
            }}>
              {loading?<Loading></Loading>:'Удалить'}
            </div>
          </div>)}
          </div>
          
          {/* <pre className="text-xs">{JSON.stringify(data,null,2)}</pre> */}
          {/* <pre className="text-xs">{data.map(d=>`${d.info.participationType}\n${d.info.name}\t${d.email}\n\n`)}</pre> */}
        </div>
      </div>
    </main>
  );
}

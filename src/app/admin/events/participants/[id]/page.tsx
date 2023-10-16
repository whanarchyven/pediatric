"use client";
import React, { useEffect, useState } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { eden, useEden } from "@/helpers/sdk";

import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";
import Link from "next/link";

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

  // const {event}=eventsData?.data?.events?? {} as any

  // console.log(event)
  const log = (text: string) => {
    console.log(text);
  };
  if (!data) return null;
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
          <div>Всего: {data.length}</div>
          <div>Завершившие регистрацию: {data.filter(p=>p.status==="finished").length}</div>
          <div>Количество платных: {data.filter(p=>(p.sum>0&&p.status==="finished")).length}</div>
          {data.filter(p=>p.status==="finished").map((d,i)=><div key={i}>
            <p>{d?.info?.participationType} {d?.info?.name} {d.email}<Link href="">Выпуск сертификата</Link></p>
          </div>)}
          <pre className="text-xs">{JSON.stringify(data,null,2)}</pre>
          {/* <pre className="text-xs">{data.map(d=>`${d.info.participationType}\n${d.info.name}\t${d.email}\n\n`)}</pre> */}
        </div>
      </div>
    </main>
  );
}

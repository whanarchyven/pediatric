"use client";
import React, { useEffect, useState } from "react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { eden, useEden } from "@/helpers/sdk";

import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

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

  const { data } = useEden(() => eden.event.byId[event_id].get());
  const { data: schema } = useEden(() => eden.event.jsonschema.get());

  // const {event}=eventsData?.data?.events?? {} as any

  // console.log(event)
  const log = (text: string) => {
    console.log(text);
  };

  return (
    <main className={"p-2 lg:p-12"}>
      <div className={"flex justify-between"}>
        <p
          className={
            "uppercase font-inter font-extralight text-2xl lg:text-3xl"
          }
        >
          Редактирование <br />
          <span className={"font-extrabold"}>Мероприятия</span>
        </p>
      </div>
      <div className={"grid grid-cols-2 items-start"}>
        <div className={""}>
          {schema && event && (
            <Form
              formData={(data as any)?.events}
              schema={schema}
              validator={validator}
              onChange={(e) => console.log(e)}
              onSubmit={(e) => console.log(e)}
              onError={(e) => console.log(e)}
              widgets={{TextInput:TailwindTextInput}}
            />
          )}
          ,{JSON.stringify(data)}
        </div>
      </div>
    </main>
  );
}

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
          Создание <br />
          <span className={"font-extrabold"}>Мероприятия</span>
        </p>
      </div>
      <div className={""}>
        <div className={""}>
          {schema &&(
            <Form
              uiSchema={{
                "id": {
                  "ui:widget": "hidden"
                },
                "name": {
                  "ui:autofocus": true,
                  "ui:emptyValue": ""
                },
                "date": {
                  "ui:widget": "date"
                },
                "dateStart": {
                  "ui:widget": "date-time"
                },
                "dateEnd": {
                  "ui:widget": "date-time"
                },
                "halls": {
                  "items": {
                    "program": {
                      "substages": {
                        "items": {
                          "description": {
                            "ui:widget": "textarea"
                          }
                        }
                      }
                    }
                  }
                },
                "prices": {
                  "items": {
                    "date": {
                      "ui:widget": "date"
                    }
                  }
                },
                "description": {
                  "ui:widget": "textarea"
                }
              }}
              schema={schema}
              validator={validator}
              onChange={(e) => console.log(e)}
              onSubmit={(e) => {
                console.log(e);
                let temp=e.formData
                temp.dateEnd=new Date(temp.dateEnd)
                const {_id,__v,createdAt,updatedAt,...fd} =  temp;
                 eden.event.create.post(fd);
              }}
              onError={(e) => console.log(e)}
            //   widgets={{TextInput:TailwindTextInput}}
            />
          )}
          {/* <pre className="text-xs">{JSON.stringify(data,null,2)}</pre> */}
        </div>
      </div>
    </main>
  );
}

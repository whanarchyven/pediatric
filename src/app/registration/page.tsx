"use client";
import React, { useEffect, useState } from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import { motion } from "framer-motion";
import {redirect, useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import {
  Mousewheel,
  EffectCoverflow,
  Pagination,
  Autoplay,
  EffectCards,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";
import BackButton from "@/components/BackButton";
import { eden } from "@/helpers/sdk";

export default function Home() {
  const images = "/pages/main";

  const [checkboxRadio, setCheckboxRadio] = useState("yes");
  const [personal, setPersonal] = useState(false);

  const [sended, setSended] = useState(false);

  const router=useRouter()

  const fieldset = [
    {
      type: "text",
      title: "Фамилия",
      key: "lastName",
      placeholder: "Иванов", // Пример заполнения
    },
    {
      type: "text",
      title: "Имя",
      key: "firstName",
      placeholder: "Иван", // Пример заполнения
    },
    {
      type: "text",
      title: "Отчество",
      key: "middleName",
      placeholder: "Иванович", // Пример заполнения
    },
    {
      type: "text",
      title: "Номер телефона",
      key: "phoneNumber",
      placeholder: "+7 900 123 45 67", // Пример заполнения
    },
    {
      type: "text",
      title: "Специальность",
      key: "specialty",
      placeholder: "Дерматолог", // Пример заполнения
    },
    {
      type: "email",
      title: "Email",
      key: "email",
      placeholder: "example@mail.ru", // Пример заполнения
    },
    {
      type: "text",
      title: "Город",
      key: "city",
      placeholder: "Москва", // Пример заполнения
    },
    {
      type: "text",
      title: "Место работы",
      key: "workplace",
      placeholder: "Городская клиника", // Пример заполнения
    },
    {
      type: "text",
      title: "Должность",
      key: "position",
      placeholder: "Врач-дерматолог", // Пример заполнения
    },
    {
      type: "password",
      title: "Пароль",
      key: "password",
      placeholder: "••••••••", // Пример заполнения
    },
    {
      type: "password",
      title: "Укажите пароль повторно",
      key: "confirmPassword",
      placeholder: "••••••••",
      required:true,// Пример заполнения
    },
    // {
    //     type: "checkbox",
    //     title: "Вступить в сообщество",
    //     key: "joinCommunity",
    //     placeholder: "" // Нет примера заполнения для чекбокса
    // }
  ];
  const [fields, setFields] = useState({ joinCommunity: true } as any);
  const [error, setError] = useState("");

  const doReg = () => {
    if(personal){
      if(Object.entries(fields).length==12){
        if(fields.confirmPassword==fields.password){
          // console.log(Object.entries(fields))
          // alert('registered')
          eden.auth.signUp.post(fields).then((d) => {
            if (d.data?.error){
              setError(d.data.error)
            }
            else{
              router.push('/login')
            }
          })
        }
        else{
          alert('Пароли не совпадают')
        }
      }
      else{
        alert('Заполните все необходимые поля')
      }
    }
    else{
      alert('Необходимо принять соглашение о персональных данных')
    }
  };

  return (
    <main className={"overflow-x-hidden"}>
      {/*ПЕРВЫЙ БЛОК*/}
      <div
        className={
          "sm:h-[700px] sm:pt-0 pt-12 px-[20px] sm:pl-[140px] sm:pr-[70px] flex flex-col justify-center overflow-hidden bg-cover relative bg-[url('/pages/main/results_bg.png')]"
        }
      >
        <div
          className={
            "grid sm:grid-cols-7 grid-cols-1 items-center h-full gap-2"
          }
        >
          <div className={"sm:col-span-4 flex flex-col gap-10"}>
            <BackButton></BackButton>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={
                "sm:text-5xl uppercase text-2xl font-extralight text-white"
              }
            >
              Регистрация
              <br />
              <span className={"font-extrabold"}>
                Нового участника общества
              </span>
            </motion.p>
          </div>
          <div
            className={
              "sm:col-span-3 sm:mt-0 mt-10 h-full relative flex items-center justify-center"
            }
          >
            <img
              className={"sm:absolute bottom-0"}
              src={`/pages/main/results_doctor_sprite.svg`}
            />
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={"absolute bottom-0"}
              src={`/doctor.png`}
            />
          </div>
        </div>

        <img
          className={"absolute left-0 bottom-0"}
          src={`/pages/main/results_bottom_offset.png`}
          alt={""}
        ></img>
      </div>
      <div
        className={
          "bg-white py-12 items-center sm:px-[140px] gap-20 grid px-[20px] grid-cols-1 sm:grid-cols-7"
        }
      >
        <div className={"w-full col-span-4 flex flex-col gap-6"}>
          <p className={"text-xl sm:text-3xl font-extralight uppercase"}>
            Заполните <br />{" "}
            <span className={"font-extrabold"}>регистрационную анкету</span>
          </p>
          <form className={"w-full flex flex-col gap-6"}>
            {fieldset.map((f) => (
              <div className={"flex flex-col gap-2 w-full"} key={f.key}>
                <p className={"text-sm sm:text-xl font-light"}>
                  {f.title}
                  <sup className={"text-red "}>*</sup>
                </p>
                <input
                key={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  onChange={(e) =>
                    setFields((flds: any) => ({
                      ...flds,
                      [f.key]: e.target.value,
                    }))
                  }
                  className={
                    "w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green-two"
                  }
                  name={f.key}
                />
              </div>
            ))}

            <div className={"flex mt-10 flex-col gap-2 w-full"}>
              <p className={"text-2xl font-light"}>ВСТУПИТЬ В СООБЩЕСТВО</p>
              <div className={"flex items-center gap-12"}>
                <div
                  className={"flex cursor-pointer items-center gap-3"}
                  onClick={() => {
                    setCheckboxRadio("yes");
                  }}
                >
                  <div
                    className={
                      "w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center"
                    }
                  >
                    {checkboxRadio == "yes" ? (
                      <div
                        className={
                          "w-1/2 aspect-square rounded-full bg-green-two"
                        }
                      ></div>
                    ) : null}
                  </div>
                  <p className={"font-medium"}>ДА</p>
                </div>
                <div
                  className={"flex cursor-pointer items-center gap-3"}
                  onClick={() => {
                    setCheckboxRadio("no");
                  }}
                >
                  <div
                    className={
                      "w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center"
                    }
                  >
                    {checkboxRadio == "no" ? (
                      <div
                        className={
                          "w-1/2 aspect-square rounded-full bg-green-two"
                        }
                      ></div>
                    ) : null}
                  </div>
                  <p className={"font-medium"}>НЕТ</p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col gap-2 w-full"}>
              <p className={"text-xs font-light"}>
                Текущий сайт защищен reCAPTCHA от Google. Порядок защиты
                персональных данных и условия использования сервиса соблюдены.
              </p>
              <div className={"flex items-center gap-12"}>
                <div
                  className={"flex cursor-pointer items-center gap-3"}
                  onClick={() => {
                    setPersonal(!personal);
                  }}
                >
                  <div
                    className={
                      "w-6 aspect-square rounded-md border-2 border-green-two flex justify-center items-center"
                    }
                  >
                    {personal ? (
                      <div
                        className={
                          "w-1/2 aspect-square rounded-full bg-green-two"
                        }
                      ></div>
                    ) : null}
                  </div>
                  <p className={"font-light"}>
                    Даю согласие на <a target={'_blank'} href={'/Соглашение_о_персональных_данных.pdf'} className={'underline'}>обработку персональных данных</a>
                  </p>
                </div>
              </div>
            </div>
            <div className={"flex flex-col mt-5 gap-2 w-full"}>
              <div
                onClick={() => {
                  setSended(true);
                  doReg();
                }}
                className={
                  "w-full p-3 flex items-center justify-center font-extrabold uppercase cursor-pointer rounded-md text-xl text-white bg-green-two"
                }
              >
                {sended
                  ? "Спасибо, заявка отправлена на проверку"
                  : "Регистрация"}
              </div>
            </div>
          </form>
        </div>
        <div
          className={
            "hidden sm:flex flex-col col-span-3 justify-between items-center gap-20 h-full"
          }
        >
          <div className={"w-full"}>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={"rounded-lg object-cover w-full aspect-square"}
              src={`${images}/feautures/1.png`}
            />
          </div>
          <div className={"w-full"}>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={"rounded-lg object-cover w-full aspect-square"}
              src={`${images}/feautures/2.png`}
            />
          </div>
          <div className={"w-full"}>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={"rounded-lg object-cover w-full aspect-square"}
              src={`${images}/feautures/3.png`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

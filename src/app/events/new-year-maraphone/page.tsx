"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter, useSearchParams} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";


import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';


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
    EffectFlip
} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";
import {classList} from "@/helpers/classList";
import SpeakersSlider from "@/components/SpeakersSlider";
import News from "@/components/News";
import Partners from "@/components/Partners";
import PopUp from "@/components/PopUp";
import compareDates from "@/helpers/compareDates";
import ConfirmForm from "@/components/ConfirmForm";
import BackButton from "@/components/BackButton";
import {eden} from "@/helpers/sdk";
import QRCode from "react-qr-code";
import Partners11 from "@/components/Partners11";
import {undefined} from "zod";
import Image from "next/image";

export const dynamic = "force-dynamic"

export default function Page({params}: any) {

    const router = useRouter()
    const images = '/pages/events'

    //temp data


    const id = params?.id
    const [event, setEvent] = useState<{
        id?: string | undefined;
        description?: string | undefined;
        link?: string | undefined;
        dateEnd?: Date | undefined;
        onlinePrice?: number | undefined;
        offlinePrice?: number | undefined;
        prices?: {
            date: string;
            online: number;
            offline: number;
        }[] | undefined;
        isOnlyOnline?: boolean | undefined;
        isPassed?: boolean | undefined;
        isStream?: boolean | undefined;
        type: string;
        date: string;
        format: string;
        name: string;
        dateStart: Date;
        timePeriod: string;
        place: string;
        participants: number;
        layoutBg: string;
        avatar: string;
        announcement: string;
        speakers: {
            post: string;
            description: string;
            name: string;
            contact: string;
            photo: string;
        }[];
        halls: {
            name: string;
            program: Array<{
                timePeriod?: string | undefined;
                sponsor?: string | undefined;
                speaker?: string | undefined;
                substages?: {
                    description?: string | undefined;
                    sponsor?: string | undefined;
                    name: string;
                    timePeriod: string;
                }[] | undefined;
                name: string;
            }>;
            streamLink?: string
        }[];
    }>({
        id: "new-year-maraphone",
        type: "Марафон",
        date: "18.12.2023",
        dateStart: new Date("2023-12-18T05:30:00.000Z"),
        timePeriod: "18.12.2023 - 24.12.2023",
        name: "Новогодний марафон: Сказки о главном",
        place: "Официальный сайт Общества детских дерматологов, закрытый чат в TELEGRAM-канале",
        format: "онлайн",
        participants: 1243,
        layoutBg: "/pages/main/sliderBackgrounds/new_year.png",
        avatar: "/pages/events/Telegram.png",
        announcement: "Данная обучающая программа направлена на повышение квалификации врачей- специалистов с целью улучшения оказания специализированной помощи детям, страдающих кожными заболеваниями.",
        description: "В рамках научно-образовательного проекта, будет обсуждена роль мультидисциплинарного подхода и освещены современные методы лечения, а также профилактики заболеваний. В ходе мероприятия всем участникам будут предоставлены видео-уроки, адаптированные видеоклипы по тематике урока, интерактивные задачи, брошюры, наглядные пособия, тестовый контроль, а также прямые эфиры со спикером и модератором.",
        speakers: [
            {
                "name": "Мурашкин Николай Николаевич",
                "post": "ПРЕЗИДЕНТ",
                "contact": "-",
                description: "Руководитель НИИ детской дерматологии,Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России",
                "photo": "/pages/events/murashkin.png"
            },
            {
                "name": "Аравийская Елена Александровна",
                "post": "Профессор",
                "contact": "-",
                description: "Профессор кафедры дерматовенерологии с клиникой Первого Санкт-Петербургского ГМУ, руководитель Последипломного цикла обучения  по косметологии для врачей. Член Совета директоров Европейской академии дерматологии и венерологии, член Правления Санкт-Петербургского  общества дерматовенерологов, почетный член Общества дерматологов Франции и Сербии.",
                "photo": "/pages/main/employers/araviyskaya.png"
            },
            {
                "name": "Феденко Елена Сергеевна",
                "post": "Доктор медицинских наук",
                "contact": "-",
                description: "Заведующая отделением аллергии и иммунопатологии кожи ФГБУ «ГНЦ Институт иммунологии» ФМБА России.",
                "photo": "/pages/main/employers/fedenko.png"
            },
            {
                "name": "Иванов Роман Александрович",
                "post": "Кандидат медицинских наук",
                "contact": "-",
                description: "Врач-дерматовенеролог отделения дерматологии и аллергологии  ФГАУ «Национальный медицинский  исследовательский центр здоровья детей» Минздрава России, научный сотрудник лаборатории патологии кожи у детей отдела научных исследований  в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России. Член Европейского общества детских  дерматологов (European Society for Pediatric Dermatology).",
                "photo": "/pages/main/employers/ivanov.png"
            }
        ],
        halls: [
            {
                program: [
                    {
                        substages: [
                            {
                                name: "Лекция 1 ",
                                timePeriod: "09:00 ",
                                description: "Тонкости и нюансы назначения ингибиторов JAK при атопическом дерматите у детей: о чем нужно помнить всегда» (д.м.н., профессор Мурашкин Н.Н.) ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Интересный факт ",
                                timePeriod: "12:00 "
                            },
                            {
                                name: "Интерактивная клиническая задача №1 ",
                                timePeriod: "15:00 ",
                                sponsor: "ООО \"ЭббВи\"",
                                description: "                  "
                            },
                            {
                                name: "Образовательная брошюра",
                                timePeriod: "15:30 ",
                                sponsor: "ООО \"ЭббВи\"",
                                description: "                  "
                            },
                            {
                                name: "Образовательная брошюра. ",
                                timePeriod: "16:00",
                                sponsor: "ООО \"ЭббВи\"",
                                description: "                 "
                            },
                            {
                                name: "Лекция 2",
                                timePeriod: "17:00",
                                description: "Перед лекцией заставка из мультика  Т2-ассоциированные заболевания: от традиций к перспективам применения ингибиторов JAK (Мурашкин Н.Н. + Феденко Е.С.)",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Главная игра марафона",
                                timePeriod: "18:00"
                            },
                            {
                                name: "Образовательный ролик",
                                timePeriod: "18:30"
                            },
                            {
                                name: "Игра в ассоциации - новый формат",
                                timePeriod: "19:00"
                            },
                            {
                                name: "Заполнение новогоднего журнала",
                                timePeriod: "20:00"
                            }
                        ],
                        "name": "День 1. ",
                        "timePeriod": "18.12 "
                    },
                    {
                        substages: [
                            {
                                name: "Лекция 1",
                                timePeriod: "09:00",
                                description: "Проблема экземы кистей рук у пациентов детского возраста, страдающих атопическим дерматитом: современные пути решения (д.м.н., профессор Мурашкин Н.Н.) ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Образовательный ролик.",
                                timePeriod: "10:00",
                                description: "                        ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Интересный факт ",
                                timePeriod: "11:00"
                            },
                            {
                                name: "Ответ на клиническую на задачу №1",
                                timePeriod: "12:00",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Клиническая задача №2  ",
                                timePeriod: "13:00 ",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Клиническая брошюра 2",
                                timePeriod: "13:30 ",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Образовательная брошюра.",
                                timePeriod: "15:00",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Лекция 2 ",
                                timePeriod: "16:00 ",
                                description: "Возможности системной терапии атопического дерматита: как определиться с выбором? (к.м.н. Иванов Р.А.)",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Образовательная брошюра 2",
                                timePeriod: "16:30 "
                            },
                            {
                                name: "Главная игра марафона. ",
                                timePeriod: "17:00 "
                            },
                            {
                                name: "Образовательный ролик ",
                                timePeriod: "18:00 "
                            },
                            {
                                name: "Игра в ассоциации ",
                                timePeriod: "19:00 "
                            },
                            {
                                name: "Заполнение новогоднего журнала ",
                                timePeriod: "20:00 "
                            }
                        ],
                        "name": "День 2.",
                        "timePeriod": "19.12"
                    },
                    {
                        substages: [
                            {
                                name: "Лекция 1   ",
                                timePeriod: "09:00 ",
                                description: "Бремя зуда при атопическом дерматите у детей: в поисках эффективного лечения (Мурашкин Н.Н. + Феденко Е.С.)",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Интересный факт про сказку ",
                                timePeriod: "11:00"
                            },
                            {
                                name: "Ответ на клиническую задачу №2 ",
                                timePeriod: "12:00 ",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Образовательный ролик",
                                timePeriod: "12:30 ",
                                description: "           ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                timePeriod: "13:00",
                                name: "Клиническая задача №3 ",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Образовательная брошюра.",
                                timePeriod: "15:00 ",
                                sponsor: "ООО \"ЭббВи\"",
                                description: "             "
                            },
                            {
                                name: "Лекция 2",
                                timePeriod: "17:00",
                                description: "«Переключение» таргетной терапии: когда, как и почему? (к.м.н. Иванов Р.А.)",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Главная игра марафона.",
                                timePeriod: "18:00"
                            },
                            {
                                name: "Образовательная брошюра ",
                                timePeriod: "18:30 ",
                                description: "       ",
                                sponsor: "ООО \"ЭббВи\""
                            },
                            {
                                name: "Игра в ассоциации ",
                                timePeriod: "19:00 "
                            },
                            {
                                name: "Заполнение новогоднего журнала",
                                timePeriod: "20:00 "
                            }
                        ],
                        "name": "День 3",
                        "timePeriod": "20.12 "
                    },
                    {
                        substages: [
                            {
                                name: "Лекция 1",
                                timePeriod: "09:00",
                                description: "Жизнь с акне: состояние кожи в детстве как корень психических расстройств и социальной дезадаптации (д.м.н., профессор Мурашкин Н.Н.)"
                            },
                            {
                                name: "Ответ на клиническую  задачу №3 ",
                                timePeriod: "11:00"
                            },
                            {
                                name: "Клиническая задача №4 по акне «Множество обликов акне»",
                                timePeriod: "12:00"
                            },
                            {
                                name: "Лекция 2 ",
                                timePeriod: "15:00 ",
                                description: "Акне: update. Часть 1. (д.м.н., профессор Аравийская Е.А.) "
                            },
                            {
                                name: "Главная игра марафона",
                                timePeriod: "17:00 "
                            },
                            {
                                name: "Игра в ассоциации",
                                timePeriod: "19:00 "
                            },
                            {
                                name: "Заполнение новогоднего журнала",
                                timePeriod: "20:00 "
                            }
                        ],
                        "name": "День 4",
                        "timePeriod": "21.12 "
                    },
                    {
                        substages: [
                            {
                                name: "Лекция 1 ",
                                timePeriod: "09: 00 ",
                                description: "Многообразие клинических форм акне: особенности течения и тактика лечения (д.м.н., профессор Мурашкин Н.Н.)"
                            },
                            {
                                name: "Ответ на клиническую задачу №1 по акне",
                                timePeriod: "11:00",
                                description: "«Множество обликов акне»"
                            },
                            {
                                name: "Клиническая задача №2  по акне",
                                timePeriod: "12: 00",
                                description: "«Множество обликов акне 2.0»"
                            },
                            {
                                name: "Образовательная брошюра",
                                timePeriod: "13:00"
                            },
                            {
                                name: "Образовательный ролик",
                                timePeriod: "14:00"
                            },
                            {
                                name: "Лекция 2",
                                timePeriod: "16:00 ",
                                description: "Акне: update. Часть 2. (д.м.н., профессор Аравийская Е.А.) "
                            },
                            {
                                name: "Главная игра марафона.",
                                timePeriod: "17:00 "
                            },
                            {
                                name: "Игра в ассоциации",
                                timePeriod: "19:00"
                            },
                            {
                                name: "Заполнение новогоднего журнала",
                                timePeriod: "20:00"
                            }
                        ],
                        "name": "День 5 ",
                        "timePeriod": "22.12 "
                    },
                    {
                        substages: [
                            {
                                name: "Лекция 1",
                                timePeriod: "09:00",
                                description: "Что кроется за термином «постакне»: профилактика и методы коррекции (д.м.н., профессор Мурашкин Н.Н.)"
                            },
                            {
                                name: "Ответ на клиническую задачу №2 по акне",
                                timePeriod: "11:00",
                                description: "«Множество обликов акне 2.0»"
                            },
                            {
                                name: "Клиническая Задача №3 по акне ",
                                description: "«Дерматоскопия в диагностике акне»",
                                timePeriod: "12:00 "
                            },
                            {
                                name: "Лекция 2",
                                timePeriod: "16:00",
                                description: "Межцарственное взаимодействие: роль бактерий и дрожжевых грибов при атопическом дерматите (д.м.н., профессор Мурашкин Н.Н.)"
                            },
                            {
                                name: "Главная игра марафона.",
                                timePeriod: "17:00"
                            },
                            {
                                name: "Игра в ассоциации",
                                timePeriod: "19:00"
                            },
                            {
                                name: "Заполнение новогоднего журнала",
                                timePeriod: "20:00"
                            }
                        ],
                        name: "День 6",
                        timePeriod: "23.12"
                    },
                    {
                        substages: [
                            {
                                name: "Ответ на клиническую задачу №3 по акне",
                                timePeriod: "09:00",
                                description: "«Дерматоскопия в диагностике акне»"
                            },
                            {
                                name: "Лекция по главной игре марафона ",
                                timePeriod: "11:00"
                            },
                            {
                                name: "Прямой эфир ",
                                timePeriod: "16:00"
                            },
                            {
                                name: "Завершение марафона",
                                timePeriod: "18:00 "
                            }
                        ],
                        name: "День 7",
                        timePeriod: "24.12"
                    }
                ],
                name: "Программа марафона"
            }
        ],
        prices: [],
    })

    const [isPopPriceOpen, setIsPopPriceOpen] = useState(false);
    const [isConfirmPopOpen, setIsConfirmPopOpen] = useState(false)

    const [currentPrice, setCurrentPrice] = useState(0);
    const [participationType, setParticipationType] = useState<'online' | 'offline' | 'online-free'>('online');

    const query = useSearchParams().toString();

    const [currentProgram, setCurrentProgram] = useState<{
        name: string,
        program: Array<{
            timePeriod?: string | undefined;
            sponsor?: string | undefined;
            speaker?: string | undefined;
            substages?: {
                description?: string | undefined;
                sponsor?: string | undefined;
                name: string;
                timePeriod: string;
            }[] | undefined;
            name: string;
        }>
    }>();


    const [needPrice, setNeedPrice] = useState<any>({})

    useEffect(() => {
        let nowDate = new Date();
        nowDate.setHours(0, 0, 0, 0)
        let tempPrice = event?.prices ? event?.prices[0] : null
        event?.prices?.map((price, counter) => {
            let lexems = price.date.split('.')
            if (new Date(`${lexems[1]}/${lexems[0]}/${lexems[2]}`) < nowDate && event?.prices && counter + 1 < event?.prices?.length) {
                tempPrice = event?.prices[counter + 1]
            }
        })

        setNeedPrice(tempPrice)

    }, [event]);


    const [registration, setRegistration] = useState<any>()

    const [ticketLink, setTicketLink] = useState('/')


    const [uuid, setUuid] = useState('')

    const [isAdmin, setIsAdmin] = useState(false)

    const [haveAccessToStream, setHaveAccessToStream] = useState(true)

    useEffect(() => {
        eden.user.my.profile.get().then((res) => {

            if (res?.data?.profile?.uuid) {
                setUuid(res.data.profile.uuid)
            }
            setIsAdmin(res?.data?.isAdmin ?? false)

            if (res?.data?.profile?.uuid && event?.id) {
                eden.user.my.participations[event.id].get().then((res) => {

                    if (res.data[0]?.info) setRegistration(res?.data[0])
                    event?.id && eden.user.my.participation[event.id].getTicketLink.get().then((res) => {
                        if (res.data) {
                            setTicketLink(res.data.ticketLink)
                        }
                    }).catch(console.log);
                }).catch(console.log)
            }
        }).catch(e => console.log(e))
    }, [event]);


    const [qrCodeUrl, setQrCodeUrl] = useState()

    useEffect(() => {
        setCurrentProgram(event?.halls[0])
    }, [event]);

    const [currentStream, setCurrentStream] = useState('')

    useEffect(() => {
        if(event?.halls[0]?.streamLink)
        setCurrentStream(event?.halls[0]?.streamLink)
    }, [event]);


    const timeLine = [
        {
            day: '1',
            sponsor:"ООО \"ЭббВи\"",
            materials: [
                {
                    videoName: 'Лекция 1. Тонкости и нюансы назначения ингибиторов JAK при атопическом дерматите у детей: о чем нужно помнить всегда» (д.м.н., профессор Мурашкин Н.Н.)',
                    videoLink: 'https://www.youtube.com/embed/_FF2Gq5wJEk?si=kVY9mURIYHols-FG',
                    docs: [{name: 'Клиническая задача 1', link: '/maraphone/new/Клиническая_задча_День_1.pdf'}, {name: 'Клиническая брошюра 1.', link: '/maraphone/Клинический_случай_1_Макарова_Г_У_.pdf'},
                        {name: 'Применение упадацитиниба', link: '/maraphone/new/1.Применение упадацитиниба.pdf'}]
                },
                {
                    videoName: 'Лекция 2. Т2-ассоциированные заболевания: от традиций к перспективам применения ингибиторов JAK (Мурашкин Н.Н. + Феденко Е.С.)\n',
                    videoLink: 'https://www.youtube.com/embed/mnnNSCIHxRU?si=BbGw2KzGVC7tdivu',
                },
            ],
        },
        {
            day: '2',
            sponsor:"ООО \"ЭббВи\"",
            materials: [
                {
                    videoName: 'Лекция 1. Проблема экземы кистей рук у пациентов детского возраста, страдающих атопическим дерматитом: современные пути решения (д.м.н., профессор Мурашкин Н.Н.)',
                    videoLink: 'https://www.youtube.com/embed/A7Vakf8Q2Gw?si=ImRMLCylOZ1S_-gM',
                    docs: [{name: 'Ответ на клиническую задачу 1', link: '/maraphone/new/Ответ на клиническую задачу 1.pdf'}, {name: 'Клиническая задача 2.', link: '/maraphone/new/Клиническая задача 2.pdf'}, {name: 'Клиническая брошюра 2', link: '/maraphone/Клинический_случай_2_Камаев_А_В_.pdf'}, {name: 'Образовательная брошюра', link: '/maraphone/Брошюра_по_безопасности_РАНВЭК_Скрининг_и_мониторинг_2023_FINAL.pdf'}]
                },
                {
                    videoName: 'Лекция 2. Возможности системной терапии атопического дерматита: как определиться с выбором? (к.м.н. Иванов Р.А.)\n',
                    videoLink: 'https://www.youtube.com/embed/sYTkHEDZR3E?si=9Itn8kgTggFi9I31',
                },
                {
                    videoName: 'Образовательный ролик',
                    videoLink: 'https://www.youtube.com/embed/UIw1HhqMY0k?si=_t9iWpj2psgy_5bU',
                },
            ],
        },
        {
            day: '3',
            sponsor:"ООО \"ЭббВи\"",
            materials: [
                {
                    videoName: 'Лекция 1. Бремя зуда при атопическом дерматите у детей: в поисках эффективного лечения (Мурашкин Н.Н. + Феденко Е.С.)',
                    videoLink: 'https://www.youtube.com/embed/h-W9AsSGCdo?si=gCP6G51ktDP6gqz7',
                    docs: [{name: 'Ответ на клиническую задачу 2', link: '/maraphone/new/Ответ на клиническую задачу 2 .pdf'},{name: 'Клиническая брошюра степени тяжести АтД', link: '/maraphone/new/АтД_Брошюра по индексам_2023_FINAL.pdf'}]
                },
                {
                    videoName: 'Образовательный ролик',
                    videoLink: 'https://www.youtube.com/embed/d2WsbTlLhq8?si=J47R5kIKYQmzqz38',
                    docs: [{name: 'Клиническая задача 3', link: '/maraphone/new/Клиническая задача 3 (2).pdf'},{name: 'Научно-образовательный материал по упадацитинибу', link: '/maraphone/Научно_образовательный_материал_по_упадацитинибу.pdf'}]
                },
                {
                    videoName: 'Лекция 2. Переключение» таргетной терапии: когда, как и почему? (к.м.н. Иванов Р.А.)',
                    videoLink: 'https://www.youtube.com/embed/nWall8_Js08?si=6tfWUp-MeKKqznle',
                    docs: [{name: 'Клиническая брошюра', link: '/maraphone/new/Клинический_случай_3_Шилова_Т_В_.pdf'}]
                },
            ],
        },
        {
            day: '4',
            materials: [
                {
                    videoName: 'Лекция 1. Жизнь с акне: состояние кожи в детстве как корень психических расстройств и социальной дезадаптации (д.м.н., профессор Мурашкин Н.Н.',
                    videoLink: 'https://www.youtube.com/embed/V_B81S1iFSk?si=sd8BAjdF5nsi3hp6',
                    docs: [{name: 'Ответ на клиническую задачу 3', link: '/maraphone/new/Ответ на клиническую задачу 3  (2).pdf'}, {name: 'Клиническая задача 4', link: '/maraphone/Клиническая_задача_Множество_обликов_акне.pdf'}]
                },
                {
                    videoName: 'Лекция 2. Акне: update. Часть 1. (д.м.н., профессор Аравийская Е.А.)',
                    videoLink: 'https://www.youtube.com/embed/Tjgj8WUxCU0?si=Hr4PG7nUbPnv4C5x',
                },
            ],
        },
        {
            day: '5',
            materials: [
                {
                    videoName: 'Лекция 1. Многообразие клинических форм акне: особенности течения и тактика лечения (д.м.н., профессор Мурашкин Н.Н.)',
                    videoLink: 'https://www.youtube.com/embed/LGgm3eDIMIY?si=0hNhe-dprpUObiMa',
                    docs: [{name: 'Ответ на клиническую задачу 4', link: '/maraphone/Ответ_на_клиническую_задачу_Множество_обликов_акне.pdf'}, {name: 'Клиническая задача 5', link: '/maraphone/Клиническая_задача_Множество_обликов_акне_2_0.pdf'}]
                },
                {
                    videoName: 'Лекция 2. Акне: update. Часть 2. (д.м.н., профессор Аравийская Е.А.)',
                    videoLink: 'https://www.youtube.com/embed/29i1t7dPGiQ?si=dyhQmBkengjrgpBt',
                    docs: [{name: 'Образовательная брошюра', link: '/maraphone/Lipikar.pdf'},]
                },
            ],
        },
        {
            day: '6',
            materials: [
                {
                    videoName: 'Лекция 1. Что кроется за термином «постакне»: профилактика и методы коррекции (д.м.н., профессор Мурашкин Н.Н.)',
                    videoLink: 'https://www.youtube.com/embed/gKU2tT3A8qk?si=mYF994-RCWEakEx5',
                    docs: [{name: 'Ответ на клиническую задачу 5', link: '/maraphone/Ответ_на_клиническую_задачу_Множество_обликов_акне_2_0.pdf'}, {name: 'Клиническая задача 6', link: '/maraphone/Клиническая задача №3 .pdf'}]
                },
                {
                    videoName: 'Лекция 2. Межцарственное взаимодействие: роль бактерий и дрожжевых грибов при атопическом дерматите (д.м.н., профессор Мурашкин Н.Н.)',
                    videoLink: 'https://www.youtube.com/embed/4UGtYOIjvQg?si=14G3o9SlaK8Xb8t1',
                },
            ],
        },
        {
            day: '7',
            materials: [
                {
                    docs: [{name: 'Ответ на клиническую задачу 6', link: '/maraphone/Ответ на клиническую задачу №3.pdf'}, {name: 'Главная игра марафона', link: '/maraphone/Ответ на главную игру Марафона.pdf'}]
                },
            ],
        }

    ]

    const [currentDay, setCurrentDay] = useState(timeLine[0])


    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div
                className="lg:min-h-screen overflow-hidden py-20 lg:py-8 bg-cover relative">
                <div className={'w-full h-full absolute left-0 top-0 z-[-2]'}>
                    <img className={'w-full h-full object-cover'} src={event?.layoutBg}/>
                </div>
                <div className={'w-full h-full absolute green-gradient opacity-50 left-0 top-0 z-[-1]'}>

                </div>
                <motion.div
                    className={'w-full lg:min-h-screen h-auto px-[20px] lg:px-[140px] grid grid-cols-1 lg:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 lg:mt-0 sm:mt-20 flex flex-col gap-6 sm:items-start lg:justify-center'}>
                        <BackButton></BackButton>
                        <div className={'flex gap-4 items-center'}>
                            <div
                                className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                {event?.type}
                            </div>
                        </div>
                        <div className={'flex items-center gap-7'}>
                            <p className={'text-white leading-[100%] opacity-50'}>{event?.date}</p>
                            <div className={'h-full w-[2px] bg-white opacity-50'}>

                            </div>
                            <p className={'text-white leading-[100%] opacity-50'}>{event?.timePeriod}</p>
                        </div>
                        <p className={'text-white text-2xl sm:text-3xl'}>{event?.name}</p>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}><strong>Место проведения:</strong> Официальный сайт общества детских дерматологов, <a href={'https://www.pediatric-dermatology.ru'} className={'underline font-bold'}>https://www.pediatric-dermatology.ru</a><br/> закрытый чат в Telegram- канале
                                </p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}>
                                    <strong>Формат: </strong> {event?.format.replace('офлайн', 'очное участие')}</p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}>
                                    <strong>Зарегистрировались</strong> {event?.participants} участников</p>
                            </div>
                        </div>
                        <Link href={'https://t.me/+98oUoQXA70Y1MzUy'}>
                            <div
                                className={'bg-white text-lg flex items-center justify-center p-3 px-5 rounded-md cursor-pointer hover:opacity-100 transition-all duration-300 opacity-50 text-black'}>
                                Подтвердить участие
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-0.5px] sm:bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>
            <div
                className={'bg-white items-center py-12 px-[20px] grid-cols-1 lg:px-[140px] gap-20 grid lg:grid-cols-2'}>
                <img className={'w-full aspect-square col-span-1 object-cover rounded-xl'} src={event?.avatar}/>
                <div className={'flex flex-col gap-6 items-start'}>
                    <p className={'uppercase font-extralight text-3xl sm:text-5xl text-black'}>Информация
                        <br/><span className={'font-extrabold'}>о мероприятии</span></p>
                    <p className={'font-bold uppercase text-green xl:text-3xl text-xl'}>
                        Анонс
                    </p>
                    <p className={'font-normal xl:text-lg text-black'}>
                        {event?.announcement}
                    </p>
                    {event?.description ? <p className={'font-bold uppercase text-green xl:text-3xl text-xl'}>
                        Описание
                    </p> : null}
                    {event?.description ? <p className={'font-normal xl:text-lg text-black'}>
                        {event?.description}
                    </p> : null}
                </div>
            </div>
            {event?.speakers ? <div
                className={'relative green-gradient overflow-hidden px-[20px] pt-12 sm:h-[900px] flex flex-col items-start sm:pl-[70px] sm:px-[140px]'}>
                <img className={'absolute asset w-full z-50 left-0 top-[-0.5px] sm:top-0'}
                     src={'/about_us_offset_top.png'}/>
                <p className={'text-xl sm:text-5xl sm:px-0 px-[20px] sm:absolute sm:top-[140px] sm:left-[195px] uppercase font-extralight text-white'}>Спикеры <span
                    className={'font-extrabold'}></span></p>
                <SpeakersSlider speakers={event?.speakers}></SpeakersSlider>
                <img className={'absolute w-full asset left-0 z-50 bottom-[-0.5px]'} src={'/about_us_offset_bot.png'}/>
            </div> : null}


            <div className={'bg-white py-12 px-[20px] lg:px-[140px]'}>
                <p className={'uppercase font-extralight text-2xl lg:text-5xl text-black'}>Новогодний марафон
                    <br/><span className={'font-extrabold'}>День {currentDay.day} {currentDay.sponsor?'При поддержке компании '+currentDay.sponsor+'':''}</span></p>

                <div className={'flex mt-5 items-center lg:overflow-x-hidden overflow-x-scroll justify-between relative w-full gap-4'}>
                    {timeLine.map((item) => {
                        return (
                            <div key={item.day} onClick={() => {
                                setCurrentDay(item)
                            }}
                                 className={classList('p-3 z-[20] relative whitespace-nowrap rounded-full flex items-center justify-center font-bold cursor-pointer aspect-square', currentDay.day == item.day ? 'bg-green text-white' : 'border-2 border-green bg-white text-black')}>
                                День {item.day}
                            </div>
                        )
                    })}
                    <div className={'h-0.5 w-full bg-green z-[0] absolute left-0'}>

                    </div>
                </div>

                <div className={'mt-12'}>
                    {currentDay.materials.map((item,counter) => {
                        return (
                            <div key={counter} className={'w-full my-12'}>
                                {item.videoName?<div className={'flex flex-col gap-3'}>
                                    <p className={'sm:text-2xl font-bold'}>{item.videoName}</p>
                                    <iframe width="100%" height="700"
                                            src={item.videoLink}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </div>:null}
                                {item.docs?
                                    <div className={'grid mt-12 grid-cols-1 sm:grid-cols-2 gap-12'}>
                                        {item.docs.map((doc)=>{
                                            return(
                                                <div key={doc.name} onClick={()=>{window.open(doc.link)}} className={'flex cursor-pointer items-center justify-center rounded-lg bg-green font-bold text-white p-4'}>
                                                    {doc.name}
                                                </div>
                                            )
                                        })}
                                    </div>:null}
                            </div>
                        )
                    })}
                </div>

            </div>

            {currentProgram ? <div className={'bg-white py-12 px-[20px] lg:px-[140px]'}>
                <p className={'uppercase font-extralight text-2xl lg:text-5xl text-black'}>Программа
                    <br/><span className={'font-extrabold'}>Конференции</span></p>

                <div className={'flex mt-20 items-center sm:overflow-x-hidden overflow-x-scroll max-w-full gap-16'}>
                    {event?.halls.map((hall, counter) => {
                        return (
                            <div key={counter} onClick={() => {
                                setCurrentProgram(hall)
                            }}
                                 className={classList('flex cursor-pointer items-center whitespace-nowrap xl:text-2xl font-bold justify-center', currentProgram.name == hall.name ? 'border-b-2 border-green-two text-green-two' : 'text-black')}>
                                {hall.name}
                            </div>
                        )
                    })
                    }
                </div>
                <div className={'flex mt-20 flex-col gap-14'}>
                    {currentProgram.program.map((item, counter) => {
                        return (
                            <div key={counter} className={'flex gap-8 flex-col'}>
                                <div
                                    className={'flex lg:grid lg:grid-cols-12 gap-2 lg:gap-6 flex-col lg:flex-row items-start'}>
                                    {item.timePeriod ? <div className={'col-span-2 mr-4 flex items-center gap-2'}>
                                        <img className={'w-4 lg:w-6 aspect-square'} src={`${images}/time.svg`}/>
                                        <div
                                            className={'text-lg lg:text-2xl text-green-two whitespace-nowrap contents font-bold'}>{item.timePeriod}</div>
                                    </div> : null}
                                    <div
                                        className={'text-lg col-span-10 lg:text-2xl whitespace-pre-wrap lg:text-justify font-bold'}>{item.name}</div>
                                </div>
                                {item.speaker ? <div
                                    className={'bg-[#DBEAE8] text-lg p-3 lg:px-14 lg:p-6 lg:text-xl rounded-lg flex items-center justify-start'}>
                                    {item?.sponsor ?
                                        <p>{item.speaker}<span
                                            className={'font-bold'}><br/>При поддержке компании {item.sponsor}</span>
                                        </p> : item.speaker}
                                </div> : null}
                                {item.substages ?
                                    <div className={'p-3 lg:p-8'}>
                                        {item.substages.map((substage, subCounter) => {
                                            if (item.substages) {
                                                return (
                                                    <div key={subCounter} className={'grid grid-cols-12 items-start'}>
                                                        <div
                                                            className={'col-span-1 flex relative items-center h-full flex-col justify-center'}>
                                                            <div
                                                                className={'lg:w-6 w-4 lg:h-6 h-4 absolute top-0 aspect-square rounded-full bg-green-two'}>

                                                            </div>
                                                            <div className={'h-full w-[2px] bg-green-two'}>

                                                            </div>
                                                        </div>
                                                        <div
                                                            className={classList('col-span-11 flex lg:gap-0 gap-3 h-fit flex-col', subCounter < item?.substages?.length - 1 ? 'pb-6 lg:pb-14' : '')}>
                                                            <p className={'lg:text-2xl text-lg w-full text-green-two contents font-bold'}>{substage?.timePeriod}</p>
                                                            <p className={'lg:text-2xl text-lg w-full text-black font-medium'}>{substage?.name}</p>
                                                            {substage?.description ? <div
                                                                className={'bg-[#DBEAE8] p-3 text-lg lg:px-14 lg:p-6 lg:text-xl rounded-lg flex items-center justify-start'}>
                                                                {substage?.sponsor ?
                                                                    <p>{substage.description}<span
                                                                        className={'font-bold'}><br/>При поддержке компании {substage.sponsor}</span>
                                                                    </p> : substage.description}
                                                            </div> : null}
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        })
                                        }
                                    </div>

                                    : null}
                            </div>
                        )
                    })}
                </div>
            </div> : null}

            <div className={'flex items-center my-10 justify-center'}>
                <div className={'w-1/3  relative'}>
                    <img className={'w-full'} src={'/partners/GALDERMA_LOGO_BLACK_RGB 1.png'} alt={''}/>
                </div>
            </div>



            {event?.date == '11.11.2023' || event?.date == '2023-11-11' ?
                <div className={'my-40 flex px-[20px] lg:px-[140px] items-center flex-col gap-12'}>
                    <motion.p initial={{y: -40, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}
                              className={'uppercase font-extralight text-black lg:text-left text-center lg:text-2xl lg:text-4xl'}>Партнёры <strong
                        className={'font-extrabold'}>Конференции</strong></motion.p>
                    <Partners11></Partners11>
                </div> : null}


            {/*<div className={'bg-[#F2F9F8] relative py-12 lg:py-40 flex items-center px-[20px]'}>*/}
            {/*    <img className={'absolute left-0 -top-1'} src={`/pages/main/about_us_offset.png`}*/}
            {/*         alt={'asset_bottom'}></img>*/}
            {/*    <div className={'w-full'}>*/}
            {/*        <div*/}
            {/*            className={'flex sm:flex-col flex-col gap-8 items-center justify-center sm:items-start sm:justify-between'}>*/}
            {/*            <motion.p initial={{x: -40, opacity: 0}}*/}
            {/*                      whileInView={{x: 0, opacity: 1}}*/}
            {/*                      viewport={{once: true}}*/}
            {/*                      transition={{ease: 'easeInOut', duration: 0.7}}*/}
            {/*                      className={'uppercase sm:pl-[140px] font-extralight text-black sm:text-left text-left text-2xl sm:text-4xl'}>Спонсоры <strong*/}
            {/*                className={'font-extrabold'}>конференции</strong></motion.p>*/}
            {/*            <div className={'sm:px-[40px] w-full '}>*/}
            {/*                <Partners></Partners>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <img className={'absolute left-0 bottom-0'} src={`/pages/main/about_us_offset_bottom.png`}*/}
            {/*         alt={'asset_bottom'}></img>*/}
            {/*</div>*/}

            <div className={'my-12 flex flex-col'}>
                {event?.date == '11.11.2023' || event?.date == '2023-11-11' ?
                    <Link className={' text-dark-green underline mb-12 text-xl font-bold px-[20px] lg:px-[140px]'}
                          target={'_blank'}
                          href={'/kpfile.pdf'}>Коммерческое предложение</Link> : null}
                {event?.date == '11.11.2023' || event?.date == '2023-11-11' ?
                    <div className={'flex flex-col gap-2'}>
                        <p className={'whitespace-pre-wrap mt-2 px-[20px] text-dark-green  lg:px-[140px] font-bold'}>Участие
                            в мероприятии</p>
                        <p className={'whitespace-pre-wrap mt-2 px-[20px] lg:px-[140px] text-black'}>
                            1) Для участия в мероприятии (онлайн-трансляция) необходимо зарегистрироваться на сайте <a
                            className={'font-bold text-green-two'}
                            href={'https://pediatric-dermatology.ru'}>https://pediatric-dermatology.ru</a> (https://pediatric-dermatology.ru/),
                            указав следующие данные: <br/>1. ФИО, <br/>2.Электронный адрес <br/>3. Место работы, <br/>4.
                            Должность, <br/>5. Специальность, <br/>6. Номер телефона. <br/>Учет участников
                            осуществляется с помощью индивидуальной регистрации на интернет-сессию и контроля
                            подключения по IP адресу. Контроль присутствия будет обеспечивать интерактивные опросы через
                            разные временные интервалы. Вход на трансляцию осуществляется не ранее, чем за 2 часа до её
                            начала. При завершении трансляции, сеанс у всех присутствующих прекращается. Инструментами
                            обратной связи являются `&quot;`Чат трансляции`&quot;`. Участниками мероприятия будут
                            признаны слушатели, присутствующие 11 ноября 2023 года (1 день) - не менее 270 минут для
                            программы НМО на трансляции и подтвердившие 5 контролей присутствия из шести. Участникам
                            выполнившим все требования в мероприятии, выдаются индивидуальные коды.
                            <br/><br/>
                            2) Для участия в мероприятии (очное участие) необходимо обязательно предварительно
                            зарегистрироваться на сайте <a className={'font-bold text-green-two'}
                                                           href={'https://pediatric-dermatology.ru'}>https://pediatric-dermatology.ru</a>,
                            (https://pediatric-dermatology.ru/) указав следующие данные: <br/>1. ФИО, <br/>2.Электронный
                            адрес <br/>3. Место работы, <br/>4. Должность, <br/>5. Специальность, <br/>6. Номер
                            телефона. <br/>Перед началом мероприятия, все заранее зарегистрированные лица получат бейджи
                            с последующим контролем присутствия до окончания мероприятия. Участниками мероприятия будут
                            признаны слушатели, присутствующие 11 ноября 2023 года (1 день) по адресу город Москва,
                            кластер `&quot;`Ломоносов`&quot;` (ИНТЦ МГУ Воробьёвы горы, Раменский бульвар, 1) с 10:00 -
                            18:30. Участникам выполнившим все требования в мероприятии, выдаются индивидуальные коды
                        </p>
                    </div> : null}

            </div>

            <div className={'bg-white lg:py-0 py-12 lg:h-[600px]'}>
                <div className={'flex lg:mt-7 items-center px-[20px] lg:px-[140px] justify-center lg:justify-between'}>
                    <motion.p initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}
                              className={'uppercase font-extralight text-black lg:text-left text-left text-2xl lg:text-4xl'}>Другие <strong
                        className={'font-extrabold'}>Мероприятия</strong></motion.p>
                </div>
                <motion.div className={'mt-12 w-full flex px-[20px] lg:px-[40px]'}
                            initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <News></News>
                </motion.div>
            </div>
        </main>
    )
}

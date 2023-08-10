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

export const dynamic = "force-dynamic"

export default function Page({params}:any) {

    const router = useRouter()
    const images = '/pages/events'

    //temp data

    const events = [
        {
            id: 0,
            type: 'Конференция',
            date: '11.11.2023',
            timePeriod: '10:00',
            name: 'IX Всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии»',
            place: 'г.Москва, кластер "Ломоносов"',
            format: 'онлайн + офлайн',
            participants: 175,
            layoutBg:'/pages/main/sliderBackgrounds/2.png',
            avatar: `${images}/temp_avatar.png`,
            announcement: '11 ноября 2023 г.  на площадке новой технологической долины МГУ в центре Москвы для мероприятий цифровой направленности, посвященных прорывным инновациям и новым трендам в мире здравоохранения, состоится главное событие 2023 года - IX Всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии».\n' +
                '\n' +
                'В рамках научной программы конференции будут обсуждаться наиболее актуальные проблемы дерматологии детского возраста, наряду с разбором редких клинических ситуаций и представлением результатов последних мировых научных исследований.\n',
            description: 'Особое внимание будет уделено современному ведению пациентов с генодерматозами, аутоиммунными и аутовоспалительными кожными патологиями, а также дерматоскопической диагностике и тактике лечения различных новообразований кожи у детей. Кроме того, будут рассматриваться современные тенденции терапии атопического дерматита, вульгарных акне и ассоциированных с акне синдромов, андрогенетической и гнездной алопеции. Отдельные доклады посвящены дифференциальной диагностике многочисленных заболеваний кожи у детей, исходя из имеющихся поражений слизистой оболочки полости рта или изменения ногтевых пластин. Также подготовлены интересные сообщения о случаях аутоиммунного прогестеронового дерматита у подростков и различных реакциях кожи, связанных с нанесением татуировок.',
            speakers: [
                {
                    name: 'Мурашкин Николай Николаевич',
                    post: 'ПРЕЗИДЕНТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/murashkin.png`,
                },
                {
                    name: 'Ковалевич Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },
                {
                    name: 'Ковалевич 2 Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },

            ],
            program: [
                {
                    name: 'Открытие конференции',
                    timePeriod: '10:00',
                    speaker: 'Президент «Общества детских дерматологов» Н.Н. Мурашкин. Главный внештатный специалист дерматовенеролог и косметолог МЗ Алтайского края Зав. кафедрой дерматовенерологии, косметологии и иммунологии ФГБОУ ВО АГМУ МЗ РФ д.м.н. Ю.С. Ковалёва',

                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                    substages: [
                        {
                            name: 'Лечение псориаза у детей: реалии и перспективы',
                            timePeriod: '10:45-11:00',
                            description: 'При поддержке компании Johnson&Johnson. Баллы НМО не начисляются'
                        },
                        {
                            name: 'Современные возможности ингибирования ИЛ-17 у детей с псориазом',
                            timePeriod: '11:00-11:15',
                        }
                    ]
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },

            ]

        },
        {
            id: 1,
            type: 'Конференция',
            date: '26.09.2023',
            timePeriod: '10:00',
            name: 'II научно-практическая конференция дерматовенерологов и педиатров Алтайского края и Республики Алтай',
            place: 'г. Барнаул',
            format: 'онлайн + офлайн',
            participants: 175,
            layoutBg:'/АЛТАЙ.jpg',
            avatar: `${images}/temp_avatar.png`,
            announcement: 'В фокусе научной программы конференции обсуждение наиболее актуальных проблем дерматологии детского возраста, таких как атопический дерматит, алопеция, псориаз, генетические болезни кожи, а также инновационные возможности в лечении, диагностике и профилактике заболеваний кожи у детей.',
            description: 'Цель проведения мероприятия — улучшение оказания специализированной помощи детскому населению с хроническими заболеваниями кожи.',
            speakers: [
                {
                    name: 'Мурашкин Николай Николаевич',
                    post: 'ПРЕЗИДЕНТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/murashkin.png`,
                },
                {
                    name: 'Ковалевич Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },
                {
                    name: 'Ковалевич 2 Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },

            ],
            program: [
                {
                    name: 'Открытие конференции',
                    timePeriod: '10:00',
                    speaker: 'Президент «Общества детских дерматологов» Н.Н. Мурашкин. Главный внештатный специалист дерматовенеролог и косметолог МЗ Алтайского края Зав. кафедрой дерматовенерологии, косметологии и иммунологии ФГБОУ ВО АГМУ МЗ РФ д.м.н. Ю.С. Ковалёва',

                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                    substages: [
                        {
                            name: 'Лечение псориаза у детей: реалии и перспективы',
                            timePeriod: '10:45-11:00',
                            description: 'При поддержке компании Johnson&Johnson. Баллы НМО не начисляются'
                        },
                        {
                            name: 'Современные возможности ингибирования ИЛ-17 у детей с псориазом',
                            timePeriod: '11:00-11:15',
                        }
                    ]
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },

            ]

        },
        {
            id: 2,
            type: 'Конференция',
            date: '17-18.10.2023',
            timePeriod: '10:00',
            name: 'I научно-практическая конференция «Дерматологические чтения в педиатрии» в г. Екатеринбург им. Н. П. Тороповой',
            place: 'г. Екатеринбург',
            format: 'онлайн + офлайн',
            participants: 175,
            layoutBg:'/ЕКБ.jpg',
            avatar: `${images}/temp_avatar.png`,
            announcement: 'В ходе конференции обсудят актуальные вопросы и новшества в области детской дерматологии в эпоху индивидуализированной медицины. Будут рассмотрены проблемы профилактики и лечения заболеваний, а также возможные пути решения данных задач.',
            description: 'В программе конференции собраны наиболее актуальные проблемы дерматологии детского возраста, такие как атопический дерматит, акне, системные и генетические болезни кожи, а также будут освещены инновационные возможности в лечении, диагностике и профилактике заболеваний кожи у детей.\n' +
                'Данная обучающая программа направлена на повышение квалификации врачей-специалистов с целью улучшения оказания специализированной медицинской помощи.\n' +
                'Присоединяйтесь и будьте вместе с нами!\n',
            speakers: [
                {
                    name: 'Мурашкин Николай Николаевич',
                    post: 'ПРЕЗИДЕНТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/murashkin.png`,
                },
                {
                    name: 'Ковалевич Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },
                {
                    name: 'Ковалевич 2 Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },

            ],
            program: [
                {
                    name: 'Открытие конференции',
                    timePeriod: '10:00',
                    speaker: 'Президент «Общества детских дерматологов» Н.Н. Мурашкин. Главный внештатный специалист дерматовенеролог и косметолог МЗ Алтайского края Зав. кафедрой дерматовенерологии, косметологии и иммунологии ФГБОУ ВО АГМУ МЗ РФ д.м.н. Ю.С. Ковалёва',

                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                    substages: [
                        {
                            name: 'Лечение псориаза у детей: реалии и перспективы',
                            timePeriod: '10:45-11:00',
                            description: 'При поддержке компании Johnson&Johnson. Баллы НМО не начисляются'
                        },
                        {
                            name: 'Современные возможности ингибирования ИЛ-17 у детей с псориазом',
                            timePeriod: '11:00-11:15',
                        }
                    ]
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },

            ]

        },
        {
            id: 3,
            type: 'Марафон',
            date: '11.09.2022 - 17.09.2022',
            timePeriod: '10:00-18:00',
            name: 'Научно-образовательный квест-марафон «Поэзия детской дерматологии»',
            place: 'г. Москва, ул. Фомина, 154',
            format: 'онлайн + офлайн',
            participants: 175,
            layoutBg:'/pages/main/sliderBackgrounds/2.png',
            avatar: `${images}/temp_avatar.png`,
            announcement: 'В фокусе научной программы конференции обсуждение наиболее актуальных проблем дерматологии детского возраста, таких как атопический дерматит, алопеция, псориаз, генетические болезни кожи, а также инновационные возможности в лечении, диагностике и профилактике заболеваний кожи у детей.',
            description: 'Цель проведения мероприятия — улучшение оказания специализированной помощи детскому населению с хроническими заболеваниями кожи.',
            speakers: [
                {
                    name: 'Мурашкин Николай Николаевич',
                    post: 'ПРЕЗИДЕНТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/murashkin.png`,
                },
                {
                    name: 'Ковалевич Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },
                {
                    name: 'Ковалевич 2 Анастасия Владимировна',
                    post: 'ЭКСПЕРТ',
                    contact: '/',
                    description: 'Руководитель НИИ детской дерматологии,\n' +
                        'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России',
                    photo: `${images}/kovalevich.png`,
                },

            ],
            program: [
                {
                    name: 'Открытие конференции',
                    timePeriod: '10:00',
                    speaker: 'Президент «Общества детских дерматологов» Н.Н. Мурашкин. Главный внештатный специалист дерматовенеролог и косметолог МЗ Алтайского края Зав. кафедрой дерматовенерологии, косметологии и иммунологии ФГБОУ ВО АГМУ МЗ РФ д.м.н. Ю.С. Ковалёва',

                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                    substages: [
                        {
                            name: 'Лечение псориаза у детей: реалии и перспективы',
                            timePeriod: '10:45-11:00',
                            description: 'При поддержке компании Johnson&Johnson. Баллы НМО не начисляются'
                        },
                        {
                            name: 'Современные возможности ингибирования ИЛ-17 у детей с псориазом',
                            timePeriod: '11:00-11:15',
                        }
                    ]
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },
                {
                    name: 'Демонстрация клинических случаев редких состояний и заболеваний кожи у детей (Интерактивное обсуждение)',
                    timePeriod: '10:05-11:15',
                    speaker: 'к.м.н. А.И. Материкин, к.м.н. Р.В. Епишев, Р.А. Иванов, А.А. Савелова',
                },

            ]

        }


    ]


    const id = params.id
    const event = id ? events[Number(id)] : events[0]

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div
                className="min-h-screen overflow-hidden py-12 bg-cover relative">
                <div className={'w-full h-full absolute left-0 top-0 z-[-2]'}>
                    <img className={'w-full h-full object-cover'} src={event.layoutBg}/>
                </div>
                <div className={'w-full h-full absolute green-gradient opacity-50 left-0 top-0 z-[-1]'}>

                </div>
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[140px] grid grid-cols-1 sm:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 sm:mt-0 mt-20 flex flex-col gap-6 sm:items-start  justify-center'}>
                        <div className={'flex gap-4 items-center'}>
                            <div
                                className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                {event.type}
                            </div>
                        </div>
                        <div className={'flex items-center gap-7'}>
                            <p className={'text-white leading-[100%] opacity-50'}>{event.date}</p>
                            <div className={'h-full w-[2px] bg-white opacity-50'}>

                            </div>
                            <p className={'text-white leading-[100%] opacity-50'}>{event.timePeriod}</p>
                        </div>
                        <p className={'text-white text-2xl sm:text-3xl'}>{event.name}</p>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}><strong>Место проведения:</strong> {event.place}</p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}><strong>Формат</strong> {event.format}</p>
                            </div>
                            <div className={'flex items-center gap-2'}>
                                <img className={'w-6 aspect-square'} src={`${images}/placemark.svg`}/>
                                <p className={'text-white text-lg'}>
                                    <strong>Зарегистрировались</strong> {event.participants} участников</p>
                            </div>
                        </div>
                        <div
                            className={'bg-white text-lg flex items-center justify-center p-3 px-5 rounded-md cursor-pointer hover:opacity-100 transition-all duration-300 opacity-50 text-black'}>
                            Подтвердить участие
                        </div>
                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-0.5px] sm:bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>
            <div className={'bg-white sm:h-[854px] items-center py-12 px-[20px] grid-cols-1 sm:px-[140px] gap-20 grid sm:grid-cols-2'}>
                <img className={'w-full aspect-square col-span-1 rounded-xl'} src={event.avatar}/>
                <div className={'flex flex-col gap-6 items-start'}>
                    <p className={'uppercase font-extralight text-3xl sm:text-5xl text-black'}>Информация
                        <br/><span className={'font-extrabold'}>о мероприятии</span></p>
                    <p className={'font-bold uppercase text-green text-xl'}>
                        Анонс
                    </p>
                    <p className={'font-normal text-black'}>
                        {event.announcement}
                    </p>
                    <p className={'font-bold uppercase text-green text-xl'}>
                        Описание
                    </p>
                    <p className={'font-normal text-black'}>
                        {event.description}
                    </p>
                </div>
            </div>
            {/*<div*/}
            {/*    className={'relative green-gradient overflow-hidden px-[20px] pt-12 sm:h-[700px] flex flex-col items-start sm:pl-[70px] sm:px-[140px]'}>*/}
            {/*    <img className={'absolute asset w-full z-50 left-0 top-[-0.5px] sm:top-0'} src={'/about_us_offset_top.png'}/>*/}
            {/*    <p className={'text-xl sm:text-5xl sm:px-0 px-[20px] sm:absolute sm:top-[140px] sm:left-[195px] uppercase font-extralight text-white'}>Спикеры <span*/}
            {/*        className={'font-extrabold'}>Конференции</span></p>*/}
            {/*    <SpeakersSlider speakers={event.speakers}>*/}

            {/*    </SpeakersSlider>*/}
            {/*    <img className={'absolute w-full asset left-0 z-50 bottom-[-0.5px]'} src={'/about_us_offset_bot.png'}/>*/}
            {/*</div>*/}

            {/*<div className={'bg-white py-12 px-[20px] sm:px-[140px]'}>*/}
            {/*    <p className={'uppercase font-extralight text-2xl sm:text-5xl text-black'}>Программа*/}
            {/*        <br/><span className={'font-extrabold'}>Конференции</span></p>*/}
            {/*    <div className={'flex mt-20 flex-col gap-14'}>*/}
            {/*        {event.program.map((item: { name: string, timePeriod: string, speaker: string, substages?: { name: string, timePeriod: string, description: string, }[] }, counter) => {*/}
            {/*            return (*/}
            {/*                <div key={counter} className={'flex gap-8 flex-col'}>*/}
            {/*                    <div className={'flex gap-2 sm:gap-6 flex-col sm:flex-row items-start'}>*/}
            {/*                        <div className={'flex mr-4 items-center gap-2'}>*/}
            {/*                            <img className={'w-4 sm:w-6 aspect-square'} src={`${images}/time.svg`}/>*/}
            {/*                            <div*/}
            {/*                                className={'text-sm sm:text-2xl text-green-two whitespace-nowrap contents font-bold'}>{item.timePeriod}</div>*/}
            {/*                        </div>*/}
            {/*                        <div className={'text-sm sm:text-2xl text-justify font-bold'}>{item.name}</div>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className={'bg-[#DBEAE8] text-sm p-3 sm:px-14 sm:p-6 sm:text-xl rounded-lg flex items-center justify-start'}>*/}
            {/*                        {item.speaker}*/}
            {/*                    </div>*/}
            {/*                    {item.substages ?*/}
            {/*                        <div className={'p-3 sm:p-8'}>*/}
            {/*                            {item.substages.map((substage,subCounter) => {*/}
            {/*                                return (*/}
            {/*                                    <div key={subCounter} className={'grid grid-cols-12 items-start'}>*/}
            {/*                                        <div className={'col-span-1 flex relative items-center h-full flex-col justify-center'}>*/}
            {/*                                            <div className={'sm:w-6 w-4 sm:h-6 h-4 absolute top-0 aspect-square rounded-full bg-green-two'}>*/}

            {/*                                            </div>*/}
            {/*                                            <div className={'h-full w-[2px] bg-green-two'}>*/}

            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className={classList('col-span-11 flex sm:gap-0 gap-3 h-fit flex-col',subCounter<item?.substages?.length-1?'pb-6 sm:pb-14':'')}>*/}
            {/*                                            <p className={'sm:text-2xl text-sm w-full text-green-two contents font-bold'}>{substage?.timePeriod}</p>*/}
            {/*                                            <p className={'sm:text-2xl text-sm w-full text-black font-bold'}>{substage?.name}</p>*/}
            {/*                                            {substage?.description?<div*/}
            {/*                                                className={'bg-[#DBEAE8] p-3 text-sm sm:px-14 sm:p-6 sm:text-xl rounded-lg flex items-center justify-start'}>*/}
            {/*                                                {substage?.description}*/}
            {/*                                            </div>:null}*/}
            {/*                                        </div>*/}
            {/*                                    </div>*/}
            {/*                                )*/}
            {/*                            })*/}
            {/*                            }*/}
            {/*                        </div>*/}

            {/*                        : null}*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={'bg-[#F2F9F8] relative py-12 sm:py-40 flex items-center px-[20px]'}>
                <img className={'absolute left-0 -top-1'} src={`/pages/main/about_us_offset.png`}
                     alt={'asset_bottom'}></img>
                <div className={'w-full'}>
                    <div className={'flex sm:flex-col flex-col gap-8 items-center justify-center sm:items-start sm:justify-between'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}} className={'uppercase sm:pl-[140px] font-extralight text-black sm:text-left text-left text-2xl sm:text-4xl'}>Спонсоры <strong
                            className={'font-extrabold'}>конференции</strong></motion.p>
                        <div className={'sm:px-[40px] w-full '}>
                            <Partners></Partners>
                        </div>
                    </div>
                </div>
                <img className={'absolute left-0 bottom-0'} src={`/pages/main/about_us_offset_bottom.png`}
                     alt={'asset_bottom'}></img>
            </div>
            <div className={'bg-white sm:py-0 py-12 sm:h-[600px]'}>
                <div className={'flex sm:mt-7 items-center px-[20px] sm:px-[140px] justify-center sm:justify-between'}>
                    <motion.p initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}} className={'uppercase font-extralight text-black sm:text-left text-left text-2xl sm:text-4xl'}>Другие <strong
                        className={'font-extrabold'}>Мероприятия</strong></motion.p>
                </div>
                <motion.div className={'mt-12 w-full flex px-[20px] sm:px-[40px]'}
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

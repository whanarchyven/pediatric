"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useParams, useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";
import DatePicker from "react-datepicker";
import {registerLocale, setDefaultLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru)

import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import PublicationTab from "@/components/Publication Tab";
import {eden, useEden} from "@/helpers/sdk";
import "react-datepicker/dist/react-datepicker.css";
import EducationPop from "@/components/EducationPop";
import FormData from "form-data";
import ShowEducationPop from "@/components/ShowEducationPop";
import DragNDrop from "@/components/DragNDrop";
import {uploadFile} from "@/helpers/uploadFile";
import {classList} from "@/helpers/classList";
// import required modules


export default function Home(params: { params: { user_uuid: string } }) {
    const images = '/pages/account'
    const user_uuid = params.params.user_uuid

    const {data} = useEden(() => eden.user[user_uuid].profile.get())

    const {
        lastName,
        firstName,
        middleName,
        phoneNumber,
        email,
        city,
        gender,
        specialty,
        birthDate,
        photoUrl, education, about,interests
    } = data?.profile ?? {} as any;

    console.log(data);

    const [profile, setProfile] = useState({
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        photoUrl: photoUrl ? photoUrl : '/john_doe.svg',
        phoneNumber: phoneNumber ? phoneNumber : 'Не укаазано',
        email: email ? email : 'Не указано',
        city: city ? city : 'Не указано',
        gender: gender ? gender : 'Не указано',
        birthDate: birthDate ? birthDate : 'Не указано',
        specialty: specialty ? specialty : 'Не указано',
        about:about?about:'Не указано',
        interests:interests?interests:'Не указано'
    })

    const mutateProfile = <T extends keyof typeof profile>(key: T, newValue: typeof profile[T]) => {
        let temp = {...profile}
        temp[key] = newValue;
        setProfile({...temp})
    }

    const [educationTemp, setEducationTemp] = useState({
        degree: 'Доктор наук',
        post: 'Профессор',
        colleges: [
            {
                id: 1,
                yearStart: 1992,
                yearEnd: 1996,
                university: 'МГУ',
                faculty: 'Биохимический факультет',
                degree: 'Бакалавриат',
                diploma: '/diplom.pdf'
            },
            {
                id: 2,
                yearStart: 1997,
                yearEnd: 1999,
                university: 'СПБГУ',
                faculty: 'Медицинский факультет',
                degree: 'Магистратура',
                diploma: '/diplom.pdf'
            }
        ]
    })


    const [educationPop, setEducationPop] = useState(false);


    const initializeTempData = () => {
        setProfile({
            lastName: lastName,
            firstName: firstName,
            middleName: middleName,
            photoUrl: photoUrl,
            phoneNumber: phoneNumber,
            email: email,
            city: city,
            gender: gender,
            birthDate: birthDate,
            specialty: specialty,
            about: about,
            interests:interests
        })
    }


    const [workplaces, setWorkplaces] = useState([{
        placeName: 'НЦЗД',
        start: 'Январь 2022',
        end: 'Июнь 2023',
        post: 'врач',
        description: 'С января 2023 года по июнь 2023 года я имел честь работать в Национальном Центре Заболеваний Кожи и Дерматологии (НЦЗД) в Москве в качестве врача-дерматолога. Это был уникальный и захватывающий опыт, который дал мне возможность заботиться о пациентах и применять мои знания и навыки в области дерматологии.\n' +
            '\n' +
            'Моя работа включала в себя следующие обязанности и активности:\n' +
            '\n' +
            'Диагностика и лечение дерматологических заболеваний: Я проводил медицинские осмотры пациентов, ставил диагнозы и разрабатывал планы лечения для различных кожных проблем, включая аллергии, инфекции, экземы, псориаз, акне и другие заболевания.\n' +
            '\n' +
            'Косметологические процедуры: В рамках своей специализации, я также выполнял различные косметологические процедуры, такие как удаление бородавок, лазерная терапия, ботокс-инъекции и химический пилинг, помогая пациентам улучшить состояние и внешний вид своей кожи.\n' +
            '\n' +
            'Образование и консультации: Я предоставлял пациентам подробную информацию о состоянии и лечении, а также советы по уходу за кожей. Образование пациентов и консультации были важной частью моей работы.\n' +
            '\n' +
            'Исследования и академическая деятельность: Я активно участвовал в научных исследованиях в области дерматологии, публиковал статьи и презентовал результаты исследований на конференциях и семинарах.\n' +
            '\n' +
            'Сотрудничество с коллегами: Я работал в команде с другими специалистами в области здравоохранения, включая других врачей, медсестер и ассистентов, чтобы обеспечить лучшее возможное обслуживание пациентов.\n' +
            '\n' +
            'Моя работа в НЦЗД была увлекательным путешествием в мир дерматологии, и я стремился предоставлять высококачественное медицинское обслуживание и поддержку моим пациентам, помогая им достичь здоровой и красивой кожи.'
    }
    ])

    const [isEditor, setIsEditor] = useState(false)

    const updateProfile = async () => {
        eden.user[user_uuid].profile.post({uuid: user_uuid, ...profile}).then((res) => {
            console.log(res)
            setIsEditor(false)
        })
    }

    const [currentEducationShow, setCurrentEducationShow] = useState<typeof education[0]>()
    const [currentEducationShowCounter, setCurrentEducationShowCounter] = useState(1)
    const [educationShowOpen, setEducationShowOpen] = useState(false);

    const [tempPhotoUrl, setTempPhotoUrl] = useState<FileList>()
    const [avatarUpdated,setAvatarUpdated]=useState(false)


    return (
        <main className={'p-12'}>
            {educationPop ? <EducationPop education={education} email={email} user_uuid={
                user_uuid
            } afterPostCallback={() => {
            }} closeFunc={() => {
                setEducationPop(false)
            }}></EducationPop> : null}
            {educationShowOpen ? <ShowEducationPop closeFunc={() => {
                setEducationShowOpen(false)
            }} education={currentEducationShow} counter={currentEducationShowCounter}/> : null}
            <div className={'flex justify-between'}>
                <p className={'uppercase font-inter font-extralight text-3xl'}>Основные данные</p>
                {!isEditor ? <div onClick={() => {
                    initializeTempData();
                    setIsEditor(true)
                }} className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                    <img className={'w-4 aspect-square'} src={`${images}/edit.svg`}/>
                    <p className={'text-white font-inter font-normal'}>Редактировать профиль</p>
                </div> : <div onClick={async () => {
                    updateProfile();
                }} className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                    <img className={'w-6 aspect-square'} src={`/done.svg`}/>
                    <p className={'text-white font-inter font-normal'}>Сохранить изменения</p>
                </div>}
            </div>
            <div className={'w-full mt-10 grid grid-cols-2'}>
                <div className={' flex flex-col pr-8 gap-16 border-green'}>
                    <div className={'flex gap-8 items-start'}>
                        {isEditor ? <div className={'w-1/4 relative'}>{photoUrl ?
                            <div><img className={'rounded-full aspect-square object-cover w-full'}
                                      src={photoUrl}/>
                                <div
                                    className={'absolute z-[30] bg-white w-full h-full top-0 left-0 bg-opacity-50 backdrop-blur-sm flex flex-col gap-5 items-center justify-center rounded-full'}>
                                    <DragNDrop setFile={setTempPhotoUrl}/>
                                    <div
                                        className={classList('flex justify-center items-center rounded-lg p-2 cursor-pointer font-bold border-2 border-green-two',avatarUpdated?'bg-green-two text-white':'bg-white text-green-two')}
                                        onClick={async () => {
                                            if (tempPhotoUrl) {
                                                const photo = await uploadFile(tempPhotoUrl)
                                                mutateProfile('photoUrl', photo)
                                                setAvatarUpdated(true)
                                            }
                                        }}>{avatarUpdated?'Обновлено!':'Обновить'}
                                    </div>
                                </div>
                            </div> :
                            <div><img className={'rounded-full aspect-square object-cover w-full'}
                                      src={`/john_doe.svg`}/>
                                <div
                                    className={'absolute z-[30] bg-white w-full h-full top-0 left-0 bg-opacity-50 backdrop-blur-sm flex flex-col gap-5 items-center justify-center rounded-full'}>
                                    <DragNDrop setFile={setTempPhotoUrl}/>
                                    <div
                                        className={classList('flex justify-center items-center rounded-lg p-2 cursor-pointer font-bold border-2 border-green-two',avatarUpdated?'bg-green-two text-white':'bg-white text-green-two')}
                                        onClick={async () => {
                                            if (tempPhotoUrl) {
                                                const photo = await uploadFile(tempPhotoUrl)
                                                mutateProfile('photoUrl', photo)
                                                setAvatarUpdated(true)
                                            }
                                        }}>{avatarUpdated?'Обновлено!':'Обновить'}
                                    </div>
                                </div>
                            </div>}
                        </div> : <div className={'w-1/4'}>
                            {photoUrl ? <img className={'rounded-full aspect-square object-cover w-full'}
                                             src={photoUrl}/> :
                                <img className={'rounded-full aspect-square object-cover w-full'}
                                     src={`/john_doe.svg`}/>}
                        </div>}
                        <div className={'flex w-full flex-col gap-3'}>
                            {!isEditor ?
                                <p className={'text-green-two text-2xl font-bold'}>{lastName} {firstName} {middleName}</p> :
                                <div className={'flex flex-col gap-3'}>
                                    <input value={profile.lastName}
                                           onChange={(event) => {
                                               mutateProfile('lastName', event.target.value)
                                           }} placeholder={profile.lastName}
                                           className={'text-green-two px-2 border-green border-2 text-2xl rounded-lg font-bold'}></input>
                                    <input value={profile.firstName}
                                           onChange={(event) => {
                                               mutateProfile('firstName', event.target.value)
                                           }} placeholder={profile.firstName}
                                           className={'text-green-two px-2 border-green border-2 text-2xl rounded-lg font-bold'}></input>
                                    <input value={profile.middleName}
                                           onChange={(event) => {
                                               mutateProfile('middleName', event.target.value)
                                           }} placeholder={profile.middleName}
                                           className={'text-green-two px-2 border-green border-2 text-2xl rounded-lg font-bold'}></input>
                                </div>}
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/phone.svg`}/>
                                {!isEditor ?
                                    <p className={'font-normal'}>{phoneNumber ? phoneNumber : 'Не указано'}</p> :
                                    <input value={profile.phoneNumber}
                                           onChange={(event) => {
                                               mutateProfile('phoneNumber', event.target.value)
                                           }}
                                           placeholder={profile.phoneNumber ? profile.phoneNumber : 'Введите номер телефона'}
                                           className={'font-normal px-2 border-green border-2 rounded-lg'}></input>}
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/email.svg`}/>
                                {!isEditor ? <p className={'font-normal'}>{email ? email : 'Не указано'}</p> :
                                    <input onChange={(event) => {
                                        mutateProfile('email', event.target.value)
                                    }} value={profile.email}
                                           placeholder={profile.email ? profile.email : 'Введите email'}
                                           className={'font-normal px-2 border-green border-2 rounded-lg'}></input>}
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <img className={'w-5'} src={`${images}/location.svg`}/>
                                {!isEditor ? <p className={'font-normal'}>{city ? city : 'Не указано'}</p> :
                                    <input onChange={(event) => {
                                        mutateProfile('city', event.target.value)
                                    }} value={profile.city} placeholder={profile.city ? profile.city : 'Введите город'}
                                           className={'font-normal px-2 border-green border-2 rounded-lg'}></input>}
                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <p className={'font-bold text-lg'}>Пол:</p>
                                {!isEditor ?
                                    <p className={'font-normal text-lg'}>{gender ? gender : 'Не указано'}</p> :
                                    <select onChange={(event) => {
                                        mutateProfile('gender', event.target.value)
                                    }} className={'font-normal text-lg px-2 border-green border-2 rounded-lg'}>
                                        <option value={'Мужской'} selected={gender == 'Мужской'}>Мужской</option>
                                        <option value={'Женский'} selected={gender == 'Женский'}>Женский</option>
                                    </select>}

                            </div>
                            <div className={'flex gap-3 font-inter text-black items-center'}>
                                <p className={'font-bold text-lg'}>Дата рождения:</p>
                                {!isEditor ?
                                    <p className={'font-normal text-lg'}>{birthDate ? birthDate : 'Не указана'}</p> :
                                    <DatePicker placeholderText={profile.birthDate ? profile.birthDate : 'Введите дату'}
                                                className={'border-2 border-green p-1 rounded-lg text-center w-1/2'}
                                                dateFormat={"dd.MM.yyyy"} locale={"ru"} selected={null}
                                                onChange={(date) => mutateProfile('birthDate', date?.toLocaleDateString("ru-RU"))}/>}

                            </div>

                            <div className={'flex items-center  gap-3'}>
                                <div
                                    className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    {specialty}
                                </div>
                                <div
                                    className={'border-2 border-green-two rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>
                                    Стаж 21 год
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'flex mb-6 gap-7 items-center'}>
                            <p className={'uppercase font-inter font-extralight text-3xl'}>Образование</p>
                            {isEditor ? <div onClick={() => {
                                setEducationPop(true)
                            }} className={'bg-green-two text-white cursor-pointer font-normal p-3 rounded-lg'}>Добавить
                                +</div> : null}
                        </div>
                        <div className={'w-4/5 flex flex-col gap-2'}>
                            {education?.map((item: typeof education[0], counter: number) => {
                                return (
                                    <div key={counter} className={'w-full grid grid-cols-2 gap-3'}>
                                        <p className={'font-bold'}>{counter + 1} образование</p>
                                        <div className={'flex items-start gap-3'}>
                                            <p>{item.faculty} факультет {item.university}</p>
                                            <img onClick={() => {
                                                setCurrentEducationShow(item)
                                                setCurrentEducationShowCounter(counter + 1)
                                                setEducationShowOpen(true)
                                            }} className={'w-5 cursor-pointer aspect-square'} src={'/info.svg'}/>
                                        </div>
                                    </div>
                                )
                            })}
                            {/*<p className={' font-bold'}>Ученая степень:</p>*/}
                            {/*<p className={''}>Доктор наук</p>*/}
                            {/*<p className={' font-bold'}>Ученое звание:</p>*/}
                            {/*<p className={''}>Профессор</p>*/}
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                        {/*<p className={'uppercase font-inter font-extralight mb-6 text-3xl'}>Карьера</p>*/}
                        {/*<div className={'grid gap-4 mb-6 w-4/5 grid-cols-2'}>*/}
                        {/*    <p className={' font-bold'}>Опыт работы:</p>*/}
                        {/*    <p className={''}>21 год</p>*/}
                        {/*</div>*/}
                        {/*<div className={'relative flex flex-col gap-7'}>*/}
                        {/*    <div className={'h-full absolute left-1.5 w-[1px] bg-green'}>*/}

                        {/*    </div>*/}
                        {/*    <div className={'flex items-start gap-5'}>*/}
                        {/*        <div className={'w-3 aspect-square rounded-full bg-green'}>*/}

                        {/*        </div>*/}
                        {/*        <div className={'flex flex-col gap-4'}>*/}
                        {/*            <p className={'font-bold text-green-two leading-[80%]'}>Январь 2022 - Июнь 2023</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={'flex items-start gap-5'}>*/}
                        {/*        <div className={'w-3 aspect-square rounded-full bg-green'}>*/}

                        {/*        </div>*/}
                        {/*        <div className={'flex flex-col gap-4'}>*/}
                        {/*            <p className={'font-bold text-green-two leading-[80%]'}>Январь 2021 - Июнь 2022</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={'flex items-start gap-5'}>*/}
                        {/*        <div className={'w-3 aspect-square rounded-full bg-green'}>*/}

                        {/*        </div>*/}
                        {/*        <div className={'flex flex-col gap-4'}>*/}
                        {/*            <p className={'font-bold text-green-two leading-[80%]'}>Январь 2020 - Июнь 2021</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%] pb-8'}>Должность: врач</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={'flex items-start gap-5'}>*/}
                        {/*        <div className={'w-3 aspect-square rounded-full bg-green'}>*/}

                        {/*        </div>*/}
                        {/*        <div className={'flex flex-col gap-4'}>*/}
                        {/*            <p className={'font-bold text-green-two leading-[80%]'}>Январь 2019 - Июнь 2020</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%]'}>Место работы: Нцзд</p>*/}
                        {/*            <p className={'font-normal text-black leading-[80%]'}>Должность: врач</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className={'flex flex-col gap-6'}>
                        <p className={'uppercase font-inter font-extralight text-3xl'}>О себе и интересы</p>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>Профессиональные интересы:</p>
                            {isEditor?<textarea className={'font-normal px-2 border-green border-2 rounded-lg'} value={profile?.interests} onChange={(event)=>{mutateProfile('interests',event.target.value)}}>{profile?.interests}</textarea>:<p className={'text-black'}>{interests?interests:'Не указано'}</p>}
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-bold text-black text-lg'}>О себе:</p>
                            {isEditor?<textarea className={'font-normal px-2 border-green border-2 rounded-lg'} value={profile?.about} onChange={(event)=>{mutateProfile('about',event.target.value)}}>{profile?.about}</textarea>:<p className={'text-black'}>{about?about:'Не указано'}</p>}
                        </div>
                    </div>
                </div>
                <div className={'flex px-8 flex-col'}>
                    {/*<p className={'font-bold text-xl text-black'}>Награды</p>*/}
                    {/*<div className={'grid grid-cols-4 mt-4 gap-8'}>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={'flex flex-col gap-3 items-center'}>*/}
                    {/*        <img src={`${images}/temp_certificate.png`}*/}
                    {/*             className={'rounded-full cursor-pointer aspect-square object-cover'}/>*/}
                    {/*        <p className={'font-normal text-black text-center text-xs'}>НАГРАДЫ 2023</p>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    <div className={'flex flex-col gap-10 mt-8'}>
                        {/*<p className={'font-bold text-xl text-black'}>Научные работы</p>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                        {/*<PublicationTab></PublicationTab>*/}
                    </div>
                </div>
            </div>
        </main>
    )
}

"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
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
import Calendar from "@/components/Calendar";
import News from "@/components/News";


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const posts = [
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        },
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        },
        {
            date: '12 ноября',
            title: `<p class="font-extralight">ДЕРМАТОЛОГИЧЕСКИЕ</p><strong>ЧТЕНИЯ В ПЕДИАТРИИ</strong>`,
            description: '12 ноября пройдет VIII Ежегодная всероссийская научно-практическая конференция с международным участием',
            link: '/'
        }
    ]

    const employers = [
        {
            name: 'Мурашкин Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Президент',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Леонтьев Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Доктор',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Гумеров Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Директор',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
        {
            name: 'Горшков Николай Николаевич',
            image: `${images}/employers/murashkin.png`,
            offer: 'Глава нацбанка',
            contact: '/',
            description: 'Руководитель НИИ детской дерматологии,\n' +
                'Заведующий отделением дерматологии с группой лазерной хирургии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России,заведующий лабораторией патологии кожи у детей отдела научных исследований в педиатрии ФГАУ «Национальный медицинский исследовательский центр здоровья детей» Минздрава России...\n' +
                '\n'
        },
    ]

    const faq = [
        {
            question: 'Как попасть в НИИ детской дерматологии?',
            answer: `<ol class="list-decimal">
<li>Напишите письмо на нашу почту dermatology@nczd.ru с просьбой направить Вам вызов на госпитализацию;</li>
<li>В письме укажите:<ul>
<li>ФИО ребенка;</li>
<li>дата рождения ребенка;</li>
<li>адрес регистрации.</li>
</ul>
</li>
<li>Прикрепите выписки, которые у Вас есть от специалистов по месту жительства, также Вы можете прикрепить фотографии высыпаний;</li>
<li>Ожидайте ответа.</li>
</ol>`,
        },
        {
            question: 'Как попасть в НИИ детской дерматологии? 2',
            answer: `<ol class="list-decimal">
<li>Напишите письмо на нашу почту dermatology@nczd.ru с просьбой направить Вам вызов на госпитализацию;</li>
<li>В письме укажите:<ul>
<li>ФИО ребенка;</li>
<li>дата рождения ребенка;</li>
<li>адрес регистрации.</li>
</ul>
</li>
<li>Прикрепите выписки, которые у Вас есть от специалистов по месту жительства, также Вы можете прикрепить фотографии высыпаний;</li>
<li>Ожидайте ответа.</li>
</ol>`,
        }
        ,
        {
            question: 'Как попасть в НИИ детской дерматологии? 3',
            answer: `<ol class="list-decimal">
<li>Напишите письмо на нашу почту dermatology@nczd.ru с просьбой направить Вам вызов на госпитализацию;</li>
<li>В письме укажите:<ul>
<li>ФИО ребенка;</li>
<li>дата рождения ребенка;</li>
<li>адрес регистрации.</li>
</ul>
</li>
<li>Прикрепите выписки, которые у Вас есть от специалистов по месту жительства, также Вы можете прикрепить фотографии высыпаний;</li>
<li>Ожидайте ответа.</li>
</ol>`,
        }

    ]

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div
                className={"min-h-screen overflow-hidden bg-cover relative bg-[url('/pages/main/main_bg.png')]"}>
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] sm:px-[70px] grid grid-cols-1 sm:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 sm:mt-0 mt-20 flex flex-col sm:items-start  justify-center'}>
                        <div className={'w-full'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={"coverflow"}
                                direction={"vertical"}
                                centeredSlides={true}
                                slidesPerView={1}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -100,
                                    depth: 300,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                loop={true}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, EffectCoverflow, Pagination, Autoplay]}
                                className={'myswiper h-96 w-full'}
                            >
                                {posts.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={'pl-[70px]'}>
                                            <div className={'flex flex-col gap-5'}>
                                                <div
                                                    className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                    {item.date}
                                                </div>
                                                <div className={'text-left text-5xl text-white '}
                                                     dangerouslySetInnerHTML={{__html: item.title}}>

                                                </div>
                                                <p className={'text-white font-normal'}>{item.description}</p>
                                                <Link
                                                    className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}
                                                    href={item.link}>
                                                    Подробнее
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


            {/*О НАС*/}


            <div className={'bg-white h-[854px] flex items-center px-[140px]'}>
                <div className={'gap-20 grid grid-cols-2'}>
                    <div className={'flex flex-col gap-6 items-start'}>
                        <p className={'uppercase font-extralight text-5xl text-black'}>О НАШЕЙ
                            <br/><span className={'font-bold'}>ОРГАНИЗАЦИИ</span></p>
                        <div className={'flex items-center gap-3'}>
                            <img className={'w-12'} src={`${images}/comment.svg`}/>
                            <p className={'font-bold text-green text-xl'}>
                                Проблема заболеваний кожи детского возраста остается одной из наиболее значимых.
                            </p>
                        </div>
                        <p className={'font-normal text-black'}>
                            Сегодня детская дерматология все более четко отстраивается от дерматологии взрослой. Детская
                            кожа реагирует на внутренние и внешние негативные факторы острее, чем взрослая, при этом
                            особенности детского организма требуют тщательного подбора лечебных препаратов.
                            <br/> <br/>
                            Кроме того, дерматологу нужны знания из целого ряда смежных областей, ведь большинство
                            кожных
                            патологий требует комплексного лечения. Для этого мы объединяем усилия специалистов, чтобы
                            развивать детскую дерматологию и распространять современные медицинские знания. И в конечном
                            итоге — чтобы каждый врач мог эффективно помочь своим пациентам в любом городе и регионе.
                        </p>
                        <div
                            className={'p-2 text-white w-52 font-normal h-12 px-4 bg-green flex items-center justify-center rounded-lg'}>
                            Подробнее
                        </div>
                    </div>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'flex justify-start flex-col items-end gap-4'}>
                            <div className={'overflow-hidden rounded-lg'}><img
                                className={'h-64 hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid1.png`}/></div>
                            <div className={'overflow-hidden rounded-lg'}><img
                                className={'h-64 hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid3.png`}/></div>
                        </div>
                        <div className={'flex justify-end flex-col items-start gap-4'}>
                            <div className={'overflow-hidden rounded-lg'}><img
                                className={'h-64 hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid2.png`}/></div>
                            <div className={'overflow-hidden rounded-lg'}><img
                                className={'h-64 hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid4.png`}/></div>
                        </div>
                    </div>
                </div>

            </div>

            {/*О НАС*/}

            <div className={'bg-[#F2F9F8] relative h-[900px] flex items-center sm:px-[140px]'}>
                <img className={'absolute left-0 -top-1'} src={`${images}/about_us_offset.png`}
                     alt={'asset_bottom'}></img>
                <div>
                    <div className={'flex items-center justify-between'}>
                        <p className={'uppercase font-extralight text-black text-4xl'}>Основные <br/><strong
                            className={'font-extrabold'}>направления:</strong></p>
                        <div className={'flex items-center gap-4'}>
                            <img className={'w-10'} src={`${images}/help.svg`}/>
                            <p className={'lowercase'}>ЦЕЛЬ ОРГАНИЗАЦИИ - СОДЕЙСТВИЕ РАЗВИТИЮ <br/>
                                ДЕТСКОЙ ДЕРМАТОЛОГИИ </p>
                        </div>
                    </div>
                    <div className={'grid mt-10 grid-cols-4 gap-16 '}>
                        <div
                            className={'shadow-xl h-80 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-20 mt-9 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white font-normal text-center'}>Проведение образовательных
                                научно-практических конференций в различных форматах
                                на территории РФ</p>
                        </div>
                        <div
                            className={'shadow-xl h-80 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-20 mt-9 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white font-normal text-center'}>Обсуждение сложных клинических случаев,
                                проведение консилиумов в рамках программы телемедицины</p>
                        </div>
                        <div
                            className={'shadow-xl h-80 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-20 mt-9 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white font-normal text-center'}>Цифровая трансформация в дерматологии на
                                территории РФ</p>
                        </div>
                        <div
                            className={'shadow-xl h-80 bg-green-two gap-5 w-full flex items-center justify-start flex-col p-4 rounded-xl'}>
                            <img className={'w-20 mt-9 aspect-square'} src={`${images}/love.svg`}/>
                            <p className={'text-white font-normal text-center'}>Организация помощи детям с тяжелым
                                течением кожных заболеваний</p>
                        </div>
                    </div>
                    <p className={'lowercase mt-12 font-inter font-normal text-green-two'}>Межрегиональная общественная
                        организация «Общество детских дерматологов» <br/>
                        Interregional Public Organization «Society of Pediatric Dermatologists»</p>
                </div>
                <img className={'absolute left-0 bottom-0'} src={`${images}/about_us_offset_bottom.png`}
                     alt={'asset_bottom'}></img>
            </div>

            {/*КАЛЕНДАРЬ*/}

            <div className={'bg-white h-[1000px] flex flex-col justify-center px-[140px]'}>
                <div className={'flex mt-7 items-center justify-between'}>
                    <p className={'uppercase font-extralight text-black text-4xl'}>Календарь <br/><strong
                        className={'font-extrabold'}>СОБЫТИЙ 2023</strong></p>
                </div>
                <div className={'mt-10'}>
                    <Calendar></Calendar>
                </div>
            </div>

            {/*НОВОСТИ*/}

            <div className={'bg-white h-[600px]'}>
                <div className={'flex mt-7 items-center px-[140px] justify-between'}>
                    <p className={'uppercase font-extrabold text-black text-4xl'}>Новости</p>
                </div>
                <div className={'mt-12 w-full flex px-[40px]'}>
                    <News></News>
                </div>
            </div>

            {/*РЕЗУЛЬТАТЫ*/}

            <div
                className={"h-[700px] pl-[140px] pr-[70px] flex flex-col justify-center overflow-hidden bg-cover relative bg-[url('/pages/main/results_bg.png')]"}>
                <img className={'absolute left-0 top-0'} src={`${images}/results_top_offset.png`} alt={''}></img>

                <div className={'grid grid-cols-7 items-center h-full gap-2'}>
                    <div className={'col-span-4 flex flex-col gap-10'}>
                        <p className={'text-4xl font-extralight text-white'}>ПРИСОЕДИНЯЙСЯ К НАШЕМУ<br/><span
                            className={'font-extrabold'}>ПРОФЕССИОНАЛЬНОМУ СООБЩЕСТВУ</span></p>
                        <div className={'flex h-28 items-center gap-5'}>
                            <div className={'h-20 bg-white w-[2px]'}>

                            </div>
                            <div className={'flex flex-col text-white gap-3'}>
                                <p className={'text-8xl leading-[70%] font-extrabold'}>20 000+</p>
                                <p className={'text-lg leading-[70%] font-extralight'}>Вылеченых детей</p>
                            </div>
                        </div>
                        <div className={'flex items-start gap-14'}>
                            <div className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <p className={'text-5xl leading-[70%] font-extrabold'}>10+</p>
                                    <p className={'text-md leading-[100%] font-extralight'}>Лет помогаем<br/>
                                        детям</p>
                                </div>
                            </div>
                            <div className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <p className={'text-5xl leading-[70%] font-extrabold'}>150+</p>
                                    <p className={'text-md leading-[100%] font-extralight'}>Проведено<br/>
                                        мероприятий</p>
                                </div>
                            </div>
                            <div className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <p className={'text-5xl leading-[70%] font-extrabold'}>19 146+</p>
                                    <p className={'text-md leading-[100%] font-extralight'}>Членов<br/>
                                        сообщества</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'bg-white font-normal rounded-lg text-xl text-[#277B76] flex items-center justify-center w-72  py-5'}>
                            Подать заявку
                        </div>
                    </div>
                    <div className={'col-span-3 h-full relative flex items-center justify-center'}>
                        <img className={'absolute bottom-0'} src={`${images}/results_doctor_sprite.svg`}/>
                        <img className={'absolute bottom-0'} src={`${images}/results_doctor.png`}/>
                    </div>
                </div>


                <img className={'absolute left-0 bottom-0'} src={`${images}/results_bottom_offset.png`} alt={''}></img>

            </div>

            <div className={'px-[140px] bg-white py-14'}>
                <div className={'grid grid-cols-12 gap-10'}>
                    <div className={'col-span-6 flex flex-col gap-10'}>
                        <p className={'text-4xl font-extralight text-black'}>ДОСТУПНОСТЬ<br/><span
                            className={'font-extrabold'}>ИНФОРМАЦИИ</span></p>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Быть в курсе актуальных новостей в области детской
                                дерматологии.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>
                                Следить за последними результатами клинических исследований новых лекарственных средств,
                                применяемых в детской дерматологии.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Иметь доступ к прослушиванию регулярных вебинаров на
                                актуальные темы о заболеваниях кожи, волос, и ногтей в детском возрасте от ведущих
                                специалистов нашей страны и европейского общества детских дерматологов.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Иметь доступ к образовательным материалам российских
                                и зарубежных специалистов.</p>
                        </div>
                        <div
                            className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center w-72  py-5'}>
                            Подать заявку
                        </div>
                    </div>
                    <div className={'col-span-5 flex justify-end col-end-13'}>
                        <img className={'rounded-lg'} src={`${images}/feautures/1.png`}/>
                    </div>
                </div>
            </div>
            <div className={'px-[140px] bg-white py-14'}>
                <div className={'grid grid-cols-12 gap-10'}>
                    <div className={'col-span-6 flex justify-start'}>
                        <img className={'rounded-lg'} src={`${images}/feautures/2.png`}/>
                    </div>
                    <div className={'col-span-5 col-end-13 flex flex-col gap-10'}>
                        <p className={'text-4xl font-extralight text-black'}>ОНЛАЙН<br/><span
                            className={'font-extrabold'}>ОБУЧЕНИЕ</span></p>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Программа онлайн обучения с доступом к просмотру
                                клинических случаев, вебинаров, семинаров, а также возможностью участвовать в
                                фокус-сессиях и
                                дискуссиях в области детской дерматологии.</p>
                        </div>
                        <div className={'flex items-center gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Возможность получать баллы НМО.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Возможность стать спикеров научно-практических
                                конференций Общества детских дерматологов</p>
                        </div>

                        <div
                            className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center w-72  py-5'}>
                            Подать заявку
                        </div>
                    </div>

                </div>
            </div>
            <div className={'px-[140px] bg-white py-14'}>
                <div className={'grid grid-cols-12 items-center gap-10'}>
                    <div className={'col-span-6 flex flex-col gap-10'}>
                        <p className={'text-4xl font-extralight text-black'}>СТАНЬ ЧАСТЬЮ<br/><span
                            className={'font-extrabold'}>БОЛЬШОЙ КОМАНДЫ</span></p>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Множество возможностей для общения с детскими
                                дерматологами со всего мира.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Право на получение сертификата члена Общества
                                детских дерматологов с индивидуальным номером.</p>
                        </div>
                        <div className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-xl leading-[100%]'}>Бонусы при участии в крупных конференциях
                                международного формата.</p>
                        </div>

                        <div
                            className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center w-72  py-5'}>
                            Подать заявку
                        </div>
                    </div>
                    <div className={'col-span-5 flex justify-end col-end-13'}>
                        <img className={'rounded-lg'} src={`${images}/feautures/3.png`}/>
                    </div>
                </div>
            </div>


            {/*FAQ*/}


            <motion.div
                className={"h-[600px] flex flex-col justify-center  overflow-hidden bg-cover relative bg-[url('/pages/main/faq_bg.png')]"}>
                <img className={'absolute left-0 top-0 w-full'} src={`${images}/faq_top_offset.png`}
                     alt={'asset_bottom'}/>
                <p className={'text-4xl top-10 absolute text-white px-[140px] font-extralight text-black'}>ЧАСТО
                    ЗАДАВАЕМЫЕ<br/><span
                        className={'font-extrabold'}>ВОПРОСЫ</span></p>
                <motion.div
                    className={'w-full h-[600px] h-auto px-[20px] sm:px-[70px] grid grid-cols-1 sm:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 sm:mt-0 mt-20 flex flex-col sm:items-start  justify-center'}>
                        <div className={'w-full'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={"fade"}
                                direction={"vertical"}
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                fadeEffect={{crossFade: true}}
                                modules={[Mousewheel, EffectFade, Pagination, Autoplay]}
                                className={'myswiper h-96 w-full'}
                            >
                                {faq.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={'pl-[70px] h-full'}>
                                            <div className={'flex flex-col h-full justify-center gap-5'}>

                                                <div className={'text-left text-2xl text-white '}>
                                                    {item.question}
                                                </div>
                                                <p className={'text-white font-normal'}
                                                   dangerouslySetInnerHTML={{__html: item.answer}}></p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </motion.div>
                </motion.div>
                <img className={'absolute bottom-0 w-full'} src={`${images}/faq_top_bottom.png`} alt={'asset_bottom'}/>
            </motion.div>


            {/*PARTNERS*/}

            <div className={'h-[550px] bg-white flex flex-col items-center justify-center gap-2'}>
                <p className={'uppercase text-center font-extralight text-black text-4xl'}>ОБЪЕДИНЯЕМ УСИЛИЯ <br/><strong
                    className={'font-extrabold'}>С ПАРТНЕРАМИ</strong></p>
                <div className={'flex items-center gap-4'}>
                    <img src={`${images}/partners/image 15.png`}/>
                    <img src={`${images}/partners/image 16.png`}/>
                    <img src={`${images}/partners/image 17.png`}/>
                    <img src={`${images}/partners/image 18.png`}/>
                    <img src={`${images}/partners/image 19.png`}/>
                </div>
            </div>
        </main>
    )
}

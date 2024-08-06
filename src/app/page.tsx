"use client"
import React, {useCallback, useEffect, useRef, useState} from "react";
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
import CountUp from "react-countup";
import {classList} from "@/helpers/classList";
import Partners from "@/components/Partners";
import BuyBookForm from "@/components/BuyBookForm";


export default function Home() {

    const router = useRouter()

    const images = '/pages/main'

    const posts = [
        {
            date: '9 ноября 2024',
            title: `<p class="font-extralight">X Юбилейная всероссийская научно-практическая конференция с международным участием</p><span class="font-extrabold uppercase">«Дерматологические чтения в педиатрии»</span>`,
            description: '09 ноября 2024 г. на площадке новой технологической долины МГУ в центре Москвы для мероприятий цифровой направленности, посвященных прорывным инновациям и новым трендам в мире здравоохранения, состоится главное событие 2024 года - X Юбилейная всероссийская научно-практическая конференция с международным участием «Дерматологические чтения в педиатрии».' +
                '\n',
            link: '/events/8e6b761e-0ff4-4068-8feb-f7da3f6c79fa/',
            image: '/pages/09_11_conference.JPG',
        },
        // {
        //     date: '11-17 сентября 2023',
        //     title: `<p class="uppercase font-extralight">Поэзия</p><span class="font-extrabold uppercase">детской дерматологии</span>`,
        //     description: 'Научно-образовательный квест-марафон «Поэзия детской дерматологии» пройдёт уже 11-17 сентября 2023 года!',
        //     link: '/events/3',
        //     image: '/marafon.png',
        // },
        // {
        //     date: '1 июня – 31 августа 2023',
        //     title: `<p class="font-extralight">Розыгрыш</p><span class="font-extrabold uppercase">Летняя аптечка</span>`,
        //     description: 'Успейте принять участие в главном розыгрыше этого лета- "Летняя аптечка!',
        //     link: null,
        //     image: '/pages/main/sliderBackgrounds/1.png',
        // },
        {
            date: 'Присоединяйтесь!',
            title: `<p class="font-extralight">Членство в Обществе </p><span class="font-extrabold uppercase">детских дерматологов</span>`,
            description: ' Стань частью большой команды',
            link: '/registration',
            image: '/pages/main/events/login.png',
        },
        // {
        //     date: '02.12.2023',
        //     title: `<p class="font-extralight">III НАУЧНО-ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ</p><span class="font-extrabold uppercase">«Псориаз в детском возрасте: современные решения старых проблем»</span>`,
        //     description: 'В ходе конференции будут разобраны наиболее значимые патологии в дерматологии детского возраста, а именно атопический дерматит, формы заболевания и этапы диагностики, а также инновационные технологии терапии.',
        //     link: '/events/3-npk-psoriaz/',
        //     image: '/pages/new.png',
        // }
    ]
    
    const [isBuyBookFormOpen,setBuyBookFormOpen]=useState(false)

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
//         {
//             question: 'Как попасть в НИИ детской дерматологии? 2',
//             answer: `<ol class="list-decimal">
// <li>Напишите письмо на нашу почту dermatology@nczd.ru с просьбой направить Вам вызов на госпитализацию;</li>
// <li>В письме укажите:<ul>
// <li>ФИО ребенка;</li>
// <li>дата рождения ребенка;</li>
// <li>адрес регистрации.</li>
// </ul>
// </li>
// <li>Прикрепите выписки, которые у Вас есть от специалистов по месту жительства, также Вы можете прикрепить фотографии высыпаний;</li>
// <li>Ожидайте ответа.</li>
// </ol>`,
//         }
//         ,
//         {
//             question: 'Как попасть в НИИ детской дерматологии? 3',
//             answer: `<ol class="list-decimal">
// <li>Напишите письмо на нашу почту dermatology@nczd.ru с просьбой направить Вам вызов на госпитализацию;</li>
// <li>В письме укажите:<ul>
// <li>ФИО ребенка;</li>
// <li>дата рождения ребенка;</li>
// <li>адрес регистрации.</li>
// </ul>
// </li>
// <li>Прикрепите выписки, которые у Вас есть от специалистов по месту жительства, также Вы можете прикрепить фотографии высыпаний;</li>
// <li>Ожидайте ответа.</li>
// </ol>`,
//         }

    ]
    // bg-[url('/pages/main/main_bg.png')]

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div
                className={classList("min-h-screen sm:bg-top bg-[left_50rem_top_1rem] overflow-hidden bg-cover green-gradient relative ")}>
                <div className={'absolute flex sm:hidden w-full h-full bg-green-two opacity-50 left-0 top-0'}>

                </div>

                <motion.div
                    className={'w-full min-h-screen h-auto'}>
                    <motion.div
                        className={'sm:col-span-12 sm:mt-0 flex flex-col sm:items-start  justify-center'}>
                        <div className={'sm:flex hidden w-screen'}>
                            <Swiper
                                ref={sliderRef}
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={'fade'}
                                direction={"vertical"}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, EffectFade, Pagination, Autoplay]}
                                className={'mainswiper sm:h-screen absolute left-0 top-0 w-screen'}
                            >
                                {posts.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={''}>
                                            <div
                                                className={'flex h-full pl-[80px] lg:pl-[140px] flex-col justify-center items-center'}>
                                                <div className={'grid w-full grid-cols-12'}>
                                                    <div className={'flex col-span-6 justify-center flex-col gap-5'}>
                                                        <div
                                                            className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                            {item.date}
                                                        </div>
                                                        <div className={'text-left text-3xl lg:text-5xl text-white '}
                                                             dangerouslySetInnerHTML={{__html: item.title}}>

                                                        </div>
                                                        <p className={'text-white font-normal'}>{item.description}</p>
                                                        {item.link?<Link
                                                            className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}
                                                            href={item.link}>
                                                            Подробнее
                                                        </Link>:null}
                                                        {/*<div className={'flex gap-5 items-center'}>*/}
                                                        {/*    <div*/}
                                                        {/*        className={'cursor-pointer  hidden sm:flex items-center p-[15px] justify-center  w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}*/}
                                                        {/*        onClick={handlePrev}>*/}
                                                        {/*        <img className={'w-full aspect-square'}*/}
                                                        {/*             src={'/arrow_prev.svg'}/>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div*/}
                                                        {/*        className={'cursor-pointer   relative hidden sm:flex items-center p-[15px] justify-center w-[50px] aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}*/}
                                                        {/*        onClick={handleNext}>*/}
                                                        {/*        <img className={'w-full aspect-square'}*/}
                                                        {/*             src={'/arrow_next.svg'}/>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                    <div className={'absolute w-screen h-screen left-0 top-0 z-[-2]'}>
                                                        <img className={'w-full object-cover h-full'} src={item.image}/>
                                                    </div>
                                                    <div
                                                        className={'absolute green-gradient opacity-40 w-screen h-screen left-0 top-0 z-[-1]'}>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>

                        <div className={'sm:hidden flex h-screen w-screen'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={'fade'}
                                direction={"horizontal"}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Mousewheel, EffectFade, Pagination, Autoplay]}
                                className={'mainswiper sm:h-screen h-screen absolute left-0 top-0 w-screen'}
                            >
                                {posts.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={''}>
                                            <div
                                                className={'flex h-full pl-[20px] sm:pl-[140px] flex-col justify-center items-center'}>
                                                <div className={'grid w-full grid-cols-12'}>
                                                    <div className={'flex col-span-12 justify-center flex-col gap-5'}>
                                                        <div
                                                            className={'flex items-center rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                                            {item.date}
                                                        </div>
                                                        <div className={'text-left text-2xl text-white '}
                                                             dangerouslySetInnerHTML={{__html: item.title}}>

                                                        </div>
                                                        <p className={'text-white font-normal'}>{item.description}</p>
                                                        {item.link?<Link
                                                            className={'text-black p-4 rounded-md bg-white flex items-center justify-center w-48'}
                                                            href={item.link}>
                                                            Подробнее
                                                        </Link>:null}
                                                    </div>
                                                    <div className={'absolute w-screen h-screen left-0 top-0 z-[-2]'}>
                                                        <img className={'w-full object-cover object-center h-full'} src={item.image}/>
                                                    </div>
                                                    <div
                                                        className={'absolute green-gradient opacity-70 w-screen h-screen left-0 top-0 z-[-1]'}>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>

                    </motion.div>
                </motion.div>
                <div className={'absolute bottom-[-1px] z-[10] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


            {/*О НАС*/}


            <div className={'bg-white lg:h-[854px] flex items-center lg:py-0 py-12 px-[20px] lg:px-[140px]'}>
                <div className={'gap-20 grid grid-cols-1 lg:grid-cols-2'}>
                    <div className={'flex flex-col gap-6 items-start'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'uppercase font-extralight text-2xl sm:text-5xl text-black'}>О НАШЕЙ
                            <br/><span className={'font-bold'}>ОРГАНИЗАЦИИ</span></motion.p>
                        <motion.div
                            initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7, delay: 0.4}}
                            className={'flex items-center gap-3'}>
                            <img className={'w-8 sm:w-12'} src={`${images}/comment.svg`}/>
                            <p className={'font-bold text-green text-sm sm:text-xl'}>Эффективная дерматология детского возраста – вызов нового времени</p>
                        </motion.div>
                        <motion.p initial={{y: -40, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7, delay: 0.7}}
                                  className={'font-normal text-sm sm:text-lg text-black'}>
                            Сегодня детская дерматология все более четко отстраивается от дерматологии взрослой. Детская
                            кожа реагирует на внутренние и внешние негативные факторы острее, чем взрослая, при этом
                            особенности детского организма требуют тщательного подбора лечебных препаратов.
                            <br/> <br/>
                            Кроме того, дерматологу нужны знания из целого ряда смежных областей, ведь большинство
                            кожных
                            патологий требует комплексного лечения. Для этого мы объединяем усилия специалистов, чтобы
                            развивать детскую дерматологию и распространять современные медицинские знания. И в конечном
                            итоге — чтобы каждый врач мог эффективно помочь своим пациентам в любом городе и регионе.
                        </motion.p>
                        {/*<motion.div initial={{y: -40, opacity: 0}}*/}
                        {/*            whileInView={{y: 0, opacity: 1}}*/}
                        {/*            viewport={{once: true}}*/}
                        {/*            transition={{ease: 'easeInOut', duration: 0.7, delay: 1.2}}*/}
                        {/*            className={'p-2 text-white w-52 font-normal h-12 px-4 bg-green flex items-center justify-center rounded-lg'}>*/}
                        {/*    Подробнее*/}
                        {/*</motion.div>*/}
                    </div>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'flex justify-start flex-col items-end gap-4'}>
                            <motion.div initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 1, delay: 0}}
                                        className={'overflow-hidden rounded-lg'}><img
                                className={'sm:h-64 cursor-pointer hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid1.png`}/></motion.div>
                            <motion.div initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 1, delay: 0.6}}
                                        className={'overflow-hidden rounded-lg'}><img
                                className={'sm:h-64 cursor-pointer hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid3.png`}/></motion.div>
                        </div>
                        <div className={'flex justify-end flex-col items-start gap-4'}>
                            <motion.div initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
                                        className={'overflow-hidden rounded-lg'}><img
                                className={'sm:h-64 cursor-pointer hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid2.png`}/></motion.div>
                            <motion.div initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 1, delay: 0.9}}
                                        className={'overflow-hidden rounded-lg'}><img
                                className={'sm:h-64 cursor-pointer hover:scale-125 transition-all duration-300'}
                                src={`${images}/employers/kid4.png`}/></motion.div>
                        </div>
                    </div>
                </div>

            </div>

            {/*О НАС*/}

            <div
                className={'bg-[#F2F9F8] relative lg:py-0 py-20 lg:h-[900px] flex items-center px-[20px] lg:px-[140px]'}>
                <img className={'absolute left-0 -top-1'} src={`${images}/about_us_offset.png`}
                     alt={'asset_bottom'}></img>
                <div>
                    <div
                        className={'flex sm:flex-row flex-col gap-4 items-center justify-center sm:items-center sm:justify-between'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'uppercase font-extralight text-black sm:text-left text-center text-2xl sm:text-4xl'}>Основные <br/><strong
                            className={'font-extrabold'}>направления:</strong></motion.p>
                        <motion.div className={'flex sm:justify-start justify-center items-center gap-4'}
                                    initial={{y: 40, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7, delay: 1.2}}>
                            <img className={'sm:w-10 w-12'} src={`${images}/help.svg`}/>
                            <p className={'lg:text-lg sm:w-auto w-3/5 whitespace-pre-wrap text-sm'}>Цель организации - Содействие развитию <br/>детской дерматологии</p>
                        </motion.div>
                    </div>
                    <div className={'grid mt-10 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-16 '}>
                        <motion.div initial={{scale: 0.7, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 1, delay: 0}}
                                    className={'shadow-xl  bg-green-two gap-5 w-full flex items-center justify-start flex-col p-7 rounded-xl'}>
                            <img className={'sm:w-20 w-12 mt-9 aspect-square'} src={`${images}/science.svg`}/>
                            <p className={'text-white sm:text-lg text-sm font-normal text-center'}>Проведение
                                образовательных
                                научно-практических конференций в различных форматах
                                на территории РФ</p>
                        </motion.div>
                        <motion.div initial={{scale: 0.7, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 1, delay: 0.3}}
                                    className={'shadow-xl  bg-green-two gap-5 w-full flex items-center justify-start flex-col p-7 rounded-xl'}>
                            <img className={'sm:w-20 w-12 mt-9 aspect-square'} src={`${images}/socium.svg`}/>
                            <p className={'text-white sm:text-lg text-sm font-normal text-center'}>Обьединение усилий
                                специалистов с целью развития детской дерматологии и распостранения современных
                                медицинских знаний</p>
                        </motion.div>
                        <motion.div initial={{scale: 0.7, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 1, delay: 0.6}}
                                    className={'shadow-xl  bg-green-two gap-5 w-full flex items-center justify-start flex-col p-7 rounded-xl'}>
                            <img className={'sm:w-20 w-12 mt-9 aspect-square'} src={`${images}/confirm.svg`}/>
                            <p className={'text-white sm:text-lg text-sm font-normal text-center'}>Цифровая
                                трансформация в дерматологии на
                                территории РФ</p>
                        </motion.div>
                        <motion.div initial={{scale: 0.7, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 1, delay: 0.9}}
                                    className={'shadow-xl  bg-green-two gap-5 w-full flex items-center justify-start flex-col p-7 rounded-xl'}>
                            <img className={'sm:w-20 w-12 mt-9 aspect-square'} src={`${images}/love.svg`}/>
                            <p className={'text-white sm:text-lg text-sm font-normal text-center'}>Организация помощи
                                детям с тяжелым
                                течением кожных заболеваний</p>
                        </motion.div>
                    </div>

                </div>
                <img className={'absolute left-0 bottom-0'} src={`${images}/about_us_offset_bottom.png`}
                     alt={'asset_bottom'}></img>
            </div>

            {/*КАЛЕНДАРЬ*/}

            <div
                className={'bg-white  lg:py-20 py-12 flex flex-col justify-center px-[20px] lg:px-[140px]'}>
                <div className={'flex mt-7 items-center justify-center sm:justify-between'}>
                    <motion.p initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}
                              className={'uppercase font-extralight text-center sm:text-left text-black text-2xl sm:text-4xl'}>Календарь <br/><strong
                        className={'font-extrabold'}>СОБЫТИЙ 2023</strong></motion.p>
                </div>
                <motion.div initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}} className={'mt-10 overflow-hidden h-fit'}>
                    <Calendar></Calendar>
                </motion.div>
            </div>

            {/*НОВОСТИ*/}

            <div className={'bg-white lg:py-0 py-12 lg:h-[600px]'}>
                <div className={'flex sm:mt-7 items-center px-[20px] lg:px-[140px] justify-center lg:justify-between'}>
                    <motion.p className={'uppercase font-extrabold text-black text-4xl'}
                              initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}
                    >Новости
                    </motion.p>
                </div>
                <motion.div className={'mt-12 w-full flex px-[40px]'}
                            initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <News></News>
                </motion.div>
            </div>

            {/*РЕЗУЛЬТАТЫ*/}

            <div
                className={"lg:h-[700px] lg:pt-0 pt-12 px-[20px] lg:pl-[140px] lg:pr-[70px] flex flex-col justify-center overflow-hidden bg-cover relative bg-[url('/pages/main/results_bg.png')]"}>
                <img className={'absolute left-0 top-0'} src={`${images}/results_top_offset.png`} alt={''}></img>

                <div className={'grid lg:grid-cols-7 grid-cols-1 items-center h-full gap-2'}>
                    <div className={'sm:col-span-4 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'sm:text-4xl text-2xl font-extralight text-white'}>ПРИСОЕДИНЯЙСЯ К
                            НАШЕМУ<br/><span
                                className={'font-extrabold'}>ПРОФЕССИОНАЛЬНОМУ СООБЩЕСТВУ</span></motion.p>
                        <motion.div className={'flex h-28 items-center gap-5'}
                                    initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}>
                            <div className={'h-20 bg-white w-[2px]'}>

                            </div>
                            <div className={'flex flex-col text-white gap-3'}>
                                <CountUp enableScrollSpy={true}
                                         className={'text-5xl sm:text-8xl leading-[70%] font-extrabold font-inter'}
                                         useEasing={true} suffix={'+'} end={20000} decimal={' '} separator={' '}>
                                </CountUp>
                                {/*<p className={'text-8xl leading-[70%] font-extrabold'}>20 000+</p>*/}
                                <p className={'text-lg leading-[70%] font-extralight'}>Вылеченых детей</p>
                            </div>
                        </motion.div>
                        <div className={'flex sm:flex-row flex-col items-start gap-14'}>
                            <motion.div className={'flex h-full items-center gap-5'} initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={10} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Лет помогаем<br/>
                                        детям</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.6}}
                                        className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={150} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Проведено<br/>
                                        мероприятий</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{x: -40, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.9}}
                                        className={'flex h-full items-center gap-5'}>
                                <div className={'h-20 bg-white w-[2px]'}>

                                </div>
                                <div className={'flex flex-col text-white gap-3'}>
                                    <CountUp enableScrollSpy={true} className={'text-5xl leading-[70%] font-extrabold'}
                                             useEasing={true} suffix={'+'} end={19146} decimal={' '} separator={' '}>
                                    </CountUp>
                                    <p className={'text-md leading-[100%] font-extralight'}>Членов<br/>
                                        сообщества</p>
                                </div>
                            </motion.div>
                        </div>
                        <Link href={'/registration'}>
                            <motion.div
                                initial={{y: -40, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}
                                className={'bg-white font-normal sm:self-auto self-center rounded-lg text-xl text-[#277B76] flex items-center justify-center w-72  py-5'}>
                                Подать заявку
                            </motion.div>
                        </Link>
                    </div>
                    <div className={'lg:col-span-3 lg:mt-0 mt-10 h-full relative flex items-center justify-center'}>
                        <img className={'lg:absolute bottom-0'} src={`${images}/results_doctor_sprite.svg`}/>
                        <motion.img initial={{y: 40, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'absolute bottom-0'}
                                    src={`/doctor.png`}/>
                    </div>
                </div>


                <img className={'absolute left-0 bottom-0'} src={`${images}/results_bottom_offset.png`} alt={''}></img>

            </div>


            {/*FEATURES*/}

            {isBuyBookFormOpen?<div className={'w-screen h-screen bg-black bg-opacity-30 fixed top-0 left-0 z-[9999] backdrop-blur-sm flex justify-center items-center'}>
                <div className={'flex flex-col w-full xl:w-2/3 bg-white rounded-lg p-8 max-h-screen relative'}>
                    <img onClick={()=>{setBuyBookFormOpen(false)}} className={'absolute right-5 top-5 cursor-pointer w-8   aspect-square'} src={'/close_black.svg'}/>
                    <BuyBookForm closeFunc={()=>{}} price={3950} event_id={'book'} event_name={'Покупка книги'} participationType={'offline'}/>
                </div>
            </div>:null}

            <div className={'lg:px-[140px] px-[20px] bg-white py-12 lg:py-14'}>
                <div className={'grid grid-cols-1 sm:grid-cols-12 gap-10'}>
                    <div className={'sm:col-span-6 flex flex-col items-start sm:items-start gap-10'}>
                        <motion.p initial={{y: -40, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'text-4xl font-extralight text-left text-black'}>ПСОРИАЗ<br/><span
                            className={'font-extrabold'}>У ДЕТЕЙ</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <p className={'text-sm lg:text-lg leading-[100%]'}>В книге отражены
                                современные представления об эпидемиологии и классификации псориаза,
                                приведены
                                подробные сведения об этиологии, иммунопатогенезе и клинической картине
                                заболевания, учитывая особенности детского возраста. Подробно описаны
                                коморбидные состояния и возможные сопутствующие аутоиммунные заболевания,
                                влияющие на течение болезни и выбор терапевтической тактики у детей. <br/><br/> Отдельное
                                внимание уделено пустулезной форме псориаза и CARD14-ассоциированным
                                папуло-сквамозным поражениям кожи. С учетом последних данных мировой
                                литературы, а также собственного опыта и наблюдений изложена информация о
                                наружной и системной терапии псориаза в детском возрасте с детальным разбором
                                возможности применения каждого из средств в зависимости от определенной
                                клинической ситуации, в том числе в случае парадоксального псориаза.
                                <br/><br/>Дополнительно рассмотрены возможности физиотерапии и диетотерапии у детей,
                                страдающих псориазом, а также роль психолого-педагогическое сопровождения при
                                ведении пациентов.
                                Издание
                                предназначено врачам-дерматовенерологам, педиатрам, ревматологам и врачам
                                общей
                                практики.
                            </p>
                        </motion.div>

                        <motion.div onClick={()=>{setBuyBookFormOpen(true)}} initial={{y: -40, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'bg-[#58BBB4] w-full font-normal cursor-pointer rounded-lg text-xl text-white flex items-center justify-center sm:w-72 w-full  py-5'}>Купить книгу</motion.div>
                    </div>
                    <div className={'sm:col-span-4 flex justify-center relative sm:col-end-13'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg lg:h-full object-contain h-96'}
                                    src={`/book.png`}/>
                        <div className={'absolute xl:w-72 w-32 h-12 xl:h-20 xl:text-3xl bg-green bottom-6 xl:bottom-32 xl:right-20 self-center rounded-full p-3 flex items-center justify-center font-bold uppercase text-white'}>
                            3950 ₽
                        </div>
                    </div>
                </div>
            </div>

            <div className={'lg:px-[140px] px-[20px] bg-white py-12 lg:py-14'}>
                <div className={'grid grid-cols-1 sm:grid-cols-12 gap-10'}>
                    <div className={'sm:col-span-6 flex flex-col items-start sm:items-start gap-10'}>
                        <motion.p initial={{y: -40, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'text-4xl font-extralight text-left text-black'}>ДОСТУПНОСТЬ<br/><span
                            className={'font-extrabold'}>ИНФОРМАЦИИ</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Быть в курсе актуальных новостей в области детской
                                дерматологии.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>
                                Следить за последними результатами клинических исследований новых лекарственных средств,
                                применяемых в детской дерматологии.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Иметь доступ к прослушиванию регулярных вебинаров на
                                актуальные темы о заболеваниях кожи, волос, и ногтей в детском возрасте от ведущих
                                специалистов нашей страны и европейского общества детских дерматологов.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Иметь доступ к образовательным материалам российских
                                и зарубежных специалистов.</p>
                        </motion.div>
                        <Link className={'w-full'} href={'/registration'}>
                            <motion.div initial={{y: -40, opacity: 0}}
                                        whileInView={{y: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7}}
                                        className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center sm:w-72 w-full  py-5'}>
                                Подать заявку
                            </motion.div>
                        </Link>
                    </div>
                    <div className={'sm:col-span-5 flex justify-end sm:col-end-13'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg lg:h-full object-cover h-96'}
                                    src={`${images}/feautures/1.png`}/>
                    </div>
                </div>
            </div>
            <div className={'lg:px-[140px] px-[20px] bg-white py-12 lg:py-14'}>
                <div className={'grid sm:grid-cols-12 grid-cols-1 gap-10'}>
                    <div className={'sm:col-span-6 sm:row-start-1 row-start-2 flex justify-start'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg lg:h-full object-cover h-96'}
                                    src={`${images}/feautures/2.png`}/>
                    </div>
                    <div className={'sm:col-span-5 sm:col-end-13 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'text-4xl font-extralight text-black'}>ОНЛАЙН<br/><span
                            className={'font-extrabold'}>ОБУЧЕНИЕ</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Программа онлайн обучения с доступом к просмотру
                                клинических случаев, вебинаров, семинаров, а также возможностью участвовать в
                                фокус-сессиях и
                                дискуссиях в области детской дерматологии.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-center gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Возможность получать баллы НМО.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Возможность стать спикером научно-практических
                                конференций Общества детских дерматологов</p>
                        </motion.div>

                        <Link href={'/registration'}>
                            <motion.div initial={{y: -40, opacity: 0}}
                                        whileInView={{y: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7}}
                                        className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center w-full sm:w-72  py-5'}>
                                Подать заявку
                            </motion.div>
                        </Link>
                    </div>

                </div>
            </div>
            <div className={'lg:px-[140px] bg-white py-12 px-[20px] lg:py-14'}>
                <div className={'grid grid-cols-1 sm:grid-cols-12 items-center gap-10'}>
                    <div className={'sm:col-span-6 flex flex-col gap-10'}>
                        <motion.p initial={{x: -40, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7}}
                                  className={'text-4xl font-extralight text-black'}>СТАНЬ ЧАСТЬЮ<br/><span
                            className={'font-extrabold'}>БОЛЬШОЙ КОМАНДЫ</span></motion.p>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Множество возможностей для общения с детскими
                                дерматологами со всего мира.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Право на получение сертификата члена Общества
                                детских дерматологов с индивидуальным номером.</p>
                        </motion.div>
                        <motion.div initial={{x: -40, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                                    className={'flex items-start gap-6'}>
                            <div className={'w-8 h-8 aspect-square bg-[#58BBB4]'}>

                            </div>
                            <p className={'text-sm lg:text-xl leading-[100%]'}>Бонусы при участии в крупных конференциях
                                международного формата.</p>
                        </motion.div>

                        <Link href={'/registration'}>
                            <motion.div initial={{y: -40, opacity: 0}}
                                        whileInView={{y: 0, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7}}
                                        className={'bg-[#58BBB4] font-normal rounded-lg text-xl text-white flex items-center justify-center w-full sm:w-72  py-5'}>
                                Подать заявку
                            </motion.div>
                        </Link>
                    </div>
                    <div className={'sm:col-span-5 flex justify-end sm:col-end-13'}>
                        <motion.img initial={{scale: 0.8, opacity: 0}}
                                    whileInView={{scale: 1, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}} className={'rounded-lg'}
                                    src={`${images}/feautures/3.png`}/>
                    </div>
                </div>
            </div>


            {/*FAQ*/}


            <motion.div
                className={"lg:h-[600px] lg:py-0 py-12 flex flex-col justify-center  overflow-hidden bg-cover relative bg-[url('/pages/main/faq_bg.png')]"}>
                <img className={'absolute left-0 top-0 w-full'} src={`${images}/faq_top_offset.png`}
                     alt={'asset_bottom'}/>
                <motion.p
                    className={'text-2xl lg:text-4xl top-10 absolute text-white px-[20px] lg:px-[140px] font-extralight text-black'}
                    initial={{x: -40, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ease: 'easeInOut', duration: 0.7}}
                >ЧАСТО
                    ЗАДАВАЕМЫЕ<br/><span
                        className={'font-extrabold'}>ВОПРОСЫ</span></motion.p>
                <motion.div
                    className={'w-full h-[600px] h-auto px-[20px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-12'}>
                    <motion.div
                        className={'col-span-6 sm:mt-0 mt-20 flex flex-col sm:items-start  justify-center'}>
                        <div className={'w-full lg:flex hidden'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={"fade"}
                                direction={"vertical"}
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
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
                                                <div className={'text-white font-normal'}
                                                     dangerouslySetInnerHTML={{__html: item.answer}}></div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                        <div className={'w-full lg:hidden flex'}>
                            <Swiper
                                speed={1000}
                                autoplay={{delay: 4000}}
                                effect={"coverflow"}
                                direction={"horizontal"}
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                fadeEffect={{crossFade: true}}
                                modules={[Mousewheel, EffectCoverflow, Pagination, Autoplay]}
                                className={'myswiper h-[500px] w-full'}
                            >
                                {faq.map((item, counter) => {
                                    return (
                                        <SwiperSlide key={counter} className={' h-full'}>
                                            <div className={'flex flex-col h-full justify-center gap-5'}>

                                                <div className={'text-left text-2xl text-white '}>
                                                    {item.question}
                                                </div>
                                                <div className={'text-white font-normal'}
                                                     dangerouslySetInnerHTML={{__html: item.answer}}></div>
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

            <div className={'sm:h-[550px] sm:px-[70px] px-[20px] sm:py-0 py-12 bg-white flex flex-col items-center justify-center gap-2'}>
                <motion.p initial={{scale: 0.8, opacity: 0}}
                          whileInView={{scale: 1, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}
                          className={'uppercase text-center font-extralight text-black text-4xl'}>ОБЪЕДИНЯЕМ
                    УСИЛИЯ <br/><strong
                        className={'font-extrabold'}>С ПАРТНЕРАМИ</strong></motion.p>
                <Partners>

                </Partners>
            </div>
        </main>
    )
}

"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";
import {eden} from "@/helpers/sdk";

export default function Home() {

    const videOne = [
        {
            lessonName: 'О проблеме',
            videoHref: 'https://www.youtube.com/embed/4SuH2fwrPuo',
            icon: '/lessons/1.svg',
        },
        {
            lessonName: 'Чем лечить',
            videoHref: 'https://www.youtube.com/embed/4t4h25-E38s',
            icon: '/lessons/2.svg',
        },
        {
            lessonName: 'Спокойный сон без зуда',
            videoHref: 'https://www.youtube.com/embed/rVvlJ3HzEck',
            icon: '/lessons/3.svg',
        },
        {
            lessonName: 'Почему так много атопиков',
            videoHref: 'https://www.youtube.com/embed/hTKpYjVkOgI',
            icon: '/lessons/4.svg',
        },
        {
            lessonName: 'Атопия и аллергия',
            videoHref: 'https://www.youtube.com/embed/A0akp12cAbs',
            icon: '/lessons/1.svg',
        },
        {
            lessonName: 'Питание при атопии',
            videoHref: 'https://www.youtube.com/embed/d2kEbJ1rP4w',
            icon: '/lessons/2.svg',
        },
        {
            lessonName: 'Атопический дерматит и вакцинация',
            videoHref: 'https://www.youtube.com/embed/o8ODOkQsgUg',
            icon: '/lessons/3.svg',
        },
        {
            lessonName: 'Купание',
            videoHref: 'https://www.youtube.com/embed/yqmN0qAOqCo',
            icon: '/lessons/4.svg',
        },
        {
            lessonName: 'Бывает ли привыкание к эмолентам',
            videoHref: 'https://www.youtube.com/embed/EF_8OUzuG7c',
            icon: '/lessons/1.svg',
        },
        {
            lessonName: 'Мокнутия на коже',
            videoHref: 'https://www.youtube.com/embed/g8HAkAMb0rI',
            icon: '/lessons/2.svg',
        },
        {
            lessonName: 'Как распознать инфекцию',
            videoHref: 'https://www.youtube.com/embed/0cQ_QZO_Ibw',
            icon: '/lessons/3.svg',
        },
        {
            lessonName: 'Зуд',
            videoHref: 'https://www.youtube.com/embed/vMO_cAl2DNI',
            icon: '/lessons/4.svg',
        },
        {
            lessonName: 'Гормональные кремы',
            videoHref: 'https://www.youtube.com/embed/YZE3OsSYlZc',
            icon: '/lessons/1.svg',
        },
        {
            lessonName: 'Как выбрать средство ухода',
            videoHref: 'https://www.youtube.com/embed/mc6zhlUfKDY',
            icon: '/lessons/2.svg',
        },
        {
            lessonName: 'Это на всю жизнь ',
            videoHref: 'https://www.youtube.com/embed/0M7YzVNMrHw',
            icon: '/lessons/3.svg',
        },
    ]

    const videTwo = [
        {
            lessonName: 'О проекте',
            videoHref: 'https://www.youtube.com/embed/b5XsSAXeKQU',
            icon: '/lessons/mom/Vector.svg',
        },
        {
            lessonName: 'Правила быта',
            videoHref: 'https://www.youtube.com/embed/-cqdmdYA-74',
            icon: '/lessons/mom/Vector-1.svg',
        },
        {
            lessonName: 'Правильный уход за кожей',
            videoHref: 'https://www.youtube.com/embed/liXuSi-qXx0',
            icon: '/lessons/mom/Vector-2.svg',
        },
        {
            lessonName: 'Эмоциональный настрой ',
            videoHref: 'https://www.youtube.com/embed/d3MOFm_rHh4',
            icon: '/lessons/mom/Group 3463.svg',
        }
    ]

    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)

    const [showMore, setShowMore] = useState(false)

    // useEffect(()=>{
    //     document.addEventListener('mousemove',((event)=>{
    //         // console.log(event.clientX,event.clientY)
    //         setPosX(event.clientX/30*-1)
    //         setPosY(event.clientY/30*-1)
    //     }))
    // })

    const router = useRouter()


    const [showReviewPop, setShowReviewPop] = useState(false)

    const [showHelpPop,setShowHelpPop]=useState(false)




    return (
        <main className={'overflow-x-hidden'}>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/main_bg.png')]">
                <motion.div
                    className={'w-full min-h-screen h-auto px-[20px] lg:px-[70px] grid grid-cols-1 lg:grid-cols-12'}>
                    <div>
                    </div>
                    <motion.div
                        className={'col-span-5 lg:mt-0 mt-20 flex flex-col h-full lg:items-start items-center justify-center'}>
                        <motion.div className={'lg:grid lg:w-full sm:w-2/5 w-4/5 lg:grid-cols-5'}
                                    initial={{x: -100, opacity: 0}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7}}
                        >
                            <img className={'col-span-3'} src={'/azbuka_logo.svg'}/>
                        </motion.div>
                        <motion.div className={'mt-10 lg:grid lg:grid-cols-5'}
                                    initial={{y: -50, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}>
                            <p className={'text-white lg:text-left lg:text-2xl text-center sm:text-xl text-xs font-inter col-span-5'}>Социально-образовательный
                                проект для тех, кто столкнулся с атопическим дерматитом
                                - малышей и их родителей, а также их лечащих докторов</p>
                        </motion.div>
                        <motion.div className={'mt-5 lg:grid lg:grid-cols-5'}
                                    initial={{y: -20, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7, delay: 0.6}}>
                            <a href={'#about'}
                               className={'lg:col-span-2 flex items-center justify-center text-2xl w-full p-4 bg-white rounded-lg'}>
                                Подробнее
                            </a>
                        </motion.div>
                    </motion.div>
                    <div className={'lg:col-span-6 flex flex-col h-full justify-end'}>
                        <motion.img className={'aspect-square sm:w-2/3 lg:w-full'} src={'/mommy.png'}
                                    initial={{y: 100, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeOut', duration: 1, delay: 0.6}}/>
                    </div>

                </motion.div>
                <div className={'absolute bottom-[-4px] asset w-full'}>
                    <img src={'/main_asset_bottom.png'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


            {/*ВТОРОЙ БЛОК*/}

            <div
                className={'bg-white overflow-y-visible px-[20px] lg:min-h-[558px] grid grid-cols-1 lg:grid-cols-12 relative'}>
                <a id={'about'} className={'-top-32 absolute'}></a>
                <div
                    className={'lg:col-span-4 w-full lg:col-start-2 lg:row-start-1 row-start-2 relative flex flex-col items-center justify-center'}>
                    <motion.img className={'lg:absolute z-30'} src={'/child.png'}
                                initial={{scale: 0.7, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 1}}/>
                </div>
                <div className={'col-span-5 col-end-12 flex self-start items-start justify-center h-full flex-col'}>
                    <motion.p className={'font-bold my-2 lg:my-6 text-2xl lg:text-4xl text-black uppercase'}
                              initial={{x: -50, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>
                        О проекте
                    </motion.p>
                    <motion.p className={'text-lg lg:text-xl my-2 lg:my-6'}
                              initial={{y: -20, opacity: 0}}
                              whileInView={{y: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}>
                        В этом проекте, созданном специально для родителей детей–атопиков, мы объединили знания Общества
                        Детских Дерматологов и французской дерматологическиой лаборатории Eau Thermale Avène – экспертов
                        в области ухода за кожей с атопическим дерматитом, которые на ежедневной основе изучают,
                        работают с ведущими научными Обществами, дерматологами, аллергологами, педиатрами, с Фондами и
                        организациями пациентов
                    </motion.p>
                    {showMore ? null :
                        <motion.a className={'font-bold lg:my-6 my-2 text-red text-lg lg:text-xl cursor-pointer'}
                                  initial={{y: -20, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  onClick={() => {
                                      setShowMore(!showMore)
                                  }}
                                  transition={{ease: 'easeInOut', duration: 0.7, delay: 0.6}}>
                            {showMore ? '' : 'Подробнее'}
                        </motion.a>}
                    {showMore ?
                        <p className={'text-lg lg:text-xl my-2 lg:my-6'}>На протяжении многих лет наши бренды предлагают
                            рынку высокоэффективные и безопасные
                            средства, предназначенные специально для кожи, склонной к атопическому дерматиту.
                            <br/><br/>
                            Главный эксперт «Азбуки атопического дерматита» — профессор Мурашкин Николай Николаевич —
                            поможет
                            разобраться в основах заболевания и поделится ценными знаниями и простыми правилами
                            поддержания
                            здоровья кожи.</p> : null}
                </div>
            </div>


            {/*ТРЕТИЙ БЛОК*/}

            <div
                className={'sm:h-[800px] lg:h-[779px] overflow-hidden green-bg px-[20px] lg:py-0 pt-6 lg:px-[70px] relative grid grid-cols-1 lg:grid-cols-12'}>
                <img className={'absolute asset w-full top-0'} src={'/about_us_offset_top.png'}/>
                <div className={'hidden lg:block'}>
                </div>
                <div className={'lg:col-span-5 flex w-full flex-col lg:items-center mt-10 h-full lg:justify-center'}>
                    <motion.p className={'text-white font-bold text-xl lg:text-4xl w-4/5'}
                              initial={{x: -50, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7}}>ДОРОГИЕ ПАЦИЕНТЫ <br/> И РОДИТЕЛИ!
                    </motion.p>
                    <div className={'flex mt-4 w-full'}>
                        <motion.img className={'mr-3 lg:w-auto w-5 self-start'} src={'/quotes.svg'}
                                    initial={{x: 20, opacity: 0, rotate: 180}}
                                    whileInView={{x: 0, opacity: 1, rotate: 0}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}/>
                        <motion.p className={'text-xs sm:text-lg lg:text-xl text-white w-4/5'}
                                  initial={{y: 20, opacity: 0}}
                                  whileInView={{y: 0, opacity: 1}}
                                  viewport={{once: true}}
                                  transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}>Мы создали «Азбуку
                            атопического дерматита» специально для родителей детей-атопиков, которые мечтают о здоровой
                            коже своего ребенка.
                            <br/><br/>
                            Проверенные, полезные знания об атопическом дерматите в одном месте и в удобном формате. Для
                            стойкой ремиссии, чистой кожи и качественно новой жизни вашего ребенка и всей семьи!»
                        </motion.p>
                        <motion.img className={'ml-0 lg:w-auto w-5 self-end rotate-180'} src={'/quotes.svg'}
                                    initial={{x: -20, opacity: 0, rotate: 0}}
                                    whileInView={{x: 0, opacity: 1, rotate: 180}}
                                    viewport={{once: true}}
                                    transition={{ease: 'easeInOut', duration: 0.7, delay: 0.3}}/>
                    </div>

                </div>
                <div className={'col-span-6 flex flex-col relative justify-center items-center'}>
                    <img className={'lg:absolute bottom-0 w-2/3 lg:w-full'} src={'/about_us_footage.svg'}/>
                    <motion.div
                        className={'shadow-lg bg-white absolute lg:text-lg text-xs bottom-5 z-[20] lg:text-center text-center lg:top-auto lg:bottom-5 lg:w-96 rounded-lg p-3'}
                        animate={{x: posX, y: posY}}
                        transition={{
                            type: 'spring',
                            delay: 0,
                            duration: 0.3,
                            stiffness: 10,
                            ease: 'linear',
                            damping: 10
                        }}>
                        Руководитель НИИ дерматологии, доктор медицинских наук, профессор.
                    </motion.div>
                    <motion.img className={'absolute bottom-0 w-3/5 lg:w-4/5'} src={'/doctor.png'}
                                initial={{y: 100, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}/>
                    {/*<motion.div*/}
                    {/*    animate={{x: -posX, y: -posY}}*/}
                    {/*    transition={{*/}
                    {/*        type: 'spring',*/}
                    {/*        delay: 0,*/}
                    {/*        duration: 0.3,*/}
                    {/*        stiffness: 80,*/}
                    {/*        ease: 'linear',*/}
                    {/*        damping: 70*/}
                    {/*    }}*/}
                    {/*    className={'shadow-lg bg-white absolute left-12 top-12 sm:left-20 sm:top-64 flex items-center justify-center w-8 h-8 sm:w-20 sm:h-20 rounded-full p-1 sm:p-3'}>*/}
                    {/*    <img className={'w-full h-full'} src={'/help.svg'}/>*/}
                    {/*</motion.div>*/}
                    <motion.div
                        animate={{x: posX, y: posY}}
                        transition={{
                            type: 'spring',
                            delay: 0,
                            duration: 0.3,
                            stiffness: 10,
                            ease: 'linear',
                            damping: 10,
                            restDelta: 0.001
                        }}
                        className={'shadow-lg rounded-xl bg-white lg:absolute lg:-right-0 -right-2 top-16 lg:top-auto lg:bottom-72 flex items-center justify-center p-1 lg:p-3'}>
                        <div
                            className={'lg:w-14 w-8 h-8 lg:h-14 relative flex items-center justify-center p-2 bg-red rounded-full'}>
                            <img className={''} src={'/stetoscope.svg'}/>
                        </div>
                        <p className={'font-bold ml-3 lg:text-sm text-xs leading-[110%]'}>Мурашкин<br/>Николай<br/>Николаевич
                        </p>
                    </motion.div>
                    {/*<motion.div*/}
                    {/*    animate={{x: -posX * 1.5, y: -posY * 1.5}}*/}
                    {/*    transition={{*/}
                    {/*        type: 'spring',*/}
                    {/*        delay: 0,*/}
                    {/*        duration: 0.3,*/}
                    {/*        stiffness: 40,*/}
                    {/*        ease: 'linear',*/}
                    {/*        damping: 30*/}
                    {/*    }}*/}
                    {/*    className={'shadow-lg bg-white absolute left-4 lg:right-20 lg:bottom-32 flex items-center justify-center w-8 h-8 p-1.5 lg:w-20 lg:h-20 rounded-full lg:p-3'}>*/}
                    {/*    <img className={''} src={'/heart.svg'}/>*/}
                    {/*</motion.div>*/}
                </div>

                <img className={'absolute w-full asset -bottom-[1px]'} src={'/about_us_offset_bot.png'}/>
            </div>


            {/*ЧЕТВЁРТЫЙ БЛОК*/}
            <div className={'bg-white flex flex-col py-20 px-[20px] lg:px-[70px] relative items-center justify-center'}>
                <a id={'posts'} className={'-top-32 absolute'}></a>
                <motion.p className={'font-bold lg:text-left text-center text-xl lg:text-4xl text-black uppercase'}
                          initial={{y: -40, opacity: 0}}
                          whileInView={{y: 0, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 0.7}}>Полезные статьи
                </motion.p>
                <motion.div className={'w-full p-2'} initial={{y: -40, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <Slider></Slider>
                </motion.div>
            </div>

            {/*ПЯТЫЙ БЛОК*/}

            <div
                className={'bg-white flex flex-col py-3 lg:py-1 px-[20px] lg:px-[70px] relative items-center justify-center'}>
                <a id={'videolessons'} className={'-top-32 absolute'}></a>
                <div className={'w-full flex lg:px-[4.5rem] items-center justify-between'}>
                    <motion.p
                        className={'font-bold lg:block hidden text-xs lg:text-4xl lg:mb-2 lg:mb-6 text-black uppercase'}
                        initial={{x: -40, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: 'easeInOut', duration: 0.7}}>Видеоуроки
                    </motion.p>
                    <motion.div
                        className={'bg-green rounded-xl w-full lg:w-auto p-1 lg:p-4 flex items-center justify-center'}
                        initial={{x: 40, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{ease: 'easeInOut', duration: 0.7}}>
                        <img className={'w-8 aspect-square mr-2 lg:mr-4'} src={'/lesson.svg'}/>
                        <p className={'font-bold text-white'}>Уроки доктора Продеуса</p>
                    </motion.div>
                </div>
                <motion.div className={'w-full p-2'}
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <VideoPlayer theme={'green'} lessons={videOne}></VideoPlayer>
                </motion.div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white flex flex-col px-[20px] lg:py-1 lg:px-[70px] items-center justify-center'}>
                <div className={'w-full flex lg:px-[4.5rem] items-center justify-between'}>
                    <motion.div className={'bg-red lg:w-auto w-full rounded-xl p-4 flex items-center justify-center'}
                                initial={{x: -40, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7}}>
                        <img className={'w-8 aspect-square mr-4'} src={'/mom.svg'}/>
                        <p className={'font-bold text-white'}>Практические уроки для мам</p>
                    </motion.div>
                </div>
                <motion.div className={'w-full p-2'}
                            initial={{y: -30, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7}}>
                    <VideoPlayer theme={'red'} lessons={videTwo}></VideoPlayer>
                </motion.div>
            </div>

            {/*СЕДБМОЙ БЛОК*/}

            <div
                className={'w-full relative px-[20px] lg:px-[70px] bg-[url("/bg_reviews.jpg")] flex items-center justify-center flex-col h-[867px] relative'}>
                <a id={'reviews'} className={'-top-32 absolute'}></a>
                <img className={'absolute asset w-full left-0 top-0'} src={'/reviews_offset.png'}/>
                <motion.p className={'text-white text-3xl lg:text-5xl font-bold uppercase'}
                          initial={{scale: 0.7, opacity: 0}}
                          whileInView={{scale: 1, opacity: 1}}
                          viewport={{once: true}}
                          transition={{ease: 'easeInOut', duration: 1}}>Отзывы
                </motion.p>
                <motion.div className={'w-full p-2 mt-10'}
                            initial={{scale: 0.7, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 1}}>
                    <Reviews/>
                </motion.div>
                <div
                    className={'bg-red duration-300 transition-all cursor-pointer mt-2 w-full lg:w-1/5 border-red border-2 lg:p-4 p-1 lg:text-xs text-lg text-white flex items-center rounded-lg font-bold justify-center'}
                    onClick={() => {
                        setShowReviewPop(true)
                    }}>
                    Оставить отзыв
                </div>
                <img className={'absolute w-full left-0 asset bottom-0'} src={'/reviews_offset_bottom.png'}/>
                {showReviewPop ? <ReviewPop callback={() => {
                    setShowReviewPop(false)
                }}></ReviewPop> : null}
            </div>

            {/*ВОСЬМОЙ БЛОК*/}

            {/*<div className={'bg-white flex flex-col px-[20px] lg:py-20 sm:px-[70px] items-center justify-center'}>*/}
            {/*    <motion.p className={'font-bold text-4xl text-black uppercase'}*/}
            {/*              initial={{y: -40, opacity: 0}}*/}
            {/*              whileInView={{y: 0, opacity: 1}}*/}
            {/*              viewport={{once: true}}*/}
            {/*              transition={{ease: 'easeInOut', duration: 0.7}}>НОВОСТИ*/}
            {/*    </motion.p>*/}
            {/*    <motion.div className={'w-full p-2'} initial={{y: -40, opacity: 0}}*/}
            {/*                whileInView={{y: 0, opacity: 1}}*/}
            {/*                viewport={{once: true}}*/}
            {/*                transition={{ease: 'easeInOut', duration: 0.7}}>*/}
            {/*        <Slider></Slider>*/}
            {/*    </motion.div>*/}
            {/*</div>*/}

            <div className={'bg-white flex flex-col sm:py-20 px-[20px] sm:px-[80px] pb-32 lg:px-[140px] items-start justify-center'}>
                <p className={'font-bold text-lg sm:text-4xl text-black uppercase'}>ПОДБЕРИ СВОЮ ПРОГРАММУ УХОДА <br
                    className={'sm:block hidden'}/>
                    <span className={'text-green font-bold'}>ЗА АТОПИЧНОЙ КОЖЕЙ</span></p>
                <div className={'w-full mt-20 relative grid grid-cols-1 sm:grid-cols-1'}>
                    <div className={'sm:flex items-center justify-center relative'}>
                        <div className={'flex flex-col items-center justify-center'}>
                            <motion.img className={''} src={'/products/red/offset.svg'}
                                        initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7}}/>
                            <motion.img className={'absolute w-48 sm:w-96 z-10'} src={'/products3.png'}
                                        initial={{scale: 0.7, opacity: 0}}
                                        whileInView={{scale: 1, opacity: 1}}
                                        viewport={{once: true}}
                                        transition={{ease: 'easeInOut', duration: 0.7, delay: 0.6}}/>
                        </div>

                        <motion.div
                            animate={{x: posX, y: posY}}
                            transition={{
                                type: 'spring',
                                delay: 0,
                                duration: 0.3,
                                stiffness: 10,
                                ease: 'linear',
                                damping: 10,
                                restDelta: 0.001
                            }}
                            className={'shadow-lg rounded-xl bg-white z-20 sm:absolute -left-12 bottom-72 flex items-center justify-start my-5 sm:my-0 p-3'}>
                            <div className={'w-14 h-14 relative flex items-center justify-center bg-red rounded-full'}>
                                <img className={''} src={'/stetoscope.svg'}/>
                            </div>
                            <p className={'font-bold ml-3 leading-[110%]'}>Профессиональный <br/>
                                уход за кожей</p>
                        </motion.div>
                        <motion.div
                            animate={{x: posX, y: posY}}
                            transition={{
                                type: 'spring',
                                delay: 0,
                                duration: 0.3,
                                stiffness: 10,
                                ease: 'linear',
                                damping: 10,
                                restDelta: 0.001
                            }}
                            className={'shadow-lg rounded-xl bg-white z-20 sm:absolute -left-12 top-5 flex items-center justify-start my-5 sm:my-0 p-3'}>
                            <div className={'w-14 h-14 relative flex items-center justify-center rounded-full'}>
                                <img className={''} src={'/products/red/tablets.svg'}/>
                            </div>
                            <p className={'font-bold ml-3 leading-[110%]'}>Проверенные <br/>
                                безопасные формулы</p>
                        </motion.div>
                        <motion.div
                            animate={{x: posX, y: posY}}
                            transition={{
                                type: 'spring',
                                delay: 0,
                                duration: 0.3,
                                stiffness: 10,
                                ease: 'linear',
                                damping: 10,
                                restDelta: 0.001
                            }}
                            className={'shadow-lg rounded-xl bg-white z-20 sm:absolute -left-12 bottom-32 flex items-center justify-start p-3'}>
                            <div className={'w-14 h-14 relative flex items-center justify-center bg-white rounded-full'}>
                                <img className={''} src={'/heart.svg'}/>
                            </div>
                            <p className={'font-bold ml-3 leading-[110%]'}>Доказанная <br/> эффективность</p>
                        </motion.div>
                        {/*<div*/}
                        {/*   className={'cursor-pointer font-bold w-full sm:w-32 mt-5 rounded-xl sm:absolute relative z-[29] flex items-center justify-center text-white font-normal sm:aspect-square text-xl absolute right-0'}>*/}
                        {/*    <div className={'px-10 p-3 w-full h-12 sm:h-full rounded-full bg-red sm:animate-ping absolute top-0 left-0'}>*/}

                        {/*    </div>*/}
                        {/*    <a href={'/catalog'} className={'px-10 p-3 w-full h-12 sm:h-full rounded-full bg-red absolute top-0 left-0 flex items-center justify-center'}>*/}
                        {/*        <strong>Выбрать</strong>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

            {/*ДЕВЯТЫЙ БЛОК*/}

            <div
                className={'w-full relative px-[20px] lg:px-[140px] resources-bg sm:grid items-center gap-10 sm:grid-cols-5 pt-20 sm:py-20 overflow-visible'}>
                <a id={'resources'} className={'-top-32 absolute'}></a>
                <img className={'absolute w-full asset left-0 top-0'} src={'/resources_offset.png'}/>
                <div className={'col-span-3 flex flex-col items-center sm:items-start justify-center'}>
                    <motion.div className={'flex p-2 sm:p-4 mt-6 cursor-pointer items-center bg-white rounded-full'}
                                initial={{x: -40, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: 'easeInOut', duration: 0.7, delay: 0.2}} onClick={()=>{setShowHelpPop(true)}}>
                        <img className={'w-6 sm:w-20 aspect-square'} src={'/need_help.svg'}/>
                        <p className={'font-bold text-sm sm:text-4xl ml-3 text-[#00A19A]'}>Задать вопрос доктору</p>
                    </motion.div>
                    <motion.p className={'text-white text-xs text-center sm:text-left sm:text-lg w-4/5 my-7'}
                              initial={{x: -40, opacity: 0}}
                              whileInView={{x: 0, opacity: 1}}
                              viewport={{once: true}}
                              transition={{ease: 'easeInOut', duration: 0.7, delay: 0.4}}>Получите полезную информацию и
                        возможность обратиться за консультацией к специалистам «Общества
                        детских дерматологов» на базе Национального медицинского исследовательского Центра Здоровья
                        Детей
                    </motion.p>
                </div>
                <motion.div className={'w-full col-span-2 flex items-center justify-center'}
                            initial={{scale: 0.5, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ease: 'easeInOut', duration: 0.7, delay: 0.8}}>
                    <img className={'sm:absolute z-50 h-full'} src={'/pages/main/employers/murashkin.png'}/>
                </motion.div>
                {showHelpPop ? <HelpPop callback={() => {
                    setShowHelpPop(false)
                }}></HelpPop> : null}
            </div>

        </main>
    )
}

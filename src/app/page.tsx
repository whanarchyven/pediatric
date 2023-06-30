"use client"
import Image from 'next/image'
import MainBlock from "@/blocks/MainBlock";
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

export default function Home() {

    const videOne = [
        {
            lessonName: 'Гормональные кремы',
            videoHref: 'https://www.youtube.com/embed/Qh3TpIH-5qw',
            icon: '/lessons/1.svg',
        },
        {
            lessonName: 'Зуд при атопическом дерматите',
            videoHref: 'https://www.youtube.com/embed/nbarnOzUu9k',
            icon: '/lessons/2.svg',
        },
        {
            lessonName: 'Как распознать инфицирование',
            videoHref: 'https://www.youtube.com/embed/2BGGO5pXSYk',
            icon: '/lessons/3.svg',
        },
        {
            lessonName: 'Мокнутия на коже',
            videoHref: 'https://www.youtube.com/embed/U24Fnp6MywU',
            icon: '/lessons/4.svg',
        }
    ]

    const videTwo = [
        {
            lessonName: 'Эмоциональный настрой',
            videoHref: 'https://www.youtube.com/embed/1uHBQajekfY',
            icon: '/lessons/mom/Vector.svg',
        },
        {
            lessonName: 'Правильный уход за кожей',
            videoHref: 'https://www.youtube.com/embed/1uHBQajekfY',
            icon: '/lessons/mom/Vector-1.svg',
        },
        {
            lessonName: 'Правила быта',
            videoHref: 'https://www.youtube.com/embed/1uHBQajekfY',
            icon: '/lessons/mom/Vector-2.svg',
        },
        {
            lessonName: 'О проекте',
            videoHref: 'https://www.youtube.com/embed/1uHBQajekfY',
            icon: '/lessons/mom/Group 3463.svg',
        }
    ]

    const [posX,setPosX]=useState(0)
    const [posY,setPosY]=useState(0)

    useEffect(()=>{
        document.addEventListener('mousemove',((event)=>{
            // console.log(event.clientX,event.clientY)
            setPosX(event.clientX/30*-1)
            setPosY(event.clientY/30*-1)
        }))
    })

    const router=useRouter()

    return (
        <main>
            {/*ПЕРВЫЙ БЛОК*/}
            <motion.div className="min-h-screen overflow-hidden bg-cover relative bg-[url('/main_bg.png')]">
                <motion.div className={'w-full min-h-screen px-[70px] grid grid-cols-12'}>
                    <div>
                    </div>
                    <motion.div className={'col-span-5 flex flex-col h-full justify-center'}>
                        <motion.div className={'grid grid-cols-5'}
                        initial={{x:-100,opacity:0}}
                                    whileInView={{x:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7}}
                        >
                            <img className={'col-span-3'} src={'/azbuka_logo.svg'}/>
                        </motion.div>
                        <motion.div className={'mt-10 grid grid-cols-5'}
                                    initial={{y:-50,opacity:0}}
                                    whileInView={{y:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.3}}>
                            <p className={'text-white font-inter col-span-5'}>Для тех кто столкнулся с атопическим
                                дерматитом — малышей и их родителей, а также их лечащих докторов
                                от Pierre Fabre Dermo-Cosmétique</p>
                        </motion.div>
                        <motion.div className={'mt-5 grid grid-cols-5'}
                                    initial={{y:-20,opacity:0}}
                                    whileInView={{y:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.6}}>
                            <button className={'col-span-2 bg-white rounded-lg h-12'}>
                                Подробнее
                            </button>
                        </motion.div>
                    </motion.div>
                    <div className={'col-span-6 flex flex-col h-full justify-end'}>
                        <motion.img className={'aspect-square w-full'} src={'/mommy.png'}
                                    initial={{y:100,opacity:0}}
                                    whileInView={{y:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeOut',duration:1,delay:0.6}}/>
                    </div>

                </motion.div>
                <div className={'absolute w-full'} style={{bottom: '-2px'}}>
                    <img src={'/main_asset_bottom.svg'} alt={'asset_bottom'}></img>
                </div>
            </motion.div>


            {/*ВТОРОЙ БЛОК*/}

            <div className={'bg-white overflow-y-visible h-[558px] grid grid-cols-12'}>
                <div>

                </div>
                <div className={'col-span-4 relative flex flex-col items-center justify-center'}>
                    <motion.img className={'absolute z-30'} src={'/child.png'}
                                initial={{scale:0.7,opacity:0}}
                                whileInView={{scale:1,opacity:1}}
                                viewport={{once:true}}
                                transition={{ease:'easeInOut',duration:1}}/>
                </div>
                <div></div>
                <div className={'col-span-5 flex items-start justify-center h-full flex-col'}>
                    <motion.p className={'font-bold my-6 text-4xl text-black uppercase'}
                    initial={{x:-50,opacity:0}}
                                    whileInView={{x:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7}}>
                        О проекте
                    </motion.p>
                    <motion.p className={'text-xl my-6'}
                    initial={{y:-20,opacity:0}}
                                    whileInView={{y:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.3}}>
                        В этом проекте, созданном специально для родителей детей–атопиков, мы объединили знания двух
                        французских брендов — экспертов в атопическом дерматите, которые долгие годы в Европе и в России
                        сотрудничают с ведущими специалистами — дерматологами, аллергологами и педиатрами, с фондами и
                        организациями пациентов.
                    </motion.p>
                    <motion.a className={'font-bold my-6 text-red text-xl cursor-pointer'}
                    initial={{y:-20,opacity:0}}
                                    whileInView={{y:0,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.6}}>
                        Подробнее...
                    </motion.a>
                </div>
            </div>


            {/*ТРЕТИЙ БЛОК*/}

            <div className={'h-[779px] overflow-hidden green-bg px-[70px] relative grid grid-cols-12'}>
                <img className={'absolute w-full top-0'} src={'/about_us_offset_top.svg'}/>
                <div>
                </div>
                <div className={'col-span-5 flex flex-col items-center h-full justify-center'}>
                    <motion.p className={'text-white font-bold text-4xl w-4/5'}
                              initial={{x:-50,opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              viewport={{once:true}}
                              transition={{ease:'easeInOut',duration:0.7}}>ДОРОГИЕ ПАЦИЕНТЫ <br/> И РОДИТЕЛИ!</motion.p>
                    <div className={'flex mt-4 w-full'}>
                        <motion.img className={'mr-3 self-start'} src={'/quotes.svg'}
                                    initial={{x:20,opacity:0,rotate:180}}
                                    whileInView={{x:0,opacity:1,rotate:0}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.3}}/>
                        <motion.p className={'text-xl text-white w-4/5'}
                                  initial={{y:20,opacity:0}}
                                  whileInView={{y:0,opacity:1}}
                                  viewport={{once:true}}
                                  transition={{ease:'easeInOut',duration:0.7,delay:0.3}}>Мы создали «Азбуку атопического дерматита» специально
                            для мам детей-атопиков, которые каждый
                            день мечтают о здоровой коже своего ребенка.
                            <br/><br/>
                            Мы постараемся дать вам простые и полезные знания об атопическом дерматите, о том, как
                            правильно ухаживать за хрупкой кожей и добиться стойкой ремиссии, чистой кожи и качественно
                            новой жизни для вашего ребенка.</motion.p>
                        <motion.img className={'ml-0 self-end rotate-180'} src={'/quotes.svg'}
                                    initial={{x:-20,opacity:0,rotate:0}}
                                    whileInView={{x:0,opacity:1,rotate:180}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.3}}/>
                    </div>

                </div>
                <div className={'col-span-6 flex flex-col relative justify-center items-center'}>
                    <img className={'absolute bottom-0 w-full'} src={'/about_us_footage.svg'}/>
                    <motion.div className={'shadow-lg bg-white absolute left-0 bottom-64 w-56 rounded-lg p-3'}
                                animate={{x:posX,y:posY}}
                                transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:10, ease:'linear', damping:10}}>
                        Иммунолог-аллерголог, доктор медицинских наук, профессор.
                    </motion.div>
                    <motion.img className={'absolute bottom-0 w-4/5'} src={'/doctor.png'}
                                    initial={{y:100,opacity:0}}
                                whileInView={{y:0,opacity:1}}
                                viewport={{once:true}}
                                transition={{ease:'easeInOut',duration:0.7}}/>
                    <motion.div
                        animate={{x:-posX,y:-posY}}
                        transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:80, ease:'linear', damping:70}}
                        className={'shadow-lg bg-white absolute left-20 top-64 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/help.svg'}/>
                    </motion.div>
                    <motion.div
                        animate={{x:posX,y:posY}}
                        transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:10, ease:'linear', damping:10,restDelta: 0.001}}
                        className={'shadow-lg rounded-xl bg-white absolute right-0 bottom-72 flex items-center justify-center p-3'}>
                        <div className={'w-14 h-14 relative flex items-center justify-center bg-red rounded-full'}>
                            <img className={''} src={'/stetoscope.svg'}/>
                        </div>
                        <p className={'font-bold ml-3 leading-[110%]'}>Андрей <br/>
                            Петрович <br/>
                            Продеус</p>
                    </motion.div>
                    <motion.div
                        animate={{x:-posX*1.5,y:-posY*1.5}}
                        transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:40, ease:'linear', damping:30}}
                        className={'shadow-lg bg-white absolute right-20 bottom-32 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/heart.svg'}/>
                    </motion.div>
                </div>

                <img className={'absolute w-full -bottom-[1px]'} src={'/about_us_offset_bot.svg'}/>
            </div>


            {/*ЧЕТВЁРТЫЙ БЛОК*/}
            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <motion.p className={'font-bold text-4xl text-black uppercase'}
                          initial={{y:-40,opacity:0}}
                          whileInView={{y:0,opacity:1}}
                          viewport={{once:true}}
                          transition={{ease:'easeInOut',duration:0.7}}>Полезные статьи</motion.p>
                <motion.div className={'w-full p-2'} initial={{y:-40,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:0.7}}>
                    <Slider></Slider>
                </motion.div>
            </div>

            {/*ПЯТЫЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <div className={'w-full flex px-[4.5rem] items-center justify-between'}>
                    <motion.p className={'font-bold text-4xl mb-6 text-black uppercase'}
                              initial={{x:-40,opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              viewport={{once:true}}
                              transition={{ease:'easeInOut',duration:0.7}}>Видеоуроки</motion.p>
                    <motion.div className={'bg-green rounded-xl p-4 flex items-center justify-center'}
                                initial={{x:40,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                viewport={{once:true}}
                                transition={{ease:'easeInOut',duration:0.7}}>
                        <img className={'w-8 aspect-square mr-4'} src={'/lesson.svg'}/>
                        <p className={'font-bold text-white'}>Уроки доктора Продеуса</p>
                    </motion.div>
                </div>
                <motion.div className={'w-full p-2'}
                            initial={{y:-30,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:0.7}}>
                    <VideoPlayer theme={'green'} lessons={videOne}></VideoPlayer>
                </motion.div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <div className={'w-full flex px-[4.5rem] items-center justify-between'}>
                    <motion.div className={'bg-red rounded-xl p-4 flex items-center justify-center'}
                                initial={{x:-40,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                viewport={{once:true}}
                                transition={{ease:'easeInOut',duration:0.7}}>
                        <img className={'w-8 aspect-square mr-4'} src={'/mom.svg'}/>
                        <p className={'font-bold text-white'}>Практические уроки для мам</p>
                    </motion.div>
                </div>
                <motion.div className={'w-full p-2'}
                            initial={{y:-30,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:0.7}}>
                    <VideoPlayer theme={'red'} lessons={videTwo}></VideoPlayer>
                </motion.div>
            </div>

            {/*СЕДБМОЙ БЛОК*/}

            <div
                className={'w-full relative px-[70px] bg-[url("/bg_reviews.jpg")] flex items-center justify-center flex-col h-[867px]'}>
                <img className={'absolute w-full left-0 top-0'} src={'/reviews_offset.svg'}/>
                <motion.p className={'text-white text-5xl font-bold uppercase'}
                          initial={{scale:0.7,opacity:0}}
                          whileInView={{scale:1,opacity:1}}
                          viewport={{once:true}}
                          transition={{ease:'easeInOut',duration:1}}>Мамы советуют</motion.p>
                <motion.div className={'w-full p-2 mt-10'}
                            initial={{scale:0.7,opacity:0}}
                            whileInView={{scale:1,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:1}}>
                    <Reviews/>
                </motion.div>
                <img className={'absolute w-full left-0 bottom-0'} src={'/reviews_offset_bottom.svg'}/>
            </div>

            {/*ВОСЬМОЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <motion.p className={'font-bold text-4xl text-black uppercase'}
                          initial={{y:-40,opacity:0}}
                          whileInView={{y:0,opacity:1}}
                          viewport={{once:true}}
                          transition={{ease:'easeInOut',duration:0.7}}>НОВОСТИ</motion.p>
                <motion.div className={'w-full p-2'} initial={{y:-40,opacity:0}}
                            whileInView={{y:0,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:0.7}}>
                    <Slider></Slider>
                </motion.div>
            </div>

            <div className={'bg-white flex flex-col py-20 pb-32 px-[140px] items-start justify-center'}>
                <p className={'font-bold text-4xl text-black uppercase'}>ПОДБЕРИ СВОЮ ПРОГРАММУ УХОДА <br/>
                    <span className={'text-green font-bold'}>ЗА АТОПИЧНОЙ КОЖЕЙ</span></p>
                <div className={'w-full mt-5 relative grid grid-cols-2'}>
                    <div className={'flex items-center justify-center relative'}>
                        <motion.img className={''} src={'/products/red/offset.svg'}
                                    initial={{scale:0.7,opacity:0}}
                                    whileInView={{scale:1,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7}}/>
                        <motion.img className={'absolute z-10'} src={'/products/red/crema.png'}
                                    initial={{scale:0.7,opacity:0}}
                                    whileInView={{scale:1,opacity:1}}
                                    viewport={{once:true}}
                                    transition={{ease:'easeInOut',duration:0.7,delay:0.6}}/>
                        <motion.div
                            animate={{x:-posX,y:-posY}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:80, ease:'linear', damping:70}}
                            className={'shadow-lg bg-white absolute -left-0 top-24 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                            <img className={''} src={'/products/red/tablets.svg'}/>
                        </motion.div>
                        <motion.div
                            animate={{x:posX,y:posY}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:10, ease:'linear', damping:10,restDelta: 0.001}}
                            className={'shadow-lg rounded-xl bg-white absolute -left-12 bottom-72 flex items-center justify-center p-3'}>
                            <div className={'w-14 h-14 relative flex items-center justify-center bg-red rounded-full'}>
                                <img className={''} src={'/stetoscope.svg'}/>
                            </div>
                            <p className={'font-bold ml-3 leading-[110%]'}>Профессиональный <br/>
                               уход за кожей</p>
                        </motion.div>
                        <motion.div
                            animate={{x:-posX*1.5,y:-posY*1.5}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:40, ease:'linear', damping:30}}
                            className={'shadow-lg bg-white absolute right-10 bottom-60 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                            <img className={''} src={'/products/red/heart.svg'}/>
                        </motion.div>
                        <a href={'/catalog'} className={'cursor-pointer absolute z-[29] flex items-center justify-center rounded-xl text-white font-normal px-10 text-xl p-3 absolute -bottom-14 bg-red'}>
                            Подробнее
                        </a>
                    </div>
                    <div className={'flex flex-col items-center justify-center relative'}>
                        <motion.img className={''} src={'/products/green/offset.svg'}
                        initial={{scale:0.7,opacity:0}}
                          whileInView={{scale:1,opacity:1}}
                          viewport={{once:true}}
                          transition={{ease:'easeInOut',duration:0.7}}/>
                        <motion.img className={'absolute z-10'} src={'/products/green/crema.png'}
                        initial={{scale:0.7,opacity:0}}
                          whileInView={{scale:1,opacity:1}}
                          viewport={{once:true}}
                          transition={{ease:'easeInOut',duration:0.7,delay:0.6}}/>
                        <motion.div
                            animate={{x:-posX,y:-posY}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:80, ease:'linear', damping:70}}
                            className={'shadow-lg bg-white absolute -left-0 top-20 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                            <img className={''} src={'/products/green/people.svg'}/>
                        </motion.div>
                        <motion.div
                            animate={{x:posX,y:posY}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:10, ease:'linear', damping:10,restDelta: 0.001}}
                            className={'shadow-lg rounded-xl bg-white absolute -left-0 top-52 flex items-center justify-center p-3'}>
                            <div className={'w-14 h-14 relative flex items-center justify-center bg-green rounded-full'}>
                                <img className={''} src={'/products/green/done.svg'}/>
                            </div>
                            <p className={'font-bold ml-3 leading-[110%]'}>Доказанная<br/>
                                эффективность</p>
                        </motion.div>
                        <motion.div
                            animate={{x:-posX*1.5,y:-posY*1.5}}
                            transition={{ type: 'spring' , delay:0, duration:0.3, stiffness:40, ease:'linear', damping:30}}
                            className={'shadow-lg bg-white absolute right-10 bottom-60 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                            <img className={''} src={'/products/green/help.svg'}/>
                        </motion.div>
                        <a href={'/catalog'} className={'cursor-pointer absolute z-[29] flex items-center justify-center rounded-xl text-white font-normal px-10 text-xl p-3 absolute -bottom-20 bg-green'}>
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>

            {/*ДЕВЯТЫЙ БЛОК*/}

            <div className={'w-full relative px-[140px] resources-bg grid items-center gap-10 grid-cols-5 py-20 overflow-visible'}>
                <img className={'absolute w-full left-0 top-0'} src={'/resources_offset.svg'}/>
                <div className={'col-span-3 flex flex-col items-start justify-center'}>
                    <motion.p className={'text-4xl uppercase font-bold text-white'}
                              initial={{x:-40,opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              viewport={{once:true}}
                              transition={{ease:'easeInOut',duration:0.7}}>Полезные ресурсы</motion.p>
                    <motion.div className={'flex p-4 mt-6 items-center bg-white rounded-full'}
                                initial={{x:-40,opacity:0}}
                                whileInView={{x:0,opacity:1}}
                                viewport={{once:true}}
                                transition={{ease:'easeInOut',duration:0.7,delay:0.2}}>
                        <img className={'w-12 aspect-square'} src={'/need_help.svg'}/>
                        <p className={'font-bold text-2xl ml-3 text-[#00A19A]'}>Нужна поддержка?</p>
                    </motion.div>
                    <motion.p className={'text-white text-lg w-4/5 my-7'}
                              initial={{x:-40,opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              viewport={{once:true}}
                              transition={{ease:'easeInOut',duration:0.7,delay:0.4}}>Получите полезную информацию и возможность обратиться за консультацией к специалистам «Общества
                        детских дерматологов» на базе Национального медицинского исследовательского Центра Здоровья
                        Детей</motion.p>
                    <motion.button className={'bg-red w-2/5 rounded-lg font-light py-3 text-white text-xl px-6'}
                                   initial={{x:-40,opacity:0}}
                                   whileInView={{x:0,opacity:1}}
                                   viewport={{once:true}}
                                   transition={{ease:'easeInOut',duration:0.7,delay:0.6}}>Перейти на сайт</motion.button>
                </div>
                <motion.div className={'w-full col-span-2 flex items-center justify-center'}
                            initial={{scale:0.5,opacity:0}}
                            whileInView={{scale:1,opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:'easeInOut',duration:0.7,delay:0.8}}>
                    <img className={'absolute z-50 h-full'} src={'/doctor2.png'}/>
                </motion.div>
            </div>

        </main>
    )
}

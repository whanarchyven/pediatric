"use client"
import Image from 'next/image'
import MainBlock from "@/blocks/MainBlock";
import React from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";

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

    return (
        <main>
            {/*ПЕРВЫЙ БЛОК*/}
            <div className="min-h-screen bg-cover relative bg-[url('/main_bg.png')]">
                <div className={'w-full min-h-screen px-[70px] grid grid-cols-12'}>
                    <div>
                    </div>
                    <div className={'col-span-5 flex flex-col h-full justify-center'}>
                        <div className={'grid grid-cols-5'}>
                            <img className={'col-span-3'} src={'/azbuka_logo.svg'}/>
                        </div>
                        <div className={'mt-10 grid grid-cols-5'}>
                            <p className={'text-white font-inter col-span-5'}>Для тех кто столкнулся с атопическим
                                дерматитом — малышей и их родителей, а также их лечащих докторов
                                от Pierre Fabre Dermo-Cosmétique</p>
                        </div>
                        <div className={'mt-5 grid grid-cols-5'}>
                            <button className={'col-span-2 bg-white rounded-lg h-12'}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div className={'col-span-6 flex flex-col h-full justify-end'}>
                        <img className={'aspect-square w-full'} src={'/mommy.png'}/>
                    </div>

                </div>
                <div className={'absolute w-full'} style={{bottom: '-2px'}}>
                    <img src={'/main_asset_bottom.svg'} alt={'asset_bottom'}></img>
                </div>
            </div>


            {/*ВТОРОЙ БЛОК*/}

            <div className={'bg-white overflow-y-visible h-[558px] grid grid-cols-12'}>
                <div>

                </div>
                <div className={'col-span-4 relative flex flex-col items-center justify-center'}>
                    <img className={'absolute z-30'} src={'/child.png'}/>
                </div>
                <div></div>
                <div className={'col-span-5 flex items-start justify-center h-full flex-col'}>
                    <p className={'font-bold my-6 text-4xl text-black uppercase'}>
                        О проекте
                    </p>
                    <p className={'text-xl my-6'}>
                        В этом проекте, созданном специально для родителей детей–атопиков, мы объединили знания двух
                        французских брендов — экспертов в атопическом дерматите, которые долгие годы в Европе и в России
                        сотрудничают с ведущими специалистами — дерматологами, аллергологами и педиатрами, с фондами и
                        организациями пациентов.
                    </p>
                    <a className={'font-bold my-6 text-red text-xl cursor-pointer'}>
                        Подробнее...
                    </a>
                </div>
            </div>


            {/*ТРЕТИЙ БЛОК*/}

            <div className={'h-[779px] green-bg px-[70px] relative grid grid-cols-12'}>
                <img className={'absolute w-full top-0'} src={'/about_us_offset_top.svg'}/>
                <div>
                </div>
                <div className={'col-span-5 flex flex-col items-center h-full justify-center'}>
                    <p className={'text-white font-bold text-4xl w-4/5'}>ДОРОГИЕ ПАЦИЕНТЫ <br/> И РОДИТЕЛИ!</p>
                    <div className={'flex mt-4 w-full'}>
                        <img className={'mr-3 self-start'} src={'/quotes.svg'}/>
                        <p className={'text-xl text-white w-4/5'}>Мы создали «Азбуку атопического дерматита» специально
                            для мам детей-атопиков, которые каждый
                            день мечтают о здоровой коже своего ребенка.
                            <br/><br/>
                            Мы постараемся дать вам простые и полезные знания об атопическом дерматите, о том, как
                            правильно ухаживать за хрупкой кожей и добиться стойкой ремиссии, чистой кожи и качественно
                            новой жизни для вашего ребенка.</p>
                        <img className={'ml-0 self-end rotate-180'} src={'/quotes.svg'}/>
                    </div>

                </div>
                <div className={'col-span-6 flex flex-col relative justify-center items-center'}>
                    <img className={'absolute bottom-0 w-full'} src={'/about_us_footage.svg'}/>
                    <div className={'shadow-lg bg-white absolute left-20 bottom-64 w-56 rounded-lg p-3'}>
                        Иммунолог-аллерголог, доктор медицинских наук, профессор.
                    </div>
                    <img className={'absolute bottom-0 w-4/5'} src={'/doctor.png'}/>
                    <div
                        className={'shadow-lg bg-white absolute left-48 top-64 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/help.svg'}/>
                    </div>
                    <div
                        className={'shadow-lg rounded-xl bg-white absolute right-0 bottom-72 flex items-center justify-center p-3'}>
                        <div className={'w-14 h-14 relative flex items-center justify-center bg-red rounded-full'}>
                            <img className={''} src={'/stetoscope.svg'}/>
                        </div>
                        <p className={'font-bold ml-3 leading-[110%]'}>Андрей <br/>
                            Петрович <br/>
                            Продеус</p>
                    </div>
                    <div
                        className={'shadow-lg bg-white absolute right-20 bottom-32 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/heart.svg'}/>
                    </div>
                </div>
                <img className={'absolute w-full -bottom-[1px]'} src={'/about_us_offset_bot.svg'}/>
            </div>


            {/*ЧЕТВЁРТЫЙ БЛОК*/}
            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <p className={'font-bold text-4xl text-black uppercase'}>Полезные статьи</p>
                <div className={'w-full p-2'}>
                    <Slider></Slider>
                </div>
            </div>

            {/*ПЯТЫЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <div className={'w-full flex px-[4.5rem] items-center justify-between'}>
                    <p className={'font-bold text-4xl mb-6 text-black uppercase'}>Видеоуроки</p>
                    <div className={'bg-green rounded-xl p-4 flex items-center justify-center'}>
                        <img className={'w-8 aspect-square mr-4'} src={'/lesson.svg'}/>
                        <p className={'font-bold text-white'}>Уроки доктора Продеуса</p>
                    </div>
                </div>
                <div className={'w-full p-2'}>
                    <VideoPlayer theme={'green'} lessons={videOne}></VideoPlayer>
                </div>
            </div>

            {/*ШЕСТОЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <div className={'w-full flex px-[4.5rem] items-center justify-between'}>
                    <div className={'bg-red rounded-xl p-4 flex items-center justify-center'}>
                        <img className={'w-8 aspect-square mr-4'} src={'/mom.svg'}/>
                        <p className={'font-bold text-white'}>Практические уроки для мам</p>
                    </div>
                </div>
                <div className={'w-full p-2'}>
                    <VideoPlayer theme={'red'} lessons={videTwo}></VideoPlayer>
                </div>
            </div>

            {/*СЕДБМОЙ БЛОК*/}

            <div
                className={'w-full relative px-[70px] bg-[url("/bg_reviews.jpg")] flex items-center justify-center flex-col h-[867px]'}>
                <img className={'absolute w-full left-0 top-0'} src={'/reviews_offset.svg'}/>
                <p className={'text-white text-5xl font-bold uppercase'}>Мамы советуют</p>
                <div className={'w-full p-2 mt-10'}>
                    <Reviews/>
                </div>
                <img className={'absolute w-full left-0 bottom-0'} src={'/reviews_offset_bottom.svg'}/>
            </div>

            {/*ВОСЬМОЙ БЛОК*/}

            <div className={'bg-white flex flex-col py-20 px-[70px] items-center justify-center'}>
                <p className={'font-bold text-4xl text-black uppercase'}>НОВОСТИ</p>
                <div className={'w-full p-2'}>
                    <Slider></Slider>
                </div>
            </div>

            <div className={'bg-white flex flex-col py-20 px-[140px] items-start justify-center'}>
                <p className={'font-bold text-4xl text-black uppercase'}>ПОДБЕРИ СВОЮ ПРОГРАММУ УХОДА <br/>
                    <span className={'text-green font-bold'}>ЗА АТОПИЧНОЙ КОЖЕЙ</span></p>
                <img className={'w-full -mt-32'} src={'/preparates.svg'}/>
            </div>

            {/*ДЕВЯТЫЙ БЛОК*/}

            <div className={'w-full relative px-[140px] resources-bg grid items-center gap-10 grid-cols-5 h-[750px]'}>
                <img className={'absolute w-full left-0 top-0'} src={'/resources_offset.svg'}/>
                <div className={'col-span-3 flex flex-col items-start justify-center'}>
                    <p className={'text-4xl uppercase font-bold text-white'}>Полезные ресурсы</p>
                    <div className={'flex p-4 mt-6 items-center bg-white rounded-full'}>
                        <img className={'w-12 aspect-square'} src={'/need_help.svg'}/>
                        <p className={'font-bold text-2xl ml-3 text-[#00A19A]'}>Нужна поддержка?</p>
                    </div>
                    <p className={'text-white text-lg w-4/5 my-7'}>Получите полезную информацию и возможность обратиться за консультацией к специалистам «Общества
                        детских дерматологов» на базе Национального медицинского исследовательского Центра Здоровья
                        Детей</p>
                    <button className={'bg-red w-2/5 rounded-lg font-light py-3 text-white text-xl px-6'}>Перейти на сайт</button>
                </div>
                <div className={'w-full col-span-2 flex items-center justify-center'}>
                    <img className={'w-5/6'} src={'/qr.png'}/>
                </div>
            </div>
            {/*ФУТЕР*/}
            <div className={'bg-[#333333] grid gap-12 grid-cols-12 py-20 px-[70px] items-center'}>
                <div className={'col-span-3 relative h-12'}>
                    <Image src={'/logo.svg'} alt={'logo'} layout={'fill'}></Image>
                </div>
                <div className={'col-span-2 text-white font-extralight flex items-start'}>
                    Политика в отношении
                    обработки персональных
                    данных
                </div>
                <div className={'col-span-2 text-white font-extralight flex flex-col h-full justify-between'}>
                    <p className={'font-extralight'}>Мамы советуют</p>
                    <p className={'font-extralight'}>Полезные ресурсы</p>
                </div>
                <div className={'col-span-2 text-white font-extralight flex flex-col h-full justify-between'}>
                    <p className={'font-extralight'}>О проекте</p>
                    <p className={'font-extralight'}>Видео уроки</p>
                </div>
                <div  className={'col-span-3 text-white rounded-full cursor-pointer p-4 h-full flex items-center justify-center bg-red'}>
                    Программы ухода за кожей
                </div>
            </div>
        </main>
    )
}

import Image from 'next/image'
import MainBlock from "@/blocks/MainBlock";
import React from "react";

export default function Home() {
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
                        <p className={'text-xl text-white w-4/5'}>Мы создали «Азбуку атопического дерматита» специально для мам детей-атопиков, которые каждый
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
                    <div className={'shadow-lg bg-white absolute left-48 top-64 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/help.svg'}/>
                    </div>
                    <div className={'shadow-lg rounded-xl bg-white absolute right-0 bottom-72 flex items-center justify-center p-3'}>
                        <div className={'w-14 h-14 relative flex items-center justify-center bg-red rounded-full'}>
                            <img className={''} src={'/stetoscope.svg'}/>
                        </div>
                        <p className={'font-bold ml-3 leading-[110%]'}>Андрей <br/>
                            Петрович <br/>
                            Продеус</p>
                    </div>
                    <div className={'shadow-lg bg-white absolute right-20 bottom-32 flex items-center justify-center w-20 h-20 rounded-full p-3'}>
                        <img className={''} src={'/heart.svg'}/>
                    </div>
                </div>
                <img className={'absolute w-full bottom-0'} src={'/about_us_offset_bot.svg'}/>
            </div>

        </main>
    )
}

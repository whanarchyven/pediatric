"use client"
import React, {useEffect, useState} from 'react';
import {classList} from "@/helpers/classList";
import {images} from "next/dist/build/webpack/config/blocks/images";
import Link from "next/link";

const Calendar = () => {

    function getDaysArray(year: number, month: number) {
        let numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

        numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        daysIndex = {'Sun': 7, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6};
        index = daysIndex[(new Date(year, month - 1, 1)).toString().split(' ')[0]];
        daysArray = [];

        for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
            daysArray.push({
                day: (i + 1), weekDay: index++
            });
            if (index == 7) index = 0;
        }

        return daysArray;
    }

    const months = [
        {
            id: 1,
            name: 'янв',
            eng: 'jan'
        },
        {
            id: 2,
            name: 'фев',
            eng: 'feb'
        },
        {
            id: 3,
            name: 'мар',
            eng: 'mar'
        },
        {
            id: 4,
            name: 'апр',
            eng: 'apr'
        },
        {
            id: 5,
            name: 'май',
            eng: 'may'
        },
        {
            id: 6,
            name: 'июн',
            eng: 'jun'
        }, {
            id: 7,
            name: 'июл',
            eng: 'jul'
        }
        , {
            id: 8,
            name: 'авг',
            eng: 'aug'
        },
        {
            id: 9,
            name: 'сен',
            eng: 'sep'
        },
        {
            id: 10,
            name: 'окт',
            eng: 'oct'
        },
        {
            id: 11,
            name: 'ноя',
            eng: 'nov'
        },
        {
            id: 12,
            name: 'дек',
            eng: 'dec'
        }
    ]

    const getVoidCalendarBlocks = (id: number, isInvert?: boolean) => {
        if (isInvert) {
            if (id == 0) {
                return [];
            }
            console.log(id)
            let temp = [];
            for (let i = 7; i > id; i--) {
                temp.push(i)
            }
            console.log(temp)
            return temp
        } else {
            console.log(id)
            let temp = [];
            for (let i = 1; i < id; i++) {
                temp.push(i)
            }
            console.log(temp)
            return temp
        }
    }

    const [currentMonth, setCurrentMonth] = useState(months[2])

    const [days, setDays] = useState(getDaysArray(2024, currentMonth.id))

    useEffect(() => {
        setDays(getDaysArray(2024, currentMonth.id))
    }, [currentMonth])

    const [currentEvent, setCurrentEvent] = useState()

    const [events, setEvents] = useState({
        jan: [{}],
        feb: [{}],
        mar: [{
            day: 16,
            type: 'Конференция',
            title: 'II-я научно-практическая конференции «Путь детской дерматологии: от истоков к перспективам. Атопический дерматит',
            subtitle: 'онлайн',
            timePeriod: '10:00-15:10',
            image: `/pages/events/ekb_bg.jpeg`,
            link: '/events/a4fca4a0-fe5a-4de6-8480-246100de912c/'
        }],
        apr: [{
            day: 13,
            type: 'Конференция',
            title: 'III научно-практическая конференция «Псориаз в детском возрасте: современные решения старых проблем»',
            subtitle: 'онлайн',
            timePeriod: '10:00',
            image: `/pages/events/ekb_bg.jpeg`,
            link: '/events/bbbed477-fb1c-4ab0-9dff-9709b547416f/'
        }, {
            day: 27,
            type: 'Конференция',
            title: 'Всероссийская научно-практической конференции «Актуальные вопросы дерматологии детского возраста»',
            subtitle: 'онлайн',
            timePeriod: '10:00',
            image: `/pages/events/ekb_bg.jpeg`,
            link: '/events/807cc46e-ac6e-4cd1-9bad-a47fd2081ba6/'
        }],
        may: [{
            day: 30,
            type: 'Конференция',
            title: 'II-й научно-практическая конференция «Дерматологические чтения в педиатрии» ',
            subtitle: 'в г. Новосибирск',
            timePeriod: '10:00',
            image: '/pages/events/ekb_bg.jpeg',
            link: '/events/59b59a7c-733a-494a-a944-ef06841cbc2c/'
        }],
        jun: [{
            day: 8,
            type: 'Конференция',
            title: 'II-я ежегодная всероссийская научно-практическая конференция с международным участием',
            subtitle: '«Академия детской дерматологии»',
            timePeriod: '10:00',
            image: '/pages/main/08_06.JPG',
            link: '/events/20daf2b7-2af4-4c9b-96f3-b104163f211c/'
        }],
        jul: [{}],
        aug: [{}],
        sep: [{}],
        oct: [{}],
        nov: [{}],
        dec: [{}],
    })

    return (
        <div className={'w-full gap-2 sm:flex-col flex-row flex'}>
            <div
                className={'sm:w-full w-12 p-2 bg-green-two flex flex-col sm:grid sm:grid-cols-12 sm:gap-10 gap-3 rounded-full'}>
                {months.map((month, counter) => {
                    return (
                        <div key={counter} className={'flex items-center justify-center'}>
                            <div
                                className={classList('sm:p-3 p-1 text-xs sm:text-lg transition-all duration-300 aspect-square flex rounded-full items-center justify-center', month.id == currentMonth.id ? 'bg-white text-green-two' : 'text-white cursor-pointer')}
                                onClick={() => {
                                    setCurrentMonth(month)
                                }}>
                                {month.name}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={'w-full sm:mt-4 sm:grid flex flex-col sm:grid-cols-11 gap-5'}>
                <div className={'border-green-two overflow-hidden rounded-lg col-span-6 border-4'}>
                    <div className={'grid grid-cols-7'}>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            пн
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            вт
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            ср
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            чт
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            пт
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            сб
                        </div>
                        <div className={'flex p-2 text-white items-center justify-center bg-green-two'}>
                            вс
                        </div>
                    </div>
                    <div className={'grid grid-cols-7'}>
                        {getVoidCalendarBlocks(days[0].weekDay).map((item, counter) => {
                            return (
                                <div key={counter}
                                     className={classList('border-r-[1px] border-b-[1px] box-border aspect-square')}>

                                </div>
                            )
                        })}
                        {days.map((day, counter) => {
                            const evnt = events[currentMonth.eng].find(evnt => evnt.day == day.day)
                            return (
                                <div key={counter}
                                     className={classList('transition-all duration-300 border-r-[1px] p-1 flex flex-col justify-between border-b-[1px] box-border aspect-square', evnt ? 'text-white cursor-pointer bg-green-two' : 'text-green-two', (!evnt || evnt == currentEvent) ? 'opacity-100' : 'opacity-50')}
                                     onClick={() => {
                                         if (evnt) {
                                             setCurrentEvent(evnt)
                                         }
                                     }}>
                                    <p className={'text-right w-full font-extralight sm:text-2xl'}>{day.day}</p>
                                    {evnt ? <p className={'sm:text-xs truncate text-[7px]'}>{evnt.type}</p> : null}
                                </div>
                            )
                        })}
                        {getVoidCalendarBlocks(days[days.length - 1].weekDay, true).map((item, counter) => {
                            return (
                                <div key={counter}
                                     className={classList('border-r-[1px] border-b-[1px] box-border aspect-square')}>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={'border-green-two border-4 sm:h-full overflow-hidden sm:col-span-5 rounded-lg'}>
                    {currentEvent ?
                        <div className={'flex flex-col justify-between'}>
                            <img className={'w-full aspect-video object-cover'} src={currentEvent.image}/>
                            <div className={'p-4 flex gap-4 flex-col'}>
                                <div className={'flex flex-col'}>
                                    <p className={'lg:text-xl text-xs font-bold text-black'}>{currentEvent.title}</p>
                                    <p className={'lg:text-xl text-xs font-normal text-black'}>{currentEvent.subtitle}</p>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <div
                                        className={'w-[48%] p-1 lg:p-4 text-green-two text-xl border-green-two lg:text-lg text-xs border-2 rounded-lg flex items-center justify-center'}>
                                        {currentEvent.timePeriod}
                                    </div>
                                    <Link
                                        className={'w-[48%] p-1 lg:p-4 text-white text-xl bg-green-two lg:text-lg text-xs border-green-two border-2 rounded-lg flex items-center justify-center'}
                                        href={currentEvent.link}>
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            className={'flex items-center gap-4 font-extralight text-3xl flex-col text-center justify-center w-full h-full text-green-two'}>
                            <img className={'w-20 aspect-square'} src={`/pages/main/calendar.svg`}/>
                            <p className={'lg:text-base text-xl'}>
                                Выберите дату в календаре, чтобы посмотреть мероприятие
                            </p>

                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
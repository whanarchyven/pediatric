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

    const [currentMonth, setCurrentMonth] = useState(months[7])

    const [days, setDays] = useState(getDaysArray(2023, currentMonth.id))

    useEffect(() => {
        setDays(getDaysArray(2023, currentMonth.id))
    }, [currentMonth])

    const [currentEvent, setCurrentEvent] = useState()

    const [events, setEvents] = useState({
        jan: [{}],
        feb: [{}],
        mar: [{}],
        apr: [{}],
        may: [{}],
        jun: [{}],
        jul: [{}],
        aug: [],
        sep: [{
            day: 11,
            type: 'Марафон',
            title: 'Поэзия детской дерматологии, день 1',
            subtitle: 'Научно-образовательный квест-марафон ',
            timePeriod: '12:00 - 16:00',
            image: '/marafon.png',
            link: '/events/3'
        },
            {
                day: 12,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 2',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 13,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 3',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 14,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 4',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 15,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 5',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 16,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 6',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 17,
                type: 'Марафон',
                title: 'Поэзия детской дерматологии, день 7',
                subtitle: 'Научно-образовательный квест-марафон ',
                timePeriod: '12:00 - 16:00',
                image: '/marafon.png',
                link: '/events/3'
            },
            {
                day: 26,
                type: 'Конференция',
                title: '2 научно-практическая конференция дерматовенерологов и педиатров',
                subtitle: 'Алтайского края и Республики Алтай',
                timePeriod: '10:00',
                image: '/АЛТАЙ.jpg',
                link: '/events/1'
            }],
        oct: [{
            day: 17,
            type: 'Конференция',
            title: 'I научно-практическая конференция «Дерматологические чтения в педиатрии»',
            subtitle: 'в г. Екатеринбург им. Н. П. Тороповой',
            timePeriod: '10:00',
            image: '/ЕКБ.jpg',
            link: '/events/2'
        }],
        nov: [{
            day: 11,
            type: 'Конференция',
            title: 'IX Всероссийская научно-практическая конференция с международным участием',
            subtitle: '«Дерматологические чтения в педиатрии»',
            timePeriod: '10:00',
            image: '/pages/main/sliderBackgrounds/2.png',
            link: '/events/0'
        }],
        dec: [{}],
    })

    return (
        <div className={'w-full gap-2 sm:flex-col flex-row flex'}>
            <div className={'sm:w-full w-12 p-2 bg-green-two flex flex-col sm:grid sm:grid-cols-12 sm:gap-10 gap-3 rounded-full'}>
                {months.map((month,counter) => {
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
                                <div key={counter} className={classList('border-r-[1px] border-b-[1px] box-border aspect-square')}>

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
                                <div key={counter} className={classList('border-r-[1px] border-b-[1px] box-border aspect-square')}>

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
                                    <p className={'sm:text-xl text-xs font-bold text-black'}>{currentEvent.title}</p>
                                    <p className={'sm:text-xl text-xs font-normal text-black'}>{currentEvent.subtitle}</p>
                                </div>
                                <div className={'flex items-center justify-between'}>
                                    <div
                                        className={'w-[48%] p-1 sm:p-4 text-green-two text-xl border-green-two sm:text-lg text-xs border-2 rounded-lg flex items-center justify-center'}>
                                        {currentEvent.timePeriod}
                                    </div>
                                    <Link className={'w-[48%] p-1 sm:p-4 text-white text-xl bg-green-two sm:text-lg text-xs border-green-two border-2 rounded-lg flex items-center justify-center'} href={currentEvent.link}>
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            className={'flex items-center gap-4 font-extralight text-3xl flex-col text-center justify-center w-full h-full text-green-two'}>
                            <img className={'w-20 aspect-square'} src={`/pages/main/calendar.svg`}/>
                            <p className={''}>
                                Выберите дату в календаре, чтобы посмотреть мероприятие
                            </p>

                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
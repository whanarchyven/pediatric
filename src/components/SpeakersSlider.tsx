"use client"
import React, {useCallback, useRef, useState} from 'react';
import {classList} from "@/helpers/classList";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Mousewheel, Pagination} from "swiper";
import concatStr from "@/helpers/concatStr";

interface speakersSliderInterface {
    speakers: {
        name: string,
        post: string,
        contact: string,
        description: string,
        photo: string,
    }[]
}

const SpeakersSlider = ({speakers}: speakersSliderInterface) => {

    const [currentSpeakerId, setCurrentSpeakerId] = useState(0)

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const [employersPop, setEmployersPop] = useState(false)
    const [activeName, setActiveName] = useState('');
    const [activeDecription, setActiveDescription] = useState('')

    return (
        <div className={'w-full flex items-center'}>
            {employersPop ? <div
                className={'w-full h-full absolute left-0 top-0 z-[20] bg-black bg-opacity-70 flex items-center justify-center'}>
                <div className={'w-full sm:w-2/3 p-9 gap-4 rounded-lg flex flex-col bg-white relative'}>
                    <img onClick={() => {
                        setEmployersPop(false)
                    }} className={'w-8 aspect-square absolute top-4 right-4 cursor-pointer'} src={'/close_black.svg'}/>
                    <p className={'font-bold text-lg sm:text-4xl'}>{activeName}</p>
                    <p className={'text-xs sm:text-lg'}>{activeDecription}</p>
                </div>
            </div> : null}

            <div className={'hidden sm:flex flex-col justify-center gap-8 items-center'}>
                <div
                    className={'cursor-pointer hidden sm:flex items-center p-3  justify-center w-10 aspect-square rounded-full bg-white bg-opacity-20 hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handlePrev}>
                    <img className={'w-full rotate-90 aspect-square'} src={'/arrow_prev.svg'}/>
                </div>
                <div
                    className={classList('flex w-14 duration-300 transition-all overflow-hidden bg-white aspect-square items-center justify-center rounded-full', 'cursor-pointer')}
                    onClick={() => {
                        sliderRef.current.swiper.slideTo(currentSpeakerId-2>0?currentSpeakerId-2:speakers.length-2)
                    }}>
                    <img className={'w-full object-cover h-full'} src={currentSpeakerId-2>0?speakers[currentSpeakerId-2].photo:speakers[speakers.length-2].photo}/>
                </div>
                <div
                    className={classList('flex w-14 duration-300 transition-all overflow-hidden bg-white aspect-square items-center justify-center rounded-full', 'cursor-pointer')}
                    onClick={() => {
                        sliderRef.current.swiper.slideTo(currentSpeakerId-1>0?currentSpeakerId-1:speakers.length-1)
                    }}>
                    <img className={'w-full object-cover h-full'} src={currentSpeakerId-1>0?speakers[currentSpeakerId-1].photo:speakers[speakers.length-1].photo}/>
                </div>
                <div
                    className={classList('flex w-14 duration-300 transition-all overflow-hidden bg-white aspect-square items-center justify-center rounded-full', 'scale-150  border-4 border-[#43817D] ')}
                    onClick={() => {
                        sliderRef.current.swiper.slideTo(currentSpeakerId)
                    }}>
                    <img className={'w-full object-cover h-full'} src={speakers[currentSpeakerId].photo}/>
                </div>
                <div
                    className={classList('flex w-14 duration-300 transition-all overflow-hidden bg-white aspect-square items-center justify-center rounded-full', 'cursor-pointer')}
                    onClick={() => {
                        sliderRef.current.swiper.slideTo(currentSpeakerId+1>0?currentSpeakerId+1:speakers.length+1)
                    }}>
                    <img className={'w-full object-cover h-full'} src={currentSpeakerId+1<speakers.length-1?speakers[currentSpeakerId+1].photo:speakers[0].photo}/>
                </div>
                <div
                    className={classList('flex w-14 duration-300 transition-all overflow-hidden bg-white aspect-square items-center justify-center rounded-full', 'cursor-pointer')}
                    onClick={() => {
                        sliderRef.current.swiper.slideTo(currentSpeakerId+2>0?currentSpeakerId+2:speakers.length+2)
                    }}>
                    <img className={'w-full object-cover h-full'} src={currentSpeakerId+2<speakers.length-2?speakers[currentSpeakerId+2].photo:speakers[1].photo}/>
                </div>
                <div
                    className={'cursor-pointer hidden sm:flex items-center p-3  justify-center w-10 aspect-square rounded-full bg-white bg-opacity-20 hover:bg-[#BCDBD5] transition-all duration-300'}
                    onClick={handleNext}>
                    <img className={'w-full -rotate-90 aspect-square'} src={'/arrow_prev.svg'}/>
                </div>
            </div>
            <Swiper
                ref={sliderRef}
                speed={1000}
                effect={'fade'}
                fadeEffect={{crossFade: true}}
                direction={"horizontal"}
                centeredSlides={true}
                slidesPerView={1}
                onSlideChange={(swiper) => {
                    setCurrentSpeakerId(swiper.realIndex)
                }}
                // coverflowEffect={{
                //     rotate: 0,
                //     stretch: -100,
                //     depth: -300,
                //     modifier: 1,
                //     slideShadows: false,
                // }}
                loop={true}
                //                         pagination={{
                //                             clickable: true,
                //                             bulletActiveClass:'swiper-pagination-bullet-active w-32 scale-125',
                // //                             renderBullet:(index,className)=>{
                // //                                 return (`
                // //                                 <div class="flex w-12 my-4 aspect-square items-center justify-center rounded-full border-opacity-20 border-4 overflow-hidden border-white"><img class="w-full h-full object-cover" src="${speakers[index].photo}"/></div>
                // // `
                // //
                // //                                 )
                // //                             }
                //                         }}
                modules={[Mousewheel, EffectFade, Pagination, Autoplay]}
                className={'myswiper h-[600px] sm:h-[900px] w-full'}
            >
                {speakers.map((speaker, counter) => {
                    return (
                        <SwiperSlide key={counter} className={'px-[20px] sm:px-0 sm:pl-[70px]'}>
                            <div className={'grid grid-cols-1 sm:grid-cols-2 relative h-full gap-8 items-center'}>
                                <div className={'flex flex-col gap-5'}>
                                    <p className={'text-xl sm:text-3xl font-bold text-white'}>
                                        {speaker.name}
                                    </p>
                                    <div className={'flex gap-4 items-center'}>
                                        <div
                                            className={'flex items-center text-xs sm:text-lg rounded-full p-2 px-4 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                            {speaker.post}
                                        </div>
                                        <div
                                            className={'flex items-center rounded-full p-2 uppercase text-white font-light opacity-50 border-white w-fit border-2 justify-center'}>
                                            <img src={`/pages/main/mail.svg`}/>
                                        </div>
                                    </div>
                                    <p className={'text-white text-sm font-normal'}>{concatStr(speaker.description, 20)}</p>
                                    <p onClick={() => {
                                        setActiveName(speaker.name);
                                        setActiveDescription(speaker.description);
                                        setEmployersPop(true);
                                    }}
                                       className={'text-white cursor-pointer text-sm sm:text-xl font-bold'}>Подробнее...</p>
                                </div>
                                <div className={'flex items-end relative h-full justify-center'}>
                                    <img src={`/pages/main/employers/avatar_layout.svg`}/>
                                    <img className={'absolute object-cover sm:-bottom-4 w-auto max-h-full'} src={speaker.photo}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};

export default SpeakersSlider;
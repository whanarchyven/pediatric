//@ts-ignore
import React, {useCallback, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination, Navigation} from "swiper";
import Post from "@/components/Post";

export default function Slider() {
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
        <div className={'flex items-center'}>
            <div
                className={'cursor-pointer mr-2 hidden sm:flex items-center p-3 justify-center w-20 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handlePrev}>
                <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
            </div>
            <Swiper ref={sliderRef}

                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640:{
                            slidesPerView:3,
                            spaceBetween:70
                        }
                    }}
                // navigation={{
                //     prevEl: navigationPrevRef.current,
                //     nextEl: navigationNextRef.current,
                // }}
                // onBeforeInit={(swiper) => {
                //     swiper.params.navigation.prevEl = navigationPrevRef.current;
                //     swiper.params.navigation.nextEl = navigationNextRef.current;
                // }}
                    className="videoSwiper"
            >
                <SwiperSlide><Post title={'Роль эмолентов в лечении атопического дерматита'} image={'1'}
                                   caption={'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...'}/></SwiperSlide>
                <SwiperSlide><Post title={'Атопический дерматит и зуд'} image={'2'}
                                   caption={'Беспокойный сон малыша как "страшный сон" мамы атопика...'}/></SwiperSlide>
                <SwiperSlide><Post title={'Азбука атопика'} image={'3'}
                                   caption={'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий. Впервые чаще всего...'}/></SwiperSlide>
                <SwiperSlide><Post title={'Роль эмолентов в лечении атопического дерматита'} image={'1'}
                                   caption={'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...'}/></SwiperSlide>
                <SwiperSlide><Post title={'Атопический дерматит и зуд'} image={'2'}
                                   caption={'Беспокойный сон малыша как "страшный сон" мамы атопика...'}/></SwiperSlide>
                <SwiperSlide><Post title={'Азбука атопика'} image={'3'}
                                   caption={'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий. Впервые чаще всего...'}/></SwiperSlide>
            </Swiper>
            <div
                className={'cursor-pointer ml-2 hidden sm:flex items-center p-3 justify-center w-20 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
        </div>
    );
}

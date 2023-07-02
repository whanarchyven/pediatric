import React, {RefObject, useCallback, useRef, useState} from "react";
//@ts-ignore
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination, Navigation} from "swiper";
import Post from "@/components/Post";
import Review from "@/components/Review";

export default function Reviews() {
    const sliderRef = useRef() as any;

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slideNext();
    }, []);
    return (
        <div className={'flex items-center'}>
            <div
                className={'cursor-pointer mr-2 hidden sm:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handlePrev}>
                <img className={'w-full aspect-square'} src={'/arrow_prev.svg'}/>
            </div>
            <Swiper ref={sliderRef}
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
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="videoSwiper"
            >
                <SwiperSlide className={'overflow-visible'}><Review name={'Анна'}
                                                                    review={'Азбука атопического дерматита стала для меня не только источником знаний, но и моральной поддержкой - наконец-то я не чувствую себя одинокой в борьбе с атопией моего ребенка.'}
                                                                    avatar={'/reviews/1.png'}
                                                                    stars={5}
                /></SwiperSlide>
                <SwiperSlide className={'overflow-visible'}><Review name={'Марина'}
                                                                    review={'Я просто восхищена этим проектом! Благодаря его информации и поддержке, я смогла улучшить состояние кожи моего малыша и сделать его жизнь комфортнее.'}
                                                                    avatar={'/reviews/2.png'}
                                                                    stars={5}
                /></SwiperSlide>
                <SwiperSlide className={'overflow-visible'}><Review name={'Наталия'}
                                                                    review={'Проект "Азбука атопического дерматита" - это просто находка для мам, столкнувшихся с атопией у своих детей. Информация актуальная, простая и понятная - я в восторге!'}
                                                                    avatar={'/reviews/3.png'}
                                                                    stars={4}
                /></SwiperSlide>

                <SwiperSlide className={'overflow-visible'}><Review name={'Анна'}
                                                                    review={'Азбука атопического дерматита стала для меня не только источником знаний, но и моральной поддержкой - наконец-то я не чувствую себя одинокой в борьбе с атопией моего ребенка.'}
                                                                    avatar={'/reviews/1.png'}
                                                                    stars={5}
                /></SwiperSlide>
                <SwiperSlide className={'overflow-visible'}><Review name={'Марина'}
                                                                    review={'Я просто восхищена этим проектом! Благодаря его информации и поддержке, я смогла улучшить состояние кожи моего малыша и сделать его жизнь комфортнее.'}
                                                                    avatar={'/reviews/2.png'}
                                                                    stars={5}
                /></SwiperSlide>
                <SwiperSlide className={'overflow-visible'}><Review name={'Наталия'}
                                                                    review={'Проект "Азбука атопического дерматита" - это просто находка для мам, столкнувшихся с атопией у своих детей. Информация актуальная, простая и понятная - я в восторге!'}
                                                                    avatar={'/reviews/3.png'}
                                                                    stars={4}
                /></SwiperSlide>

            </Swiper>
            <div
                className={'cursor-pointer ml-2 hidden sm:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
        </div>
    );
}

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

    const reviews=[
        {
            name:'Анна',
            review:'Азбука атопического дерматита стала для меня не только источником знаний, но и моральной поддержкой - наконец-то я не чувствую себя одинокой в борьбе с атопией моего ребенка.',
            avatar:'/reviews/1.png',
            stars:4
        },
        {
            name:'Марина',
            review:'Я просто восхищена этим проектом! Благодаря его информации и поддержке, я смогла улучшить состояние кожи моего малыша и сделать его жизнь комфортнее.',
            avatar:'/reviews/2.png',
            stars:5
        },
        {
            name:'Наталия',
            review:'Проект "Азбука атопического дерматита" - это просто находка для мам, столкнувшихся с атопией у своих детей. Информация актуальная, простая и понятная - я в восторге!',
            avatar:'/reviews/3.png',
            stars:5
        }
    ]

    const [currentReview,setCurrentReview]=useState(reviews[0]);
    const [isPopVisible,setIsPopVisible]=useState(false)

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
                {reviews.map((item)=>{
                    return(
                        <SwiperSlide key={item.review} className={'overflow-visible'}><Review callback={()=>{setCurrentReview(item);setIsPopVisible(true)}} name={item.name}
                                                                            review={item.review}
                                                                            avatar={item.avatar}
                                                                            stars={item.stars}
                        /></SwiperSlide>

                    )
                })}

            </Swiper>
            <div
                className={'cursor-pointer ml-2 hidden sm:flex items-center p-3 justify-center w-14 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
            {isPopVisible?<div className={'fixed h-screen top-0 w-full left-0 bg-black z-[999] bg-opacity-50 flex items-center justify-center p-[10px] sm:px-[20px]'}>
                <img className={'w-9 right-5 top-5 aspect-square cursor-pointer hidden sm:flex absolute'} src={'/close.svg'} onClick={()=>{setIsPopVisible(false)}}/>
                <img className={'w-6 right-2 top-4 aspect-square cursor-pointer flex sm:hidden absolute'} src={'/close_black.svg'} onClick={()=>{setIsPopVisible(false)}}/>
                <div className={'p-5 flex flex-col h-full sm:h-[600px] overflow-y-scroll gap-4 bg-white rounded-xl w-full sm:w-1/2'}>
                    <div className={'w-full flex flex-col items-center justify-center relative'}>
                        <img src={currentReview.avatar} className={'w-32 object-cover absolute top-0 aspect-square rounded-full border-white z-[99] border-8 '}/>
                        <div className={'w-full p-4 rounded-xl mt-16 pt-24 pb-14 flex flex-col items-center justify-end bg-white'}>
                            <p className={'text-2xl font-bold mt-3'}>{currentReview.name}</p>
                            <p className={'text-left font-normal'}>{currentReview.review}</p>
                            <div className={'w-full mt-6 flex justify-center items-center'}>
                                {Array(currentReview.stars).map((item,counter)=>{
                                    if(counter<=currentReview.stars-1){
                                        return (
                                            <img key={counter} className={'w-7 aspect-square'} src={'/star_filled.svg'} />
                                        )
                                    }
                                    else{
                                        return (
                                            <img key={counter} className={'w-7 aspect-square'} src={'/star.svg'} />
                                        )
                                    }
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>:null}

        </div>
    );
}

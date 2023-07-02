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


    const posts=[
        {
            title:'Роль эмолентов в лечении атопического дерматита',
            caption:'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...',
            image:'1'
        },
        {
            title:'Атопический дерматит и зуд',
            caption:'Беспокойный сон малыша как "страшный сон" мамы атопика...',
            image:'2'
        },
        {
            title:'Азбука атопика',
            caption:'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий. Впервые чаще всего...',
            image:'3'
        },
        {
            title:'Роль эмолентов в лечении атопического дерматита',
            caption:'Что такое эмоленты и их применение в базовом уходе за кожей малыша с атопическим дерматитом...',
            image:'1'
        },
        {
            title:'Атопический дерматит и зуд',
            caption:'Беспокойный сон малыша как "страшный сон" мамы атопика...',
            image:'2'
        },
        {
            title:'Азбука атопика',
            caption:'Атопический дерматит — хроническое воспалительное поражение кожи, протекающее с периодами обострений и ремиссий. Впервые чаще всего...',
            image:'3'
        },
    ]

    const [currentPost,setCurrentPost]=useState(posts[0]);
    const [isPopVisible,setIsPopVisible]=useState(false)

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
                {posts.map((item)=>{
                    return (
                        <SwiperSlide><Post title={item.title} image={item.image}
                                           caption={item.caption} callback={()=>{
                                               setCurrentPost(item);
                                               setIsPopVisible(true)
                        }}/></SwiperSlide>
                    )
                })}
            </Swiper>
            <div
                className={'cursor-pointer ml-2 hidden sm:flex items-center p-3 justify-center w-20 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
            {isPopVisible?<div className={'fixed h-screen top-0 w-full left-0 bg-black z-[999] bg-opacity-50 flex items-center justify-center p-[10px] sm:px-[20px]'}>
                <img className={'w-9 right-5 top-5 aspect-square cursor-pointer hidden sm:flex absolute'} src={'/close.svg'} onClick={()=>{setIsPopVisible(false)}}/>
                <img className={'w-6 right-2 top-4 aspect-square cursor-pointer flex sm:hidden absolute'} src={'/close_black.svg'} onClick={()=>{setIsPopVisible(false)}}/>
                <div className={'p-5 flex flex-col h-full sm:h-[600px] overflow-y-scroll gap-4 bg-white rounded-xl w-full sm:w-1/2'}>
                    <img className={'object-cover aspect-video w-full'} src={`/posts/${currentPost.image}.jpg`}/>
                    <p className={'font-bold text-2xl'}>{currentPost.title}</p>
                    <p className={'text-sm'}>{currentPost.caption}</p>
                </div>
            </div>:null}
        </div>
    );
}

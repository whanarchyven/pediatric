//@ts-ignore
import React, {useCallback, useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {Pagination, Navigation} from "swiper";
import Post from "@/components/Post";
import {eden, useEden} from "@/helpers/sdk";
import PostTab from "@/components/PostTab";
import Loading from "@/components/Loading";

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

    const {data} = useEden(() => eden.user.my.profile.get())

    const {
        uuid,
        saved
    } = data?.profile ?? {} as any;

    const [posts,setPosts]=useState<Array<{
        uuid: string,
        imageUrl: string,
        title: string,
        description: string,
        contentMd: string
        callback?:()=>any,
        }>>([{
            uuid:'article1',
            imageUrl:'/articles/1.jpeg',
            title:'Психологическая готовность родителей',
            description:'детей раннего возраста с атопическим дерматитом к выполнению рекомендаций врачей',
            contentMd:'/articles/1.pdf'
        },
        {
            uuid:'article2',
            imageUrl:'/articles/2.jpg',
            title:'Профили экспрессии генов факторов',
            description:'врожденного иммунитета у пациентов с атопическим дерматитом',
            contentMd:'/articles/2.pdf'
        },
        {
            uuid:'article3',
            imageUrl:'/articles/3.jpg',
            title:'Инновации в терапевтической коррекции',
            description:'микробиома кожи при атопическом дерматите в детском возрасте',
            contentMd:'/articles/3.pdf'
        },
        {
            uuid:'article4',
            imageUrl:'/articles/4.jpg',
            title:'Влияние элиминационной диеты ',
            description:'на качество жизни и пищевое поведение детей с тяжелой формой атопического дерматита и пищевой аллергией',
            contentMd:'/articles/4.pdf'
        },
        {
            uuid:'article5',
            imageUrl:'/articles/5.jpg',
            title:'Дефект филаггрина при атопическом дерматите:',
            description:'современные методы коррекции',
            contentMd:'/articles/5.pdf'
        },
        {
            uuid:'article6',
            imageUrl:'/articles/6.jpg',
            title:'Вопросы терапии и профилактики',
            description:'инфекционных осложнений атопического дерматита у детей',
            contentMd:'/articles/6.pdf'
        },
        {
            uuid:'article7',
            imageUrl:'/articles/7.jpg',
            title:'Эффективность и безопасность дупилумаба',
            description:'при тяжелом атопическом дерматите у детей в возрасте до 6 лет: два клинических случая',
            contentMd:'/articles/7.pdf'
        },
        {
            uuid:'article8',
            imageUrl:'/articles/8.jpg',
            title:'Observational study of pimecrolimus 1% cream',
            description:'for prevention of transcutaneous sensitization in children with atopic dermatitis during their first year of life',
            contentMd:'/articles/8.pdf'
        },
        {
            uuid:'article9',
            imageUrl:'/articles/9.jpg',
            title:'Научно-практические инновации в технологии восстановления',
            description:'барьерных свойств кожи при атопическом дерматите у детей',
            contentMd:'/articles/9.pdf'
        },
        {
            uuid:'article10',
            imageUrl:'/articles/10.jpg',
            title:'Полногеномный профиль метилирования ДНК',
            description:'и экспрессия генов TLR2, TLR9, IL4, IL13 при атопическом дерматите у детей и подростков',
            contentMd:'/articles/10.pdf'
        },
        ]);

    const [isPopVisible,setIsPopVisible]=useState(false);
    const [currentItem,setCurrentItem]=useState(posts[0])


    return (
        <div className={'flex items-center'}>
            <div
                className={'cursor-pointer mr-2 hidden sm:flex items-center p-6 justify-center w-20 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
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
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 70
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 70
                        },
                    }}

                    className="newSwiper"
            >
                {posts.map((item, counter) => {
                    return (
                        <SwiperSlide className={'relative h-full pb-12'} key={counter + item.title}>
                            {saved?.find(suka => suka.title == item.title)?<PostTab isSaved={true} user_uuid={uuid} {...item}></PostTab>:<PostTab isSaved={false} user_uuid={uuid} {...item}></PostTab>}
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            <div
                className={'cursor-pointer ml-2 relative hidden sm:flex items-center p-6 justify-center w-20 aspect-square rounded-full bg-[#E4F0EE] hover:bg-[#BCDBD5] transition-all duration-300'}
                onClick={handleNext}>
                <img className={'w-full aspect-square'} src={'/arrow_next.svg'}/>
            </div>
            {isPopVisible?<div
                className={'fixed h-screen top-0 w-full left-0 bg-black z-[999] bg-opacity-50 flex items-center justify-center p-[10px] lg:px-[20px]'}>
                <img className={'w-9 right-5 top-5 aspect-square cursor-pointer hidden lg:flex absolute'}
                     src={'/close.svg'} onClick={() => {
                    setIsPopVisible(false)
                }}/>
                <img className={'w-6 right-2 top-4 aspect-square cursor-pointer flex lg:hidden absolute'}
                     src={'/close_black.svg'} onClick={() => {
                    setIsPopVisible(false)
                }}/>
                <div
                    className={'p-5 flex flex-col h-full lg:h-[600px] overflow-y-scroll gap-4 bg-white rounded-xl w-full lg:w-1/2'}>
                    <img className={'object-cover aspect-video w-full'} src={currentItem.imageUrl}/>
                    <p className={'font-bold text-2xl'}>{currentItem.title}</p>
                    <p className={'text-sm'}>{currentItem.description}</p>
                    <text className={'postText flex flex-col gap-5'} dangerouslySetInnerHTML={{__html: currentItem.contentMd}}>

                    </text>
                    <div onClick={() => {
                        setIsPopVisible(false)
                    }} className={'cursor-pointer flex items-center gap-3 text-2xl text-red font-bold'}><img
                        src={'/arrow_back.svg'}/> Назад
                    </div>
                </div>
            </div>:null}
        </div>
    );
}

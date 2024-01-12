"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter, useSearchParams} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";


import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';


// import required modules
import {
    Mousewheel,
    EffectCoverflow,
    Pagination,
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip
} from "swiper";
import post from "@/components/Post";
import Link from "next/link";
import concatStr from "@/helpers/concatStr";
import CountUp from "react-countup";
import {classList} from "@/helpers/classList";
import {eden, useEden} from "@/helpers/sdk";
import PostTab from "@/components/PostTab";
import Loading from "@/components/Loading";


export default function Home() {


    const images = '/pages/main'

    const searchParams=useSearchParams()

    const searchByName=searchParams.get('title')

    const router=useRouter();

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

    // useEffect(() => {
    //     eden.post.list.get({$query:{search:searchByName??''}}).then((res)=>{
    //         if(res?.data?.posts){
    //             setPosts([...posts])
    //         }
    //     })
    // }, []);


    useEffect(()=>{
        if(searchByName){
            let post=posts.find(item=>item.title==searchByName)
            console.log(post)
            if(post){
                setPosts([post])
            }
        }
    },[searchByName])


    return (
        <main className={'overflow-x-hidden'}>

            <div id={'publications'} className={'bg-white py-20 sm:pt-40 flex flex-col items-center items-center px-[20px] lg:px-[140px] gap-12 '}>
                <p className={'font-extralight text-black text-4xl text-center uppercase'}>Статьи и <br/> <span className={'font-extrabold'}>полезное</span> </p>


                {posts&&saved?<div className={'mt-6 gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}>
                    {posts.map((post, counter) => {
                        if(saved?.find(item=>item.title==post.title)){
                            return(
                                <PostTab key={post.title} isSaved={true} user_uuid={uuid} {...post}></PostTab>
                            )
                        }
                        else{
                            return(
                                <PostTab key={post.title} user_uuid={uuid} {...post} callback={()=>{window.open(post.contentMd,'_blank')}}></PostTab>
                            )
                        }
                    })}
                </div>:<Loading></Loading>}
            </div>
        </main>
    )
}

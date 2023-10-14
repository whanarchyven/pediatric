"use client"
import React, {useEffect, useState} from "react";
import Slider from "@/components/Slider";
import VideoPlayer from "@/components/VideoPlayer";
import Reviews from "@/components/Reviews";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReviewPop from "@/components/ReviewPop";
import HelpPop from "@/components/HelpPop";


import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import PublicationTab from "@/components/Publication Tab";
import {eden, useEden} from "@/helpers/sdk";
import axios from "axios";
import {Pagination} from "swiper";
import NewPublicationPop from "@/components/NewPublicationPop";


// import required modules


export default function Home(params: { params: { user_uuid: string } }) {

    const user_uuidTemp = params.params.user_uuid
    const images = '/pages/account'

    const [publications,setPublications]=useState<any>([])
    const [allTags,setAllTags]=useState<string[]>([])
    // @ts-ignore
    const fetchData=async ()=>{
        const publicationsData = eden.publication.list.get().then((res)=>{
            if(res.data){
                setPublications([...res.data.publications])
            }
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        let temp=[...allTags]
        publications.map((item:any)=>{
            if(!temp.includes(item.category)){
                temp.push(item.category)
            }
        })
        setAllTags([...temp])
    }, [publications]);



    const {data} = useEden(() => eden.user[user_uuidTemp].profile.get())

    const {
        uuid,email
    } = data?.profile ?? {} as any;

    console.log(uuid)

    const [name,setName]=useState('')



    const [publicationPop, setPublicationPop] = useState(false);

    const [tags,setTags]=useState<string[]>([])

    const [isFilterOpen,setIsFilterOpen]=useState(false)


    const [tagText,setTagText]=useState('')

    const filterByName=async (name:string)=>{
        const publicationsData = eden.publication.list.get({$query:{search:name,categories:[...tags].join(',')}}).then((res)=>{
            if(res.data){
                console.log([...res.data.publications])
                setPublications([...res.data.publications])
            }
        })

    }

    const filterByTag=async ()=>{
        const publicationsData = eden.publication.list.get({$query:{search:name,categories:[...tags].join(',')}}).then((res)=>{
            if(res.data){
                console.log(res)
                setPublications([...res.data.publications])
            }
        })

    }

    useEffect(() => {
        filterByTag()
    }, [tags]);

    return (
        <main className={'p-2 lg:p-12'}>
            {publicationPop ? <NewPublicationPop email={email} user_uuid={uuid} closeFunc={() => {
                fetchData();
                setPublicationPop(false)
            }}/> : null}
            <div className={'flex justify-between items-center'}>
                <p className={'uppercase font-inter font-extralight text-2xl lg:text-3xl'}>Статьи и <br/><span
                    className={'font-extrabold'}>Публикации</span></p>
                <div onClick={() => {
                    setPublicationPop(true)
                }} className={'bg-green text-white cursor-pointer font-normal flex items-center justify-center gap-6 h-12 text-sm lg:text-base p-2 lg:p-3 rounded-lg'}>Добавить +</div>
            </div>
            <div className={'flex items-center flex-wrap my-8 gap-4'}>
                <input value={name} onChange={(event)=>{setName(event.target.value)}} placeholder={'Поиск по названию'}
                    className={'p-4 transition-all duration-300 placeholder:font-extralight w-96 border-black border-[1px] cursor-pointer flex items-center rounded-lg gap-2'}/>
                <div onClick={()=>{filterByName(name)}}
                    className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                    <img className={'w-4 aspect-square'} src={`${images}/search.svg`}/>
                    <p className={'text-white font-inter font-normal'}>Поиск</p>
                </div>
                <div onClick={()=>{setIsFilterOpen(!isFilterOpen)}} className={'p-4 px-12 transition-all duration-300 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                    <img  className={'w-4 aspect-square'} src={`${images}/filters.svg`}/>
                    <p className={'text-green font-inter font-normal'}>Фильтр по категории</p>
                </div>
            </div>
            {isFilterOpen?
                <div className={'flex items-center flex-wrap gap-4'}>
                    <input placeholder={'Поиск по категории'} value={tagText} onChange={(event)=>{setTagText(event.target.value)}} className={'p-4 transition-all duration-300 placeholder:font-extralight w-96 border-black border-[1px] cursor-pointer flex items-center rounded-lg gap-2'} list="tags"/>
                    <datalist id="tags">
                        {allTags.map((tag)=>{
                            return(
                                <option key={tag}>{tag}</option>
                            )
                        })}
                    </datalist>
                    <div onClick={()=>{setTags([...tags,tagText]);setTagText('')}}
                         className={'p-4 px-12 cursor-pointer transition-all duration-300 bg-green border-green border-2 flex items-center rounded-lg gap-2'}>
                        <p className={'text-white font-inter font-normal'}>Добавить категорию</p>
                    </div>
                </div>:null}
            <div className={'mt-4 flex flex-wrap gap-4'}>
                {tags.map((tag)=>{
                    return(
                        <div key={tag} className={'flex items-center gap-2 justify-center p-3 rounded-full text-green border-[1px] border-green w-fit'}>
                            <p>{tag}</p>
                            <img onClick={()=>{
                                let tempTags=[...tags];
                                let index=tempTags.findIndex(value => value==tag)
                                tempTags.splice(index,1);
                                setTags([...tempTags])
                            }} className={'w-5 cursor-pointer'} src={'/close_green.svg'}/>
                        </div>
                    )
                })}
            </div>
            {/*<div className={'flex items-center mt-3 gap-4'}>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>Дерматология</p>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>2023</p>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className={'border-2 border-green-two gap-3 rounded-full font-light px-5 text-green-two text-sm p-2 flex items-center justify-center'}>*/}
            {/*        <img src={`${images}/close.svg`}/>*/}
            {/*        <p>Мероприятия</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {publications && publications.length > 0 ? <div className={'flex gap-12 mt-16 flex-col'}>
                {publications.map((publication:typeof publications[0])=>{
                    return(
                        <PublicationTab user_uuid={uuid} {...publication} key={publication.title}></PublicationTab>
                    )
                })}
            </div> : <div
                className={'flex h-52 border-[1px] border-green rounded-lg items-center justify-center'}>
                <p className={'opacity-50'}>Публикации не найдены</p>
            </div>}
        </main>
    )
}

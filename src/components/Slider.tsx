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

    const [posts, setPosts] = useState<Array<any>>([]);

    useEffect(() => {
        eden.post.list.get({$query: {search: ''}}).then((res) => {
            if (res?.data?.posts) {
                setPosts(res.data.posts)
            }
        })
    }, []);


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
                        <SwiperSlide className={'relative h-full'} key={counter + item.title}>
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
        </div>
    );
}

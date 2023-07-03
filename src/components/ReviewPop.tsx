import React, {useState} from 'react';
import DragNDrop from "@/components/DragNDrop";

interface reviewPopInterface {
    callback:()=>any
}

const ReviewPop = ({callback}:reviewPopInterface) => {

    const [file,setFile]=useState<FileList>()
    const [stars,setStars]=useState(1)
    const arrStar=[1,2,3,4,5]
    return (
        <div className={'fixed h-screen top-0 w-full left-0 bg-black z-[999] bg-opacity-50 flex items-center justify-center p-[10px] sm:px-[20px]'}>
            <img className={'w-9 right-5 top-5 aspect-square cursor-pointer hidden sm:flex absolute'} src={'/close.svg'} onClick={()=>{callback()}}/>
            <img className={'w-6 right-2 top-4 aspect-square cursor-pointer flex sm:hidden absolute'} src={'/close_black.svg'} onClick={()=>{callback()}}/>
            <div className={'p-5 flex flex-col h-full sm:h-[600px] overflow-y-scroll gap-2 bg-white rounded-xl w-full sm:w-1/2'}>
                <p className={'text-3xl font-bold'}>Оставить отзыв:</p>
                <p className={'sm:text-lg text-xs font-semibold'}>Как вас зовут?</p>
                <input className={'border-red border-2 p-2'}/>
                <p className={'sm:text-lg text-xs font-semibold'}>Загрузите аватар</p>
                <DragNDrop setFile={setFile}></DragNDrop>
                <div className={'flex sm:flex-row flex-col items-center'}>
                    <p className={'sm:text-lg text-xs font-semibold'}>Оцените качество продуктов / услуг:</p>
                    <div className={'ml-2 sm:ml-7 flex'}>
                        {arrStar.map((star,counter)=>{
                            if(counter<stars){
                                return (
                                    <img key={counter} className={'w-7 cursor-pointer aspect-square'} src={'/star_filled.svg'} onClick={()=>{setStars(counter+1)}} />
                                )
                            }
                            else{
                                return (
                                    <img key={counter} className={'w-7 cursor-pointer aspect-square'} src={'/star.svg'} onClick={()=>{setStars(counter+1)}} />
                                )
                            }
                        })}
                    </div>
                </div>
                <p className={'sm:text-lg text-xs font-semibold'}>Напишите ваш отзыв!</p>
                <textarea className={'border-2 p-2 border-red'} rows={7}>

                </textarea>
                <div className={'flex items-center justify-center'}>
                    <div className={'bg-red sm:text-lg text-xs flex mt-2 items-center justify-center cursor-pointer font-bold text-white w-1/2 h-12'} onClick={()=>{callback()}}>
                        Оставить отзыв!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPop;
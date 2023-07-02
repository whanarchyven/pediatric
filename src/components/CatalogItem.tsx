import React, {useState} from 'react';
import {classList} from "@/helpers/classList";

interface catalogItem {
    tovar:{
        title:string,
        subtitle:string,
        volume:number,
        description:string,
        recomendations:string,
        image:string,
        subdescription:string,
        updescription:string,
        link:string,
        theme:'red'|'green'|'blue'
    },callback:()=>any
}

const CatalogItem = ({tovar, callback}:catalogItem) => {

    const [showInfo,setShowInfo]=useState(false)

    return (
        <div className={'sm:grid flex flex-col items-center sm:grid-cols-6 gap-x-16 w-full px-[20px] sm:px-[70px] sm:items-start'}>
            <div className={'sm:col-span-2 flex w-3/4 items-center justify-center aspect-square relative'}>
                <img className={'w-full aspect-square absolute z-10 scale-150'} src={tovar.image}/>
                <div className={classList('w-3/4 aspect-square rounded-full absolute',tovar.theme=='red'?'red-bg':'',tovar.theme=='blue'?'blue-bg':'',tovar.theme=='green'?'gren-bg':'')}>

                </div>
            </div>
            <div className={'sm:col-span-4 flex gap-2 sm:gap-7 flex-col'}>
                <div className={'flex justify-between'}>
                    <div>
                        <p className={'font-extrabold text-xl sm:text-3xl'}>{tovar.title}</p>
                        <p className={'font-extrabold sm:text-xl w-2/3 sm:w-auto text-xs text-red'}>{tovar.subtitle}</p>
                    </div>
                    <div className={'sm:w-32 sm:h-12 w-16 h-8 rounded-full text-xs bg-red text-white flex items-center justify-center'}>
                        {tovar.volume} мл
                    </div>
                </div>
                <p className={'whitespace-pre-wrap sm:text-lg text-xs'}>{tovar.description}</p>
                {showInfo?
                    <div className={'flex justify-start flex-col items-start gap-3'}>
                        <div className={'flex gap-2'}>
                            <img className={'sm:w-8 w-4 aspect-square'} src={'/tovars/formula.svg'}/>
                            <p className={'leading-[110%] font-bold text-xs sm:text-xl'}>{tovar.updescription}</p>
                        </div>
                        <ul className={'flex pl-10 flex-col gap-3'}>
                            {tovar.subdescription.split('\n').map((item)=>{
                                return (
                                    <li key={item} className={'list-disc sm:text-lg text-xs'}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    :null}
                {showInfo?
                    <div className={'flex justify-start flex-col items-start gap-3'}>
                        <div className={'flex gap-2'}>
                            <img className={'sm:w-8 w-4 aspect-square'} src={'/tovars/recomendations.svg'}/>
                            <p className={'leading-[110%] font-bold text-sm sm:text-xl'}>Рекомендации по применению</p>
                        </div>
                        <p className={'whitespace-pre-wrap sm:text-lg text-xs'}>{tovar.recomendations}</p>
                    </div>
                    :null}

                <p className={'cursor-pointer sm:text-lg text-sm text-red font-bold'} onClick={()=>{setShowInfo(!showInfo);setTimeout(()=>{callback()},100)}}>{showInfo?'Скрыть':'Подробнее ...'}</p>
                <a target={'_blank'} href={`${tovar.link}?utm_source=pediatric`} className={'flex w-full' +
                    ' sm:w-48 text-white items-center justify-center bg-red rounded-xl p-3'}>
                    Купить
                </a>
            </div>
        </div>
    );
};

export default CatalogItem;
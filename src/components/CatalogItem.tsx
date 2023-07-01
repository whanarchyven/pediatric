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
        <div className={'grid grid-cols-6 gap-x-16 w-full px-[70px] items-start'}>
            <div className={'col-span-2 flex items-center justify-center aspect-square relative'}>
                <img className={'w-full aspect-square absolute z-10 scale-150'} src={tovar.image}/>
                <div className={classList('w-3/4 aspect-square rounded-full absolute',tovar.theme=='red'?'red-bg':'',tovar.theme=='blue'?'blue-bg':'',tovar.theme=='green'?'gren-bg':'')}>

                </div>
            </div>
            <div className={'col-span-4 flex gap-7 flex-col'}>
                <div className={'flex justify-between'}>
                    <div>
                        <p className={'font-extrabold text-3xl'}>{tovar.title}</p>
                        <p className={'font-extrabold text-xl text-red'}>{tovar.subtitle}</p>
                    </div>
                    <div className={'w-32 h-12 rounded-full bg-red text-white flex items-center justify-center'}>
                        {tovar.volume} мл
                    </div>
                </div>
                <p className={'whitespace-pre-wrap'}>{tovar.description}</p>
                {showInfo?
                    <div className={'flex justify-start flex-col items-start gap-3'}>
                        <div className={'flex gap-2'}>
                            <img className={'w-8 aspect-square'} src={'/tovars/formula.svg'}/>
                            <p className={'leading-[110%] font-bold text-xl'}>{tovar.updescription}</p>
                        </div>
                        <ul className={'flex pl-10 flex-col gap-3'}>
                            {tovar.subdescription.split('\n').map((item)=>{
                                return (
                                    <li key={item} className={'list-disc'}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    :null}
                {showInfo?
                    <div className={'flex justify-start flex-col items-start gap-3'}>
                        <div className={'flex gap-2'}>
                            <img className={'w-8 aspect-square'} src={'/tovars/recomendations.svg'}/>
                            <p className={'leading-[110%] font-bold text-xl'}>Рекомендации по применению</p>
                        </div>
                        <p className={'whitespace-pre-wrap'}>{tovar.recomendations}</p>
                    </div>
                    :null}

                <p className={'cursor-pointer text-red font-bold'} onClick={()=>{setShowInfo(!showInfo);setTimeout(()=>{callback()},100)}}>{showInfo?'Скрыть':'Подробнее ...'}</p>
                <a target={'_blank'} href={`${tovar.link}?utm_source=pediatric`} className={'flex w-48 text-white items-center justify-center bg-red rounded-xl p-3'}>
                    Купить
                </a>
            </div>
        </div>
    );
};

export default CatalogItem;
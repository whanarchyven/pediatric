import React from 'react';

const PopUp = (props:any) => {
    return (
        <div className={'w-screen h-screen fixed left-0 top-0 backdrop-blur-xl flex items-center justify-center z-[9999]'}>
            <div className={'absolute w-full h-full bg-[#171717] opacity-25 z-[-1]'}>

            </div>
            <div className={'h-screen sm:px-0 px-[20px] sm:h-[600px] overflow-y-scroll py-12 relative rounded-xl grid gap-8 grid-cols-1 sm:grid-cols-12 items-center w-[1000px] bg-white'}>
                <div className={'relative h-full col-span-4 hidden sm:flex items-center overflow-hidden'}>
                    <img className={'w-full absolute scale-125 -left-12'} src={props.icon}/>
                </div>
                <div className={'sm:col-span-6'}>
                    {props.children}
                </div>
                <div className={'absolute w-12 aspect-square p-3 cursor-pointer absolute bg-green-two bg-opacity-25 flex items-center justify-center right-5 top-5 rounded-full'} onClick={()=>{props.closeFunc()}}>
                    <img className={'w-full h-full'} src={'/arrow_close.svg'}/>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
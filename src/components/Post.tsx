import React from 'react';

interface postInterface {
    title:string,
    caption:string,
    image:string,
    callback:()=>any,
    text:string
}

const Post = ({title,caption,image, callback, text}:postInterface) => {
    return (
        <div className={'w-full p-4 flex gap-4 flex-col h-full items-center justify-center '} >
            <img className={'cursor-pointer w-full h-96 object-cover rounded-lg'} src={`/posts/${image}.jpg`} onClick={()=>{callback()}}/>
            <p className={'text-black w-full truncate text-sm sm:text-xl text-center font-bold'}>
                {title}
            </p>
            <p className={'text-black truncate w-full sm:text-lg text-xs text-center'}>
                {caption}
            </p>
            <div className={'hover:bg-red justify-self-end hover:text-white duration-300 transition-all cursor-pointer mt-2 w-full sm:w-3/4 border-red border-2 sm:p-4 p-1 sm:text-xs text-sm text-red flex items-center rounded-lg font-bold justify-center'} onClick={()=>{
                callback();
            }}>
                Читать статью
            </div>
        </div>
    );
};

export default Post;
import React from 'react';

interface postInterface {
    title:string,
    caption:string,
    image:string
}

const Post = ({title,caption,image}:postInterface) => {
    return (
        <div className={'w-full p-4 flex flex-col items-center justify-center '}>
            <img className={'my-2 w-full rounded-lg'} src={`/posts/${image}.jpg`}/>
            <p className={'my-2 text-black text-sm sm:text-xl text-center font-bold'}>
                {title}
            </p>
            <p className={'my-2 text-black sm:text-lg text-xs text-center'}>
                {caption}
            </p>
            <div className={'hover:bg-red hover:text-white duration-300 transition-all cursor-pointer mt-2 w-full sm:w-3/4 border-red border-2 sm:p-4 p-1 sm:text-xs text-sm text-red flex items-center rounded-lg font-bold justify-center'}>
                Читать статью
            </div>
        </div>
    );
};

export default Post;
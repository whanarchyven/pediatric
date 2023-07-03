import React from 'react';

interface postInterface {
    name:string,
    review:string,
    avatar:string,
    stars:number,
    callback:()=>any,
}

const Review = ({name,review,avatar,stars, callback}:postInterface) => {
    const starArr=[1,2,3,4,5]
    return (
        <div className={'w-full flex flex-col items-center justify-center relative'}>
            <img src={avatar} className={'w-32 object-cover absolute top-0 aspect-square rounded-full border-white z-[99] border-8 '}/>
            <div className={'w-full p-4 rounded-xl mt-16 pt-24 pb-14 flex flex-col items-center justify-end bg-white'}>
                <p className={'text-2xl font-bold mt-3'}>{name}</p>
                {review.split(' ').length>20?<p className={'text-center font-normal'}>{review.split(' ').slice(0,20).join(' ')} ...<br/><span className={'text-red cursor-pointer leading-10'} onClick={()=>{callback()}}>Читать полностью</span></p>:<p>{review}</p>}
                <div className={'w-full mt-6 flex justify-center items-center'}>
                    {starArr.map((item,counter)=>{
                        if(counter<=stars-1){
                            return (
                                <img key={counter} className={'w-7 aspect-square'} src={'/star_filled.svg'} />
                            )
                        }
                        else{
                            return (
                                <img key={counter} className={'w-7 aspect-square'} src={'/star.svg'} />
                            )
                        }
                    })}

                </div>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';

const MainBlock = () => {
    return (
        <div className="min-h-screen bg-cover relative bg-[url('/main_bg.png')]">
            <div className={'w-full min-h-screen px-[70px] grid grid-cols-12'}>
                <div>
                </div>
                <div className={'col-span-5 flex flex-col h-full justify-center'}>
                    <div className={'grid grid-cols-5'}>
                        <img className={'col-span-3'} src={'/azbuka_logo.svg'}/>
                    </div>
                    <div className={'mt-10 grid grid-cols-5'}>
                        <p className={'text-white font-inter col-span-5'}>Для тех кто столкнулся с атопическим дерматитом — малышей и их родителей, а также их лечащих докторов
                            от Pierre Fabre Dermo-Cosmétique</p>
                    </div>
                    <div className={'mt-5 grid grid-cols-5'}>
                        <button className={'col-span-2 bg-white rounded-lg h-12'}>
                            Подробнее
                        </button>
                    </div>
                </div>
                <div className={'col-span-6 flex flex-col h-full justify-end'}>
                    <img className={'aspect-square w-full'} src={'/mommy.png'}/>
                </div>

            </div>
            <div className={'absolute w-full'} style={{bottom:'-2px'}}>
                <img src={'/main_asset_bottom.svg'} alt={'asset_bottom'}></img>
            </div>
        </div>
    );
};

export default MainBlock;
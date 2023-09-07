import React from 'react';


interface PublicationTabInterface {
    isRateHidden?:boolean
    isAuthorsHidden?:boolean
}

const PublicationTab = ({isRateHidden, isAuthorsHidden}:PublicationTabInterface) => {
    const images='/pages/account'

    return (
        <div className={'flex items-start gap-4'}>
            <div className={'flex w-14 flex-col gap-2'}>
                <img className={'w-full'} src={`${images}/temp_file.svg`}/>
                <p className={'font-medium text-green-two text-center text-sm'}>PDF</p>
            </div>
            <div className={'flex flex-col w-full gap-3'}>
                <div className={'flex justify-between w-full'}>
                    <div className={'flex gap-3'}>
                        <p className={'text-black opacity-50 text-xs'}>12.09.2022</p>
                        <div className={'h-full w-[1px] bg-black opacity-30'}>

                        </div>
                        <p className={'text-green-two text-xs'}>Педиатрия</p>
                    </div>
                    {isRateHidden?null:<div className={'flex gap-4 items-center'}>
                        <div className={'flex gap-2 items-center'}>
                            <img className={'w-4'} src={`${images}/views.svg`}/>
                            <p className={'text-green-two text-xs'}>567</p>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'flex items-center gap-1'}>
                                <img className={'w-4'} src={`${images}/star_filled.svg`}/>
                                <img className={'w-4'} src={`${images}/star_filled.svg`}/>
                                <img className={'w-4'} src={`${images}/star_filled.svg`}/>
                                <img className={'w-4'} src={`${images}/star_filled.svg`}/>
                                <img className={'w-4'} src={`${images}/star_outlined.svg`}/>
                            </div>
                            <p className={'text-green-two text-xs'}>567</p>
                        </div>
                    </div>}
                </div>
                <p className={'text-sm text-black'}>Современные представления о патогенезе, особенностях клинической картины, диагностике и терапевтической тактике вульгарных акне у детей и подростков</p>
                {isAuthorsHidden?null:<p className={'text-sm opacity-50 text-black'}>Авторы: Е.Р. Аравийская, Н.Н. Мурашкин, Л.С. Намазова-Баранова, Р.А. Иванов</p>}
                <div className={'flex w-full gap-4'}>
                    <div className={'p-2 bg-green cursor-pointer flex items-center rounded-lg gap-2'}>
                        <p className={'text-white font-inter text-xl font-normal px-8'}>Читать</p>
                    </div>
                    <div className={'p-2 border-green border-2 cursor-pointer flex items-center rounded-lg gap-2'}>
                        <p className={'text-green-two font-inter text-xl font-normal px-8'}>Скачать PDF</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PublicationTab;
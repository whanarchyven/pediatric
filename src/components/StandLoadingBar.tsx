import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";

const StandLoadingBar = () => {

    const phrases=[
        'Общаемся с Искуственным интеллектом',
        'Сверяем цены препапратов',
        'Консультируемся с дерматолагами'
    ]

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [dots, setDots] = useState('');

    useEffect(() => {
        const phraseInterval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(phraseInterval);
    }, [phrases.length]);

    useEffect(() => {
        const dotsInterval = setInterval(() => {
            setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
        }, 1000);

        return () => clearInterval(dotsInterval);
    }, []);

    return (
        <div className={'fixed stand-bg p-4 flex flex-col gap-12 items-center justify-center z-[999999999] top-0 w-full h-full bg-black'}>
            <p className={'font-inter font-bold xl:text-2xl text-white'}>{phrases[currentPhraseIndex]}{dots}</p>
            <div className={'w-full xl:w-1/3 flex items-center justify-center aspect-square relative'}>
                <motion.img initial={{rotate:0}} animate={{rotate:360}} transition={{
                    duration: 7, // Длительность анимации
                    repeat: Infinity, // Бесконечная повторяемость
                    repeatType: 'loop', // Реверс анимации
                    ease: 'linear', // Плавность анимации
                }} className={'absolute'} src={'/stand_outer_circle.svg'}/>
                <motion.img initial={{scale:1}} animate={{scale:1.3}} transition={{
                    duration: 1, // Длительность анимации
                    repeat: Infinity, // Бесконечная повторяемость
                    repeatType: 'reverse', // Реверс анимации
                    ease: 'easeInOut', // Плавность анимации
                }} className={'absolute w-1/2 drop-shadow-[0_0px_35px_rgba(255,255,255,1)]'} src={'/stand_inner_circle.svg'}/>
            </div>
        </div>
    );
};

export default StandLoadingBar;
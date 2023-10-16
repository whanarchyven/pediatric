import React from 'react';

const Loading = () => {
    return (
        <img className={'w-5 aspect-square animate-spin'} src={'/loading.svg'}/>
    );
};

export default Loading;
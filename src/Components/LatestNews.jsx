import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-2'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='gap-5' pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fuga!</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;
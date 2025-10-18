import React from 'react';
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import plagroundImg from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3 rounded'>
            <h2 className="text-accent font-bold">Q-Zone</h2>
            <div>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={plagroundImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;
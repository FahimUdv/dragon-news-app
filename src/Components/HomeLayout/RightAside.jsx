import React from 'react';
import SocialLogins from '../SocialLogins';
import FindUs from '../FindUs';
import QZone from '../QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogins></SocialLogins>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;
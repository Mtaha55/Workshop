import React from 'react';
import Advertisement from './advertisement';
import './style.css';

const AdvertisementList = () => {
    const ads = [
        { title: 'Ad 1', description: 'This is the first advertisement.', contact: '***' },
        { title: 'Ad 2', description: 'This is the second advertisement.', contact: '***' },
        { title: 'Ad 3', description: 'This is the third advertisement.', contact: '***' },
        { title: 'Ad 4', description: 'This is the fourth advertisement.', contact: '***' },
        { title: 'Ad 5', description: 'This is the fifth advertisement.', contact: '***' },
        { title: 'Ad 6', description: 'This is the sixth advertisement.', contact: '***' },
    ];

    return (
        <div className="advertisement-list">
            {ads.map((ad, index) => (
                <Advertisement key={index} ad={ad} />
            ))}
        </div>
    );
};

export default AdvertisementList;

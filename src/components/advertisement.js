import React from 'react';
import './style.css';

const Advertisement = ({ ad }) => {
    return (
        <div className="advertisement">
            <div className="ad-image">150 x 150</div>
            <div className="ad-details">
                <h3>{ad.title}</h3>
                <p>{ad.description}</p>
                <p>Contact: {ad.contact}</p>
                <button>Details</button>
            </div>
        </div>
    );
};

export default Advertisement;

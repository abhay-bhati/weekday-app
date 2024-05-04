import React from 'react';

const TimeBadge = ({ days }) => {
    return (
        <div className='time-badge-wrapper'>
            <div>
            <p className='time-badge'>
                ⏳ Posted {days} days ago
            </p>
            </div>
        </div>
    )
};

export default TimeBadge;
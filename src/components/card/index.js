import React from 'react';
import TimeBadge from './TimeBadge';
import CompanyDetails from './CompanyDetails';

const Card = () => {
    return (
        <div className='card-wrapper'>
            <TimeBadge days={"15"}/>
            <CompanyDetails />
        </div>
    )
};

export default Card;
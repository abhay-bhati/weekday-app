import React from 'react';
import TimeBadge from './TimeBadge';
import CompanyDetails from './CompanyDetails';

const Card = ({job}) => {
    return (
        <div className='card-wrapper'>
            <TimeBadge days={"15"}/>
            <CompanyDetails job={job}/>
        </div>
    )
};

export default Card;
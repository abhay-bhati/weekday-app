import React from 'react';
import Roles from './Roles';
import NumberOfEmployees from './NumberOfEmployees';
import Remote from './Remote';
import Experience from './Experience';
import MinimumPay from './MinimumPay';
import Input from '../input';

const Filter = () => {
    return (
        <div className='filter-wrapper'>
            <Roles />
            <NumberOfEmployees />
            <Experience />
            <Remote />
            <MinimumPay className='minimum-pay'/>
            <Input placeholder={"Company Name"}/>
        </div>
    )
};

export default Filter;
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Filter from '../../components/filter';
import Card from '../../components/card';
import { getAllJobs } from '../../slice/jobs';

const Search = () => {
    const dispatch = useDispatch();
    const {jobs} = useSelector((state) => state.jobs);
    
    useEffect(() => {
        dispatch(getAllJobs());
    }, [])

    return (
        <div>
        <Filter />
        <div className='jobs-wrapper'>
            {jobs?.map(item => {
                return (
                    <Card />
                )
            })}
        </div>
        </div>
    )
};

export default Search;
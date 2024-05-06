import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/filter';
import Card from '../../components/card';
import { getAllJobs, setJobs, setFixedJobs, setOffset } from '../../slice/jobs';

const Search = () => {
    const observerRef = useRef(null);
    const dispatch = useDispatch();
    const { jobs, loading } = useSelector((state) => state.jobs);

    const handleIntersection = (entries) => {
        dispatch(getAllJobs())
    }

    useEffect(() => {
        dispatch(setJobs([]));
        dispatch(setFixedJobs([]));
        dispatch(setOffset(0));
        dispatch(getAllJobs());
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleIntersection();
            }
        });
        observer.observe(observerRef.current);
    }, []);

    return (
        <div>
            <Filter />
            <div className='jobs-wrapper'>
                {jobs?.map(item => {
                    return (
                        <Card job={item} />
                    )
                })}
            </div>
            <div style={{height: '100px', display:'flex', justifyContent:'center', alignItems:'center' }} ref={observerRef} id='observer-ref'>
                <svg className='loader-svg' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path></svg>
            </div>
        </div>
    )
};

export default Search;
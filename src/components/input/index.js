import React, { useState } from 'react';

const Input = ({ placeholder, inputStyle }) => {
    const [inputValue, setInputValue] = useState('');

    const onSearchInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
        {inputValue?.length > 0 && <div className='select-top-label'>{placeholder}</div>}
        <div className={`select-wrapper`} style={{...inputStyle, height:'23.5px'}}>
            <input className={`select-input ${placeholder}`} placeholder={placeholder} onChange={(e) => onSearchInput(e)} />
        </div>
        </div>
    )
};

export default Input;

import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as LineVertical } from '../../assets/icons/line-vertical.svg';

const Select = ({ list, placeholder, selectClassName, multiSelect, selectedValue }) => {
    const dropdownRef = useRef(null);
    const [listData, setListData] = useState(list);
    const [showDropdown, setShowDropdown] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);
    const [singleSelect, setSingleSelect] = useState('');
    let inputEl = document.getElementsByClassName(placeholder)[0];
    let dropdownListArray = [];

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [showDropdown])

    const onSelect = (e, value) => {
        e.stopPropagation();
        if (multiSelect) {
            setTags(prev => {
                return [...prev, value];
            });
            selectedValue && selectedValue([...tags, value])
            inputEl.focus();
        }
        else {
            setSingleSelect(value);
            selectedValue && selectedValue(value);
        }
        setShowDropdown(false);
    };

    const onDeleteTag = (e, index) => {
        e.stopPropagation();
        setTags((prev) => {
            const newTags = [...prev];
            newTags.splice(index, 1);
            selectedValue && selectedValue(newTags);
            return newTags
        });
        inputEl.focus();
    };

    const onSearchInput = (e) => {
        setInputValue(e.target.value);
        const filteredArray = list?.filter(item => item?.toLowerCase().includes(e.target.value?.toLowerCase()));
        setListData(filteredArray);
    }

    return (
        <div id='select-element' ref={dropdownRef}>
            {multiSelect ? (tags?.length > 0 && <div className='select-top-label'>{placeholder}</div>) : (singleSelect && <div className='select-top-label'>{placeholder}</div>)}
            <div className={`select-wrapper ${selectClassName ? selectClassName : ''}`} style={{ position: 'relative', width:'auto' }} onClick={() => setShowDropdown(!showDropdown)}>
                {multiSelect ? <div style={{ display: 'flex', alignItems: 'center', gap: '3px', paddingRight: '4px' }}>
                    {tags?.map((item, index) => {
                        return (
                            <div className='select-tag-wrapper'>
                                <div className='select-tag'>{item}</div>
                                <div className='select-x' onClick={(e) => onDeleteTag(e, index)}>
                                    <svg className='select-x-svg' xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                    :
                    <div className='single-select'>{singleSelect}</div>
                }
                <input className={`select-input ${placeholder} ${(singleSelect || tags?.length > 0) ? 'select-input-width' : ''}`} placeholder={multiSelect ? (tags.length > 0 ? '' : placeholder) : (singleSelect.length > 0 ? '' : placeholder)} onChange={(e) => onSearchInput(e)} />
                <div>
                    <LineVertical />
                    <svg className="select-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                <div className='select-dropdown' style={{ display: showDropdown ? 'block' : 'none' }} >
                    {listData?.length > 0 ? <div className='select-dropdown-inside'>
                        {listData?.map(item => {
                            if (!tags.includes(item)) {
                                dropdownListArray.push(item);
                                return (
                                    <div className={`select-dropdown-options ${singleSelect === item ? 'select-dropdown-options-single' : ''}`} onClick={(e) => onSelect(e, item)}>{item}</div>
                                )
                            }
                        })}
                        {dropdownListArray?.length == 0 && <div className='select-empty-options'>No Options</div>}
                    </div>
                        :
                        <div className='select-empty-options'>No Options</div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Select;

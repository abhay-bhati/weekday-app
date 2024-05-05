import React, { useState, useEffect } from 'react';
import { ReactComponent as CaretDown } from '../../assets/icons/caret-down.svg';
import { ReactComponent as LineVertical } from '../../assets/icons/line-vertical.svg';

const Select = ({ list, placeholder, selectClassName, multiSelect }) => {
    const [listData, setListData] = useState(list);
    const [showDropdown, setShowDropdown] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);
    const [singleSelect, setSingleSelect] = useState('');
    let inputEl = document.getElementsByClassName(placeholder)[0];

    const onSelect = (e, value) => {
        e.stopPropagation();
        if (multiSelect) {
            setTags(prev => {
                return [...prev, value];
            });
            inputEl.focus();
        }
        else {
            setSingleSelect(value);
        }
        setShowDropdown(false);
    };

    const onDeleteTag = (e, index) => {
        e.stopPropagation();
        setTags((prev) => {
            const newTags = [...prev];
            newTags.splice(index, 1);
            return newTags
        })
        inputEl.focus();
    };

    const onSearchInput = (e) => {
        setInputValue(e.target.value);
        const filteredArray = list?.filter(item => item?.toLowerCase().includes(e.target.value?.toLowerCase()));
        setListData(filteredArray);
    }
    console.log('singleSelect', singleSelect);
    console.log('mult', multiSelect)
    return (
        <div>
            {multiSelect ? (tags?.length > 0 && <div className='select-top-label'>{placeholder}</div>) : (singleSelect && <div className='select-top-label'>{placeholder}</div>)}
            <div className={`select-wrapper ${selectClassName ? selectClassName : ''}`} style={{ position: 'relative' }} onClick={() => setShowDropdown(true)}>
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
                <input className={`select-input ${placeholder}`} placeholder={multiSelect ? (tags.length > 0 ? '' : placeholder) : (singleSelect.length > 0 ? '' : placeholder)} onChange={(e) => onSearchInput(e)} />
                <div>
                    <LineVertical />
                    <svg className="select-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                </div>
                <div className='select-dropdown' style={{ display: showDropdown ? 'block' : 'none' }} >
                    {listData?.length > 0 ? <div className='select-dropdown-inside'>
                        {listData?.map(item => {
                            return (
                                <div className={`select-dropdown-options ${singleSelect === item ? 'select-dropdown-options-single' : ''}`} onClick={(e) => onSelect(e, item)}>{item}</div>
                            )
                        })}
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

import React from 'react';
import { useState } from 'react';
export const Inputs = ({props}) => {
    const [inputValue, setInputValue] = useState();
    function inputOnChange(e){
        setInputValue(e.target.value);
    }
  return (
    <div className='inputwrapper'>
        <input onChange={inputOnChange} type={`${props.inputType || "text"}`} placeholder={`${props.inputPlaceHolder || "inputPlaceHolder"}`} value={inputValue} />
    </div>
  )
}

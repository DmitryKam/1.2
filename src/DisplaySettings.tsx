import React, {ChangeEvent, useState} from 'react';
import './App.css';

type DisplaySettingsPropsType = {
    value: number
    maxValue: number
    minValue: number
}


function DisplaySettings(props: DisplaySettingsPropsType) {



let [maxValueInput, maxSetValueInput] = useState<number>(props.maxValue);
let [minValueInput, minSetValueInput] = useState<number>(props.minValue);

const changeMaxInputvalue = (e:ChangeEvent<HTMLInputElement>)=>{
    maxSetValueInput(e.currentTarget.value)
}
    const changeMinInputvalue = (e:ChangeEvent<HTMLInputElement>)=>{
        minSetValueInput(e.currentTarget.value)
    }
    return (<div>
        <div>Set maxValue: <input type="number" name={'num'} min={0} max={1000} step={1}
            className={'input'}
            value={maxValueInput}
            onChange={changeMaxInputvalue}
        /></div>
        <div>Set minValue:<input type="number" name={'num'} min={0} max={1000} step={1}
            className={'input'}
            value={minValueInput}
            onChange={changeMinInputvalue}

        /></div>
    </div>)
}

export default DisplaySettings;
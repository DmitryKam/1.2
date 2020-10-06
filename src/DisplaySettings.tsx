import React, {ChangeEvent, useState} from 'react';
import './App.css';

type DisplaySettingsPropsType = {
    value: number
    maxValue: number
    minValue: number
    setMinValue: (set: number) => void
    setMaxValue: (set: number) => void
}


function DisplaySettings(props: DisplaySettingsPropsType) {



    const setMinValue = (e: ChangeEvent<HTMLInputElement>)=>{
        props.setMinValue(Number(e.currentTarget.value))
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>)=>{
        props.setMaxValue(Number(e.currentTarget.value))
    }

    return (<div>
        <div>Set maxValue: <input type="number"
                                  className={'input'}
                                  value={props.maxValue}
                                  onChange={setMaxValue}
        /></div>
        <div>Set minValue:<input type="number"
                                 className={'input'}
                                 value={props.minValue}
                                 onChange={setMinValue}

        /></div>
    </div>)
}

export default DisplaySettings;
import React from 'react';
import './App.css';

type DisplaySettingsPropsType = {
    value: number
    maxValue: number
    minValue: number
    setMinValue: (e:any) => void
    setMaxValue: (e:any) => void
}


function DisplaySettings(props: DisplaySettingsPropsType) {


    return (<div>
        <div>Set maxValue: <input type="number"
                                  className={'input'}
                                  value={props.maxValue}
                                  onChange={props.setMaxValue}
        /></div>
        <div>Set minValue:<input type="number"
                                 className={'input'}
                                 value={props.minValue}
                                 onChange={props.setMinValue}

        /></div>
    </div>)
}

export default DisplaySettings;
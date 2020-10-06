import React from 'react';
import './App.css';
import MyButton from './Button';
import DisplaySettings from './DisplaySettings';

type CounterSettingsPropsType = {
    setMinMaxValueFromSetting: () => void
    startMaxValue: number
    startMinValue: number
    setMinValue: (set: number) => void
    setMaxValue: (set: number) => void
}

function CounterSetings(props: CounterSettingsPropsType) {



    return (
        <div>
            <div className={'display'}>
                <DisplaySettings
                    value={props.startMinValue}
                    maxValue={props.startMaxValue}
                    minValue={props.startMinValue}
                    setMinValue={props.setMinValue}
                    setMaxValue={props.setMaxValue}
                />
            </div>
            <div className={'buttons'}>
                <MyButton
                    name={'set'}
                    action={props.setMinMaxValueFromSetting}
                    value={props.startMinValue}
                    maxValue={props.startMaxValue}

                />
            </div>
        </div>
    )
}

export default CounterSetings;
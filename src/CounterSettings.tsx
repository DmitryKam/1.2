import React from 'react';
import './App.css';
import MyButton from './Button';
import DisplaySettings from './DisplaySettings';

type CounterSettingsPropsType = {
    setMinMaxValueFromSetting: () => void
    value: number
    maxValue: number
    minValue: number
    setMinValue: (e:any) => void
    setMaxValue: (e:any) => void
}

function CounterSetings(props: CounterSettingsPropsType) {

    return (
        <div>
            <div className={'display'}>
                <DisplaySettings
                    value={props.value}
                    maxValue={props.maxValue}
                    minValue={props.minValue}
                    setMinValue={props.setMinValue}
                    setMaxValue={props.setMaxValue}
                />
            </div>
            <div className={'buttons'}>
                <MyButton
                    name={'set'}
                    action={props.setMinMaxValueFromSetting}
                    value={props.value}
                    maxValue={props.maxValue}

                />
            </div>
        </div>
    )
}

export default CounterSetings;
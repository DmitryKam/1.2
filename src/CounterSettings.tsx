import React from 'react';
import './App.css';
import MyButton from './Button';
import DisplaySettings from './DisplaySettings';

type CounterSettingsPropsType = {
    setyo: () => void
    value: number
    maxValue: number
    minValue: number
}

function CounterSetings(props: CounterSettingsPropsType) {

    return (
        <div>
            <div className={'display'}>
                <DisplaySettings
                    value={props.value}
                    maxValue={props.maxValue}
                    minValue={props.minValue}

                />
            </div>
            <div className={'buttons'}>
                <MyButton
                    name={'set'}
                    action={props.setyo}
                    value={props.value}
                    maxValue={props.maxValue}

                />
            </div>
        </div>
    )
}

export default CounterSetings;
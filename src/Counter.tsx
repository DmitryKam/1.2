import React from 'react';
import './App.css';
import Display from './Display';
import MyButton from './Button';

type CounterPropsType = {
    counterValue: () => void
    reset: () => void
    maxValue: number
    minValue: number
    setMinValue: number
}

function Counter(props: CounterPropsType) {

    const endButtonValue = (props.minValue>=props.maxValue)? "buttonOpacity":""
    const resetButtonValue = (props.setMinValue === props.minValue)? "buttonOpacity":""

    return (
        <div>
            <div className={'display'}>
                <Display
                    value={props.minValue}
                    maxValue = {props.maxValue}
                    minValue={props.minValue}
                />
            </div>
            <div className={'buttons'}>
                <div className={endButtonValue}>
                <MyButton
                    name={'inc'}
                    action={props.counterValue}
                    maxValue = {props.maxValue}
                    value={props.minValue}
                />
                </div>
                <div className={resetButtonValue}>
                <MyButton
                    name={'reset'}
                    action={props.reset}
                    maxValue = {props.maxValue}
                    value={props.minValue}
                />
                </div>
            </div>
        </div>
    )
}

export default Counter;
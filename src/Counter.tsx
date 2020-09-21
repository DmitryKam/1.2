import React from 'react';
import './App.css';
import Display from './Display';
import MyButton from './Button';

type CounterPropsType = {
    counterValue: () => void
    value: number
    reset: () => void
    maxValue: number
    minValue: number
}

function Counter(props: CounterPropsType) {

    const endButtonValue = (props.value>=props.maxValue)? "buttonOpacity":""
    const resetButtonValue = (props.value ==props.minValue)? "buttonOpacity":""

    return (
        <div>
            <div className={'display'}>
                <Display
                    value={props.value}
                    maxValue = {props.maxValue}
                />
            </div>
            <div className={'buttons'}>
                <div className={endButtonValue}>
                <MyButton
                    name={'inc'}
                    action={props.counterValue}
                    maxValue = {props.maxValue}
                    value={props.value}
                />
                </div>
                <div className={resetButtonValue}>
                <MyButton
                    name={'reset'}
                    action={props.reset}
                    maxValue = {props.maxValue}
                    value={props.value}
                />
                </div>
            </div>
        </div>
    )
}

export default Counter;
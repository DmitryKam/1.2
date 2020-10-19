import React, {ChangeEvent} from 'react';
import s from './DisplaySettings.module.css'


type DisplayPropsType = {
    className: string
    minValue: number
    maxValue: number
    changeMaxValue: (maxValue: number) => void
    changeMinValue: (maxValue: number) => void
}

function DisplaySettings(props: DisplayPropsType) {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value);
    };

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(+e.currentTarget.value);
    };

    let inputClasses = props.minValue === props.maxValue
    || props.minValue < 0
    || props.maxValue < 0
    || props.minValue > props.maxValue
        ?s.inputErrorClass
        : s.inputMinClass;



    return (
        <div className={props.className}>
            <div>MaxValue:<input
                className={inputClasses}
                type={'number'}
                value={props.maxValue}
                onChange={changeMaxValue}
            />
            </div>
            <div>MinValue:<input
                className={inputClasses}
                type={'number'}
                value={props.minValue}
                onChange={changeMinValue}
            />
            </div>
        </div>
    )

}

export default DisplaySettings;
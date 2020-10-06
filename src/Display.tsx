import React from 'react';
import './App.css';

type DisplayPropsType = {
    value: number
    maxValue: number
    minValue: number

}


function Display(props:DisplayPropsType) {

    const endValue = (props.minValue>=props.maxValue)? "displayCounterWrong":"displayCounter"


    return(<div className={endValue}>
        {props.minValue}
    </div>)
}

export default Display;
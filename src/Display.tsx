import React from 'react';
import './App.css';

type DisplayPropsType = {
    value: number
    maxValue: number
}


function Display(props:DisplayPropsType) {

    const endValue = (props.value>=props.maxValue)? "displayCounterWrong":"displayCounter"


    return(<div className={endValue}>
        {props.value}
    </div>)
}

export default Display;
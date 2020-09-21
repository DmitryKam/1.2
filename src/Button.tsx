import React from 'react';
import './App.css';

type ButtonPropsType = {
    name: string
    action: ()=>void
    maxValue: number
    value: number
}

function MyButton(props:ButtonPropsType) {

    return(<div >
        <button className={"button"} onClick={props.action}>{props.name}</button>
    </div>)
}

export default MyButton;
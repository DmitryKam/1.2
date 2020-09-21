import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import CounterSetings from './CounterSettings';


function App() {

let minValue = 0;
let maxValue = 5;

let[minValueSet,maxValueSet] = useState()

    function setValueCounter (){
    }

let [value, setValue] = useState(minValue);

function counterValue () {
    if(value<maxValue) {
       return  setValue(value+1)
    } else return value
}

function reset() {
setValue(minValue);
}

function yo() {
 return(alert('yo'))
}

    return (
        <div className={'general'} >
            <div className={'displayBlock'}>
                <CounterSetings
                    maxValue={maxValue}
                    minValue = {minValue}
                    value = {value}
                    setyo={yo}
                />
            </div>
            <div className={'displayBlock'}>
                <Counter
                    counterValue={counterValue}
                    value = {value}
                    reset={reset}
                    maxValue={maxValue}
                    minValue = {minValue}
                />
            </div>
        </div>


    );
}

export default App;

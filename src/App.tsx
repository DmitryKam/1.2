import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from './Counter';
import CounterSetings from './CounterSettings';


function App() {



    const [startMinValue, setStartMinValue] = useState<number>(0);
    const [startMaxValue, setStartMaxValue] = useState<number>(5);

    let [minValue, setMinValue] = useState<number>(startMinValue);
    let [maxValue, setMaxValue] = useState<number>(startMaxValue);


    function setMax(setCounterMaxValue: number) {
        setStartMaxValue(setCounterMaxValue)
    }
    function setMin(setCounterMinValue: number) {
        setStartMinValue(setCounterMinValue)
    }


    function setMinMaxValueFromSetting() {
        setMinValue(startMinValue);
        setMaxValue(startMaxValue);
    }


    function counterValue() {
        if (minValue < maxValue) { // value
            return setMinValue(minValue + 1)
        } else return setMinValue
    }

    function reset() {
        setMinValue(startMinValue);
    }


    return (
        <div className={'general'}>
            <div className={'displayBlock'}>
                <CounterSetings
                    startMaxValue={startMaxValue}
                    startMinValue={startMinValue}
                    setMinValue={setMin}
                    setMaxValue={setMax}
                    setMinMaxValueFromSetting={setMinMaxValueFromSetting}
                />
            </div>
            <div className={'displayBlock'}>
                <Counter
                    counterValue={counterValue}
                    reset={reset}
                    maxValue={maxValue}
                    minValue={minValue}
                    setMinValue={startMinValue}
                />
            </div>
        </div>


    );
}

export default App;

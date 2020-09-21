import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from './Counter';
import CounterSetings from './CounterSettings';


function App() {

    let [minValue, setMinValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(5);


    function setMax(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(e.currentTarget.value))
    }
    function setMin(e: ChangeEvent<HTMLInputElement>) {
        setMinValue(Number(e.currentTarget.value))
    }


    function setMinMaxValueFromSetting() {
        setMinValue(minValue);
        setMaxValue(maxValue);
    }

    let [value, setValue] = useState(minValue);

    function counterValue() {
        if (value < maxValue) {
            return setValue(value + 1)
        } else return value
    }

    function reset() {
        setValue(minValue);
    }


    return (
        <div className={'general'}>
            <div className={'displayBlock'}>
                <CounterSetings
                    maxValue={maxValue}
                    minValue={minValue}
                    setMinValue={setMin}
                    setMaxValue={setMax}
                    value={value}
                    setMinMaxValueFromSetting={setMinMaxValueFromSetting}
                />
            </div>
            <div className={'displayBlock'}>
                <Counter
                    counterValue={counterValue}
                    value={value}
                    reset={reset}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            </div>
        </div>


    );
}

export default App;

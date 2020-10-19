import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import MyButton from './components/MyButton';
import DisplaySettings from './components/DisplaySettings';



function App() {

     const maxStorage = localStorage.getItem('max');
     const minStorage = localStorage.getItem('min');

    const [minValue, setMinValue] = useState<number>(Number(minStorage));
    const [maxValue, setMaxValue] = useState<number>(Number(maxStorage));
    const [inc, setInc] = useState<number>(Number(minStorage));
    const [press, setPress] = useState<boolean>(true);



    function incCounter() {
        if (inc < maxValue && press) {
            setInc(inc + 1);
        }
    }

    function resetValue() {
        if (press) {
            setInc(minValue);
        }
    }

    function setValues() {
        setMinValue(minValue);
        setMaxValue(maxValue);
        setPress(true);
        localStorage.setItem('max',String(maxValue));
        localStorage.setItem('min',String(minValue));
        setInc(minValue);
    }

    function changeMaxValue(maxValue: number) {
        setMaxValue(maxValue)
        setInc(0);
        setPress(false);
    }

    function changeMinValue(minValue: number) {
        setMinValue(minValue)
        setInc(0);
        setPress(false);
    }


    const endClass = inc >= maxValue
    || minValue === maxValue
    || minValue < 0
    || maxValue < 0
    || minValue > maxValue
        ? 'button1End'
        : press
            ? 'button1'
            : 'button1End';

    const resetClass = inc === minValue
    || minValue === maxValue
    || minValue < 0
    || maxValue < 0
    || minValue > maxValue
        ? 'button2reset'
        :
        press
            ? 'button2'
            : 'button2reset';

    const displayClass = inc === maxValue
    || minValue === maxValue
    || minValue < 0
    || maxValue < 0
    || minValue > maxValue
        ? 'displayEnd'
        : 'display1';
    const enterValuexText = 'enter values and press \'set\'';

    const displayInformation = minValue === maxValue
    || minValue < 0
    || maxValue < 0
    || minValue > maxValue
        ? 'Incorrect Values'
        : !press
            ? enterValuexText
            : inc;

    return (
        <div className={'general'}>
            <div className={'generalCounterContainerd'}>
                <div className={'display'}>
                    <Display
                        className={displayClass}
                        incValue={displayInformation}
                    />
                </div>
                <div className={'buttons'}>
                    <MyButton
                        className={endClass}
                        name={'Inc'}
                        onClick={incCounter}
                    />
                    <MyButton
                        className={resetClass}
                        name={'Reset'}
                        onClick={resetValue}
                    />
                </div>
            </div>

            <div className={'generalCounterSetting'}>
                <div className={'display'}>
                    <DisplaySettings
                        className={'displaySetting'}
                        minValue={minValue}
                        maxValue={maxValue}
                        changeMaxValue={changeMaxValue}
                        changeMinValue={changeMinValue}

                    />
                </div>
                <div className={'buttons'}>
                    <MyButton
                        className={'button3'}
                        name={'Set'}
                        onClick={setValues}
                    />
                </div>
            </div>

        </div>

    );
}

export default App;

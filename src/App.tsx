import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import MyButton from './components/MyButton';
import DisplaySettings from './components/DisplaySettings';
import {StorageService} from './components/storage';
import {useDispatch, useSelector} from 'react-redux';
import {
    changeMaxValueAC,
    changeMinValueAC,
    CounterStateType,
    incCounterAC,
    resetValueAC,
    setValuesAC
} from './store/counter-reducer';
import {RootStateType} from './store/store';




function App() {


   //const maxStorage = StorageService.getItem('max');
   //const minStorage = StorageService.getItem('min');
   // const [minValue, setMinValue] = useState<number>(Number(minStorage));
    //const [maxValue, setMaxValue] = useState<number>(Number(maxStorage));

    let counter = useSelector<RootStateType, CounterStateType>(state => state.counter);
    let dispatch = useDispatch();

    const inc = counter.inc
    const  maxValue = counter.maxValue
    const minValue = counter.minValue
    const press = counter.press


    function incCounter() {
        const action = incCounterAC();
        dispatch(action);
    }


    function resetValue() {
        const action = resetValueAC();
        dispatch(action);

    }

    function setValues() {
        const action = setValuesAC();
        dispatch(action);

       //  //StorageService.setItem('max', maxValue)
       // // StorageService.setItem('min', minValue)
    }

    function changeMaxValue(maxValue: number) {
        const action = changeMaxValueAC(maxValue);
        dispatch(action);
    }

    function changeMinValue(minValue: number) {
        const action = changeMinValueAC(minValue);
        dispatch(action);
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

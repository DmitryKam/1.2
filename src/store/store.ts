import { combineReducers, createStore } from "redux";
import {counterReducer} from './counter-reducer';




let reducers = combineReducers({
    counter:counterReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers);

export type StoreType = typeof store;

export default store;

// @ts-ignore
window.store = store
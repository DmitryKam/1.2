
enum ACTION {
    RESETVALUE ='RESET-VALUE',
    INCCOUNTER = 'INC-COUNTER',
    SETVALUES = 'SET-VALUES',
    CHANGEMAXVALUE = 'CHANGE-MAX-VALUE',
    CHANGEMINVALUE = 'CHANGE-MIN-VALUE',
}

type ResetValueActionType = {
    type: ACTION.RESETVALUE
}
type IncCounterActionType = {
    type: ACTION.INCCOUNTER
}

type SetValuesActionType = {
    type: ACTION.SETVALUES
}

type ChangeMaxValueActionType = {
    type: ACTION.CHANGEMAXVALUE
    maxValue: number
}

type ChangeMinValueActionType = {
    type: ACTION.CHANGEMINVALUE
    minValue: number
}

type ActionType = ResetValueActionType|IncCounterActionType| SetValuesActionType|ChangeMaxValueActionType |ChangeMinValueActionType


export type CounterStateType ={
    minValue: number
    maxValue: number
    press: boolean
    inc: number
}

const initialState = {
    minValue: 0,
    maxValue: 5,
    press: true,
    inc: 0
}

export const counterReducer = (state:CounterStateType=initialState, action:ActionType):CounterStateType=>{
    switch (action.type) {
        case ACTION.RESETVALUE:
            if (state.press){
            return{
                ...state,
                inc: state.minValue
            }
    } else return state;
        case ACTION.INCCOUNTER:{
            if(state.inc<state.maxValue && state.press){
                return {
                    ...state,
                   inc: state.inc +1
                }
            } else return state;
        }
        case ACTION.SETVALUES:{
            return {
                ...state,
                minValue: state.minValue,
                maxValue: state.maxValue,
                press: true,
                inc: state.minValue
            }

        }
        case ACTION.CHANGEMAXVALUE:{
            return {
                ...state,
                maxValue: action.maxValue,
                inc: 0,
                press: false,
            }
        }
        case ACTION.CHANGEMINVALUE:{
            return {
                ...state,
                minValue: action.minValue,
                inc: 0,
                press: false,
            }
        }
    }
    return state
}



export const resetValueAC = ():ResetValueActionType=>{
    return {type:ACTION.RESETVALUE}
}

export const incCounterAC = ():IncCounterActionType=>{
    return {type:ACTION.INCCOUNTER}
}

export const setValuesAC = ():SetValuesActionType =>{
    return{type:ACTION.SETVALUES}
}

export const changeMaxValueAC =(maxValue:number):ChangeMaxValueActionType=>{
    return{
        type: ACTION.CHANGEMAXVALUE, maxValue
    }
}

export const changeMinValueAC =(minValue:number):ChangeMinValueActionType=>{
    return{
        type: ACTION.CHANGEMINVALUE, minValue
    }
}


export const ADD_MAX_VALUE = "ADD_MAX_VALUE";
export const  ADD_MIN_VALUE =  "ADD_MIN_VALUE";
export const  SET_CHANGE =  "SET_CHANGE";
export const  SET_CHANGE_2 =  "SET_CHANGE_2";
export const ADD_COUNTER = "ADD_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";
export const  ON_SHOW_SETTINGS = "ON_SHOW_SETTINGS";

export const initialState = {
    counter: 0,
    maxValue: 5,
    minValue: 0,
    onSet: false,
    onShow: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue,
                onSet: action.onSet
            };

        case ADD_MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue,
                onSet: action.onSet
            };

        case SET_CHANGE:
            return {
                ...state,
                counter: action.counter,
                onSet: action.onSet,
                onShow: action.onShow
            };

        case ADD_COUNTER:
            return {
                ...state,
                counter: action.counter
            };
        case RESET_COUNTER:
            return {
                ...state,
                counter: action.counter
            };
        case ON_SHOW_SETTINGS:
            return {
                ...state,
                onShow: action.onShow
            };

        default:
            return state
    }

};

export const addMaxValueAC = (newMaxValue, status) => {
    return {
        type: ADD_MAX_VALUE,
        maxValue: newMaxValue,
        onSet: status
    }
};

export const addMinValueAC = (newMinValue, status)=>{
    return {
        type: ADD_MIN_VALUE,
        minValue: newMinValue,
        onSet: status
    }
};

export const setChangeAC = (counter, onSet)=> {
    return  {
        type: SET_CHANGE,
        counter: counter,
        onSet: onSet
    }
};

export  const  addCounterAC = (counter)=> {
    return {
        type: ADD_COUNTER,
        counter: counter
    }
};

export const resetCounterAC = (counter)=> {
    return {
        type: RESET_COUNTER,
        counter: counter
    }
};

export const setChangeCounterAC= (counter, onSet, onShow)=> {
    return {
        type: SET_CHANGE,
        counter: counter,
        onSet: onSet,
        onShow: onShow
    }
};

export const onSowSettingsAC= (status)=> {
    return {
        type: ON_SHOW_SETTINGS,
        onShow: status
    }
};


export default reducer

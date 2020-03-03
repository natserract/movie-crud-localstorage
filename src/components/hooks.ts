
import * as React from 'react';
import { createCtx } from '../context';
import * as RootReducer from '../context/context.reducer';

export function useCtx(){
    const [Context, Provider] = createCtx(RootReducer.reducer, RootReducer.initialState);
    const { state, dispatch } = React.useContext(Context);
    return {
        state,
        dispatch,
        Provider
    }
}

export function useLocalStorageReducer<StateType, ActionType>(
    reducer: React.Reducer<StateType, ActionType>,
    initialState: StateType,
){
    const [state, dispatch] = React.useReducer<React.Reducer<StateType, ActionType>>(reducer, JSON.parse(window.localStorage.getItem('prod-house-data')) || initialState);

    React.useEffect(() =>
        window.localStorage.setItem('prod-house-data', JSON.stringify(state)), [state]
    );

    return [
        state,
        dispatch
    ] as const
}
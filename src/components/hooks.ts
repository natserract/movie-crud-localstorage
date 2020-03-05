
import * as React from 'react';
import { MovieContext, ProdHouseContext, MovieContextDispatch, ProdHouseContextDispatch } from '../context';

export function useCtx(){
    const HouseContext = React.useContext(ProdHouseContext);
    const MovieContextT = React.useContext(MovieContext);
    if(HouseContext && MovieContextT  === undefined) throw new Error('Must be used within a Provider');
    return {
        HouseContext,
        MovieContextT
    }
}

export function useCtxDispatch() {
    const HouseContextDispatch = React.useContext(ProdHouseContextDispatch);
    const MovieContextDispatchT = React.useContext(MovieContextDispatch);
    if(HouseContextDispatch && MovieContextDispatchT  === undefined) throw new Error('Must be used within a Provider');
    return {
        HouseContextDispatch,
        MovieContextDispatchT
    }
}

export function useLocalStorageReducer<StateType, ActionType>(
    key: string,
    reducer: React.Reducer<StateType, ActionType>,
    initialState: StateType,
){
    const [state, dispatch] = React.useReducer<React.Reducer<StateType, ActionType>>(reducer, JSON.parse(window.localStorage.getItem(key)) || initialState);

    React.useEffect(() =>
        window.localStorage.setItem(key, JSON.stringify(state)), [state, key]
    );

    return [
        state,
        dispatch
    ] as const
}

export function useRand() {
    // tslint:disable
    return 'xxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function useInitialState(defaultValue) {
    const [state, setState] = React.useState(defaultValue);
    const handleChange = (e) => {
        e.persist();
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    const reset = () => setState("");
    return [
        state,
        setState,
        handleChange,
        reset,
    ]
}

export function useSaveStore<T=object>(storeState: T, key: string): boolean {
    if(!localStorage) return false;

    try {
        const serializedState = JSON.stringify(storeState);
        localStorage.setItem(key, serializedState);
        return true;
    } catch(err) {
        throw new Error('store deserialization failed');
    }
}

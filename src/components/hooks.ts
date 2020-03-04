
import * as React from 'react';
import { Context, ContextDispatch } from '../context';

export function useCtx(){
    const context = React.useContext(Context);
    if(context === undefined) throw new Error('Must be used within a Provider');
    return context
}

export function useCtxDispatch() {
    const context = React.useContext(ContextDispatch);
    if(context === undefined) throw new Error('Must be used within a Provider');
    return context
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

export function useSaveStore<T=object>(storeState: T): boolean {
    if(!localStorage) return false;

    try {
        const serializedState = JSON.stringify(storeState);
        localStorage.setItem('data', serializedState);
        return true;
    } catch(err) {
        throw new Error('store deserialization failed');
    }
}
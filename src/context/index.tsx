import * as React from 'react';
import * as RootReducer from './context.reducer';
import { useLocalStorageReducer } from '../components/hooks';
import { Provider as StateType } from "./context.types";
import { initialState } from '../data/data';

type Dispatch = (action: RootReducer.Action) => void;

export const Context = React.createContext<StateType | undefined>(undefined);
export const ContextDispatch = React.createContext<Dispatch | undefined>(undefined);

export function Store(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useLocalStorageReducer('data', RootReducer.reducer, initialState);

    return (
        <Context.Provider value={state}>
            <ContextDispatch.Provider value={dispatch}>
                {props.children}
            </ContextDispatch.Provider>
        </Context.Provider>
    )
}

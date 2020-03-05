import * as React from 'react';
import * as RootReducer from './context.reducer';
import { useLocalStorageReducer } from '../components/hooks';
import { ProductionHouseProvider as StateType, MovieProvider } from "./context.types";
import { initialStateMovie, initialStateProdHouse } from '../data/data';

type Dispatch = (action: RootReducer.Action) => void;
type DispatchMovie = (action: RootReducer.MovieAction) => void;

export const ProdHouseContext = React.createContext<StateType | undefined>(undefined);
export const MovieContext = React.createContext<MovieProvider | undefined>(undefined);
export const ProdHouseContextDispatch = React.createContext<Dispatch | undefined>(undefined);
export const MovieContextDispatch = React.createContext<DispatchMovie | undefined>(undefined);

export function Store(props: React.PropsWithChildren<{}>) {
    const [ProdHouseState, ProdHouseDispatch] = useLocalStorageReducer('house', RootReducer.ProductionHouseReducer, initialStateProdHouse);
    const [MovieState, MovieDispatch] = useLocalStorageReducer('movie', RootReducer.MovieReducer, initialStateMovie);

    return (
        <ProdHouseContext.Provider value={ProdHouseState}>
            <MovieContext.Provider value={MovieState}>
                <ProdHouseContextDispatch.Provider value={ProdHouseDispatch}>
                    <MovieContextDispatch.Provider value={MovieDispatch}>
                        {props.children}
                    </MovieContextDispatch.Provider>
                </ProdHouseContextDispatch.Provider>
            </MovieContext.Provider>
        </ProdHouseContext.Provider>
    )
}

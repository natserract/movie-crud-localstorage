import * as React from 'react';
import * as RootReducer from './context.reducer';
import { useLocalStorageReducer } from '../components/hooks';


export function createCtx<StateType, ActionType>(
    reducer: React.Reducer<StateType, ActionType>,
    initialState: StateType,
) {

    const defaultDispatch: React.Dispatch<ActionType> = () => initialState;

    const MenuContext = React.createContext<{
        state: typeof initialState,
        dispatch: (action: ActionType) => void;
    }>({
        state: initialState,
        dispatch: defaultDispatch
    });

    // tslint:disable-next-line: no-shadowed-variable
    function Provider(props: React.PropsWithChildren<{}>) {
        const [state, dispatch] = useLocalStorageReducer(reducer, initialState);
        const value = {state, dispatch};

        React.useEffect(() => {
            localStorage.setItem("info", JSON.stringify(state));
        }, [state]);

        return (
            <MenuContext.Provider value={value} {...props}/>
        )
    }

    return [MenuContext, Provider] as const
}


export const [Context, Provider] = createCtx(RootReducer.reducer, RootReducer.initialState);
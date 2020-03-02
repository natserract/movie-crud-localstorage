
import * as React from 'react';
import  Store, { Context } from './context.store';

const Provider: React.FC<{
    children: React.ReactNode
}> = (props) => {
    return (
        <Context.Provider value={{...Store}}>
            { props.children }
        </Context.Provider>
    )
}

export default Provider;
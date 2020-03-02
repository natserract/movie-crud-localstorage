import * as React from 'react';
import ContextTypes from './context.types';

export const Context = React.createContext<ContextTypes | null>(null);

const Store: ContextTypes = {
    productionHouse: [
        {
            id: 1,
            name: 'Alfin'
        },
        {
            id: 2,
            name: 'Surya'
        }
    ],
};

export default Store;

import * as React from 'react';
import { Context } from '../context/context.store';

const useCtx = () => {
    const Consumer = React.useContext(Context);
    if(!Consumer) throw new Error("useCtx must be inside a Provider with a Value");
    return Consumer
}

export default useCtx;
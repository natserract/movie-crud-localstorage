
import { Provider } from './context.types';

type Action =
  | { type: 'ADD' }
  | { type: 'EDIT'; }
  | { type: 'DELETE';};

export const initialState = {
    productionHouse: []
};

export const reducer = (state: Provider = initialState, action: Action): Provider => {
    switch (action.type) {
      case 'ADD': {
            return {
                ...state,
                productionHouse: state.productionHouse
            }
      }
      default:
        throw new Error()
    }
}


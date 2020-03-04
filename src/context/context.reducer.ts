
import { Provider } from './context.types';
import { initialState } from '../data/data';
import { useRand as uniqueid, useSaveStore } from '../components/hooks';

export type Action =
  | { type: 'ADD'; payload: string}
  | { type: 'EDIT'; payload: string}
  | { type: 'DELETE'; payload: string};


export const reducer = (state: Provider = initialState, action: Action): Provider => {
    switch (action.type) {
      case 'ADD' : {
          useSaveStore(action.payload);
          return {
            productionHouse: [
                ...state.productionHouse,
                {
                  id: uniqueid(),
                  name: action.payload
                }
            ]
          }
      }
      case 'EDIT': {
          return {
            productionHouse: [...state.productionHouse].map(t =>
                t.id === action.payload ? {...t} : t)
          }
      }
      case 'DELETE': {
        return {
          productionHouse: [...state.productionHouse].filter(item => item.id !== action.payload)
        };
      }
      default:
        throw new Error();
    }
}


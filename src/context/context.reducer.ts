// tslint:disable  
import { Provider } from './context.types';
import { initialState } from '../data/data';
import { useRand as uniqueid, useSaveStore } from '../components/hooks';

export type Action =
  | { type: 'ADD'; payload: string}
  | { type: 'EDIT'; payload: {
    id: string,
  }}
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
          const key = {
            index: [...state.productionHouse].find(item => {
              return {
                id: item.id == action.payload.id,
              }
            })
          };
          console.log(key.index.name);

          return {
              ...state,
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
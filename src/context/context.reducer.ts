// tslint:disable  
import { ProductionHouseProvider, MovieProvider, IMoviePayload } from './context.types';
import { initialStateProdHouse, initialStateMovie } from '../data/data';
import { useRand as uniqueid, useSaveStore } from '../components/hooks';

export type Action =
  | { type: 'ADD'; payload: string}
  | { type: 'EDIT'; payload: { id: string, name: string }}
  | { type: 'DELETE'; payload: string};


export type MovieAction = 
  | { type: 'ADD'; payload: IMoviePayload}
  | { type: 'EDIT'; payload: IMoviePayload}
  | { type: 'DELETE'; payload: string };


export const ProductionHouseReducer = (state: ProductionHouseProvider = initialStateProdHouse, action: Action): ProductionHouseProvider => {
    switch (action.type) {
      case 'ADD' : {
          useSaveStore(action.payload, 'house');
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
          let item = [];
          const getloc = localStorage.getItem("house");

          JSON.parse(getloc).productionHouse.forEach((el: {id: string}) => {
              (el.id == action.payload.id) ? 
                item.push({
                  id: el.id,
                  name: action.payload.name
                }) : item.push(el)
          })
      
          useSaveStore(item, 'house');

          return {
              ...state,
              productionHouse: [...item]
          }
      }
      case 'DELETE': {
          return {
            productionHouse: [...state.productionHouse].filter(item => item.id !== action.payload)
          }
      }
      default:
        throw new Error();
    }
}

export const MovieReducer = (state: MovieProvider = initialStateMovie, action: MovieAction): MovieProvider => {
  switch (action.type) {
    case 'ADD' : {
        useSaveStore(action.payload, 'movie');
        return {
          movie: [
            ...state.movie,
            {
              id: uniqueid(),
              movieName: action.payload.movieName,
              productionHouseName: action.payload.productionHouseName,
              movieGenre: action.payload.movieGenre,
              ageFilmRatings: action.payload.ageFilmRatings
            }
          ]
        }
    }
    case 'EDIT': {          
      let item = [];
      const getloc = localStorage.getItem("movie");

      JSON.parse(getloc).movie.forEach((el: {id: string}) => {
          (el.id == action.payload.id) ? 
            item.push({
              id: el.id,
              movieName: action.payload.movieName,
              movieGenre: action.payload.movieGenre,
              productionHouseName: action.payload.productionHouseName,
              ageFilmRatings: action.payload.ageFilmRatings
            }) : item.push(el)

      })

      localStorage.setItem('movie', JSON.stringify(item));
      return {
        movie: [...item]
      }   
  }
  case 'DELETE': {
    return {
      movie: [...state.movie].filter(item => item.id !== action.payload)
    }
}
    default:
      throw new Error();
  }
}

import { IProductionHouse, IMoviePayload } from '../../context/context.types';

interface HouseState {
    value: IProductionHouse,
    modalProdAddShow: boolean,
    modalProdEditShow: boolean,
};

interface MovieState {
    value: IMoviePayload,
    modalMovieAddShow: boolean,
    modalMovieEditShow: boolean,
}

type Action =
    | { type: 'TOGGLEMODALADD' }
    | { type: 'TOGGLEMODALEDIT' }
    | { type: 'GETEDITDATA', payload: { id: string, name: string}}
    | { type: 'PUSHNEWDATA', payload: IProductionHouse};

type MovieAction =
    | { type: 'TOGGLEMODALADD' }
    | { type: 'TOGGLEMODALEDIT' }
    | { type: 'GETEDITDATA', payload: IMoviePayload}
    | { type: 'PUSHNEWDATA', payload: IMoviePayload}
    | { type: 'CLEARDATA'};

export const HouseInitialState: HouseState = {
    value: {
        id: "",
        name: "",
    },
    modalProdAddShow: false,
    modalProdEditShow: false,
};

export const MovieInitialState: MovieState = {
    value: {
        id: "",
        movieName: "",
        movieGenre: "",
        ageFilmRatings: "",
        productionHouseName: "",
        defaultSelectedValue: "",
        defaultSelectedValueHouse: "",
    },
    modalMovieAddShow: false,
    modalMovieEditShow: false,
}

export const HouseReducer = (state: HouseState = HouseInitialState, action: Action): HouseState => {
    switch (action.type) {
        case 'TOGGLEMODALADD': {
            return { ...state, modalProdAddShow: !state.modalProdAddShow }
        }
        case 'GETEDITDATA': {
            return { ...state, value: {
                    id: action.payload.id,
                    name: action.payload.name
                }
            }
        }
        case 'TOGGLEMODALEDIT': {
            return { ...state, modalProdEditShow: !state.modalProdEditShow,}
        }
        case 'PUSHNEWDATA': {
            return { ...state, value: {
                    name: action.payload.name
                }
            }
        }
        default:
            return state
    }
};


export const MovieReducer = (state: MovieState = MovieInitialState, action: MovieAction): MovieState => {
    switch (action.type) {
        case 'TOGGLEMODALADD': {
            return { ...state, modalMovieAddShow: !state.modalMovieAddShow }
        }
        case 'GETEDITDATA': {
            return { ...state, value: {
                    id: action.payload.id,
                    movieName: action.payload.movieName,
                    movieGenre: action.payload.movieGenre,
                    productionHouseName: action.payload.productionHouseName,
                    ageFilmRatings: action.payload.ageFilmRatings,
                    defaultSelectedValue: action.payload.defaultSelectedValue
                }
            }
        }
        case 'TOGGLEMODALEDIT': {
            return { ...state, modalMovieEditShow: !state.modalMovieEditShow,}
        }
        case 'PUSHNEWDATA': {
            return { ...state, value: {
                    movieName: action.payload.movieName,
                    movieGenre: action.payload.movieGenre,
                    productionHouseName: action.payload.productionHouseName,
                    ageFilmRatings: action.payload.ageFilmRatings,
                    defaultSelectedValue: action.payload.defaultSelectedValue
                }
            }
        }
        case 'CLEARDATA': {
            return state
        }
        default:
            throw new Error()
    }
};

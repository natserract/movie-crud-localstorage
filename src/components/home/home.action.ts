import { stat } from "fs";


interface State {
    value: {
        id?: string,
        name: string,
    },
    modalProdAddShow: boolean,
    modalProdEditShow: boolean,
};

type Action =
    | { type: 'SETDISPLAY'; }
    | { type: 'SETNAME'; payload: {
            id: string,
            name: string,
        }
    }
    | { type: 'SETMODEDIT' }
    | { type: 'PUSHNEWSTATE', payload: {
        id?: string,
        name: string
    } }

export const initialState: State = {
    value: {
        id: "",
        name: "",
    },
    modalProdAddShow: false,
    modalProdEditShow: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'SETDISPLAY': {
            return {
                ...state,
                modalProdAddShow: !state.modalProdAddShow
            }
        }
        case 'SETNAME': {
            return {
                ...state,
                value: {
                    id: action.payload.id,
                    name: action.payload.name
                }
            }
        }
        case 'SETMODEDIT': {
            return {
                ...state,
                modalProdEditShow: !state.modalProdEditShow,
            }
        }
        case 'PUSHNEWSTATE': {
            return {
                ...state,
                value: {
                    name: action.payload.name
                }
            }
        }
        default:
            return state
    }
};

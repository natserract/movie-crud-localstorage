
import * as React from 'react';
import { useCtxDispatch } from "../hooks";
import { PropsFormAddMovie } from './modal.form';
import { FormAddProd, FormEditProd, FormAddMovie, FormEditMovie } from './modal.form';
import { MovieReducer, MovieInitialState } from '../home/home.action';

interface General {
    display: string,
    headerContent?: string,
}
interface CoreProps extends General{
    children?: React.ReactNode,
    modalDisplay?: string,
    modalStyle?: React.CSSProperties,
    closeModal?: React.MouseEventHandler,
}
interface PropsI extends CoreProps, General {}

interface PropsEditI extends CoreProps, PropsI {
    deleteAction: (e: React.MouseEvent) => any,
    inputValue: {
        id: string,
        name: any
    },
}

interface AddMovieState {
    id?: string,
    movieName: string,
    movieGenre: string,
    ageFilmRatings: string,
    productionHouseName: string,
}

interface EditMovieState extends AddMovieState {
    defaultSelectedValue: string,
    defaultSelectedValueHouse: string,
}

interface PropsEditMovieI extends CoreProps, PropsI, EditMovieState{
    deleteAction: (e: React.MouseEvent) => void,
    handleSubmit: (e: React.FormEvent) => void,
}

interface PropsMovie extends PropsFormAddMovie, General {}

export const ModalContainer: React.FC<PropsI> = (props) => {
    const style: React.CSSProperties = {
        display: props.display
    };

    const [display, setDisplay] = React.useState<{
        show: boolean,
    }>({ show: false });

    const handleModalDisplay = display.show ? 'modal-hide' : 'modal-show';

    return (
        <div id="modal" className={`modal ${handleModalDisplay}`} style={style} >
            <div className="modal-content">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <div className="modal-header">
                    <span>{props.headerContent}</span>
                </div>
                <div className="modal-form">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export const ModalAddProd: React.FC<PropsI> = (props) => {
    const { HouseContextDispatch } = useCtxDispatch();
    const [ movie, movieDispatch ] = React.useReducer(MovieReducer, MovieInitialState);
    const [state, setState] = React.useState<{ id?: string, name: string }>({
        id: "",
        name: ""
    });

    const handleChange = (event) => {
        event.persist();
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        HouseContextDispatch({
            type: 'ADD',
            payload: state.name
        });
        setState({ name: "" });
        movieDispatch({
            type:'TOGGLEMODALADD'
        })
    }

    const propsMod = {
        onSubmit: (e) => handleSubmit(e),
        onChange: (e) => handleChange(e),
        inputValue: state.name,
        closeModal: props.closeModal
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormAddProd {...propsMod} />
        </ModalContainer>
    )
}


export const ModalEditProd: React.FC<PropsEditI> = (props) => {
    const { HouseContextDispatch } = useCtxDispatch();
    const [state, setState] = React.useState<{ id?: string, name: string }>({
        id: props.inputValue.id,
        name: props.inputValue.name,
    });
    const handleChange = (event) => {
        event.persist();
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        HouseContextDispatch({
            type: 'EDIT',
            payload: {
                id: state.id,
                name: state.name
            }
        }),
        setState({ name: "" });
    }

    const propsMod = {
        onSubmit: (e) => handleSubmit(e),
        onChange: (e) => handleChange(e),
        inputValue: state.name,
        closeModal: props.closeModal,
        deleteAction: (e) => props.deleteAction(e),
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormEditProd {...propsMod} />
        </ModalContainer>
    )
}

export const ModalAddMovie: React.FC<PropsMovie> = (props) => {
    const { MovieContextDispatchT } = useCtxDispatch();

    const [state, setState] = React.useState<AddMovieState>({
        movieName: "",
        movieGenre: "",
        ageFilmRatings: "",
        productionHouseName: "",
    });

    const handleChange = (event) => {
        if(event.target.name === "movie_name") {
            setState({
                movieName: event.target.value,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.ageFilmRatings,
                productionHouseName: state.productionHouseName,
            })
        } else if(event.target.name === "movie_genre") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: event.target.value,
                ageFilmRatings: state.ageFilmRatings
            })
        }
        else if(event.target.name === "movie_prodhouse_ratings") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: state.movieGenre,
                ageFilmRatings: event.target.value
            })
        }
        else if(event.target.name === "movie_prodhouse_name") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.movieGenre,
                productionHouseName: event.target.value

            })
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        MovieContextDispatchT({
            type: 'ADD',
            payload: {
                ...state,
                movieName: state.movieName,
                productionHouseName: state.productionHouseName,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.ageFilmRatings
            }
        });
    }

    const propsMod = {
        onSubmit: (e) => handleSubmit(e),
        onChange: (e) => handleChange(e),
        closeModal: props.closeModal,
        movieName: state.movieName,
        movieGenre: state.movieGenre,
        ageFilmRatings: state.ageFilmRatings,
        productionHouseName: state.productionHouseName
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormAddMovie {...propsMod} />
        </ModalContainer>
    )
}


export const ModalEditMovie: React.FC<PropsEditMovieI> = (props) => {
    const [state, setState] = React.useState<EditMovieState>({
        id: props.id,
        movieName: props.movieName,
        movieGenre: props.movieGenre,
        ageFilmRatings: props.ageFilmRatings,
        productionHouseName: props.productionHouseName,
        defaultSelectedValue: props.defaultSelectedValue,
        defaultSelectedValueHouse: props.defaultSelectedValueHouse
    });

    const handleChange = (event) => {
        if(event.target.name === "movie_name") {
            setState({
                movieName: event.target.value,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.ageFilmRatings,
                productionHouseName: state.productionHouseName,
                defaultSelectedValue: state.defaultSelectedValue,
                defaultSelectedValueHouse: state.defaultSelectedValueHouse
            })
        } else if(event.target.name === "movie_genre") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: event.target.value,
                ageFilmRatings: state.ageFilmRatings,
                productionHouseName: state.productionHouseName,
                defaultSelectedValue: state.defaultSelectedValue,
                defaultSelectedValueHouse: state.defaultSelectedValueHouse
            })
        }
        else if(event.target.name === "movie_prodhouse_name") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.movieGenre,
                productionHouseName: event.target.value,
                defaultSelectedValue: event.target.value,
                defaultSelectedValueHouse: state.defaultSelectedValueHouse
            })
        }
        else if(event.target.name === "movie_prodhouse_ratings") {
            setState({
                ...state,
                movieName: state.movieName,
                movieGenre: state.movieGenre,
                ageFilmRatings: state.movieGenre,
                productionHouseName: state.productionHouseName,
                defaultSelectedValue: state.defaultSelectedValue,
                defaultSelectedValueHouse: event.target.value
            })
        }
    };


    const propsMod = {
        onSubmit: (e) => props.handleSubmit(e),
        onChange: (e) => handleChange(e),
        closeModal: props.closeModal,
        deleteAction: (e) => props.deleteAction(e),
        id: state.id,
        movieName: state.movieName,
        productionHouseName: state.productionHouseName,
        movieGenre: state.movieGenre,
        ageFilmRatings: state.ageFilmRatings,
        defaultSelectedValue: state.defaultSelectedValue,
        defaultSelectedValueHouse: state.defaultSelectedValueHouse
    }

    return (
        <ModalContainer
            display={props.display}
            closeModal={props.closeModal}
            headerContent={props.headerContent}>
            <FormEditMovie {...propsMod} />
        </ModalContainer>
    )
}
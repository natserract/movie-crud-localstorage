// tslint:disable
import * as React from 'react';

import { Fragment, Container, ModalAddProd, ModalEditProd, ModalAddMovie, ModalEditMovie, Flex, Button } from '../global/mod';
import { useCtx, useCtxDispatch } from '../hooks';
import MovieList from './home.movie.list';
import ProductionList from './home.prod.list';
import { HouseReducer, HouseInitialState, MovieReducer, MovieInitialState } from './home.action';

import "./home.scss";

const Home = () => {
    const { HouseContextDispatch, MovieContextDispatchT } = useCtxDispatch();
    const [house, houseDispatch] = React.useReducer(HouseReducer, HouseInitialState);
    const [ movie, movieDispatch ] = React.useReducer(MovieReducer, MovieInitialState);
    const { HouseContext, MovieContextT } = useCtx();

    const modalAddProps = {
        closeModal: () => {
            houseDispatch({
                type: 'TOGGLEMODALADD'
            })
        },
        headerContent: "Add New Production House",
        display: house.modalProdAddShow ? 'block' : 'none',
    };

    const modalEditProps = {
        closeModal: () => {
            houseDispatch({
                type: 'TOGGLEMODALEDIT'
            })
        },
        headerContent: "Edit Production House",
        display: house.modalProdEditShow ? 'block' : 'none',

        deleteAction: () => {
            const confirm = window.confirm("Are you sure?");
            confirm ? HouseContextDispatch({
                type: 'DELETE',
                payload: house.value.id
            }) : false
        },

        inputValue: {
            id: house.value.id,
            name: house.value.name
        },
    }

    const modalAddMovieProps = {
        closeModal: () => {
           movieDispatch({
               type: 'TOGGLEMODALADD'
           });
        },
        headerContent: "Add New Movie",
        display: movie.modalMovieAddShow ? 'block' : 'none',
        movieName: "Default",
        movieGenre: "Default",
        productionHouseName: "",
        ageFilmRatings: "",
    }

    const modalEditMovieProps = {
        closeModal: () => {
            movieDispatch({
                type: 'TOGGLEMODALEDIT'
            })
        },
        headerContent: "Edit Movie",
        display: movie.modalMovieEditShow ? 'block' : 'none',

        deleteAction: () => {
            window.confirm("Are you sure?");
            confirm ? MovieContextDispatchT({
                type: 'DELETE',
                payload: movie.value.id
            }) : false
        },

        handleSubmit: (e) => {
            e.preventDefault();
            MovieContextDispatchT({
                type: 'EDIT',
                payload: {
                    id: movie.value.id,
                    movieName: e.target.elements.movie_name.value,
                    movieGenre: e.target.elements.movie_genre.value,
                    productionHouseName: e.target.elements.movie_prodhouse_name.value,
                    ageFilmRatings: e.target.elements.movie_prodhouse_ratings.value,
                    defaultSelectedValue: movie.value.defaultSelectedValue,
                    defaultSelectedValueHouse: movie.value.defaultSelectedValue
                }
            });
            movieDispatch({
                type: 'TOGGLEMODALEDIT'
            })
        },

        movieName: movie.value.movieName,
        movieGenre: movie.value.movieGenre,
        productionHouseName: movie.value.productionHouseName,
        ageFilmRatings: movie.value.ageFilmRatings,
        defaultSelectedValue: movie.value.productionHouseName,
        defaultSelectedValueHouse: movie.value.ageFilmRatings
    }

    const handleOnClickProd = t => {
        houseDispatch({
            type: 'TOGGLEMODALEDIT'
        });
        houseDispatch({
            type: 'GETEDITDATA',
            payload: {
                id: t.id,
                name: t.name
            }
        });
    }

    const handleClickMovie = t => {
        movieDispatch({
            type: 'TOGGLEMODALEDIT'
        });
        movieDispatch({
            type: 'GETEDITDATA',
            payload: {
                id: t.id,
                movieName:  t.movieName,
                movieGenre: t.movieGenre,
                ageFilmRatings: t.ageFilmRatings,
                productionHouseName: t.productionHouseName,  
                defaultSelectedValue: t.defaultSelectedValue,
                defaultSelectedValueHouse:  t.defaultSelectedValueHouse,
            }
        });
    }

    return (
        <Fragment>
            <section className="content-production-house">
                <Container>
                    <Flex>
                        <div className="prod-title">
                            <h2>Production House</h2>
                        </div>
                        <div className="prod-action">
                            <Button onClick={() => houseDispatch({ type: 'TOGGLEMODALADD' })}
                                backgroundColor="#004c8c">
                                Add Production House
                            </Button>
                        </div>
                    </Flex>

                    <div className="prod-list-content">
                        <ProductionList 
                            onClick={(event) => handleOnClickProd(event)} 
                            renderItems={HouseContext.productionHouse} 
                        />
                    </div>
                </Container>
            </section>
            <section className="content-movie-list">
                <Container>
                    <Flex>
                        <div className="movie-title">
                            <h2>Movie List</h2>
                        </div>
                        <div className="movie-action">
                            <Button onClick={() => movieDispatch({ type: 'TOGGLEMODALADD' })}
                                backgroundColor="#0277bd">
                                Add Movie
                            </Button>
                        </div>
                    </Flex>
                    <MovieList 
                        onClick={(event) => handleClickMovie(event)} 
                        renderItems={MovieContextT.movie}
                    />
                </Container>
            </section>

            {movie.modalMovieEditShow ? <ModalEditMovie {...modalEditMovieProps} /> : null}
            {movie.modalMovieAddShow ? <ModalAddMovie  {...modalAddMovieProps}/> : null }
            {house.modalProdEditShow ? <ModalEditProd {...modalEditProps} /> : null}
            {house.modalProdAddShow ? <ModalAddProd  {...modalAddProps} /> : null}
        </Fragment>
    )
}

export default Home;
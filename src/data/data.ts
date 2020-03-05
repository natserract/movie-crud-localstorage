import { ProductionHouseProvider, MovieProvider } from '../context/context.types';
import { useRand } from '../components/hooks';

export const initialStateProdHouse: ProductionHouseProvider = {
    productionHouse: [
        { id: useRand(), name: "MD Entertainment"},
        { id: useRand(), name: "Screenplay Productions"},
        { id: useRand(), name: "SinemArt"},
        { id: useRand(), name: "Rapi Films"},
        { id: useRand(), name: "MNC Pictures"},
    ],
};


export const initialStateMovie: MovieProvider = {
    movie: [
        {
            id: useRand(),
            movieName: "Fantastic Beast",
            movieGenre: "Adventure",
            ageFilmRatings: "G",
            productionHouseName: "MD Entertainment"
        },
        {
            id: useRand(),
            movieName: "Avengers",
            movieGenre: "Fantasy",
            ageFilmRatings: "NC-17",
            productionHouseName: "MD Entertainment",
        }
    ]
};
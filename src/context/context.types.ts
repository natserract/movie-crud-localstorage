

export interface IProductionHouse {
    id?: string,
    name?: string
}

export interface ProductionHouseProvider {
    productionHouse: IProductionHouse[]
}

export interface IMoviePayload{
    id?: string,
    movieName: string,
    productionHouseName: string,
    movieGenre: string,
    ageFilmRatings: string
    defaultSelectedValue?: string,
    defaultSelectedValueHouse?: string
}

export interface MovieProvider {
    movie: IMoviePayload[]
}
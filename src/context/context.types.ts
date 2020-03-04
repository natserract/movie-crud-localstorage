

export interface IProductionHouse {
    id?: string,
    name?: string
}

export interface Provider {
    productionHouse: IProductionHouse[]
}

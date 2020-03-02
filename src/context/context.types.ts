
export interface State {
    id: number,
    name: string,
}

export default interface Provider {
    productionHouse: State[],
}


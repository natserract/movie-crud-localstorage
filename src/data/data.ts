import { Provider } from '../context/context.types';
import { useRand } from '../components/hooks';

export const initialState: Provider = {
    productionHouse: [
        { id: useRand(), name: "MD Entertainment"},
        { id: useRand(), name: "Screenplay Productions"},
        { id: useRand(), name: "SinemArt"},
        { id: useRand(), name: "Rapi Films"},
        { id: useRand(), name: "MNC Pictures"},
    ],
};
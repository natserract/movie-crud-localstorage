import * as React from "react";
import { hot } from "react-hot-loader";

import { Store as StoreProvider } from '../context';
import Header from './header/header';
import Home from './home/home';

import "./../assets/scss/global.scss";

const App: React.FC = () => {
    return (
        <StoreProvider>
            <Header/>
            <Home/>
        </StoreProvider>
    )
}

declare let module: object;

export default hot(module)(App);

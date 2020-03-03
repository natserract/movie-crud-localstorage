import * as React from "react";
import { hot } from "react-hot-loader";

import { Provider } from '../context';

import Header from './header/header';
import Home from './home/home';

import "./../assets/scss/app.scss";

const App: React.FC = () => {
    return (
        <Provider>
            <Header/>
            <Home/>
        </Provider>
    )
}

declare let module: object;

export default hot(module)(App);

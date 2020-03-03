
import * as React from "react";
import "./header.scss";

import * as Global from '../global/mod';

const reactLogo = require("../../assets/img/brand.png");

const Header = () => {
    return (
        <header className="header">
            <Global.Container>
                <div className="header-item">
                    <a href="/">
                        <img src={reactLogo.default} alt="logo" />
                    </a>
                </div>
            </Global.Container>
        </header>
    )
}

export default Header;

import * as React from 'react';
import "./global.scss";

type CSS = React.CSSProperties;

const Button: React.FC<{
    children: React.ReactNode,
    onClick: React.MouseEventHandler,
    backgroundColor: string,
}> = (props) => {

    const buttonBackground: CSS = {
        backgroundColor: props.backgroundColor
    };

    return (
        <button className="button-global" style={{...buttonBackground}} onClick={props.onClick}>
            { props.children }
        </button>
    )
}

export default Button
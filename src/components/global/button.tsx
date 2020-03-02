
import * as React from 'react';

type CSS = React.CSSProperties;

const style: CSS = {
    padding: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 0,
    boxShadow: 'none',
    color: '#fff',
    fontSize: '18px',
}

const Button: React.FC<{
    children: React.ReactNode,
    onClick: React.MouseEventHandler,
    backgroundColor: string,
}> = (props) => {

    const buttonBackground: CSS = {
        backgroundColor: props.backgroundColor
    };

    return (
        <button style={{...style, ...buttonBackground}} onClick={props.onClick}>
            { props.children }
        </button>
    )
}

export default Button
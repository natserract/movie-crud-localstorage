
import * as React from 'react';

const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
};

const Flex: React.FC<{
    children: React.ReactNode
}> = (props) => {

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Flex;
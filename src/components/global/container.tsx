
import * as React from 'react';

const style: React.CSSProperties = {
    paddingRight: '30px',
    paddingLeft: '30px',
    marginRight: 'auto',
    marginLeft: 'auto'
}

const Container: React.FC<{
    children: React.ReactNode
}> = (props) => {
    return (
        <div style={style}>
            { props.children }
        </div>
    )
}

export default Container
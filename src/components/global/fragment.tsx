
import * as React from 'react';

const Fragment: React.FC<{
    children: React.ReactNode
}> = (props) => {
    return (
        <React.Fragment>
            { props.children }
        </React.Fragment>
    )
}

export default Fragment
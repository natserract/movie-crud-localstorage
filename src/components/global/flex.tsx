
import * as React from 'react';
import "./global.scss";

const Flex: React.FC<{
    children: React.ReactNode
}> = (props) => {

    return (
        <div className="flex">
            {props.children}
        </div>
    )
}

export default Flex;
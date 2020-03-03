
import * as React from 'react'
import "./home.scss";

const ProductionList:React.FC<{
    renderItems: any
}> = (props) => {
    return (
        props.renderItems.map(item =>
            <div className="box-production-content" key={item.id}>
                <p>{item.name}</p>
            </div>
        )
    )
}

export default ProductionList
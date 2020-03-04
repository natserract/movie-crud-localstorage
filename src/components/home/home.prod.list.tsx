
import * as React from 'react'
import "./home.scss";
import * as Global from '../global/mod';

const ProductionList: React.FC<{
    renderItems: any,
    onClick: any,
}> = (props) => {
    const [display, setDisplay] = React.useState<{
        show?: boolean,
        contentT?: boolean,
    }>({ show: false, contentT: false });


    return (
        <div style={{ position: 'relative' }}>
            <div className="box-production-container">
                {props.renderItems.map(item =>
                    <div onClick={() => props.onClick(item)} className="box-production-content" key={item.id}>
                        <p>{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    );

}

export default ProductionList
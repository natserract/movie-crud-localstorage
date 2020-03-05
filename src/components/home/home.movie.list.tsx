
import * as React from 'react'
import "./home.scss";

const ProductionList:React.FC<{
    renderItems: any,
    onClick: (e: React.MouseEvent) => void,
}> = (props) => {
    return (
        <div style={{ position: 'relative' }}>
            <div className="box-movielist-container  box-production-container">
                {props.renderItems.map(item =>
                    <div onClick={() => props.onClick(item)} className="box-production-content box-movielist-content" key={item.id}>
                        <h4 className="box-movie-list__title">{item.movieName}</h4>
                        <span className="box-movie-list__genre">{item.movieGenre}</span>
                        <span className="box-movie-list__type">{item.productionHouseName}</span>
                        <span className="box-movie-list__ratings">{item.ageFilmRatings}</span>
                    </div>
                )}
            </div>
        </div>
    );

}

export default ProductionList
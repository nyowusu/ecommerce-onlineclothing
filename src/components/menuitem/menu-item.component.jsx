import React from 'react';
import './menu-item.styles.scss';

const MenuItem = (props) => {
    return (
        <div  className={`${props.itemSize} menu-item`}>
        <div className="background-image" style={{
            backgroundImage:`url(${props.itemImageUrl})`
        }} />
            <div className="content">
                <h1 className="title">{props.itemTitle.toUpperCase()}</h1>
                <span className="subtitle">{"shop now".toUpperCase()}</span>
            </div>
        </div>
    );
}

export default MenuItem;
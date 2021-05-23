import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    

    <div className="card-container">
        
        <img alt="fortniteItem" src={props.item.images.icon} width="300px" height="300px"/>
        <h2>{props.item.name} </h2>
        <p>{props.item.rarity.name}</p>
        <p>{props.item.description}</p>

    </div>
)
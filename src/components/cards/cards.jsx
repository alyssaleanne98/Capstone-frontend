import React from 'react';


function Cards(props) {
    return <div>
        <h1>These cards are from api</h1>
        {props.cards.map((card) => {
            return <div key={card.id}>
                <h2>{card.title}</h2>
                <p>{card.info}</p>
                <p>{card.img}</p>
            </div>
        })}
    </div>;
}

export default Cards;
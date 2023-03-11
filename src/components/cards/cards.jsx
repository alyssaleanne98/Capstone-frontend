import React from 'react';
// import { Link } from "react-router-dom";



function Cards(props) {
    return <div>

        {props.cards.map((card) => {
            return <div key={card.id}>
                {/* <Link className='cards-link' to={`/cards/:${id}`}> */}
                    <h2>{card.title}</h2>
                    <p>{card.info}</p>
                    <p>{card.img}</p>
                {/* </Link> */}
            </div>
    
        })}

    </div>;
}

export default Cards;
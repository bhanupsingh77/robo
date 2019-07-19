import React from 'react';


const Card = ({id,name,info}) =>{
    return (
        <div className="tc bg-light-green pa2 ma2 grow shadow-5 dib">
            <img alt="error" src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>

    );
}

export default Card;
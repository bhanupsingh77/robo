import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    return (
        <div>{
            Robots.map((user,i) =>{
                return(
                    <Card key={i} id={Robots[i].id} name={Robots[i].name} info={Robots[i].info}/>
                    )
                })
        }</div>
    )
};

export default CardList;
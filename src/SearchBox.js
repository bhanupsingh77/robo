import React  from 'react';

const SearchBox = (props) =>{
    return (

        <div className="pa2 ma2">
            <input type="search" placeholder="Search Robots" onChange={props.searchField} />
        </div>
    )

}

export default SearchBox;
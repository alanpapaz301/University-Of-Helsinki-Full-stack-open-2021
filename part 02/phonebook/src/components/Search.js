import React from "react";
import '../App.css';

const Search = (props) =>{
    return(
        <div id="searchFilter">
            <label>Search: </label>
            <input value={props.filter} onChange={props.handleFilterChange} />
        </div>





    )
}
export default Search;
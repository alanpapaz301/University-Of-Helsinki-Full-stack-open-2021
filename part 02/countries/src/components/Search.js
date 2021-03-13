import React from 'react';
import '../App.css';



function Search(props) {
  return (
    <div className="SearchFilter">
        <label>Search countries: </label>
        <input value={props.searchFilter} onChange={props.handleFilterChange} />
    </div>
  );
}

export default Search;

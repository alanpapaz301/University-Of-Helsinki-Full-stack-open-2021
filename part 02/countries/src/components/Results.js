import React from 'react';
import '../App.css';

const Results = (props) =>{


    const resultsToShow = () => {
        if(props.results.length > 10)
            return("Too many results, make search more specific");

        else return props.results.map (country =>(
            <p className="resultsP">{country.name}</p>
            ))
    }

    return(
        <div id="resultContainer">
            {resultsToShow()}
        </div>

    );
}
export default Results;
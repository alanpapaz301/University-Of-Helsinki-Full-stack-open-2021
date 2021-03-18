import React from "react";
import Country from "./Country";
import "../App.css";

const ResultDisplay = (props) => {
  let results = props.results();
  const resultsToShow = () => {
    if (results.length > 10)
      return "Too many results, make search more specific";

    else if (results.length === 1) {
      return <Country country={results[0]} weatherData = {props.weatherData}  />;

    } else
      return (
        <div>
          {results.map((country) => (
            <div>
              <p className="resultsP">{country.name}</p>
              <button value={country.name} onClick ={(event) =>props.handleFilterChange(event)}>show</button>
            </div>
          ))}
        </div>
      );
  };

  return (
    <div id="resultContainer">
      {resultsToShow()}
    </div>
  )
};
export default ResultDisplay;

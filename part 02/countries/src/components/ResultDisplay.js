import React from "react";
import Country from "./Country";
import "../App.css";

const ResultDisplay = (props) => {
  const resultsToShow = () => {
    if (props.results.length > 10)
      return "Too many results, make search more specific";

    else if (props.results.length === 1) {
      return <Country country={props.results[0]} />;

    } else
      return (
        <div>
          {props.results.map((country) => (
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

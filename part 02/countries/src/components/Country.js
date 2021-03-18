import React from 'react';

import '../App.css';

const Country = (props) => {

    const WeatherDisplay = () =>{
        if(props.weatherData === "") return("Loading weather information...");
        else return(
            <p>Temperature:°C</p>


        )
    }

    return(
        <div>
            <h3>{props.country.name}</h3>
            <p>Capital: {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <h4>Languages</h4>
            <ul>
                {props.country.languages.map (lang => (
                    <li>{lang.name}</li>
                ))}
            </ul>
            <img id="flag" src = {props.country.flag}></img>     
            <h4>Weather in {props.country.capital}</h4>
            <WeatherDisplay/>

        </div>


    );

}
export default Country
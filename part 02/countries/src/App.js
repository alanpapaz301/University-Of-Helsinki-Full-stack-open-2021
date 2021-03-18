import React, {useState,useEffect} from 'react';
import Search from './components/Search';
import ResultDisplay from './components/ResultDisplay';
import './App.css';
import axios from 'axios';

const App = () => {

  const [searchFilter,setSearchFilter] = useState("");
  const [results, setResults] = useState([]);
  const [countries, setCountries] =useState([]);
  const [weatherData, setWeatherData] = useState("");
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const handleFilterChange = (event) =>{
    setSearchFilter(event.target.value);
    getResults();
  }

  const getWeather = (cityName) =>{
    console.log("getweather");
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${cityName}`)
      .then(response => {
        setWeatherData(response.data);
      }
        )
  }

  const getResults = () =>{
    let filteredResults = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()) === true);
    if(filteredResults.length === 1){ 
      getWeather(filteredResults[0].capital);
    }
    return filteredResults;
    
  }



  return (
    <div className="App">
      <Search searchFilter ={searchFilter} handleFilterChange = {handleFilterChange}/>
      <ResultDisplay results = {getResults} handleFilterChange = {handleFilterChange} weatherData = {weatherData}/>
    </div>
  );
}

export default App;

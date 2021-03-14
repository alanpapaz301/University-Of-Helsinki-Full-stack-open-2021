import React, {useState,useEffect} from 'react';
import Search from './components/Search';
import ResultDisplay from './components/ResultDisplay';
import './App.css';
import axios from 'axios';

const App = () => {

  const [searchFilter,setSearchFilter] = useState("");
  const [results, setResults] = useState([]);
  const [countries, setCountries] =useState("");


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data);
        setCountries(response.data);
      })
  }, [])

  const handleFilterChange = (event) =>{
    setSearchFilter(event.target.value);
    getResults();
  }

  const getResults = () =>{
    console.log("get",countries);
    let filteredResults = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()) === true);
    setResults(filteredResults);
      }

  

  return (
    <div className="App">
      <Search searchFilter ={searchFilter} handleFilterChange = {handleFilterChange}/>
      <ResultDisplay results = {results} handleFilterChange = {handleFilterChange} />
    </div>
  );
}

export default App;

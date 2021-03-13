import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import "./App.css";
import PhoneList from "./components/PhoneList";
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleFilterChange = (event) =>{
    setFilter(event.target.value);
  }

  let filteredResults = persons.filter(ppl => ppl.name.toLowerCase().includes(filter.toLowerCase()) === true);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    let newPerson = {
      name: newName,
      phone: newPhone,
      id: newName,
    };
    let check = false;
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        check = true;
        break;
      }
    }
    if (check === false) {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhone("");
    } else alert(newName + " is already added to phonebook");
  };

  return (
    <div className="mainContainer">
      <h2>Phonebook</h2>
      <Search filter ={filter} handleFilterChange ={handleFilterChange}/>
      <Form handleNameChange={handleNameChange} handlePhoneChange = {handlePhoneChange} addPerson ={addPerson} newName={newName} newPhone ={newPhone}/>
      <PhoneList filteredResults ={filteredResults}/>
    </div>
  );
};

export default App;

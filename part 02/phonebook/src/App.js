import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import "./App.css";
import PhoneList from "./components/PhoneList";
import phonelistService from './services/phonelist';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    phonelistService
      .getAllPhones()
      .then(initialPhones => {
        setPersons(initialPhones)
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
    };
    //Checks if the name already exists in the list
    let check = false;
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        check = true;
        break;
      }
    }
    if (check === false) {
      phonelistService
        .create(newPerson)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNewName("");
            setNewPhone("");
          })
    } else alert(newName + " is already added to phonebook");
  };

  const removePerson = (event) =>{
      phonelistService.remove(event.target.value)
      let copy = [...persons];
      copy.splice(event.target.value - 1,1);
      console.log(copy);
      setPersons(copy);
  }

  return (
    <div className="mainContainer">
      <h2>Phonebook</h2>
      <Search filter ={filter} handleFilterChange ={handleFilterChange}/>
      <Form handleNameChange={handleNameChange} handlePhoneChange = {handlePhoneChange} addPerson ={addPerson} newName={newName} newPhone ={newPhone}/>
      <PhoneList filteredResults ={filteredResults} removePerson={removePerson}/>
    </div>
  );
};

export default App;

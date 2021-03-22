import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import "./App.css";
import PhoneList from "./components/PhoneList";
import Notification from "./components/Notification";
import phonelistService from './services/phonelist';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);


  const getList = () => {
    phonelistService
    .getAllPhones()
    .then(initialPhones => {
      setPersons(initialPhones)
  })
  }

  useEffect(() => {
    getList();
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
    let checkIndex = null;
    for (var i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        check = true;
        checkIndex = i;
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
            setMessage({type:'ok',content:returnedPerson.name + " added sucesfully"})
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })

    } else {
      let updtConfirmation = window.confirm(persons[checkIndex].name + " is already in the list, would you like replace the registered number?");
      if(updtConfirmation){
        phonelistService
          .update(newPerson,checkIndex+1)
            .then(returnData => {
              console.log(returnData);
              let listCopy = [...persons];
              listCopy[checkIndex] = returnData;
              setPersons(listCopy);
            })
            .catch(error =>{
              setMessage({type:'error',content:"Phone not found in server, please refresh"})
            })
            setTimeout(() => {
              setMessage(null)
            }, 5000)
      }
    }
  };


  const removePerson = (event, name) =>{
    console.log(name);
    let confirmation = window.confirm("Remove " + name + "?");
    if(confirmation){
      phonelistService.remove(event.target.value)
      .catch(error =>{
        setMessage({type:'error',content:"Phone not found in server, please refresh"})
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)

      let copy = persons.filter(ppl => ppl.id != event.target.value);
      console.log(copy);
      setPersons(copy);
      
    }
  }

  return (
    <div className="mainContainer">
      <h2>Phonebook</h2>
      <Notification message = {message} />
      <Search filter ={filter} handleFilterChange ={handleFilterChange}/>
      <Form handleNameChange={handleNameChange} handlePhoneChange = {handlePhoneChange} addPerson ={addPerson} newName={newName} newPhone ={newPhone}/>
      <PhoneList filteredResults ={filteredResults} removePerson={removePerson}/>
    </div>
  );
};

export default App;

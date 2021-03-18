import React from 'react'
import Person from './Person';
import '../App.css';

const PhoneList = (props) => {
    return(
        <div className="phonebookDisplay">
        {props.filteredResults.map((person) => (
          <div>
          <Person key={person.id} person={person} />
          <button value ={person.id} onClick={(event) => props.removePerson(event)}>Delete</button>
          </div>
        ))}
        </div>







    )
}
export default PhoneList;
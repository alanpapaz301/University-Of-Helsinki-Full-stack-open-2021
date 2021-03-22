import React from 'react'
import Person from './Person';
import '../App.css';

const PhoneList = (props) => {
    return(
        <div className="phonebookDisplay">
        <h3 style = {{textAlign:'center'}}>Phone list</h3> 
        {props.filteredResults.map((person) => (
          <div>
            <div className = "individualPhones">
              <Person key={person.id} person={person} />
              <button value ={person.id} onClick={(event) => props.removePerson(event, person.name)}>Delete</button>
          </div>
          </div>
        ))}
        </div>







    )
}
export default PhoneList;
import React from 'react'
import Person from './Person';
import '../App.css';

const PhoneList = (props) => {
    return(
        <div className="phonebookDisplay">
        {props.filteredResults.map((person) => (
          <Person key={person.id} person={person} />
        ))}
        </div>







    )
}
export default PhoneList;
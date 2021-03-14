import React from 'react'
import '../App.css';

const Person = (props) => {
    return(
        <div id="persons">
         <h4>{props.person.name}  </h4>
         <h4>  {props.person.phone}</h4>
        <button value ={props.person}>Delete</button>


        </div>








    )
}
export default Person;
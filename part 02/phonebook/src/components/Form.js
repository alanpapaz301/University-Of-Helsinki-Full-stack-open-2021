import React from "react";
import '../App.css';

const Form = (props) =>{
    return(
        <form onSubmit={props.addPerson}>
        <div>
            
          <div id="inputs">
            <h4>Add new phone</h4>
            <label>Name: </label>
            <input value={props.newName} onChange={props.handleNameChange} />
            <label>Phone: </label>
            <input value={props.newPhone} onChange={props.handlePhoneChange} />
          </div>
        </div>
        <button type="submit">add</button>
      </form>





    )
}
export default Form;
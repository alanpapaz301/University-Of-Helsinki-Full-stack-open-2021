import React from 'react'
import '../App.css';

const Notification = ({ message }) => {
    const msgStyle = () => {
        let style;
        if(message.type === 'error'){
                style ={  
                color: 'red',
                background: 'lightgrey',
                fontSsize: '20px',
                borderStyle: 'solid',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px'
            }
        }
        else {
                style ={  
                color: 'green',
                background: 'lightgrey',
                fontSsize: '20px',
                borderStyle: 'solid',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px'
            }
        }

    return style;
    }
    
      
    if (message === null) {
      return null
    }
  
    return (
      <div style={msgStyle()}>
        {message.content}
      </div>
    )
  }
export default Notification
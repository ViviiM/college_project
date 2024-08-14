import React, { useState } from 'react'
import Picker from './datepicker.js'
const suggestionsList = ['Apple','Appel', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const Formbox = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    
        if (value) {
          const filteredSuggestions = suggestionsList.filter(item =>
            item.toLowerCase().startsWith(value.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } else {
          setSuggestions([]);
        }
      };
  return (
    <div>
      <div className='formset'>
        <h3 className='need container'>Need a ride<i class="fa fa-question" aria-hidden="true"></i></h3>
        <h4 className='find'>Find a ride and carpool anywhere in India.</h4>
        <form><br/>
          <input type='text' className='from' placeholder='From' value={inputValue} onChange={handleChange}/>
          <ul style={{position:'absolute',zIndex:'2',marginLeft:'2rem',backgroundColor:'gray',color:'white',listStyleType:'none',width:'15rem',borderRadius:'10px'}}>
        {suggestions.map((suggestion, index) => (
          <li key={index} style={{height:'2rem'}}>{suggestion}</li>
        ))}
      </ul>
          <input type='text' placeholder='To' className='To'/><br/><br/>
          <Picker/><br/>
          <input type='submit' value="Find a ride" className='submit'/>
        </form>
      </div>
    </div>
  )
}

export default Formbox
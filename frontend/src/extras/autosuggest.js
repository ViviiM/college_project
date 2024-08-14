import React, { useState } from 'react';

const suggestionsList = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

function AutoSuggest() {
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
    <div style={{ padding: '20px' }}>
      <h1>Alphabet Suggestion Form</h1>
      <form>
        <label>
          Enter an alphabet:
          <input type="text" value={inputValue} onChange={handleChange} maxLength={1} />
        </label>
      </form>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutoSuggest;
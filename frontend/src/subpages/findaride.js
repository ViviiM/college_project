import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import axios from 'axios';
import DatePicker from "react-datepicker";

const Findaride = () => {
    const [fromQuery, setFromQuery] = useState('');
    const [toQuery, setToQuery] = useState('');
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [toSuggestions, setToSuggestions] = useState([]);

    const fetchSuggestions = async (input, setSuggestions) => {
        if (input.length > 0) {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/location/', {
                    params: { query: input }
                });
                setSuggestions(response.data);
            } catch (error) {
                console.error("There was an error fetching the suggestions!", error);
            }
        } else {
            setSuggestions([]);
        }
    };
    const handleFromChange = (e) => {
        const input = e.target.value;
        setFromQuery(input);
        fetchSuggestions(input, setFromSuggestions);
    };

    const handleToChange = (e) => {
        const input = e.target.value;
        setToQuery(input);
        fetchSuggestions(input, setToSuggestions);
    };

    const [startDate, setStartDate] = useState(new Date());
    

    return (
        <div>
            <Header />
            <div style={{ marginTop: '5rem' }}>
                <h1 className='mainhead setfind' >Find a ride</h1>
                <p className='desfind setfind'>Plot your route and embark—every journey starts with <span>a single step</span></p>
            </div>


            <div className='setquote findbox'>
                <form>
                    <input type='text' placeholder='From' name='from' onChange={handleFromChange} />
                    <ul style={{ position: 'absolute' }}>
                        {fromSuggestions.map((suggestion, index) => {
                            if (suggestion.length > 30) {
                                suggestion = suggestion.slice(0, 30) + "...";
                            }
                            return (
                                <li key={index} className='suggest'>{suggestion}</li>
                            )
                        })}
                    </ul>
                    <input type='text' placeholder='To' name='to' onChange={handleToChange} />
                    <ul style={{ position: 'absolute', left: "30rem" }}>
                        {toSuggestions.map((suggestion, index) => {
                            if (suggestion.length > 30) {
                                suggestion = suggestion.slice(0, 30) + "...";
                            }
                            return (
                                <li key={index} className='suggest'>{suggestion}</li>
                            )
                        })}
                    </ul>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  placeholderText="Leaving(Optional)" name='date' className='datefind' />
                    <input type='submit' value={"Search"}  />
                </form>
            </div>

            <div>
                <table className='tablefind'>
                    <tr>
                        <th>
                            Carpool<br />
                            in Saurashtra
                        </th>
                        <th>Carpool<br />
                            in Ahmedabad</th>
                        <th>Carpool<br />
                            in North Gujarat</th>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <a href='#'>Jamnagar to Rajkot</a>
                            <br />
                            <span>250₹ per seat</span>
                        </td>
                        <td>
                            <a href='#'>Vastrapur to Vastral</a><br />
                            <span>150₹ per seat</span>
                        </td>
                        <td>
                            <a href='#'>Gandhinagar to Banaskantha</a><br />
                            <span>200₹ per seat</span>                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>Surendranagar to Veraval</a><br />
                            <span>200₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Thaltej to Maninagar</a><br />
                            <span>180₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Kutch to Sabarkantha</a><br />
                            <span>240₹ per seat</span>                        </td>
                    </tr><tr>
                        <td>
                            <a href='#'>Morbi to Junagadh</a><br />
                            <span>100₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Science city to Naroda</a><br />
                            <span>200₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Ahmedabad to Surendranagar</a><br />
                            <span>120₹ per seat</span>                        </td>
                    </tr><tr>
                        <td>
                            <a href='#'>Surendranagar to Botad</a><br />
                            <span>150₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Sarkhej to CTM</a><br />
                            <span>80₹ per seat</span>                        </td>
                        <td>
                            <a href='#'>Patan to Vadodara</a><br />
                            <span>190₹ per seat</span>                        </td>
                    </tr>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default Findaride
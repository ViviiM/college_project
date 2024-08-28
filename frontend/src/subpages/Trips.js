import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

export const Trips = () => {
  const {isLoggedIn} = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    origin: '',
    destinations: '',
    stops: [],
    radio_choice: 0,
    is_checked: false,
  });

  // const [task, setTask] = useState("")
  // const [todo, setTodo] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (name == 'options') {
      setFormData({ ...formData, radio_choice: parseInt(e.target.value) })
    }
    else {
      setFormData({ ...formData, [name]: value });
    }

  }
  const handleStopChange = (index, value) => {
    const newStops = [...formData.stops];
    newStops[index] = value;
    setFormData({ ...formData, stops: newStops });
  };
  const handleRemoveStop = (index) => {
    const newStops = formData.stops.filter((_, i) => i !== index);
    setFormData({ ...formData, stops: newStops });
    setcount(count - 1)
  };

  // setFormData({...formData , sops : [...todo, task]})
  const [count, setcount] = useState(0)
  console.log(formData);
  const handleAdd = (e) => {
    e.preventDefault()
    setflag(true)
    setcount(count + 1)
    setFormData({
      ...formData,
      stops: [...formData.stops, '']
    });
  }
  const [flag, setflag] = useState(false)

  if (count == 0) {
    if (flag == true) {
      setflag(false)
    }
  }
  const mystyle = {
    marginLeft: flag && '22.5rem',
    marginTop: flag && '-1rem'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isLoggedIn){
      navigate('/signup');
    }else{
      if (formData.is_checked) {
        axios.post('http://127.0.0.1:8000/user_data/save-driver/', formData)
          .then(response => alert(response.data.message))
          .catch(error => console.error('Error:', error));
      } else {
        alert('Please check the checkbox to save the data.');
      }
    }
  };
  return (
    <div>
      <Header />
      <form  onSubmit={handleSubmit}>
        <h1 className='mainhead posttrip'>Post a trip </h1>
        <p className='mainhead postdes' >Cover your driving costs by filling your seats when you’re driving from A to B. <Link to='/driver'>More info</Link></p>
        <hr className='container w-50 mb-5' />

        <div className='flex-container'>
          <form>
            <h3 className='mainhead'>Plan</h3>
            <p className='triphead'>Your origin, destination, and stops you're willing to make along the way.</p>
            <label > Origin</label> <input type='text' placeholder='Enter Origin' name="origin" value={formData.origin} onChange={handleChange} /><br />

            <label> Destination</label> <input type='text' placeholder='Enter Destination' name="destinations" value={formData.destinations} onChange={handleChange} /><br />

            <label> Stops</label>
            {/* <input type='text' placeholder='Enter a stop' onChange={handleChange} name="stops" /> */}
            {/* <span onClick={handleDelete} class='button' className='todocross'>&times;</span><br /> */}

            {formData.stops.map((stop, index) => {
              return (<p className='todoset' key={index}> <input type='text' placeholder='Enter a stop' name="stops" value={stop} onChange={(e) => handleStopChange(index, e.target.value)} />
                <span onClick={() => handleRemoveStop(index)} className='todocross button'>&times;</span><br /></p>)
            })}

            <button onClick={handleAdd} style={mystyle}><i className="fa fa-plus" aria-hidden="true" ></i>  Add a stop to get more booking</button>
          </form>
          <div>image</div>
        </div>
        <hr className='container w-50 mb-5' />
        <div>
          <h4 className='mainhead'>Empty seats</h4>

          <label className='select' >Select a number</label>
          <div class="radio-group">
            <input type="radio" id="radio1" name="options" className="hidden-radio" value={1} checked={formData.radio_choice === 1} onChange={handleChange} />
            <label for="radio1" class="custom-radio">1</label>

            <input type="radio" id="radio2" name="options" className="hidden-radio" value={2} checked={formData.radio_choice === 2} onChange={handleChange} />
            <label for="radio2" class="custom-radio">2</label>

            <input type="radio" id="radio3" name="options" className="hidden-radio" value={3} checked={formData.radio_choice === 3} onChange={handleChange} />
            <label for="radio3" class="custom-radio">3</label>
          </div>
        </div>

        <hr className='container w-50 mb-5 mt-5' />
        <input type='checkbox' className='check' name="is_checked" checked={formData.is_checked} onChange={handleChange} /> <span className='container checkspan'>I agree to these rules, to the Driver Cancellation Policy,
          Terms of Service and the Privacy Policy, and I understand that my account could be suspended if I break the rules</span>
        <input type='submit' value={"Post a trip"} className='posttripbtn'></input>


      </form>

      <Footer />
    </div>
  )
}
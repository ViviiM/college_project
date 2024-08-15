import React from 'react'
import safety from './safety.jpg'

const Trustandsafety = () => {
  return (
    <div>
      <div className='settrustbox'>
        <img src={safety} className='safetyiconset'></img>
        <h1 className='safetyset'>Trust and Safety</h1>
        <br></br>
        <h4 className='settext'>Poparide is designed with your safety in mind</h4>
        <br></br>
        <br></br>
        <input type='submit' value="Find out more" className='submitbtnset'/>
      </div>
    </div>
  )
}

export default Trustandsafety

import React, { useState } from 'react'
import img1 from './img1.png'
import img2 from './img2.png'
import {CSSTransition} from 'react-transition-group'; // ES6

const Imgchngr = () => {
    const [image,setimage] = useState(img1)
    const s = ()=>{
        setimage(img2)
        if(image == img2){
            setimage(img1)
        }
    }
    setTimeout(
       s ,1900
    )
  return (
    <div>
          <img src={image} className='imgset' alt='Poparide'/>
    </div>
  )
}

export default Imgchngr
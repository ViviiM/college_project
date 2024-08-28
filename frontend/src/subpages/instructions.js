import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useNavigate } from "react-router-dom";
import RunningClock from './runningclock.jpg';
import Caution from './caution.jpg'
import Nocash from './nocash.jpg'
const CardComponent = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleButtonClick = () => {
      if (isChecked) {
        navigate("/trip"); // Replace with your target route
      } else {
        alert("Please check the box before proceeding.");
      }
    };
  const cardsData = [
    {
      image: RunningClock,
      title: "Be reliable",
      description: "Only post a trip if you’re sure you’re driving and show up on time",
    },
    {
      image: Nocash,
      title: "No cash",
      description: "All passengers pay online and you receive a payout after the trip.",
    },
    {
      image:Caution,
      title: "Drive safely",
      description: "Stick to the speed limit and do not use your phone while driving.",
    },
  ];

  return (
   <div>
    <Header/>
     <div style={styles.container} className="container">
      {cardsData.map((card, index) => (
        <div key={index} style={styles.card}>
          <img src={card.image} alt={card.title} style={styles.image} />
          <h3 style={styles.title}>{card.title}</h3>
          <p style={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
    <div>
        <div style={styles.cbox}>
        <input type = "checkbox"  required style={styles.check} checked={isChecked}
          onChange={handleCheckboxChange}/>  I understand that <strong>my account could be suspended if I break these rules</strong><br/>
        <input type="button" value="Post a trip"  onClick={handleButtonClick}  style={styles.post}/>
        </div>
    </div>
    <Footer/>
   </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent:'space-evenly',
    padding: "20px",
    marginTop:'2rem'
  },
  card: {
    width: "20%",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    border:'0',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.09)",
  },
  image: {
    width: "10rem",
    height: "10rem",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  title: {
    fontSize: "1.3em",
    margin: "10px 0",
    fontWeight:'bold',
    fontFamily:'Poppins , sans-serif'
  },
  description: {
    fontSize: "13px",
    color: "#555",
    fontFamily:'Poppins , sans-serif'

  },
  cbox : {
    marginTop:'2rem',
    marginLeft:'13rem',
    fontFamily:'Poppins , sans-serif',
  },
  check:{
    marginRight : '1rem',
  },
  post:{
    height:'4rem',
    width:'10rem',
    border:'0',
    borderRadius:'1rem',
    backgroundColor:'orangered',
    color:'white',
    marginTop:'3rem',
    marginLeft:'2rem',
    fontWeight:'bold'
  }
};

export default CardComponent;

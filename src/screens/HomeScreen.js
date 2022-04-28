import React from 'react'
import "./home.css";
import "./home2.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
    const imgBackground = require('../images/bigSmile.jpg')
    const divStyle ={
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'grid',
      placeItems: 'center',
    }
  return (
<div className='Background' style={divStyle}>
    <div className='home-main'>
    <div className='nav'
    style={{
        backgroundImage: `url(${imgBackground})`,
        backgroundColor: 'black',
        backgroundSize: '60%', 
        backgroundPosition: '0% 30%',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='home-big-text'>
      <h1>Anis Akuri</h1>
      <h2>Head Barista</h2>
      <h3>Web Developer</h3>
      </div>
      </div>        
    <Link 
    className='side-1'
    style={{textDecoration: "none"}}
    to='/aboutMe'>
                  <h2>About Me</h2>
    </Link>        
    <Link 
    className='side-2'
    style={{textDecoration: "none"}}
    to='/experience'>
                  <h2>My Experience</h2>
    </Link>        
    <Link 
    className='long-1'
    style={{textDecoration: "none"}}
    to='/myMenu'>
                  <h2>What I Can Do</h2>
    </Link>        
    <div className='long-2'>
        <h2>Contact</h2>
        <h3>Whatsapp : 055 742 32 86</h3>
        <h3>Instagram : one.for.oll</h3>
        <h3>Youtube : Barista Gekyume</h3>
        <h3>Email: kamichikora@gmail.com</h3>
    </div>      
        </div>  
    </div>
  )
}

export default HomeScreen
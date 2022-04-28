
import { useState } from 'react';
import BackBtn from '../../PageComponents/BackBtn';
import "./myMenu.css";
import "./myMenu2.css";
import menuItems from "./menuItems";
import BtnSlider from './BtnSlider';
import { Link } from 'react-router-dom';

const MyMenu = () => {
    const imgBackground = require('../../images/Clean.jpg')
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
    const [slideAboutIndex, setAboutSlideIndex] = useState(1)

    const nextAboutSlide = () => {
        if(slideAboutIndex !== menuItems.length){
          setAboutSlideIndex(slideAboutIndex + 1)
            console.log(menuItems.length)
            console.log(slideAboutIndex)
        }
        else if (slideAboutIndex === menuItems.length){
          setAboutSlideIndex(1)
            console.log(menuItems.length)
            console.log(slideAboutIndex)
        }
    }
    const prevAboutSlide = () => {
        if(slideAboutIndex !== 1){
            setAboutSlideIndex(slideAboutIndex - 1)
        }
        else if (slideAboutIndex === 1){
            setAboutSlideIndex(menuItems.length)
        }
    }
  return (
<div className='menu-background' style={divStyle}>
<div className='menu-container'>
<Link className='back-btn' 
    style={{textDecoration: "none"}}
    to='/'><BackBtn Link='/' /></Link>
<div className='panning-image'><h2>I believe in "Constant Evolution and self assessment" in everything you do</h2></div>
<div className='menu-slider-container'>
<div className='menu-behind'>
        {menuItems.map((item, index)=>(
              <div
              key={item._id}
              className={slideAboutIndex === index + 1 ? 'slide active-anim' : 'slide'}>    
              <div className='menu-inside'>
              <img 
              className='img'
              src={item.image}
               alt={item.name} 
               key={item._id}/>
              <div className='words-inside'>
              <h1>{item.name}</h1>
              <h2>{item.text}</h2>
              </div>
              </div>
              
              </div>
            ))}
</div>
<BtnSlider moveSlide={nextAboutSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevAboutSlide} direction={"prev"}/>
</div>
</div>
    </div>
  )
}

export default MyMenu

// Throughout my 5 year stay in the UNSAFE_LocationContext, i have been exposed to many 
// different concepts, flavors, techniques, and recipes!
// I have compiled most of them in my own personal menubar. 

{/* <div className='menu-slider-container'>
<div className='menu-front'>
        <div className='menu-front-sub'>
        {menuItems.map((item, index)=>(
              <div
              key={item._id}
              className={slideAboutIndex === index + 1 ? 'slide active-anim' : 'slide'}>    
              <h2>{item.text}</h2>
              </div>
            ))}
        </div>
</div>
<div className='menu-behind'>
        <div className='menu-behind-sub'>
        {menuItems.map((item, index)=>(
              <div
              key={item._id}
              className={slideAboutIndex === index + 1 ? 'slide active-anim' : 'slide'}>    
              <h2>{item.name}</h2>
              <img 
              style={{
              height: "100%", 
              width: "100%",
              overflow: "hidden", 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',}}
              src={item.image}
               alt={item.name} 
               key={item._id}/>
              </div>
            ))}
        </div>
</div>
<BtnSlider moveSlide={nextAboutSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevAboutSlide} direction={"prev"}/>
</div> */}
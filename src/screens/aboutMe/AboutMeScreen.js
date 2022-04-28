
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackBtn from '../../PageComponents/BackBtn';
import "./about.css";
import "./about2.css";
import aboutItems from "./aboutItems";
import BtnSlider from './BtnSlider';

const AboutMe = () => {
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
      overFlow: 'hidden',
    }
    const [slideAboutIndex, setAboutSlideIndex] = useState(1)

    const nextAboutSlide = () => {
        if(slideAboutIndex !== aboutItems.length){
          setAboutSlideIndex(slideAboutIndex + 1)
            console.log(aboutItems.length)
            console.log(slideAboutIndex)
        }
        else if (slideAboutIndex === aboutItems.length){
          setAboutSlideIndex(1)
            console.log(aboutItems.length)
            console.log(slideAboutIndex)
        }
    }
    const prevAboutSlide = () => {
        if(slideAboutIndex !== 1){
            setAboutSlideIndex(slideAboutIndex - 1)
        }
        else if (slideAboutIndex === 1){
            setAboutSlideIndex(aboutItems.length)
        }
    }
  return (
<div className='about-background' style={divStyle}>
    <div className='about-container'>
    <Link className='about-back-btn' 
    style={{textDecoration: "none"}}
    to='/'><BackBtn Link='/' /></Link>
    <div className='about-panning-image'><h2>I always welcome new challenges, using a creative approach to solve problems</h2></div>
    <div className='about-slider-container'>
    <div className='about-left'>
    <div className='about-left-sub'>
            {aboutItems.map((item, index)=>(
              <div
              key={item._id}
              className={slideAboutIndex === index + 1 ? 'slide active-anim' : 'slide'}>    
              <h2>{item.name}</h2>
              <img 
              style={{
              maxHeight: "100%", 
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
    <div className='about-right'>
    <div className='about-right-sub'>
        {aboutItems.map((item, index)=>(
              <div
              key={item._id}
              className={slideAboutIndex === index + 1 ? 'slide active-anim' : 'slide'}>    
              <h2>{item.text}</h2>
              <h2>{item.text2}</h2>
              </div>
            ))}
    </div>
    </div>
    <BtnSlider moveSlide={nextAboutSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevAboutSlide} direction={"prev"}/>
    </div>
    </div>
    </div>
  )
}

export default AboutMe
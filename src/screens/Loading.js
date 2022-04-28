import React from 'react'
import './loading.css'
const Loading = () => {
    const imgBackground = require('../images/loading.jpeg')
    const divStyle ={
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${imgBackground})`,
      backgroundColor: 'black',
      backgroundSize: '80%', 
      backgroundPosition: '50% 10%',
      backgroundRepeat: 'no-repeat',
      display: 'grid',
      placeItems: 'center',
    }
  return (
    <div className='loading-background' style={divStyle}>
        <div className='loading-words'>
        <h1>Thank you for viewing my Portfolio</h1>
        <br></br>
        <h1>The page will soon be ready</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1>This page was designed to be viewed on bigger screens, not on smartphones</h1>
        <br></br>
        <h1>Please pull out your laptop or tablet. </h1>
        <br></br>
        <h1>Enjoy!</h1>
        </div>
    </div>
  )
}

export default Loading
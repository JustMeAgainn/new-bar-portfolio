import { Link } from 'react-router-dom';
import BackBtn from '../../PageComponents/BackBtn';
import "./experience.css";
import "./experience2.css";

const Experience = () => {
    const imgBackground = require('../../images/halfBody.jpg')
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
<div className='exp-background' style={divStyle}>
<div className='exp-container'>
<Link className='exp-back-btn' 
    style={{textDecoration: "none"}}
    to='/'><BackBtn Link='/' /></Link><div className='exp-panning-image'><h2>I prefer working in a team, since tasks can be done faster and more efficiently, and there is always space to learn from another person
</h2></div>
<div className='left-right'>
    <div className='exp-left'>
        <div className='exp-left-sub1'>
            <h3>Barista</h3>
            <h3>-2 years: Fantasy Coffee Shop - (Barista)</h3>
            <h3>-2 years: Le Papillon Cafe - (Senior Barista)</h3>
            <h3>-8 months: 7 Sea Cafe - (Senior Barista)</h3>
        </div>
        <div className='exp-left-sub2'>
            <h3>Responsibilities</h3>
            <h3>-Greet customers as they enter</h3>
            <h3>-Educate customers on the types of coffees available</h3>
            <h3>-Provide customers with the menu and answer their questions </h3>
            <h3>-Prepare and serve Specialty Coffee Beverages according to company and SCA standards </h3>
            <h3>-Pay attention to details and gauge customer preferences </h3>
            <h3>-Comply with health and safety regulations </h3>
            <h3>-Keep the bar area tidy and presentable on shift </h3>
        </div>
    </div>
    <div className='exp-right'>
        <div className='exp-right-sub1'>
            <h3>Management</h3>
            <h3>-1 year:  Fantasy Coffee Shop - (Senior Barista)</h3>
            <h3>-1 year:  Le Papillon Cafe -    (Head Barista and Supervisor)</h3>
            <h3>-8 months: 7 Sea Cafe -          (Senior Barista and Supervisor)</h3>
        </div>
        <div className='exp-right-sub2'>
            <h3>Responsibilities</h3>
            <h3>-Plan and supervise the daily operations of the shop</h3>
            <h3>-Train employees on drinks preparation and proper use of coffee equipment </h3>
            <h3>-Lead and motivate team members to keep improving</h3>
            <h3>-Maintain updated records of daily, weekly and monthly revenues and expenses</h3>
            <h3>-Provide monthly reports on sales, inventory, petty cash...etc </h3>
            <h3>-Manage costs and compliance with food hygiene policies and procedures</h3>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Experience

// Educated customers on the types of coffees available
// Give monthly reports on sales, inventory, pettycash...etc 
// Planne and supervise the daily operations of the shop
// Lead and motivate team members to keep improving
// Manage complience with food higien policies and procedures
// Manage costs and quality control 
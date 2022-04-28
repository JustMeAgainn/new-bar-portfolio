import React from "react";
import { Link } from "react-router-dom";
import './backBtnStyle.css'
const BackBtn = (props) => {
  return (
    <div className='BackBtn'>
      <div>
        <Link
          to={props.Link}
          style={{ textDecoration: "none" }}
        >
          <h3>Back</h3>
        </Link>
      </div>
    </div>
  );
};
// Display Back, Cancle
export default BackBtn;

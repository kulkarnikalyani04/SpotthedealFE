import React from 'react'
import Add from './Add';

const Interests = (props) => {
  return (
    <div className="interest">
      <img src={props.img} alt="" />
      <h3>
        {props.title}
        <br /><br />
         <Add text="Get it now"/>
        </h3>
       </div>
  )
}

export default Interests;
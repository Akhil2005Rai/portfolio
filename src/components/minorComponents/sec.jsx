import React from 'react'
import './sec.css'
const Sec = (props) => {

  return (
    <>
        <div className="s">
        <div className='box' >
        <img src={props.link} id='b' alt=""/>
        
    </div>
        <div className="lbl">
            <div>{props.ttl}</div>
            <div className="l">
            {props.tx}
            </div>
        </div>
        </div>
    </>
  )
}

export default Sec
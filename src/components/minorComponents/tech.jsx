import React from 'react'
import './tech.css'
const Tech = ({icon,title,txt}) => {
  return (
    <div className='container'>
        <div className="lef">
            {icon}
        </div>
        <div className="txt">
        <div className='head'>
            {title}
        </div>
        <div className="disc">
        {txt}
        </div>
        </div>
     </div>
  )
}

export default Tech
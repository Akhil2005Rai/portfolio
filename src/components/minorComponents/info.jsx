import React from 'react'
import './info.css'

const Info = ({title,description}) => {
  return (
    <div className="detail">
            <div className="ttl">{title}</div>
            <div className="decp">{description}</div>
        </div>
  )
}

export default Info
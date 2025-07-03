import React from 'react'
import Sec from './minorComponents/sec'
import './items.css'
const Webitems = () => {
    const port = 'https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg'
    return (
    <>
        <div className="a">
        <div className="row">
        <a href="https://portfolio-eosin-beta-71.vercel.app/">
            <Sec link={port} ttl="Portfolio" tx="Github Link"/>
            </a>
        </div>
        </div>
    </>
  )
}

export default Webitems
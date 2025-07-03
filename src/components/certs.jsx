import React from 'react'
import Sec from './minorComponents/sec'
import './items.css'
const Certitems = () => {
    const mt = 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png'  
    const krg = 'https://logowik.com/content/uploads/images/iit-indian-institute-of-technology-kharagpur4613.jpg'  
    
    const tic = 'https://www.edc.de/fileadmin/_processed_/6/3/csm_ec-council-training-logo_b5cfd30e85.png'
    return (
    <>
        <div className="a">
        <div className="row">
        <a href="https://coursera.org/share/0d96dc078af980c11529d97702fd1526">
            <Sec link={mt} ttl="React-Native(Certificate)" tx="Click to verify"/>
            </a>
            <a href="https://drive.google.com/file/d/1IpDBJeZvESRz3ChoU6Jc_TZAy9vME5hT/view?usp=sharing"><Sec link={krg} ttl="Cloud Computing(Certificate)" tx = "Click to verify"/></a>
            <a href="https://coursera.org/share/2998c6a771c537eff67458541cff8471">
            <Sec link={tic} ttl="Cyber Security (Certificate)" tx="Click to verify"/></a>
        </div>
        </div>
    </>
  )
}

export default Certitems
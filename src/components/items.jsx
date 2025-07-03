import React from 'react'
import Sec from './minorComponents/sec'
import './items.css'
const Items = () => {
    const mt = 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png'  
    const krg = 'https://logowik.com/content/uploads/images/iit-indian-institute-of-technology-kharagpur4613.jpg'  
    const gsp = 'https://cdn.dribbble.com/userupload/22071540/file/original-0acc3417152aaf7e8bbcf399b7840424.png?resize=752x&vertical=center'
    const hng = 'https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small_2x/catering-quality-food-design-premium-logo-vector.jpg'
    const todo = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/38/97/c6/3897c68e-6f19-e47b-5b9e-a656ebd95287/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/1200x630wa.png'
    const tic = 'https://www.edc.de/fileadmin/_processed_/6/3/csm_ec-council-training-logo_b5cfd30e85.png'    
    const port = 'https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg'
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
        <div className="row">
            <a href="https://github.com/Akhil2005Rai/hangry-Reworked-.git">
            <Sec link={hng} ttl="Hangry(Food ordering app)" tx="Github Link"/>
            </a>
            <Sec link={todo} ttl="Todo App" tx="Github Link"/>
            <a href="https://github.com/Akhil2005Rai/gossip_-ChatApp-.git">
            <Sec link={gsp} ttl="Gossip (Chat App)" tx="Github Link"/>
            </a>
        </div>
        <div className="row">
            <a href="https://portfolio-eosin-beta-71.vercel.app/">
            <Sec link={port} ttl="Portfolio" tx="Github Link"/>
            </a>
            
        </div>
        </div>
    </>
  )
}

export default Items
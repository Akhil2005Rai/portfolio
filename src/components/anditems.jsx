import React from 'react'
import Sec from './minorComponents/sec'
import './items.css'
const Anditems = () => {
    const mt = 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png'  
    const krg = 'https://logowik.com/content/uploads/images/iit-indian-institute-of-technology-kharagpur4613.jpg'  
    const gsp = 'https://cdn.dribbble.com/userupload/22071540/file/original-0acc3417152aaf7e8bbcf399b7840424.png?resize=752x&vertical=center'
    const hng = 'https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small_2x/catering-quality-food-design-premium-logo-vector.jpg'
    const todo = 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/38/97/c6/3897c68e-6f19-e47b-5b9e-a656ebd95287/AppIcon-0-0-1x_U007epad-0-11-0-85-220.png/1200x630wa.png'
    const tic = 'https://previews.123rf.com/images/alekseyvanin/alekseyvanin1901/alekseyvanin190101041/115639494-tic-tac-toe-game-vector-icon-filled-flat-sign-for-mobile-concept-and-web-design-criss-cross-game.jpg'    
    return (
    <>
        <div className="a">
        <div className="row">
        <a href="https://github.com/Akhil2005Rai/hangry-Reworked-.git">
            <Sec link={hng} ttl="Hangry(Food ordering app)" tx="Github Link"/>
            </a>
            <Sec link={todo} ttl="Todo App" tx="Github Link"/>
            <a href="https://github.com/Akhil2005Rai/gossip_-ChatApp-.git">
            <Sec link={gsp} ttl="Gossip (Chat App)" tx="Github Link"/>
            </a>
        </div>
        </div>
    </>
  )
}

export default Anditems
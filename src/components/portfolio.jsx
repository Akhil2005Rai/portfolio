import React, { useState } from 'react';
import './portfolio.css';
import Items from './items';
import Anditems from './anditems';
import Webitems from './webapps';
import Certitems from './certs';

const Portfolio = () => {
  const [sec, setSec] = useState("all");

  const handleClick = (sectionId) => {
    const b = document.getElementById('fd')
    document.querySelectorAll('.o').forEach(el => {
      el.style.color = 'white';
    });
    b.classList.remove('uunfade')
    b.classList.add('ffade');
    const clicked = document.getElementById(sectionId);
    if (clicked) {
      clicked.style.color = "#FFDB70";
    }
    setTimeout(() => {
      setSec(sectionId);
      b.classList.add('uunfade')
      b.classList.remove('ffade')
    }, 400);
    
  };

  return (
    <div className='allport'>
      <div className="line"></div>
      <div className="nav">
        <div className="o" id='all' onClick={() => handleClick("all")}>All</div>
        <div className="o" id='aapps' onClick={() => handleClick("aapps")}>Android Apps</div>
        <div className="o" id='wapps' onClick={() => handleClick("wapps")}>Web Apps</div>
        <div className="o" id='cert' onClick={() => handleClick("cert")}>Certificates</div>
      </div>
      <div className="bbdy" id='fd'>
      {sec === 'all' ? <Items /> : sec === 'aapps' ? <Anditems/> : sec==='wapps'? <Webitems/>: <Certitems/>}
      </div>
    </div>
  );
};

export default Portfolio;

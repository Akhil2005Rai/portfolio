import React, { useState } from 'react';
import './right.css';
import About from './abtme';
import Contact from './contact';
import Resume from './resume';
import Portfolio from './portfolio';
const Right = () => {
  const [section, setSection] = useState('About Me');

  const handleAboutClick = () => {
    var abt = document.getElementById('abt');
    var rsm = document.getElementById('rsm');
    var port = document.getElementById('port');
    var cnt = document.getElementById('cnt');
    var text = document.getElementById('section-text');
    var abtme = document.getElementById('aboutContent');

    abt.style.color = '#FFDB70';
    rsm.style.color = '#FAFAFA';
    port.style.color = '#FAFAFA';
    cnt.style.color = '#FAFAFA';

    abtme.classList.remove('unfade');
    abtme.classList.add('fade');
    text.classList.add('fade');
    text.classList.remove('unfade');

    setTimeout(() => {
      setSection(abt.innerHTML);
      text.classList.remove('fade');
      text.classList.add('unfade');
      abtme.classList.add('unfade');
      abtme.classList.remove('fade');
    }, 200);
  };

  const handleResumeClick = () => {
    var abt = document.getElementById('abt');
    var rsm = document.getElementById('rsm');
    var port = document.getElementById('port');
    var cnt = document.getElementById('cnt');
    var text = document.getElementById('section-text');
    var resume = document.getElementById('aboutContent');

    abt.style.color = '#FAFAFA';
    rsm.style.color = '#FFDB70';
    port.style.color = '#FAFAFA';
    cnt.style.color = '#FAFAFA';
    resume.classList.remove('unfade');
    resume.classList.add('fade');
    text.classList.add('fade');
    text.classList.remove('unfade');

    setTimeout(() => {
      setSection(rsm.innerHTML);
      resume.classList.add('unfade');
      resume.classList.remove('fade');
      text.classList.remove('fade');
      text.classList.add('unfade');
    }, 200);
  };

  const handlePortfolioClick = () => {
    var abt = document.getElementById('abt');
    var rsm = document.getElementById('rsm');
    var port = document.getElementById('port');
    var cnt = document.getElementById('cnt');
    var text = document.getElementById('section-text');
    var content = document.getElementById('aboutContent');
  
    abt.style.color = '#FAFAFA';
    rsm.style.color = '#FAFAFA';
    port.style.color = '#FFDB70';
    cnt.style.color = '#FAFAFA';
  
    content.classList.add('fade');
    content.classList.remove('unfade');
    text.classList.add('fade');
    text.classList.remove('unfade');
  
    setTimeout(() => {
      setSection(port.innerHTML);
      content.classList.remove('fade');
      content.classList.add('unfade');
      text.classList.remove('fade');
      text.classList.add('unfade');
    }, 200);
  };

  const handleContactClick = () => {
    var abt = document.getElementById('abt');
    var rsm = document.getElementById('rsm');
    var port = document.getElementById('port');
    var cnt = document.getElementById('cnt');
    var text = document.getElementById('section-text');
    var abtContent  = document.getElementById('aboutContent');

    abt.style.color = '#FAFAFA';
    rsm.style.color = '#FAFAFA';
    port.style.color = '#FAFAFA';
    cnt.style.color = '#FFDB70';

    abtContent.classList.add('fade');
    abtContent.classList.remove('unfade');
    text.classList.add('fade');
    text.classList.remove('unfade');

    setTimeout(() => {
      setSection(cnt.innerHTML);
      abtContent.classList.remove('fade');
      abtContent.classList.add('unfade');
      text.classList.remove('fade');
      text.classList.add('unfade');
    }, 200);
  };



  return (
    <div className='allright'>
      <div className="options">
        <div className="leftopt unfade" id="section-text">{section}</div>
        <div className="rightopt">
          <span className="opts" id='abt' onClick={handleAboutClick}>About Me</span>
          <span className="opts" id='rsm' onClick={handleResumeClick}>Resume</span>
          <span className="opts" id='port' onClick={handlePortfolioClick}>Portfolio</span>
          <span className="opts" id='cnt' onClick={handleContactClick}>Contact</span>
        </div>
        </div>
        <div id="aboutContent">
  {section === "About Me" ? (
    <About />
  ) : section === "Contact" ? (
    <Contact />
  ) : (
    section==="Resume"?(<Resume/>):( <Portfolio/> )
  )}
</div>

    </div>
  );
};

export default Right;

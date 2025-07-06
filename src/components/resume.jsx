import React, { useState } from 'react'
import './resume.css'

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education')

  const toggleSection = (section) => {
    setActiveSection(prev => (prev === section ? null : section))
  }

  const softSkillsIcon = (<svg version="1.1" height={"30px"} id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#FFDB70"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path class="feather_een" d="M26,9V8c0-0.552-0.448-1-1-1h-8V5.723C17.595,5.376,18,4.738,18,4l0-1.893 c0-0.996-0.681-1.92-1.664-2.08C15.083-0.176,14,0.785,14,2v2c0,0.738,0.405,1.376,1,1.723V7H7C6.448,7,6,7.448,6,8v1 c0,0.552,0.448,1,1,1l1.895,17H8c-0.552,0-1,0.448-1,1l0,1c-0.552,0-1,0.448-1,1v1c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1v-1 c0-0.552-0.448-1-1-1l0-1c0-0.552-0.448-1-1-1h-0.895L25,10C25.552,10,26,9.552,26,9z M15,2c0-0.551,0.449-1,1-1s1,0.449,1,1v2 c0,0.551-0.449,1-1,1s-1-0.449-1-1V2z M25,31H7v-1h18V31z M7,8h18v1H7V8z M24,28v1H8v-1H24z M22.1,27H9.9L8.111,10h15.778L22.1,27z"></path> </g></svg>)

  const langIcon = (<svg height={"30px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" fill="#FFDB70"></path> </g></svg>)

  const certIcon = (<svg height={"30px"} fill="#FFDB70"width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" stroke="#FFDB70"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Scroll_1_" d="M61.7646828,22.1968002c-0.1737976-0.3262005-0.5136986-0.5298004-0.8828011-0.5298004h-22.569397 c1.3880005-0.8428001,2.9096985-2.2852001,4.330101-4.7446995c1.3612976-2.3579006,1.5224991-4.7802,0.4433975-6.6464005 c-0.8652992-1.4960995-2.4043007-2.3887-4.1171989-2.3887c-0.0028992,0-0.0049019,0-0.0078011,0 c-2.125,0.0029001-4.1269989,1.3666997-5.4911995,3.7412c-0.7546997,1.3127003-1.2468987,2.4995003-1.5536995,3.5681 c-0.3071995-1.0683994-0.7994003-2.2551003-1.5537949-3.5676003c-1.3642044-2.375-3.3662052-3.7387996-5.4912052-3.7416997 c-0.0028992,0-0.0049,0-0.0077934,0c-1.7129059,0-3.2519054,0.8926005-4.1172066,2.3887 c-1.0790997,1.8662004-0.9179001,4.2884998,0.4433994,6.6464005c1.4204006,2.4594994,2.9419003,3.9018993,4.3298054,4.7446995 H3.6074851c-0.3370001,0-0.6503999,0.1693993-0.836,0.4507008c-3.7196999,5.6571999-3.7001953,10.8715,0.0595999,15.4984989 c0.1904001,0.2334023,0.4756,0.3690987,0.7764001,0.3690987h16.2763004l-7.1201,12.3321037 c-0.1885004,0.3270988-0.1767006,0.7333984,0.0302992,1.0492973c0.2080002,0.3158989,0.5791006,0.4941025,0.9512005,0.4438019 l4.579999-0.5326996l1.8271999,4.2314987c0.1473999,0.3422012,0.4736004,0.5737,0.8457012,0.6009979 c0.0243988,0.001503,0.0487995,0.0025024,0.0722046,0.0025024c0.3457947,0,0.6680012-0.1786995,0.8515949-0.4751015 l9.6065006-15.5846977l9.607399,15.5846977c0.1836014,0.296402,0.5057983,0.4751015,0.8515053,0.4751015 c0.0234947,0,0.0478935-0.0009995,0.0722961-0.0025024c0.372097-0.027298,0.6982002-0.2587967,0.8457031-0.6009979 l1.8271942-4.2314987l4.5791016,0.5326996c0.3710976,0.0444984,0.7430992-0.1284027,0.9510994-0.4438019 c0.2070999-0.3158989,0.2187996-0.7216988,0.0303001-1.0492973l-7.1194-12.3321037h17.7082977 c0.3340034,0,0.6465034-0.1669998,0.8320007-0.4447975C64.7499847,32.9930992,64.7665863,27.8309994,61.7646828,22.1968002z M27.5175838,35.9852982V23.6669998h8.8300991v12.3182983H27.5175838z M35.2040825,12.625 c0.9991035-1.7383003,2.3692055-2.7358999,3.7598-2.7377996c0.0020027,0,0.002903,0,0.0039024,0 c0.9911995,0,1.8838005,0.5190001,2.3866997,1.3895998c0.7118988,1.2305002,0.5498047,2.9238997-0.4443016,4.6455002 c-2.7598,4.7787991-5.7196999,4.9419003-6.6288948,4.862299C33.7519836,20.0620003,32.4052887,17.4946003,35.2040825,12.625z M22.9218845,15.9223003c-0.9941006-1.7216005-1.1562004-3.415-0.4442997-4.6455002 c0.5028992-0.8705997,1.3955002-1.3895998,2.3867054-1.3895998c0.0009995,0,0.001894,0,0.0038948,0 c1.3906002,0.0018997,2.7607002,0.9994993,3.7598,2.7382994c2.8027,4.8745003,1.4491997,7.4428005,0.9208984,8.1620998 C28.6660843,20.8686008,25.6933842,20.7212009,22.9218845,15.9223003z M31.9160843,20.5028992 c0.1716003,0.4736004,0.3698006,0.8655014,0.5565987,1.1641006h-1.1132984 C31.5463848,21.3684006,31.7443848,20.9764996,31.9160843,20.5028992z M4.1542897,23.6669998h21.3632946v12.3182983H4.0937848 C1.2880851,32.2798004,1.308585,28.2411995,4.1542897,23.6669998z M21.2265854,52.9530983l-1.3604012-3.150898 c-0.174799-0.4048004-0.602499-0.6557007-1.0331993-0.5966988l-3.3417997,0.3886986l6.7026987-11.608902h8.0600014 l0.0994053,0.1612015L21.2265854,52.9530983z M47.5654831,49.5942001l-3.3409004-0.3886986 c-0.4334984-0.0576019-0.8583984,0.1918983-1.0331993,0.5966988l-1.3602982,3.150898l-9.1275024-14.8065987l0.0992012-0.1612015 h8.0610008L47.5654831,49.5942001z M60.3349838,35.9852982H38.347683V23.6669998h21.9248009 C62.5702896,28.2621994,62.5908852,32.3027,60.3349838,35.9852982z"></path> </g></svg>)

  const skillsIcon = (
    <svg height={"30px"} viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#FFDB70" stroke="#FFDB70"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#FFDB70"></path><path d="M512 306.8c27.7 0 54.6 5.4 79.8 16.1 24.4 10.3 46.4 25.1 65.2 44s33.6 40.8 44 65.2c10.7 25.3 16.1 52.1 16.1 79.8 0 27.7-5.4 54.6-16.1 79.8-10.3 24.4-25.1 46.4-44 65.2-18.8 18.8-40.8 33.6-65.2 44-25.3 10.7-52.1 16.1-79.8 16.1-27.7 0-54.6-5.4-79.8-16.1-24.4-10.3-46.4-25.1-65.2-44-18.8-18.8-33.6-40.8-44-65.2-10.7-25.3-16.1-52.1-16.1-79.8 0-27.7 5.4-54.6 16.1-79.8 10.3-24.4 25.1-46.4 44-65.2s40.8-33.6 65.2-44c25.2-10.6 52.1-16.1 79.8-16.1m0-22c-125.4 0-227.1 101.7-227.1 227.1S386.6 739.1 512 739.1c125.4 0 227.1-101.7 227.1-227.1S637.4 284.8 512 284.8z" fill="#FFDB70FDB70"></path><path d="M512 618.7c-58.9 0-106.8-47.9-106.8-106.8S453.1 405.1 512 405.1 618.8 453 618.8 511.9 570.9 618.7 512 618.7z m0-193.5c-47.9 0-86.8 38.9-86.8 86.8s38.9 86.8 86.8 86.8 86.8-38.9 86.8-86.8-38.9-86.8-86.8-86.8z" fill="#FFDB70"></path><path d="M544.2 107.3l34.1 92.3 7.4 19.9 20.2 6.6c10.3 3.4 32.1 12.9 43.4 18.1l18.7 8.6 18.6-8.9 87.9-41.8 46.4 46.5-41.2 89.4-8.9 19.3 9.6 19c6.8 13.4 12.6 27.5 17.4 41.9l6.7 20.5 20.3 7.2 91.7 32.6v65.7l-92.3 34.1-19.9 7.4-6.6 20.2c-4.7 14.4-10.6 28.4-17.4 41.9l-9.8 19.3 9.3 19.5 41.8 87.9-46.5 46.5-89.1-41.3-19.3-8.9-19 9.6c-13.4 6.8-27.5 12.6-41.9 17.4l-20.5 6.7-7.2 20.3-32.6 91.7h-65.7l-34.1-92.3-7.4-19.9-20.2-6.6c-10.3-3.4-32.1-12.9-43.4-18.1L356 771l-18.6 8.9-87.9 41.8-46.4-46.5 41.2-89.3 8.9-19.3-9.6-19c-6.8-13.4-12.6-27.5-17.4-41.9l-6.7-20.5-20.3-7.2-91.7-32.6v-65.7l92.3-34.1 19.9-7.4 6.6-20.2c3.4-10.3 12.9-32.1 18.1-43.4l8.6-18.7-8.9-18.6-41.8-87.9 46.4-46.4 89.3 41.2 19.3 8.9 19-9.6c13.4-6.8 27.5-12.6 41.9-17.4l20.5-6.7 7.2-20.3 32.6-91.7h65.7m30.7-44.1H447.4l-43 121c-16.6 5.5-32.7 12.1-48.1 19.9l-117.2-54-90.1 90.1 55.2 116s-14.5 31.4-19.9 48.1l-121 44.7v127.4l121 43c5.5 16.6 12.1 32.6 19.9 48l-54 117.2 90.1 90.1 116-55.2s31.4 14.5 48.1 19.9l44.7 121h127.4l43-121c16.6-5.5 32.6-12.1 48-19.9l117.2 54 90.1-90.1-55.2-116c7.8-15.4 14.5-31.4 19.9-48l121-44.7V447.4l-121-43c-5.5-16.6-12.1-32.6-19.9-48l54-117.2-90.1-90.1-115.9 55.2s-31.5-14.5-48.1-19.9L574.9 63.3z" fill="#FFDB70FDB70"></path></g></svg>
  )

  const educationIcon = (
    
    <svg fill="#FFDB70" height={"30px"} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 477.005 477.005" xml:space="preserve" stroke="#FFDB70"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M7.075,204.297l71.191,34.293v57.087c0,4.801,2.75,9.178,7.075,11.262l136.194,65.605c1.692,0.814,3.546,1.237,5.425,1.237 h22.886c1.879,0,3.732-0.423,5.426-1.237l135.817-65.425c2.633-1.27,4.738-3.42,5.95-6.079c0.171-0.375,0.334-0.754,0.497-1.134 c0.663-1.552,1.005-3.223,1.005-4.91v-56.407l19.419-9.354v77.412c-4.202,2.801-7.441,6.998-9.01,12.109l-11.049,36.002 c-1.361,4.44-1.324,9.124,0.109,13.542l10.246,31.578c2.922,9.007,11.245,15.254,20.709,15.545 c0.063,0.002,0.125,0.003,0.188,0.004l0.312,0.005c0.065,0.001,0.13,0.001,0.196,0.001c9.304,0,17.52-5.594,20.931-14.253 l11.847-30.072c1.828-4.637,2.059-9.824,0.65-14.605L452.043,319c-1.539-5.229-4.806-9.522-9.083-12.368v-89.438l26.97-12.992 c4.325-2.084,7.075-6.46,7.075-11.262v-9.955c0-4.801-2.75-9.178-7.075-11.262L243.827,62.81c-3.429-1.651-7.422-1.651-10.85,0 L7.075,171.628C2.75,173.711,0,178.088,0,182.89v10.146C0,197.837,2.75,202.213,7.075,204.297z M429.886,385.539l-7.853-24.202 l8.376-27.295l8.456,28.704L429.886,385.539z M373.54,287.824l-126.548,60.959h-17.179l-126.547-60.959v-37.19l129.712,62.483 c1.714,0.826,3.569,1.238,5.425,1.238s3.71-0.412,5.425-1.238l129.713-62.482L373.54,287.824L373.54,287.824z M238.402,87.946 l207.632,100.017l-63.763,30.715c-0.562,0.178-1.116,0.387-1.656,0.646L238.402,287.83L96.19,219.324 c-0.539-0.259-1.093-0.468-1.654-0.646l-63.764-30.716L238.402,87.946z"></path> </g> </g></svg>
  )

  const isEducationOpen = activeSection === 'education'
  const isSkillsOpen = activeSection === 'skills'
  const isSskillsOpen = activeSection === 'sskills'
  const isCertssOpen = activeSection === 'certs'
  const isLangOpen = activeSection === 'lang'
  

  return (
    <div className='resumeAll'>
      <div className="bdy">
      <div className="line"></div>
      <div className="sep"></div>
      <div className="sep"></div>
        {/* Education Section */}
        <div className="heads">
          <div className="logo" onClick={() => toggleSection('education')}>
            {educationIcon}
          </div>
          <div className="rght">
            <div className="hd">Education</div>
            <div className={`in ${!isEducationOpen ? 'zeroh' : ''}`} id='dtls'>
              <div className="clg">Chandigarh University, Panjab</div>
              <div className="ii">Bachelor of Science in Computer Science (B.E. CSE)</div>
              <div className="iid">2022 - 2026</div>
              <div className="clg2">Angel's Academy Sr. Sec. School, Haridwar</div>
              <div className="ii">+2 Mathematics</div>
              <div className="iid iid1">2020 - 2022</div>
            </div>
          </div>
        </div>

        <div className={`ln ${!isEducationOpen ? 'zeroh' : ''} ${isEducationOpen ? 'btmar' : ''}`} id="lin">
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
        </div>

        <div className="sep"></div>

        <div className="heads">
          <div className="logo" onClick={() => toggleSection('skills')}>
            {skillsIcon}
          </div>
          <div className="rght">
            <div className="hd">Technical Skills</div>
            <div className={`in ${!isSkillsOpen ? 'zeroh' : ''}`} id='dtls'>
              <div className="clg">Android Development</div>
              <div className="ii">Flutter, NodeJs, Firebase, MongoDB, Firebase</div>
              <div className="iid">Intermediate</div>
              <div className="clg2">Web Development</div>
              <div className="ii">HTML, CSS, JavaScript, Express, MongoDB, NodeJs</div>
              <div className="iid iid1">Intermediate</div>
            </div>
          </div>
        </div>

        <div className={`ln ${!isSkillsOpen ? 'zeroh' : ''} ${isSkillsOpen ? 'btmar' : ''}`} id="lin">
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
        </div>

        <div className="sep"></div>

        <div className="heads">
          <div className="logo" onClick={() => toggleSection('sskills')}>
            {softSkillsIcon}
          </div>
          <div className="rght">
            <div className="hd">Soft Skills</div>
            <div className={`in ${!isSskillsOpen ? 'zeroh' : ''}`} id='dtls'>
              <div className="clg">Public Speaking</div>
              <div className="ii">State-Level Runner-Up in Turncoat Competition</div>
              <div className="iid">Uttrakhand</div>
              <div className="clg2">Team Management</div>
              <div className="ii">Collaborated with peers on multiple project-based initiatives</div>
              <div className="iid iid1">Chandigarh University</div>
            </div>
          </div>
        </div>

        <div className={`ln ${!isSskillsOpen ? 'zeroh' : ''} ${isSskillsOpen ? 'btmar' : ''}`} id="lin">
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
        </div>
        
        <div className="sep"></div>

        <div className="heads">
          <div className="logo" onClick={() => toggleSection('certs')}>
            {certIcon}
          </div>
          <div className="rght">
            <div className="hd">Certificates</div>
            <div className={`in ${!isCertssOpen ? 'zeroh' : ''}`} id='dtls'>
              <div className="clg">Meta-React Native</div>
              <div className="ii">Instructor: Meta Staff</div>
              <div className="iid">Intermediate</div>
              <div className="clg21">IIT_KRG-Cloud Computing</div>
              <div className="ii">Instructor: Prof. Soumya K. Ghosh</div>
              <div className="iid">Intermediate</div>
            </div>
          </div>
        </div>

        <div className={`ln ${!isCertssOpen ? 'zeroh' : ''} ${isCertssOpen ? 'btmar' : ''}`} id="lin">
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
        </div>

        <div className="sep"></div>

        <div className="heads">
          <div className="logo" onClick={() => toggleSection('lang')}>
            {langIcon}
          </div>
          <div className="rght">
            <div className="hd">Languages</div>
            <div className={`in ${!isLangOpen ? 'zeroh' : ''}`} id='dtls'>
              <div className="clg">English</div>
              <div className="ii">Proficiency: Fluent</div>
              <div className="iid">Non-Native</div>
              <div className="clg2 down">Hindi</div>
              <div className="ii">Proficiency: Fluent</div>
              <div className="iid">Native</div>
            </div>
          </div>
        </div>

        <div className={`ln ${!isLangOpen ? 'zeroh' : ''}`} id="lin">
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className="lin"></div>
          <div className='crc'><div className="bcir"><div className="scir"></div></div></div>
        </div>

      </div>
      <a href="https://drive.google.com/file/d/1TSzNwJW3vTIXl5AikdbBFAe1TPUivBg1/view?usp=drive_link"><button className='btn pos'>Show Resume</button></a>
    </div>
  )
}

export default Resume

import React from 'react'
import './abtme.css'
import Tech from './minorComponents/tech'
const aboutMe = (props) => {

  var webApps = <svg height={"40px"} fill="#FFDB70" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,60.046v391.908h512V60.046H0z M496.378,100.306H127.903v15.622h368.476v320.406H15.622v-0.001V75.668h480.757V100.306z "></path> </g> </g> <g> <g> <rect x="32.092" y="100.301" width="15.622" height="15.622"></rect> </g> </g> <g> <g> <rect x="63.334" y="100.301" width="16.663" height="15.622"></rect> </g> </g> <g> <g> <rect x="95.614" y="100.301" width="16.663" height="15.622"></rect> </g> </g> <g> <g> <path d="M40.031,140.106v271.818h111.695V140.106H40.031z M136.104,396.303H55.652V266.659 c10.168,10.57,24.437,17.167,40.227,17.167c15.789,0,30.058-6.596,40.225-17.167V396.303z M95.879,268.204 c-22.182,0-40.227-18.045-40.227-40.225c0-22.181,18.045-40.225,40.227-40.225c22.181,0,40.225,18.045,40.225,40.225 C136.104,250.159,118.059,268.204,95.879,268.204z M136.104,189.298c-10.168-10.57-24.436-17.166-40.225-17.166 s-30.059,6.598-40.227,17.167v-33.57h80.452V189.298z"></path> </g> </g> <g> <g> <polygon points="176.134,140.106 176.134,267.814 368.085,267.814 368.085,252.192 191.755,252.192 191.755,155.728 400.305,155.728 400.305,219.972 415.927,219.972 415.927,140.106 "></polygon> </g> </g> <g> <g> <rect x="175.805" y="291.925" width="184.334" height="15.622"></rect> </g> </g> <g> <g> <rect x="175.805" y="324.209" width="23.953" height="15.622"></rect> </g> </g> <g> <g> <rect x="175.805" y="348.162" width="80.191" height="15.622"></rect> </g> </g> <g> <g> <rect x="271.617" y="348.162" width="40.616" height="15.622"></rect> </g> </g> <g> <g> <rect x="327.854" y="348.162" width="80.191" height="15.622"></rect> </g> </g> <g> <g> <rect x="175.805" y="372.115" width="119.765" height="15.622"></rect> </g> </g> <g> <g> <rect x="175.805" y="396.068" width="176.003" height="15.622"></rect> </g> </g> <g> <g> <path d="M461.744,262.405l-66.103-39.663c-7.122-4.272-16.195-3.157-22.069,2.717c-5.872,5.872-6.988,14.947-2.716,22.067 l39.664,66.105c2.949,4.917,8.134,7.85,13.866,7.85s10.916-2.935,13.866-7.85l0.719-1.198l2.037-10.794 c0.844-4.47,4.275-7.902,8.746-8.746l10.796-2.037l1.198-0.719c4.916-2.949,7.85-8.134,7.85-13.867 C469.596,270.539,466.661,265.355,461.744,262.405z M446.857,277.543c-10.836,2.043-19.157,10.365-21.202,21.201l-1.342,7.115 c-0.255-0.023-0.344-0.172-0.399-0.263l-39.663-66.104c-0.579-0.963-0.427-2.191,0.367-2.985c0.472-0.472,1.097-0.717,1.728-0.717 c0.432,0,0.866,0.115,1.258,0.349l66.104,39.663c0.093,0.055,0.242,0.144,0.265,0.4L446.857,277.543z"></path> </g> </g> <g> <g> <rect x="71.665" y="363.784" width="47.906" height="15.622"></rect> </g> </g> <g> <g> <rect x="71.665" y="300.256" width="47.906" height="15.622"></rect> </g> </g> <g> <g> <rect x="71.665" y="332.541" width="47.906" height="15.622"></rect> </g> </g> </g></svg>

  var mobileApps = <svg height={"40px"} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#FFDB70" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#FFDB70" d="M48,0H16c-2.211,0-4,1.789-4,4v56c0,2.211,1.789,4,4,4h32c2.211,0,4-1.789,4-4V4C52,1.789,50.211,0,48,0z M50,60c0,1.104-0.896,2-2,2H16c-1.104,0-2-0.896-2-2v-8h36V60z M50,50H14V10h36V50z M50,8H14V4c0-1.104,0.896-2,2-2h32 c1.104,0,2,0.896,2,2V8z"></path> <path fill="#FFDB70" d="M32,60c1.658,0,3-1.342,3-3s-1.342-3-3-3s-3,1.342-3,3S30.342,60,32,60z M32,56c0.553,0,1,0.447,1,1 s-0.447,1-1,1s-1-0.447-1-1S31.447,56,32,56z"></path> <path fill="#FFDB70" d="M33,4h-6c-0.553,0-1,0.447-1,1s0.447,1,1,1h6c0.553,0,1-0.447,1-1S33.553,4,33,4z"></path> <circle fill="#FFDB70" cx="37" cy="5" r="1"></circle> </g> </g></svg>

  var coding = <svg viewBox="0 0 24 24" height={"50px"} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 16.5L13.5 7.5" stroke="#FFDB70" stroke-linecap="round"></path> <path d="M16.5 8.5L19.5 12L16.5 15.5" stroke="#FFDB70" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.5 8.5L4.5 12L7.5 15.5" stroke="#FFDB70" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

  var database = <svg height={"40px"} fill="#FFDB70" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.5 0C.678 0 0 .678 0 1.5v25c0 .822.678 1.5 1.5 1.5H3v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h14v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h1.5c.822 0 1.5-.678 1.5-1.5v-25c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v25c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-25c0-.286.214-.5.5-.5zM5 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 9c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM9 13c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 18c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM5 22c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-9 6h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28zm19 0h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28z"></path></g></svg>

  return (
    <div className='whole' id={props.id}>
        <div className="line">
        </div>
        <div className="text">
        A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions. Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization. Adept at debugging to ensure high-quality, responsive apps and An agile collaborator committed to staying current with industry trends.  <br/> I’ve been diving into web development with React, expanding my skills into building responsive web apps with modern UI/UX principles. I'm particularly interested in combining both mobile and web development to create seamless cross-platform experiences.
        
        </div>
        <div className="whatwedo">
            What I'm Doing
        </div>
        <div className='logs'>
        <div>
        <Tech icon={mobileApps} title={"Mobile Apps"} txt={"Professional development of applications for Android and ios."}/>
        <Tech icon={webApps} title={"Web Apps"} txt={
            "High-quality development of sites at the professional level."
        }/>
        </div>
        <div>
        <Tech icon={coding} title={"Programming"} txt={"Create clean and scalable code for real world problems."}/>
        <Tech icon={database} title={"Database Integration"} txt={
            "Use database for dynamic data updates, enabling rich user experiences."
        }/>
        </div>        
        </div>
    </div>
  )
}

export default aboutMe
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='nav'>
        <span className="logo">Akhil</span>
        <span className="options">
            <span className="opts">Home</span>
            <span className="opts">About</span>
            <span className="opts">Projects</span>
            <span className="opts">Email</span>
        </span>
    </div>
    <div className='block'>Body</div>
    </>
  )
}

export default Navbar
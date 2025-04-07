import React from 'react'
import './App.css'
import Left from './components/left'
import Right from './components/right'
import Center from './components/center'
const App = () => {
  return (
    <div className='main'>
      <span className="left"><Left/></span>
      <span className="center">
        <Center/>
      </span>
      <span className="right">
        <Right/>
      </span>
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Left from './components/left'
import Right from './components/right'
const App = () => {

  return (
    <>
      <div className="main">
      <div className="left">
        <Left/>
      </div>
      <div className="right">
        <Right/>
      </div>
      </div>
    </>
  )
}

export default App
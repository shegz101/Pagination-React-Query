import React from 'react'
import './App.css'
import Posts from './components/Posts'

function App() {
  return (
    <div className='app'>
      <h1 className="app__header">Random Generated Posts.</h1>
      <Posts/>
    </div>
  )
}

export default App

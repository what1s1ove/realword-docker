import React from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App() {
  const handleApiRequest = () => {
    axios.get(`/api/testwithcurrentuser`).then(({ data }) => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Change from docker
          with volumes We are in dev! It is hot
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleApiRequest}>Make api request</button>
    </div>
  )
}

export default App

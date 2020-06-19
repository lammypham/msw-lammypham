import React, { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const result = await axios.get('/login')
        if (result?.status === 200 && result?.data) {
          setData(result.data)
        }
      } catch (e) {
        console.log(e)
      }
    }

    fetchUsername()
  })
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
          {data.userName}
        </a>
      </header>
    </div>
  )
}

export default App

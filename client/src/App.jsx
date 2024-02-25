import { useState } from 'react'
import { AppContext } from './AppContext'
import './App.css'
import { Router } from 'express'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContext.Provider>
      <Router/>
    </AppContext.Provider>
  )
}

export default App

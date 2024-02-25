import { useState } from 'react'
import './App.css'

import { AppContext } from './components/AppContext'
import Router from './components/Router'

function App() {
  const [errMsg, setErrMsg] = useState("")

  return (
    <AppContext.Provider value={{
      errMsg,
      setErrMsg
      }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App

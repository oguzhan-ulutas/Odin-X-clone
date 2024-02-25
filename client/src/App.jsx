import './App.css'

import { AppContext } from './components/AppContext'
import Router from './components/Router'

function App() {
  

  return (
    <AppContext.Provider value={{}} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App

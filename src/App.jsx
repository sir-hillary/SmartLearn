import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className="bg-white backdrop-blur-md min-h-screen bg-cover bg-center bg-no-repeat top-0 left-0 overflow-hidden">
      <Navbar />
      <main>
        <Home />
      </main>

    </div>
  )
}

export default App

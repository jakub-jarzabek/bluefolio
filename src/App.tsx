import { useState } from 'react'
import { Navbar } from './components'
import { Home } from './screens'
import Admin from './screens/admin'
import { Routes, Route } from 'react-router-dom'
import '@aws-amplify/ui-react/styles.css'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

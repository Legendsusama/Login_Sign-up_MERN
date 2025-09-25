import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import PublicRoute from './routes/PublicRoute.jsx'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute> } />
        <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>} />
      </Routes>
    </>
  )
}

export default App
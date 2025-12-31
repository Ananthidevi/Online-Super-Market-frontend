import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"


import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/register' element={<Register />} />
       

          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='/home' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

        </Routes>
      </>
    </div>
  )
}

export default App
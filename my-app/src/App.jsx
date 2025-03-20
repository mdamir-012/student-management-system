import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import PrivateRoute from './Routes/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <div>Admin Dashboard</div>
            </PrivateRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

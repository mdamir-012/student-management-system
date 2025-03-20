import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const auth = useSelector(state => state)


  if (auth.role === 'admin') {
    return <Navigate to="/admin" />
  }

  return (
    <div className="dashboard">
      <h1>Welcome {auth.user}!</h1>
      <p>Role: {auth.role}</p>
      <div className="dashboard-content">
        <h2>Student Dashboard</h2>

        <div className="student-info">
          <p>Your student information will appear here</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
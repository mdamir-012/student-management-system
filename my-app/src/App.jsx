import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import StudentTable from './Components/StudentTable';
import PrivateRoute from './Routes/PrivateRoute';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Student Management System</h1>
        <StudentTable />
      </div>
    </div>
  );
};

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
  );
}

export default App;

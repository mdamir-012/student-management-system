import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Dashborad from '../Components/Dashborad'
import Login from '../Components/Login'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashborad />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      
    </>
  )
}

export default AllRoutes

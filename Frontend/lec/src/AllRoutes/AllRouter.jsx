import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from '../Components/Register'
import Homepage from '../Components/Homepage'
import Login from '../Components/Login'
import PrivateRoute from '../Components/PrivateRoutes/PrivateRoute'
import Mynotes from '../Components/Mynotes'
import Createnote from '../Components/Createnote'
import Patch from '../Components/Patch'

export default function AllRouter() {
  return (
    <div>
        <Routes>

            <Route path="/register" element={<Register/>}></Route>
        
            <Route path="/" element={<Homepage/>}></Route>     
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/mynotes" element={<PrivateRoute><Mynotes/></PrivateRoute>}></Route>
        <Route path="/createnotes" element={<PrivateRoute><Createnote/></PrivateRoute>}></Route>
        <Route path="/:id" element={<Patch/>}></Route>
        
        
        
        
        </Routes>
    </div>
  )
}

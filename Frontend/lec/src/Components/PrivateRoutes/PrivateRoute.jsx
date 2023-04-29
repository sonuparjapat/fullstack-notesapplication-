import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
export default function PrivateRoute({children}) {
    const data=useSelector((state)=>state.login)
    const {token,status}=data
    const location=useLocation()

    if(token==""){
        return <Navigate to="/login" state={location.pathname} replace/>
    }
return children
}

import React from 'react'
import { Box } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import AllRouter from '../AllRoutes/AllRouter'
export default function Navbar() {
  return (
    <div>
    
        <Box display={"flex"} justifyContent={"space-around"}>

<Link to="/">Homepage</Link>

<Link to="/createnotes">CreateNotes</Link>
<Link to="/mynotes">My Notes</Link>
{/* <Link to="/seeall">SeeAll</Link> */}
<Link to="/register">Register</Link>
<Link to="/login">Login</Link>
<Link to="/aboutus">Aboutus</Link>


        </Box>
        <AllRouter/>
    </div>

  )
}

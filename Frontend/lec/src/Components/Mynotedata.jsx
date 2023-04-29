import React, { useEffect, useState } from 'react'
import { Box,Button,Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata } from '../Reducers/DeleteNote/Action'
import { notes } from '../Reducers/Mynotes/Action'
export default function Mynotedata({author,title,body,count,_id}) {
    // console.log(author,title,body)
    const [check,setCheck]=useState(false)
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.deletedata)
    const handledelete=(id)=>{
dispatch(deletedata(id))
    }
 
  return (
    <div>
        <Box mt="20px" border="1px solid teal">

<Box  display={"flex"}  mt="20px" justifyContent={'space-evenly'} >
<Box width="10%" border="1px solid teal">
<label>Count</label>
    <Box>{count}</Box>
    </Box> 
<Box width="10%" border="1px solid teal">
<label>Author</label>
    <Box>{author}</Box>
    </Box> 
   <Box width="30%" border="1px solid teal">
<label>Title</label>
    <Box>{title}</Box>
    </Box> 
    <Box width="40%" border="1px solid teal">
<label>Description</label>
<Box>{body}</Box>
    </Box>
    {/* <Box width="8%" border="1px solid teal">

<Box mt="10px"><Link  to={`/${_id}`}>Edit</Link></Box>
    </Box> */}
  
</Box>

<Box  width="20%" display="flex" margin={"auto"} mt="20px"  justifyContent={"space-around"}>
<Button  mb="10px" backgroundColor={"green.300"}><Link to={`/${_id}`}>Edit</Link></Button>
<Button onClick={()=>handledelete(_id)} backgroundColor={"red.300"}>DELETE</Button>


    </Box>

        </Box>

    </div>
  )
}

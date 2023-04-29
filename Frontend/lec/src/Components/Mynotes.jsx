import { Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notes } from '../Reducers/Mynotes/Action'
import { Box,Image } from '@chakra-ui/react'
import Mynotedata from './Mynotedata'

export default function Mynotes() {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.mynotes)
    const {notesdata,isLoading,isError,msg,status}=data
    // console.log(notesdata)
    // console.log(notesdata.length)
    useEffect(()=>{
dispatch(notes)
    },[])
   if(isLoading){
    return <Heading>...loading</Heading>
   }
  return (
    <div>
        <Heading>My All Notes</Heading>
        
        <Box>
            <Heading >Total={notesdata.length}</Heading>
{
notesdata.map((el,index)=>{
return (

<Mynotedata author={el.author} title={el.title} body={el.body} count={index+1} _id={el._id}/>)
}

)}


            
    
        </Box>
        
       </div>
  )
}

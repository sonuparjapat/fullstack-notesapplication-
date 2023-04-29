import { Heading, Textarea,Box,Input} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../Reducers/NotesCreate/Action'
const initial={
    title:"",
    body:"",
    author:""
}
export default function Createnote() {
    const [createdata,setCreatedata]=useState(initial)
    // console.log(createdata)
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.create)
    const {isLoading,isError,msg,status}=data
    const handlechange=(e)=>{
     
        const {name,value}=e.target
        setCreatedata({...createdata,[name]:value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        const {title,body,author}=createdata
        if(title&&body&&author){
            dispatch(create(createdata))
        }else{
            alert("All fields are required!!")
        }
        
    }
  return (
    <div>
<Heading>Create your Own Notes</Heading>
<Box>
<form onSubmit={handlesubmit}>
<Heading mt="40px">Author</Heading>
<Input onChange={handlechange} name="author"  placeholder="please enter the author name"/>
    <Heading mt="40px">Title</Heading>
<Input onChange={handlechange}  name="title"  placeholder="please enter the title"/>
<Heading  mt="80px">Description</Heading>
<Textarea name="body" placeholder="Enter the description" onChange={handlechange}/> 
<Input w="50%" backgroundColor="pink.300" mt="30px" type="submit"/>
</form>




</Box>

    </div>
  )
}

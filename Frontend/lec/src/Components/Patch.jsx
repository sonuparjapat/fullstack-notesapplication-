import { Box, Heading, Image,Input } from '@chakra-ui/react'
import styles from "./Patch.module.css"
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { single } from '../Reducers/SingleNote/action'
const initialdata={
   "author":"",
   "title":"",
   "body":""
}
export default function Patch() {
    const [data,setData]=useState(initialdata)
    const {id}=useParams()
    // console.log(id)
    const dispatch=useDispatch()
    const eachnote=useSelector((state)=>state.single)
   
    const {isLoading,isError,singlenote}=eachnote
    const handlechange=(e)=>{
        const {name,value}=e.target
setData({...data,[name]:value})    }
//  useEffect(()=>{
//     dispatch(single(id))
//  },[])
const handlesubmit=(e)=>{

    e.preventDefault()
    const {author,title,body}=data
    if(author&&title&&body){
        dispatch(single(id,data))  
    }
    else{
        alert("All fields are required!!")
    }

}
  return (
    <div>
        
        <Box className={styles.container}>


            <Image width="100%" opacity="0.5" height="100vh" src="https://e1.pxfuel.com/desktop-wallpaper/211/747/desktop-wallpaper-for-pc-full-screen-pc-cars-hq.jpg"/>
            <Heading  className={styles.text}>Edit YOUR DATA</Heading>
         <Heading fontSize="15px" className={styles.text2}>with _ID:{id}</Heading>
       <Box className={styles.inputbox}>
<form onSubmit={handlesubmit}>
    <Input name="author" onChange={handlechange}  _placeholder={{fontWeight:"bold",color:"white"}} placeholder="Athour" />
    <Input name="title" onChange={handlechange}   _placeholder={{fontWeight:"bold",color:"white"}} placeholder="title" />
    <Input name="body" onChange={handlechange}  _placeholder={{fontWeight:"bold",color:"white"}} placeholder="body" />
    <Input backgroundColor="teal.100" type="submit"/>
</form>



       </Box>
       
       
       
        </Box>
    </div>
  )
}

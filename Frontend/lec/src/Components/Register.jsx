import { Box, Input,Image ,Heading, Button,Alert,useToast, AlertIcon} from '@chakra-ui/react'
import React, { useState } from 'react'
import { registerfailure,regesterrequest,regestersuccess } from '../Reducers/Register/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styles from "../Components/Register.module.css"
import { registering } from '../Reducers/Register/Action'

const initial={
  name:"",
  email:"",
  password:""
}
export default function Register() {
  const [userdata,setUserdata]=useState(initial)
  const handlechange=(e)=>{
    const {name,value}=e.target
    setUserdata({...userdata,[name]:value})
  }
  const navigate=useNavigate()
  const toast=useToast()
  // console.log(userdata)
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.register)
  const {isLoading,isError,msg,status}=data
  // console.log(msg,status)
  // Handling post(register) request>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handlesubmit=(e)=>{
    e.preventDefault()
    const {name,email,password}=userdata
    if(name&&email&&password){
      dispatch(registering(userdata)).then((res)=>{
 
    
        dispatch(regestersuccess(res.data))
        navigate("/login")
        setTimeout(()=>{
        dispatch(regestersuccess({msg:"",status:""}))
        },500)
    
        }).catch((err)=>{
    
      
        dispatch(registerfailure(err.response.data))
        setTimeout(()=>{
            dispatch(registerfailure({msg:"",status:""}))
            },500)
        })
    }else{
      alert("All fields are required!!")
    }
   
   
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div>
   
   {msg&&status&&
 toast({
  title: `${msg}`,
 position:"top",

  status: `${status}`,
  duration: 3000,
  isClosable: true,
})
  }



        <Box className={styles.container}>
            <Image height={"100vh"} width="100%" src="https://cdn.pixabay.com/photo/2018/07/12/21/32/subscribe-3534409_960_720.jpg"/>
        <Box   className={styles.inputbox}> 
        <Heading color="black">Register</Heading>
        <form onSubmit={handlesubmit}>
        <Input name="name"  onChange={handlechange} color="black" fontWeight={'bold'} _placeholder={{"color":"pink.300"}} placeholder="Please Enter Your Name"/>
        <Input name="email"  onChange={handlechange} color="black" fontWeight={'bold'} _placeholder={{"color":"pink.300"}} placeholder="Email"/>
        <Input name="password" onChange={handlechange}  color="black" fontWeight={'bold'} _placeholder={{"color":"pink.300"}} placeholder="Password"/>
     <Button width="100%" color="black" backgroundColor="pink.200" type="submit">Submit</Button>
  
        </form>
    
        <Link id={styles.Link} color="black" to="/login">or Login</Link>


        </Box> 
    
        </Box>
    </div>
  )
}

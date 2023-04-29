import React from 'react'
import styles from "./Login.module.css"
import { useState } from 'react'
import { Box,Image,Input,Button, Heading,useToast,Link} from '@chakra-ui/react'
import { login, loginfailure, loginrequest, loginsuccess, reloading, userlogin } from '../Reducers/Login/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const initial={
    email:"",
    password:""
}
export default function Login() {
    const [logindata,setLogindata]=useState(initial)
    const toast=useToast()
    const handlechange=(e)=>{
        const {name,value}=e.target
        setLogindata({...logindata,[name]:value})

    }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    const data=useSelector((state)=>state.login)

    const {token,isLoading,isError,msg,status}=data
    // console.log(token)
    const handlesubmit=(e)=>{
        e.preventDefault()
        const {email,password}=logindata
        if(email&&password){
          dispatch(userlogin(logindata)).then((res)=>{
            alert("login successfully")
              navigate(location.state,{replace:true})
            
                
              // console.log(res)
          
          
          }).catch((err)=>{
                 dispatch(loginfailure(err.response.data))
                 setTimeout(()=>{
                  dispatch(loginfailure({msg:"",status:""}))
                  },100)
            
              })
        }else{
          alert("All fields are required!!")
        }
       
    }
  return (
    <div>
          
   {/* {msg&&status&&
 toast({
  title: `${msg}`,
 position:"top",

  status: `${status}`,
  duration: 3000,
  isClosable: true,
})
  } */}
        <Box className={styles.container}>
<Image height="100vh" width="100%" src="https://cdn.pixabay.com/photo/2022/06/17/16/48/subscribe-7268360_960_720.jpg"/>
<Box className={styles.inputbox}>
    <Heading >Login</Heading>
    <Box>
        <form onSubmit={handlesubmit}>
            <Input  onChange={handlechange} name="email" color="white" fontWeight={"bold"} _placeholder={{fontWeight:"bold",color:"white"}} placeholder="Please Enter Email"/>
            <Input onChange={handlechange}  name="password" color="white" fontWeight={"bold"} _placeholder={{fontWeight:"bold",color:"white"}} placeholder="Please Enter Email"/>
      <Button backgroundColor="teal.200" width="100%" type="submit" color="white" fontWeight={"bold"}>Login</Button>
        </form>
        <Link id={styles.Link} to="/register">or Register</Link>
    </Box>
</Box>

        </Box>
        
        </div>
  )
}

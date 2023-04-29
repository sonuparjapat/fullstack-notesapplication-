import axios from "axios"
import { loginfail, loginreq, loginsucc, reload } from "./ActionTypes"

export const loginrequest=()=>{
    return {type:loginreq}
}
export const loginsuccess=(payload)=>{
    return {type:loginsucc,payload}
}
export const loginfailure=(payload)=>{
    return {type:loginfail,payload}
}
export const reloading=()=>{
    return {type:reload}
}
export const userlogin=(obj)=>(dispatch)=>{
    dispatch(loginrequest())
    return axios.post("https://wild-rose-crayfish.cyclic.app/user/login",obj).then((res)=>{
        dispatch(loginsuccess(res.data))
  
    //     setTimeout(()=>{
    // dispatch(reloading())
    //         },500)
          
        // console.log(res)
    
    
    })
}
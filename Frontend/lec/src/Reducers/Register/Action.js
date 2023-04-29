import { regreq,regsucc,regfail } from "./ActionType";
import axios from "axios"

export const regesterrequest=()=>{
    return {type:regreq}
}
export const regestersuccess=(payload)=>{
    return {type:regsucc,payload}
}
export const registerfailure=(payload)=>{
    return {type:regfail,payload}
}

export const registering=(obj)=>(dispatch)=>{
dispatch(regesterrequest())

return axios.post("https://wild-rose-crayfish.cyclic.app/user/register",obj,{
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // allow cross-origin requests from any domain
    }})


}
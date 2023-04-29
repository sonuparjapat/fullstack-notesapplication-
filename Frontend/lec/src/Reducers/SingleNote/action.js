import axios from "axios"
import { singlefail, singlereq, singlesucc } from "./ActionTypes"


export const signglerequest=()=>{
    return {type:singlereq}
}
export const singlesuccess=(payload)=>{
    return {type:singlesucc,payload}
}
export const singlefailure=()=>{
    return {type:singlefail}
}

export const single=(id,obj)=>(dispatch)=>{

    dispatch(signglerequest())
    const token=JSON.parse(localStorage.getItem("token"))
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    axios.put(`https://wild-rose-crayfish.cyclic.app/notes/put/${id}`,obj, { headers}).then((res)=>{
// console.log(res.data.note)

    dispatch(singlesuccess(res.data))
    alert(`${res.data.msg}`)

 }).catch((err)=>{
alert(`${err.response.data.msg}`)
    dispatch(singlefailure(err.response.data))
 })
}
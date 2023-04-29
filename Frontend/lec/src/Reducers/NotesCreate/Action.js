import axios from "axios"
import { createfail, createreq, createsucc } from "./ActionType"



const creatingrequest=()=>{
    return {type:createreq}
}
const creatingsuccess=(payload)=>{
    return {type:createsucc,payload}
}
const creatingfailure=(payload)=>{
    return {type:createfail,payload}
}

export const create=(obj)=>(dispatch)=>{
    dispatch(creatingrequest())
    const token=JSON.parse(localStorage.getItem("token"))
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    axios.post("https://wild-rose-crayfish.cyclic.app/notes/create",obj, { headers}).then((res)=>{
        alert(`${res.data.msg}`)
        creatingsuccess(res.data)
    }).catch((err)=>{
        alert(`${err.response.data.msg}`)
        dispatch(creatingfailure(err.response.data))
    })
}
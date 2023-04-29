import axios from "axios"
import { deletefail, deletereq, deletesucc } from "./ActionType"
import { notes } from "../Mynotes/Action"








export const deletingrequest=()=>{
    return {type:deletereq}
}
export  const deletingsuccess=(payload)=>{
    return {type:deletesucc,payload}
}
export const deletingfailure=(payload)=>{
    return {type:deletefail,payload}
}
export const deletedata=(id)=>(dispatch)=>{
    console.log(id)
    dispatch(deletingrequest())
    const token=JSON.parse(localStorage.getItem("token"))
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return axios.delete(`https://wild-rose-crayfish.cyclic.app/notes/delete/${id}`,{headers}).then((res)=>{
        console.log(res)
        dispatch(deletingsuccess(res.data))

        alert(`${res.data.msg}`)
        dispatch(notes)
    }).catch((err)=>{
        alert(`${err.response.data.msg}`)
        dispatch(deletingfailure(err.response.data))
    })
}
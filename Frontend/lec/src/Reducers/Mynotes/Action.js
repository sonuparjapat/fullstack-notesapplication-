import axios from "axios"
import { notesfail, notesreq, notessucc } from "./ActionTypes"





export const noterequest=()=>{
    return {type:notesreq}
}
export const notesuccess=(payload)=>{
    return {type:notessucc,payload}
}
export const notesfailure=(payload)=>{
    return {type:notesfail,payload}
}




// return axios.get(URLConstants.USER_URL, );
export const notes=(dispatch)=>{
    dispatch(noterequest())
    const token=JSON.parse(localStorage.getItem("token"))
    const header = `Authorization: Bearer ${token}`;
 axios.get("https://wild-rose-crayfish.cyclic.app/notes", { headers: {"Authorization" : `Bearer ${token}`}} ).then((res)=>{
    console.log(res)
    dispatch(notesuccess(res.data))

 }).catch((err)=>{

    dispatch(notesfailure(err.response.data))
 })

}
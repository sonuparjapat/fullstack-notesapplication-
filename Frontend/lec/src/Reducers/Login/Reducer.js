import { loginfail, loginreq, loginsucc,reload } from "./ActionTypes"


const getdata=(key)=>{
let data=JSON.parse(localStorage.getItem(key))
return data
}
const setdata=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
export let  initialdata={
    isLoading:false,
    isError:false,
    token:getdata("token")||"",
    msg:"",
    status:""

}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case loginreq:{
            return {...state,isLoading:true,isError:false,msg:"",status:""}
        
    }
    case loginsucc:{
        setdata("token",payload.token)
        return {...state,isLoading:false,isError:false,msg:payload.msg,status:payload.status,token:getdata("token")}
    }
    case loginfail:{
        return {...state,isLoading:false,isError:true,msg:payload.msg,status:payload.status,token:""}
    }
    case reload:{
        return {...state,isLoading:false,isError:false,msg:"",status:""}
    }
    default:{
        return state
    }
}}
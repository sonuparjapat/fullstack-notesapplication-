
import { createfail, createreq, createsucc } from "./ActionType"

const inititaldata={
    isLoading:false,
    isError:false,
    msg:"",
    status:""
}

export const reducer=(state=inititaldata,action)=>{
    const {type,payload}=action
    switch(type){
        case createreq:{
            return {...state,isLoading:true,isError:false,msg:"",status:""}
        }
        case createsucc:{
            return {...state,isLoading:false,isError:false,msg:payload.msg,status:payload.status}
        }
        case createfail:{
            return {...state,isLoading:false,isError:true,msg:payload.msg,status:payload.status}
        }
        default:{
            return state
        }
    }
}
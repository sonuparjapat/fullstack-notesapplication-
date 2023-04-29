import { regfail, regreq, regsucc } from "./ActionType"



const initialdata={
    isLoading:false,
    isError:false,
    msg:"",
    status:""
}

export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case regreq:{
            return {...state,isLoading:true,isError:false,msg:"",status:""}
        }
        case regsucc:{
            return {...state,isLoading:false,isError:false,msg:payload.msg,status:payload.status}
        }
        case regfail:{
            return {...state,isLoading:false,isError:true,msg:payload.msg,status:payload.status}
        }
        default:{
            return state
        }
    }
}
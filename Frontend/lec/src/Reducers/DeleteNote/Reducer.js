
import { deletefail, deletereq, deletesucc } from "./ActionType"

const initialdata={
    isLoading:false,
    isError:false,
    msg:"",
    status:""
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,isLoading:true,isError:false,msg:"",state:""}
        }
        case deletesucc:{
            return {...state,isLoading:false,isError:false,msg:payload.msg,status:payload.status}
        }
        case deletefail:{
            return {...state,isLoading:false,isError:true,msg:payload.msg,status:payload.status}
        }
        default:{
            return state
        }
    }
}
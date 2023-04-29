import { notesfail, notesreq, notessucc } from "./ActionTypes"







const inititaldata={
    notesdata:[],
    isLoading:false,
    isError:false,
    msg:"",
    status:""
}
export const reducer=(state=inititaldata,action)=>{
    const {type,payload}=action
    switch(type){
       case notesreq:{
return {...state,isLoading:true,isError:false,msg:"",status:"",notesdata:[]}
        }
        case notessucc:{
            return {...state,isLoading:false,isError:false,msg:payload.msg,status:payload.status,notesdata:payload.data}
        }
        case notesfail:{
            return {...state,isLoading:false,isError:true,msg:payload.msg,status:payload.notesfail,notesdata:[]}
        }
        default :{
            return state
        }
    }
}
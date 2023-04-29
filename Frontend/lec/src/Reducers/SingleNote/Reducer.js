import { singlefail, singlereq, singlesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,

}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch (type){
        case singlereq:{
            return {...state,isLoading:true,isError:false}
        }
        case singlesucc:{
            return {...state,isLoading:false,isError:false}
        }
        case singlefail:{
            return {...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}
import { authConstants } from "../action/constants"

const initState={
    name:'Riz'
};

export default (state=initState,action)=>{
    switch(action.type){
        case  authConstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
            break;
    }
  
    return state;
}
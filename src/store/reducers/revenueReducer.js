import { REVENUELIST } from "../actions/actionTypes";

const initialState ={
    revenuesData:null
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case REVENUELIST:
      return {
        ...state,
        revenuesData: action.revenues,
      };
     
    default:
      return state;
  }
    
}
export default userReducer;
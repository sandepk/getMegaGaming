import { RESETUSER, USERDETAILS,NOTIFICATION_WITH_MESSAGE } from "../actions/actionTypes";

const initialState ={
    userDetails:null,
    notification: null,

}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case USERDETAILS:
      return {
        ...state,
        userDetails: action.details,
      };
      case NOTIFICATION_WITH_MESSAGE:
        return {
          ...state,
          notification: action.notification,
        };
      case RESETUSER:
          return{
              ...state,
              ...initialState
          }
    default:
      return state;
  }
    
}
export default userReducer;
import { RESETUSER, USERDETAILS,NOTIFICATION_WITH_MESSAGE } from "./actionTypes";


export const setUserDetails =(details)=>{
    return{
        type:USERDETAILS,
        details:details
    }
}

export const resetUser = () =>{
    return {
        type:RESETUSER,
    }
}

export const showNotificationWithMessage = (status) => {
    return {
      type: NOTIFICATION_WITH_MESSAGE,
      notification: status,
    };
  };
  

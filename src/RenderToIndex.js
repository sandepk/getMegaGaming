import React, { useState, useEffect } from 'react';
import Login from './Components/Authentication/Login/Login';
import App from './App';
import {useSelector} from 'react-redux';
function RenderToIndex() {
  const userDetails = useSelector(state=>state.user.userDetails);
  console.log("USER DETAILS: ",userDetails)
  const [user,setUser] = useState(null);
  return (
    <div className="renderToIndex__container">
      {!userDetails?.emailVerified ? <><Login /></>:<App/>}
    
    </div>
  );
}

export default RenderToIndex;

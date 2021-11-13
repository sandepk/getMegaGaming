import React from "react";
import { Button } from "@material-ui/core";
import './Login.scss';
import {auth,provider} from '../../../firebase';
import {useDispatch} from 'react-redux';
import { setUserDetails } from "../../../store/actions";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   console.log("RESULT",result)
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   // The signed-in user info.
    //   const user = result.user;
    //   dispatch(setUserDetails(user));
    //   // ...
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });

    auth.signInWithPopup(provider).then(result=>{
      console.log(result)
      dispatch(setUserDetails(result.user))
    })

  };
  return (
    <div className="login">
      <div className="login__container">
        <Button onClick={signIn} className="login__button">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;

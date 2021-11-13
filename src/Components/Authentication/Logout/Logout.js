import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../store/actions";
import { useSelector } from "react-redux";
import "./Logout.scss";
const Logout = () => {
  const userDetails = useSelector((state) => state.user.userDetails);

  const dispatch = useDispatch();
  const signOutUser = () => {
    auth.signOut();
    dispatch(resetUser());
  };
  return (
    <div className="logout__container">
      <div className="logout__text">
        <div>{userDetails.displayName}</div>
        {userDetails.email}
      </div>
      <Button onClick={signOutUser} className="logout__Button">
        LogOut
      </Button>
    </div>
  );
};

export default Logout;

import React, { useEffect } from "react";
import Logout from "./Components/Authentication/Logout/Logout";
import RevenueList from "./Screens/RevenueList/RevenueList";
import "devextreme/dist/css/dx.light.css";
import "./App.scss";
import Logo from "./Icons/firebaselogo.png";
import PieChart from "./Components/Charts/PieChart/PieChart";
import CustomizedTooltip from "./Tooltip/CustomizedTooltip";
import { Button, IconButton } from "@material-ui/core";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import ToastNotification from "./Components/ToastNotification";
import NavigatorOnline from "react-navigator-online";

import { showNotificationWithMessage } from "./store/actions/userActions";
const App = () => {
  const dispatch = useDispatch();
  const notificationState = useSelector((state) => state.user.notification);

  const history = useHistory();
  const navigateToPieChart = () => {
    history.push("/pieChartAnalysis");
  };
  const showOnlineMessage = (status) => {
    if (status) {
      dispatch(
        showNotificationWithMessage({
          variant: "success",
          message: "You are online.! 👍",
        })
      );
    } else {
      dispatch(
        showNotificationWithMessage({
          variant: "warning",
          message: "You are offline.! 😥",
        })
      );
    }
  };
  useEffect(() => {
    showOnlineMessage(navigator.onLine);
  }, []);
  return (
    <div className="app__container">
      {notificationState !== null && (
        <ToastNotification notification={notificationState} />
      )}
      <NavigatorOnline onChange={(status) => showOnlineMessage(status)} />

      <div className="app__navbar">
        <div className="app__logo">
          <CustomizedTooltip
            title={`This Project is @copyright content of Sandeep Gupta(IITK).For More info contact +918429299481`}
          >
            <IconButton onClick={() => window.location.reload()}>
              <img
                src={Logo}
                alt="sandeep"
                width="30px"
                className="app__logo"
              />
            </IconButton>
          </CustomizedTooltip>
        </div>
        <Button onClick={navigateToPieChart}>Click to See Pie Chart</Button>
        <div className="app__signOut">
          <Logout />
        </div>
      </div>
      {routes}
    </div>
  );
};
let routes = (
  <Switch>
    <Route path="/revenueListTable" component={RevenueList} />
    <Route exact path={`/pieChartAnalysis`} component={PieChart} />
    <Redirect to="/revenueListTable" />
  </Switch>
);
export default App;

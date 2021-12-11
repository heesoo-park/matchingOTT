import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GroupPage from "./components/GroupPage";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import ProfilePage_Top from "./components/ProfilePage_Top";
import SelectPage from "./components/SelectPage";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import Signup from "./components/Signup";

export default function App() {
  const [is_active, setis_active] = useState(
    () => JSON.parse(localStorage.getItem("name")) || 0
  );

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <PublicRoute
            restricted
            component={LoginPage}
            is_active={is_active}
            path="/login"
            exact
          />
          <PrivateRoute
            component={SelectPage}
            is_active={is_active}
            path="/selectOTT"
            exact
          />
          <PrivateRoute
            component={GroupPage}
            is_active={is_active}
            path="/Grouppage"
            exact
          />
          <PrivateRoute
            component={ProfilePage_Top}
            is_active={is_active}
            path="/profile_top"
            exact
          />
          <PrivateRoute
            component={Signup}
            is_active={!is_active}
            path="/signup"
            exact
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

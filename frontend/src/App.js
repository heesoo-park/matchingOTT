import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import GroupPage from "./components/GroupPage";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import ProfilePage_Top from "./components/ProfilePage_Top";
import SelectPage from "./components/SelectPage";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import Signup from "./components/Signup";
// import ProfilePage_Payment from "./components/ProfileComponents/ProfilePage_Payment";
// import ProfilePage_Management from "./components/ProfileComponents/ProfilePage_Management";
// import AdminPage_Top from "./components/AdminPage_Top";
// import AdminRoute from "./routers/AdminRoute";

export default function App() {
  const [is_active, setis_active] = useState(
    () => JSON.parse(localStorage.getItem("name")) || 0
  );
  const [isAttend, setisAttend] = useState();
  var checkUser = localStorage.getItem("name");
  //console.log(is_active);

  useEffect(() => {
    if (checkUser != null) {
      setis_active(true);
    } else {
      setis_active(false);
    }
    return () => {
      //console.log(is_active);
      //console.log("현재 페이지에서 벗어남");
    };
  });

  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        레이아웃 구성확인용
        <br />
        <Link to={{ pathname: "/", state: is_active }}>홈</Link>
        <br />
        <Link to="/login">로그인</Link>
        <br />
        <Link to="/selectOTT">OTT선택</Link>
        <br />
        <Link to="/Grouppage">그룹페이지</Link>
        <br />
        <Link to="/profile_top">프로필화면</Link>
        <br />
        <Link to="/signup">회원가입</Link>
        <br />
      </div>
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

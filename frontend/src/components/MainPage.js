import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import surf from "./MainPage.jpg";

export default function MainPage(props) {
  const [isLogin, setisLogin] = useState(false);
  const [isAttend, setisAttend] = useState(false);

  console.log(props.location.state);
  useEffect(() => {
    setisLogin(props.location.state);
  }, [props.location.state]);

  return (
    <div>
      <Header LoginState={isLogin} AttendState={isAttend} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "auto",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div className="app-wrapper">
          <img src={surf} className="MainPage" alt="MainPage" />
          <form className="form-wrapper">
            <button className="submit">
              {" "}
              <a
                href="/login"
                style={{
                  fontFamily: "GmarketSansLight",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                시작하기
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
          <h1>UOMS</h1>
          <button>
            <Link
              to="/login"
              style={{ textDecoration: "none", marginRight: "5px" }}
            >
              로그인
            </Link>
          </button>
          뒷배경에는 이미지 넣어보기
        </div> */
}

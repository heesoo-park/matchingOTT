import React, { useState, useEffect } from "react";
import Header from "./Header";
import surf from "./MainPage.jpg";

export default function MainPage(props) {
  const [isLogin, setisLogin] = useState(false);
  const [isAttend, setisAttend] = useState(false);

  console.log(props.location.state);

  return (
    <div>
      <Header />
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
            {isLogin ? (
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
            ) : (
              <button className="submit">
                {" "}
                <a
                  href="/selectOTT"
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

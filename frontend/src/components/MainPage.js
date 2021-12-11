import React, { useState } from "react";
import Header from "./Header";
import surf from "./MainPage.jpg";

export default function MainPage() {
  const [isLogin, setisLogin] = useState(
    () => JSON.parse(localStorage.getItem("name")) || 0
  );
  const [isAttend, setisAttend] = useState(
    () => JSON.parse(localStorage.getItem("OTT")) || 0
  );

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
          {isLogin ? ( isAttend ? (<button className="submit">
                {" "}
                <a
                  href="/Grouppage"
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
              </button>) : (<button className="submit">
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
              </button>)

            ) : (
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

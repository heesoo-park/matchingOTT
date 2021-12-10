import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Font.css";

export default function Header({ LoginState, AttendState }) {
  const [isActive, setisActive] = useState(
    () => JSON.parse(localStorage.getItem("name")) || 0
  );
  const [isAttend, setisAttend] = useState(
    () => JSON.parse(localStorage.getItem("OTT")) || 0
  );

  const handleFormLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("OTT");
    localStorage.removeItem("user1");
    localStorage.removeItem("user2");
    localStorage.removeItem("user3");
    localStorage.removeItem("user4");
    window.location.replace("/");
  };

  const handleFormProfile = (event) => {
    event.preventDefault();
    window.location.replace("/profile_top");
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/*header*/}

      <div
        className="header"
        style={{
          width: "85%",
          display: "flex",
          margin: "1rem auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="header_logo">
          {/*}UOMS logo, go to main page*/}
          <a
            href="/"
            style={{
              fontFamily: "yg-jalnan",
              fontSize: "36px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "blue",
            }}
          >
            UOMS
          </a>
        </div>

        {/* menu choice */}

        <div
          className="header_menu"
          style={{
            justifyContent: "center",
            display: "block",
            paddingRight: 40,
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              padding: 40,
              fontFamily: "GmarketSansLight",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            홈
          </a>

          {isAttend ? (
            <a
              href="/Grouppage"
              style={{
                padding: 40,
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              MY그룹
            </a>
          ) : (
            <a
              href="/selectOTT"
              style={{
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              그룹선택
            </a>
          )}
        </div>

        {/*profile logo, go to profile page*/}
        <div
          className="header_login"
          style={{
            justifyContent: "center",
            display: "block",
            paddingRight: 40,
            alignItems: "center",
          }}
        >
          {isActive ? (
            <a
              href="/"
              style={{
                padding: 40,
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
              onClick={handleFormLogout}
            >
              로그아웃
            </a>
          ) : (
            <a
              href="/login"
              style={{
                padding: 40,
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              로그인
            </a>
          )}

          {isActive ? (
            <a
              href="/profile_top"
              style={{
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
              onClick={handleFormProfile}
            >
              프로필
            </a>
          ) : (
            <a
              href="/signup"
              style={{
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              회원가입
            </a>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

// var checkUser = localStorage.getItem("name");
// console.log(isActive);

// useEffect(() => {
//   if (checkUser != null) {
//     setisActive(true);
//     //console.log(isActive);
//   } else {
//     setisActive(false);
//     //console.log(isActive);
//   }
//   return () => {
//     //console.log("현재 페이지에서 벗어남");
//   };
// });

// const Header = () => (
//   <div style={{ width: "100%", margin: "0" }}>
//     {/*header*/}

//     <div
//       class="header"
//       style={{
//         width: "85%",
//         display: "flex",
//         margin: "1rem auto",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       <div class="header_logo">
//         {/*}UOMS logo, go to main page*/}
//         <a
//           href="/"
//           style={{
//             fontFamily: "yg-jalnan",
//             fontSize: "36px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "blue",
//           }}
//         >
//           UOMS
//         </a>
//       </div>

//       {/* menu choice */}

//       <div
//         class="header_menu"
//         style={{
//           justifyContent: "center",
//           display: "block",
//           paddingRight: 40,
//           alignItems: "center",
//         }}
//       >
//         <a
//           href="/"
//           style={{
//             padding: 40,
//             fontFamily: "GmarketSansLight",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "black",
//           }}
//         >
//           홈
//         </a>

//         <a
//           href="/selectOTT"
//           style={{
//             fontFamily: "GmarketSansLight",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "black",
//           }}
//         >
//           그룹선택
//         </a>

//         <a
//           href="/Grouppage"
//           style={{
//             padding: 40,
//             fontFamily: "GmarketSansLight",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "black",
//           }}
//         >
//           MY그룹
//         </a>
//       </div>

//       {/*profile logo, go to profile page*/}
//       <div
//         class="header_login"
//         style={{
//           justifyContent: "center",
//           display: "block",
//           paddingRight: 40,
//           alignItems: "center",
//         }}
//       >
//         <a
//           href="/login"
//           style={{
//             padding: 40,
//             fontFamily: "GmarketSansLight",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "black",
//           }}
//         >
//           로그인
//         </a>
//         <a
//           href="/login"
//           style={{
//             fontFamily: "GmarketSansLight",
//             fontSize: "18px",
//             fontWeight: "bold",
//             textDecoration: "none",
//             color: "black",
//           }}
//         >
//           회원가입
//         </a>
//       </div>
//     </div>
//     <hr />
//   </div>
// );

// export default Header;

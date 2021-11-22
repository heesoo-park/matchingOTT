import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./Font.css";

export default function Header({ LoginState, AttendState }) {
  const [isLogin, setisLogin] = useState(false);
  const [isAttend, setisAttend] = useState(false);

  console.log(LoginState);
  useEffect(() => {
    setisLogin(LoginState);
  }, [LoginState]);

  console.log(AttendState);
  useEffect(() => {
    setisAttend(AttendState);
  }, [AttendState]);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/*header*/}

      <div
        class="header"
        style={{
          width: "85%",
          display: "flex",
          margin: "1rem auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div class="header_logo">
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
          class="header_menu"
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
            <br />
          )}
        </div>

        {/*profile logo, go to profile page*/}
        <div
          class="header_login"
          style={{
            justifyContent: "center",
            display: "block",
            paddingRight: 40,
            alignItems: "center",
          }}
        >
          {isLogin ? (
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

          {isLogin ? (
            <a
              href="/profile"
              style={{
                fontFamily: "GmarketSansLight",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                color: "black",
              }}
            >
              프로필
            </a>
          ) : (
            <a
              href="/login"
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

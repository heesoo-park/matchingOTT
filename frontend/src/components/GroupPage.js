import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

export default function GroupPage() {
  const [numOfUser, setNumOfUser] = useState(0);
  const [groupid, setGroupid] = useState("");
  const [OTTname, setOTTname] = useState("");
  const [username, setUsername] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("name")));

    axios
      .get("http://localhost:8000/api/getGroupMember/", {
        params: {
          userID: JSON.parse(localStorage.getItem("name")),
        },
      })
      .then(function (res) {
        // setUsername(username.concat(res.data));
        // console.log(username);
        console.log(res.data);
      });
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
      setUsername([]);
      console.log(username);
    };
  }, []);

  const handleFormGroupOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("OTT");
    console.log(JSON.parse(localStorage.getItem("name")));

    window.location.replace("/");
  };

  return (
    <div>
      {/* 상단 바 시작 */}
      <Header LoginState={true} AttendState={true} />
      {/* 상단 바 끝 */}
      <div className="container">
        <div className="group-wrapper">
          <div>
            <table className="table-main">
              <thead
                style={{
                  height: "50px",
                }}
              >
                <tr className="title">
                  <th>그룹원 정보</th>
                  <th>넷플릭스</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td
                    style={{
                      backgroundColor: "#eceaea",
                    }}
                  >
                    <img
                      style={{
                        padding: "10px",
                      }}
                      src={"https://placeimg.com/100/100/animals/1"}
                      alt="프로필 사진"
                    />
                  </td>
                  <td
                    style={{
                      backgroundColor: "#eceaea",
                    }}
                  >
                    username1
                  </td>
                </tr>
                <tr className="table-row">
                  <td>
                    {" "}
                    <img
                      style={{
                        padding: "10px",
                      }}
                      src={"https://placeimg.com/100/100/animals/2"}
                      alt="프로필 사진"
                    />
                  </td>
                  <td>username2</td>
                </tr>
                <tr className="table-row">
                  <td
                    style={{
                      backgroundColor: "#eceaea",
                    }}
                  >
                    {" "}
                    <img
                      style={{
                        padding: "10px",
                      }}
                      src={"https://placeimg.com/100/100/animals/3"}
                      alt="프로필 사진"
                    />
                  </td>
                  <td
                    style={{
                      backgroundColor: "#eceaea",
                    }}
                  >
                    username3
                  </td>
                </tr>
                <tr className="table-row">
                  <td>
                    {" "}
                    <img
                      style={{
                        padding: "10px",
                      }}
                      src={"https://placeimg.com/100/100/animals/4"}
                      alt="프로필 사진"
                    />
                  </td>
                  <td>username4</td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "6vh",
              }}
            >
              <button
                className="submit"
                style={{
                  marginTop: "10px",
                }}
              >
                {" "}
                <a
                  href="/"
                  style={{
                    fontFamily: "GmarketSansLight",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "white",
                  }}
                  onClick={handleFormGroupOut}
                >
                  그룹 탈퇴
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

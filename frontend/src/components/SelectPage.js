import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

export default function SelectPage() {
  const [username, setUsername] = useState("");
  const [OTTname, setOTTname] = useState("");
  const [isAttended, setIsAttended] = useState(true);
  const [currentGroup, setCurrentGroup] = useState(0);

  const OTTLogoImage = {
    NETFLIX:
      "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
    WATCHA:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png",
    WAVVE: "https://www.gcon.or.kr/fileDownload?titleId=9992&fileId=2",
    TVING:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/TVING_logo.svg/512px-TVING_logo.svg.png",
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("OTT", JSON.stringify(OTTname));
    setUsername(localStorage.getItem("name"));
    console.log(typeof username);
    axios
      .post("http://localhost:8000/api/select/", {
        userID: username,
        OTTname: OTTname,
      })
      .then(function (res) {
        console.log(res);
      });

    window.location.replace("/Grouppage");
  };

  return (
    <div>
      {/* 상단 바 시작 */}
      <Header LoginState={true} AttendState={isAttended} />
      {/* 상단바 끝 */}

      {/* 본문 시작 */}
      <div className="container">
        <div className="ott-wrapper">
          <div className="ott-title">
            <h2>보고싶은 OTT를 선택해주세요</h2>
          </div>
          <div className="ott">
            <table
              className="ott-table"
              style={{
                borderCollapse: "separate",
                borderSpacing: "20px",
              }}
            >
              <tbody>
                <tr className="ott-name">
                  <td rowSpan="1" className="ott-td">
                    {" "}
                    <img
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "10vh",
                      }}
                      src={OTTLogoImage.NETFLIX}
                      alt="NETFLIX Logo Image"
                      onClick={function () {
                        setOTTname("NETFLIX");
                        console.log(OTTname);
                      }}
                    />
                  </td>
                  <td rowSpan="1" className="ott-td">
                    <img
                      style={{
                        display: "inline-block",
                        width: "120px",
                        height: "10vh",
                      }}
                      src={OTTLogoImage.WATCHA}
                      alt="WATCHA Logo Image"
                      onClick={function () {
                        setOTTname("WATCHA");
                        console.log(OTTname);
                      }}
                    />
                  </td>
                </tr>
                <tr className="ott-name">
                  <td>
                    <b>NETFLIX</b>
                  </td>
                  <td>
                    <b>WATCHA</b>
                  </td>
                </tr>
                <tr className="ott-name">
                  <td rowSpan="1" className="ott-td">
                    <img
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "auto",
                      }}
                      src={OTTLogoImage.WAVVE}
                      alt="WAVVE Logo Image"
                      onClick={function () {
                        setOTTname("WAVVE");
                        console.log(OTTname);
                      }}
                    />
                  </td>
                  <td rowSpan="1" className="ott-td">
                    <img
                      style={{
                        display: "inline-block",
                        width: "100px",
                        height: "auto",
                      }}
                      src={OTTLogoImage.TVING}
                      alt="TVING Logo Image"
                      onClick={function () {
                        setOTTname("TVING");
                        console.log(OTTname);
                      }}
                    />
                  </td>
                </tr>
                <tr className="ott-name">
                  <td>
                    <b>NETFLIX</b>
                  </td>
                  <td>
                    <b>WATCHA</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              height: "6vh",
            }}
          >
            <button className="submit">
              {" "}
              <a
                href="#"
                style={{
                  fontFamily: "GmarketSansLight",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
                onClick={handleFormSubmit}
              >
                그룹참가
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

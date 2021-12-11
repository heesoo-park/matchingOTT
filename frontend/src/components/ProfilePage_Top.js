import React, { Component } from "react";
import Header from "./Header";

// 프로필 화면은 자기꺼만 보여줘야함
const customer = {
  profileImage: "https://placeimg.com/150/150/1",
};

const OTTLogoImage = {
  NETFLIX: "https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png",
  WATCHA:
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png",
  WAVVE: "https://www.gcon.or.kr/fileDownload?titleId=9992&fileId=2",
  TVING:
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/TVING_logo.svg/512px-TVING_logo.svg.png",
};

// 이름 설정
var name = localStorage.getItem("name")
  ? localStorage.getItem("name")
  : "NO_NAMED";
if (name != null) {
  name = name.substring(1, name.length - 1);
}

class ProfilePage_Top extends Component {
  componentDidMount() {
    console.log(localStorage.getItem("name"));
  }

  render() {
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

    return (
      <div>
        <Header LoginState={true} AttendState={true} />
        <div className="container">
          <div className="profile-wrapper">
            <div
              className="profile-top"
              style={{
                width: "600px",
                height: "100px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="title"
                style={{
                  paddingLeft: "20px",
                }}
              >
                <h2>현재 사용중인 OTT</h2>
              </div>
              <div>
                {JSON.parse(localStorage.getItem("OTT")) === "NETFLIX" ? (
                  <img
                    style={{ display: "inline-block" }}
                    width={400 / 3}
                    height={300 / 3}
                    src={OTTLogoImage.NETFLIX}
                    alt="NETFLIX Logo Image"
                  />
                ) : JSON.parse(localStorage.getItem("OTT")) === "WATCHA" ? (
                  <img
                    style={{ display: "inline-block" }}
                    width="80%"
                    height="auto"
                    src={OTTLogoImage.WATCHA}
                    alt="WATCHA Logo Image"
                  />
                ) : JSON.parse(localStorage.getItem("OTT")) === "WAVVE" ? (
                  <img
                    style={{ display: "inline-block" }}
                    width={350}
                    height={300 / 3}
                    src={OTTLogoImage.WAVVE}
                    alt="WAVVE Logo Image"
                  />
                ) : JSON.parse(localStorage.getItem("OTT")) === "TVING" ? (
                  <img
                    style={{ display: "inline-block" }}
                    width={350}
                    height={300 / 3}
                    src={OTTLogoImage.WAVVE}
                    alt="WAVVE Logo Image"
                  />
                ) : (
                  <h2> OTT를 사용하고 계시지 않습니다.</h2>
                )}
              </div>
            </div>
            {/*// 프로필 부분*/}
            <div
              className="profile-main"
              style={{
                display: "flex",
                width: "600px",
                height: "200px",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: "1",
                }}
              >
                <div>
                  <img
                    style={{ display: "block", margin: "0 auto" }}
                    src={customer.profileImage}
                    alt="프로필 사진"
                  />
                </div>
              </div>

              <div className="profile-name" style={{ flex: "1" }}>
                {name}
              </div>
            </div>
            {/*// 로그 아웃*/}
            <div
              style={{
                padding: "40px 0px 0px 0px",
              }}
            >
              <button className="submit">
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
                  onClick={handleFormLogout}
                >
                  로그아웃
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage_Top;

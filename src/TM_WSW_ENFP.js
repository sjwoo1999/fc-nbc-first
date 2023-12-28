import React, { Component } from "react";

class TeamMember_WSW_ENFP extends Component {
  render() {
    return (
      <div className="personal-page">
        <div className="profile">
          <br />
          <img
            src="https://i.imgur.com/JAVOIgV.jpg"
            alt="이미지"
            width="100"
            style={{ borderRadius: 50 }}
          />
        </div>
        <br />
        <div className="MBTI">
          <button
            style={{ background: "#99CCFF" }}
            onClick={() =>
              window.open(
                "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-enfp"
              )
            }
          >
            MBTI : ENFP
          </button>
        </div>
        <br />
        <div className="blog">
          <button
            style={{ background: "#FFDD00" }}
            onClick={() => window.open("https://woo001234.tistory.com")}
          >
            티스토리
          </button>
        </div>
        <br />
        <div className="self-introduction">
          <button
            style={{ background: "#adb5bd" }}
            onClick={() =>
              window.open("https://bobbodaddeuk.github.io/miniproject/")
            }
          >
            자세히 보기
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default TeamMember_WSW_ENFP;

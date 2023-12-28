import React, { Component } from "react";

class TeamMember_UJW_INFJ extends Component {
  render() {
    return (
      <div className="personal-page">
        <div className="profile">
          <br />
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRTJhw3RLzXByD_JcizumGwU2mcH7fuNLtND6mOEw9DAKnqaNqdt8nYRJJSKb9-F1dEFygJ6nsPLiGT3yERf9GGlwK-=w1278-h1303"
            alt="이미지"
            width="100"
            height="130"
            style={{ borderRadius: 50 }}
          />
        </div>
        <br />
        <div className="MBTI">
          <button
            style={{ background: "#99CCFF" }}
            onClick={() =>
              window.open(
                "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-infj"
              )
            }
          >
            MBTI : INFJ
          </button>
        </div>
        <br />
        <div className="blog">
          <button
            style={{ background: "#FFDD00" }}
            onClick={() => window.open("https://331425.tistory.com/")}
          >
            티스토리
          </button>
        </div>
        <br />
        <div className="self-introduction">
          <button
            style={{ background: "#adb5bd" }}
            onClick={() => window.open("UJW")}
          >
            자세히 보기
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default TeamMember_UJW_INFJ;

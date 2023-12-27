import React, { Component } from "react";

class TeamMember_WSW_ENFP extends Component {
  render() {
    return (
      <div className="personal-page">
        <h1>우승원</h1>
        <div className="profile">
          <img src="https://i.imgur.com/JAVOIgV.jpg" alt="이미지" />
          <p>우승원</p>
          <p>ENFP</p>
        </div>
        <div className="blog">
          <button onClick={() => window.open("https://woo001234.tistory.com")}>
            티스토리
          </button>
        </div>
        <div className="self-introduction">
          <p>아이엠그라운드 자기소개하기~</p>
        </div>
      </div>
    );
  }
}

export default TeamMember_WSW_ENFP;

import React, { Component } from "react";

class TeamMember_KYW_ESTJ extends Component {
  render() {
    return (
      <div className="personal-page">
        <h1>강영우</h1>
        <div className="profile">
          <img src="" alt="이미지" />
          <p>강영우</p>
          <p>ESTJ</p>
        </div>
        <div className="blog">
          <button onClick={() => window.open("https://devkyw.tistory.com/")}>
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

export default TeamMember_KYW_ESTJ;
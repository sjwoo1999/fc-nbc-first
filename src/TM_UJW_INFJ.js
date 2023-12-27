import React, { Component } from "react";

class TeamMember_UJW_INFJ extends Component {
  render() {
    return (
      <div className="personal-page">
        <h1>엄지원</h1>
        <div className="profile">
          <img
            src="https://drive.google.com/file/d/17csFeyWbTYNRAEmOOhIpqzV3UKi7aE9l/view?usp=sharing"
            alt="이미지"
          />
          <p>엄지원</p>
          <p>INFJ</p>
        </div>
        <div className="blog">
          <button onClick={() => window.open("https://331425.tistory.com/")}>
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

export default TeamMember_UJW_INFJ;

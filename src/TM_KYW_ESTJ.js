import React, { Component } from "react";

class TeamMember_KYW_ESTJ extends Component {
  render() {
    return (
      <div className="personal-page">
        <h1>강영우</h1>
        <div className="profile">
          <img
            src="https://doc-0s-68-docs.googleusercontent.com/docs/securesc/8osmbavs5nd45r2a3sokpdtocfmoqco3/jp4gkdtnojn92gujv5f4igg0981ialq7/1703646825000/17417488077794560450/09821414385903430455Z/16PUoXWYiZqT2VC2r8x6WI-jRcUVTDTNj?uuid=d7d66c62-f7cf-47b2-8b99-53020ea0ceff"
            alt="이미지"
          />
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

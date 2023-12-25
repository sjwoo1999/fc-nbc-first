import React from "react";
import "./TeamMember.css";

// Individual 컴포넌트 정의하기 (필요한 경우)
const Individual = ({ name, mbti, blog, image }) => {
  return (
    <div className="individual">
      <br />
      <img src={image} alt="이미지" />
      <p>이름: {name}</p>
      <p>MBTI: {mbti}</p>
      <p>블로그: {blog}</p>
      <button>자세히 보기</button>
      <br />
    </div>
  );
};

const TeamMember = ({ isTeamMemberOpen, handleCloseClick }) => {
  return (
    <div>
      <h1>팀원 소개</h1>
      <br />
      <div className="individual-container">
        <Individual
          name="우성종"
          mbti="ESTJ"
          blog="https://sjwoo1999.tistory.com/"
          image="/images/image.png"
        />
        <Individual
          name="우승원"
          mbti="ENFP"
          blog="https://woo001234.tistory.com"
          image="/images/image.png"
        />
        <Individual
          name="엄지원"
          mbti="INFJ"
          blog="https://331425.tistory.com"
          image="/images/image.png"
        />
        <Individual
          name="강영우"
          mbti="ESTJ"
          blog="https://devkyw.tistory.com"
          image="/images/image.png"
        />
      </div>
      <br />
      <button onClick={handleCloseClick}>닫기</button>
    </div>
  );
};

export default TeamMember;

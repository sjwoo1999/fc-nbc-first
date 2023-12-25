import React from "react";

import "./MainPage.css";

const MainPage = ({ isTeamMemberOpen, handleTeamMemberClick }) => {
  return (
    <div>
      <h1>내배캠 Node.js 4기 2조</h1>
      <br />
      <button onClick={handleTeamMemberClick}>팀원 소개</button>
    </div>
  );
};

export default MainPage;

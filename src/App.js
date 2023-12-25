import React, { useState } from "react";
import MainPage from "./MainPage";
import TeamMember from "./TeamMember";

import "./App.css";

const App = () => {
  const [isTeamMemberOpen, setIsTeamMemberOpen] = useState(false);

  const handleTeamMemberClick = () => {
    setIsTeamMemberOpen(true);
    console.log("팀원 소개 버튼 클릭: isTeamMemberOpen = ", isTeamMemberOpen);
  };

  const handleCloseClick = () => {
    setIsTeamMemberOpen(false);
    console.log("닫기 버튼 클릭: isTeamMemberOpen = ", isTeamMemberOpen);
  };

  return (
    <div>
      <br />
      <MainPage
        isTeamMemberOpen={isTeamMemberOpen}
        handleTeamMemberClick={handleTeamMemberClick}
      />
      <br />
      {isTeamMemberOpen && (
        <TeamMember
          isTeamMemberOpen={isTeamMemberOpen}
          handleCloseClick={handleCloseClick}
        />
      )}
      <br />
    </div>
  );
};

export default App;

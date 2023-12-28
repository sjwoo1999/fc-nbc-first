import React, { Component } from "react";
import TeamMember from "./TeamMember";

import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTeamMemberOpen: false,
    };
  }

  handleTeamMemberToggle = () => {
    this.setState({
      isTeamMemberOpen: !this.state.isTeamMemberOpen,
    });
  };

  render() {
    return (
      <div>
        <h1>내배캠 Node.js 4기 2조</h1>
        <br />
        <button
          style={{ background: "#DC143C" }}
          onClick={this.handleTeamMemberToggle}
        >
          팀원 소개
        </button>
        <br />
        <br />
        {this.state.isTeamMemberOpen ? <TeamMember /> : <div></div>}
      </div>
    );
  }
}

export default MainPage;

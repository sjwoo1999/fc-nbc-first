import React, { Component } from "react";

import "./TeamMember.css";

import WSJ from "./TM_WSJ_ESTJ";
import WSW from "./TM_WSW_ENFP";
import UJW from "./TM_UJW_INFJ";
import KYW from "./TM_KYW_ESTJ";

class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWSJOpen: false,
    };
    this.state = {
      isWSWOpen: false,
    };
    this.state = {
      isUJWOpen: false,
    };
    this.state = {
      isKYWOpen: false,
    };
  }

  handleWSJLinkClick = () => {
    this.setState({
      isWSJOpen: !this.state.isWSJOpen,
    });
  };

  handleWSWLinkClick = () => {
    this.setState({
      isWSWOpen: !this.state.isWSWOpen,
    });
  };

  handleUJWLinkClick = () => {
    this.setState({
      isUJWOpen: !this.state.isUJWOpen,
    });
  };

  handleKYWLinkClick = () => {
    this.setState({
      isKYWOpen: !this.state.isKYWOpen,
    });
  };

  // 세미콜론 추가 ;
  render() {
    return (
      <div className="individual-container">
        <div className="individual">
          <br />
          <button onClick={this.handleWSJLinkClick}>우성종</button>
          {this.state.isWSJOpen ? <WSJ /> : <div></div>}
          <br />
        </div>
        <div className="individual">
          <br />
          <button onClick={this.handleWSWLinkClick}>우승원</button>
          {this.state.isWSWOpen ? <WSW /> : <div></div>}
          <br />
        </div>
        <div className="individual">
          <br />
          <button onClick={this.handleUJWLinkClick}>엄지원</button>
          {this.state.isUJWOpen ? <UJW /> : <div></div>}
          <br />
        </div>
        <div className="individual">
          <br />
          <button onClick={this.handleKYWLinkClick}>강영우</button>
          {this.state.isKYWOpen ? <KYW /> : <div></div>}
          <br />
        </div>
      </div>
    );
  }
}

export default TeamMember;

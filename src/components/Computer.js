import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -40px;}
      25% {top: 40px;}
      50% {top: -40px;}
      75% {top: 40px;}
      100% {top: 0px;}
    }`;
    return (
      <div className="text-center player-game">
        <style>{keyframe}</style>
        <div className="theThink" style={{position: "relative"}}>
          <img
            className="mt-3"
            style={{
              width: 100,
              transform: "rotate(120deg)",
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
              left: "15%"
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/game_oan_tu_ti/playerComputer.png"
          alt="./img/game_oan_tu_ti/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.GameOanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);

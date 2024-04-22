import React, { Component } from "react";
import "../css/GameOanTuTi.css";
import Player from "./Player";
import Computer from "./Computer";
import Result from "./Result";
import { connect } from "react-redux";
class GameOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4 mt-5">
            <Result />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-primary mt-5 p-2"
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        })
        count++;
        if (count > 10) {
          // dừng setInterval lại
          clearInterval(randomComputerItem);

          dispatch({
            type: "END_GAME"
          })
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuTi);

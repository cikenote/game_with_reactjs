import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center player-game">
        <div className="theThink">
          <img
            className="mt-3"
            style={{ width: 100, transform: "rotate(120deg)" }}
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
            alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 250, height: 250 }}
          src="./img/game_oan_tu_ti/player.png"
          alt="./img/game_oan_tu_ti/player.png"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // Xét giá trị đặt cược, thêm viền cho item được chọn

            // let border = {};
            // if(item.datCuoc) {
            //   border = {border: "3px solid red"};
            // }
            return (
              <div className="col-4" key={index}>
                <button onClick={() => {this.props.datCuoc(item.ma)}} className="btn_item btn btn-success">
                  <img
                    style={{ width: 35, height: 34 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.GameOanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "DAT_CUOC",
        maCuoc,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

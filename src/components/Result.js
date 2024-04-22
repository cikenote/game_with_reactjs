import React, { Component } from "react";
import {connect} from "react-redux"

class Result extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          SỐ BÀN THẮNG: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          TỔNG BÀN CHƠI: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.GameOanTuTiReducer.soBanThang,
    ketQua: state.GameOanTuTiReducer.ketQua,
    soBanChoi: state.GameOanTuTiReducer.soBanChoi,
  }
}
export default connect(mapStateToProps)(Result)
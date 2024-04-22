const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/game_oan_tu_ti/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/game_oan_tu_ti/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/game_oan_tu_ti/bao.png", datCuoc: true },
  ],
  ketQua: "I'm IronMan, i love you 3000!!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "bao",
    hinhAnh: "./img/game_oan_tu_ti/bao.png",
    datCuoc: false,
  },
};

const GameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      // Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      // Tạo ra mảng cược mới từ mảng cược cũ bằng map và action.maCuoc do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // setState của mảng cược => render lại giao diện
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNghien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNghien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME":
      {
        state.soBanChoi += 1;
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;
        switch (player.ma) {
          case "keo":
            {
              if (computer.ma === "keo") {
                state.ketQua = "HÒA NHAU!!!";
              } else if (computer.ma === "bua") {
                state.ketQua = "THUA CMN LUÔN!!!";
              } else {
                state.soBanThang += 1;
                state.ketQua = "I'm IronMan, i love you 3000!!!";
              }
            }
            break;
          case "bua":
            {
              if (computer.ma === "keo") {
                state.soBanThang += 1;
                state.ketQua = "I'm IronMan, i love you 3000!!!";
              } else if (computer.ma === "bua") {
                state.ketQua = "HÒA NHAU!!!";
              } else {
                state.ketQua = "THUA CMN LUÔN!!!";
              }
            }
            break;
          case "bao":
            {
              if (computer.ma === "keo") {
                state.ketQua = "THUA CMN LUÔN!!!";
              } else if (computer.ma === "bua") {
                state.soBanThang += 1;
                state.ketQua = "I'm IronMan, i love you 3000!!!";
              } else {
                state.ketQua = "HÒA NHAU!!!";
              }
            }
            break;
          default:
            state.soBanThang += 1;
            state.ketQua = "THANG CMN LUOON!!";
        }
      }
      return { ...state };
    default:
      return { ...state };
  }
};

export default GameOanTuTiReducer;

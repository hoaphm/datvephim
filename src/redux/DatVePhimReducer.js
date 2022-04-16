const stateDefault = {
	danhSachGheDangDat: [
		// { soGhe: "A6", gia: 1000 },
		// { soGhe: "B6", gia: 1000 },
	],
};
const DatVePhimReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "DAT_GHE": {
			let danhSachGheDangDatUpdate = { ...state.danhSachGheDangDat };
			let index = danhSachGheDangDatUpdate.findIndex(
				(gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
			);
			if (index !== -1) {
				danhSachGheDangDatUpdate.splice(index, 1);
			} else {
				danhSachGheDangDatUpdate.push(action.ghe);
			}
			state.danhSachGheDangDat = danhSachGheDangDatUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default DatVePhimReducer;

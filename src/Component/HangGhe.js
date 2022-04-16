import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
class HangGhe extends Component {
	renderGhe = () => {
		return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
			let cssGheDaDat = "";
			let disabled = false;
			if (ghe.daDat) {
				cssGheDaDat = "gheDuocChon";
				disabled = true;
			}
			let cssGheDangDat = "";
			let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
				(gheDangDat) => gheDangDat.soGhe === ghe.soGhe
			);
			if (indexGheDangDat !== -1) {
				cssGheDangDat = "gheDangChon";
			}
			return (
				<button
					onClick={() => {
						this.props.datGhe(ghe);
					}}
					disabled={disabled}
					className={`ghe ${cssGheDaDat} ${cssGheDangDat} `}
					key={{ index }}>
					{ghe.soGhe}
				</button>
			);
		});
	};
	renderSoHang = () => {
		return this.props.hangGhe.danhSachGhe.map((hang, index) => {
			return <button className="rowNumber">{hang.soGhe}</button>;
		});
	};
	renderHangGhe = () => {
		if (this.props.soHangGhe === 0) {
			return (
				<div className="ms-4">
					{this.props.hangGhe.hang} {this.renderSoHang()}
				</div>
			);
		} else {
			return (
				<Fragment>
					{this.props.hangGhe.hang} {this.renderGhe()}
				</Fragment>
			);
		}
	};
	render() {
		return (
			<div
				className="text-light text-start ms-5 mt-1"
				style={{ fontSize: "30px" }}>
				{this.renderHangGhe()}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		danhSachGheDangDat: state.DatVePhimReducer.danhSachGheDangDat,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		datGhe: (ghe) => {
			dispatch({
				type: "DAT_GHE",
				ghe,
			});
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/DatVePhimAction";
class ThongTinDatGhe extends Component {
	render() {
		return (
			<div>
				<div className="mt-5">
					<button className="gheDuocChon"></button>
					<span className="text-light" style={{ fontSize: "30px" }}>
						ghe da dat
					</span>
					<br></br>
					<button className="gheDangChon"></button>
					<span className="text-light" style={{ fontSize: "30px" }}>
						ghe dang dat
					</span>
					<br></br>
					<button
						className="ghe"
						style={{ marginLeft: "0" }}></button>
					<span className="text-light" style={{ fontSize: "30px" }}>
						ghe chua dat
					</span>
				</div>
				<div className="mt-5">
					<table className="table" border="2">
						<thead>
							<tr className="text-light" style={{ fontSize: 25 }}>
								<th>So ghe</th>
								<th>Gia</th>
								<th>Huy</th>
							</tr>
						</thead>
						<tbody className="text-warning">
							{this.props.danhSachGheDangDat.map(
								(gheDangDat, index) => {
									return (
										<tr key={index}>
											<td>{gheDangDat.soGhe}</td>
											<td>
												{gheDangDat.gia.toLocaleString()}
											</td>
											<td>
												<button
													onClick={() => {
														this.props.dispatch(
															huyGheAction(
																gheDangDat.soGhe
															)
														);
													}}>
													{" "}
													Huy
												</button>
											</td>
										</tr>
									);
								}
							)}
						</tbody>
						<tfoot className="text-warning">
							<tr>
								<td>Tong tien</td>
								<td>
									{this.props.danhSachGheDangDat.reduce(
										(tongTien, gheDangDat, index) => {
											return (tongTien += gheDangDat.gia);
										},
										0
									)}
								</td>
								<td></td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		danhSachGheDangDat: state.DatVePhimReducer.danhSachGheDangDat,
	};
};
export default connect(mapStateToProps)(ThongTinDatGhe);

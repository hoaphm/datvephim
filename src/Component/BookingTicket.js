import React, { Component, Fragment } from "react";
import "./BookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BookingTicket extends Component {
	renderHangGhe = () => {
		return danhSachGheData.map((hangGhe, index) => {
			return (
				<Fragment key={{ index }}>
					<HangGhe hangGhe={hangGhe} soHangGhe={index} />
				</Fragment>
			);
		});
	};
	render() {
		return (
			<div
				className="bookingMovie"
				style={{
					position: "fixed",
					width: "100%",
					height: "100%",
					backgroundImage: "url(./bgmovie.jpg)",
					backgroundSize: "100%",
				}}>
				<div
					style={{
						backgroundColor: "rgba(0,0,0,0.8)",
						position: "fixed",
						width: "100%",
						height: "100%",
					}}>
					<div className="container-fluid">
						<div className="row">
							<div className="col-8 text-center">
								<div className="text-warning display-4">
									DAT VE XEM PHIM CYBERLEARN.VN
								</div>
								<div
									className="mt-5 text-light"
									style={{ fontSize: "25px" }}>
									Man hinh
								</div>
								<div className="mt-2 d-flex flex-column justify-content-center">
									<div className="screen"></div>
									{this.renderHangGhe()}
								</div>
							</div>
							<div className="col-4 text-start">
								<div
									style={{ fontSize: "35px" }}
									className="text-light mt-2">
									DANH SACH GHE BAN CHON
								</div>
								<ThongTinDatGhe />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

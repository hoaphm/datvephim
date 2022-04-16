import React, { Component } from "react";

export default class ThongTInDatGhe extends Component {
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
						<tbody>
							<tr>
								<th>So ghe</th>
								<th>Gia</th>
								<th></th>
							</tr>
							<tr>
								<th>So ghe</th>
								<th>Gia</th>
								<th></th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

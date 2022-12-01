import React from "react";

export default function Card(props) {
	return (
		<>
			{props.details.map((value, index) => (
				<div className="cards" key={index}>
					<div className="card">
						<img src={value.photo} alt="bouquet" />
						<p>
							<b>{value.name}</b>
						</p>
						<p className="price">{value.price}</p>
					</div>
				</div>
			))}
		</>
	);
}

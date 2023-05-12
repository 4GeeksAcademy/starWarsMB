import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { useParams } from "react-router-dom";


export const VehicleDetail = () => {

	// const { planetId } = useParams()

	const params = useParams()

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.detailVehicle(params.vehicleId)
		// actions.fetchStarWars("people")
		// actions.fetchStarWars("vehicles")
	}, [])

	console.log(store.vehicle)

	let idVehicle = params.vehicleId

	return (
		<div className="text-center mt-5">
			<div className="card mb-3" style={{ width: "100%" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + idVehicle + ".jpg"} className="img-fluid rounded-start" alt="..."></img>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title">{store.vehicle?.properties?.model}</h1>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<div className="card-footer bg-transparent border-success">
								{/* < h3 className="card-text" > Name:{store.vehicle?.properties.name}</h3> */}
								<h3 className="card-text"> Passengers: {store.vehicle?.properties?.passengers}</h3>
								<h3 className="card-text"> manufacturer: {store.vehicle?.properties?.manufacturer}</h3>
								<h3 className="card-text"> Lenght: {store.vehicle?.properties?.length}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>

	);
}
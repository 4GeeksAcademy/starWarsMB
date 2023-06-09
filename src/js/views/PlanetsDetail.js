import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { useParams } from "react-router-dom";


export const PlanetDetail = (id) => {

	// const { planetId } = useParams()

	const params = useParams()

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.detailPlanet(params.planetId)
		// actions.fetchStarWars("people")
		// actions.fetchStarWars("vehicles")
	}, [])

console.log(store.planet)

let idPlaneta = params.planetId

	return (


		<div className="text-center mt-5">
			<div className="card mb-3" style={{ width: "100%" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + idPlaneta + ".jpg"} className="img-fluid rounded-start" alt="..."></img>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title">{store.planet?.properties?.name}</h1>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<div className="card-footer bg-transparent border-success">	
							< h3 className="card-text" > Id:{params.planetId}</h3>
							<h3 className="card-text"> Diameter: {store.planet?.properties?.diameter}</h3>
							<h3 className="card-text"> Population: {store.planet?.properties?.population}</h3>
							<h3 className="card-text"> Climate: {store.planet?.properties?.climate}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		

	);
}
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

	return (


		<div className="text-center mt-5">
			<div class="card mb-3" style={{ width: "100%" }}>
				<div class="row g-0">
					<div class="col-md-4">
						<img src={id.img} class="img-fluid rounded-start" alt="..."></img>
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<h1 class="card-title">{store.planet?.properties?.name}</h1>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<div class="card-footer bg-transparent border-success">	
							< h3 class="card-text" > Id:{params.planetId}</h3>
							<h3 class="card-text"> Diameter: {store.planet?.properties?.diameter}</h3>
							<h3 class="card-text"> Population: {store.planet?.properties?.population}</h3>
							<h3 class="card-text"> Climate: {store.planet?.properties?.climate}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>




		</div>

	);
}
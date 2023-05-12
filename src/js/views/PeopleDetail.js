import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { useParams } from "react-router-dom";


export const PeopleDetail = () => {

	// const { planetId } = useParams()

	const params = useParams()

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.detailPeople(params.peopleId)
		// actions.fetchStarWars("people")
		// actions.fetchStarWars("vehicles")
	}, [])

	console.log(store.people)

	let idPeople = params.peopleId

	return (
		<div className="text-center mt-5">
			<div className="card mb-3" style={{ width: "100%" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + idPeople + ".jpg"} className="img-fluid rounded-start" alt="..."></img>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title">{store.people?.properties?.name}</h1>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<div className="card-footer bg-transparent border-success">
								{/* < h3 className="card-text" > Name:{store.vehicle?.properties.name}</h3> */}
								<h3 className="card-text"> Birth Year: {store.people?.properties?.birth_year}</h3>
								<h3 className="card-text"> Skin olor: {store.people?.properties?.skin_color}</h3>
								<h3 className="card-text"> Height: {store.people?.properties?.height}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>

	);
}
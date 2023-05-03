import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

export const Card = ({ element }) => {

	const { store, actions } = useContext(Context)

useEffect(()=>{actions.fetchStarWars(element)}, [])

function imgError(e) {
	e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
}

	return (
		<div>
			<div className="overflow-auto d-flex w-100">
				{store[element]?.map(item => (
					<div key={item.uid} className="card mx-1" style={{ width: "100rem" , background:"black"}}>
						<div className="card-body">
							<img src={item.img} onError={imgError} className="card-img-top" alt="..."></img>
							<h5 className="card-title">{item.name}</h5>
						</div>
						<div className="card-footer" >
							<Link to={`/planets/${item.uid}`}>
							<button type="button" className="card-link btn btn-light">Learn More!</button>
							</Link>
							<button className="card-link btn btn-light" onClick={() => {actions.addFavorite(item.name) }}>
								<i class="bi bi-heart-fill"></i>
							</button>
						</div>
					</div>

				)) || <p> Cargando {element}</p>

				}


			</div>
		</div>

	)
};

{/* Card.propTypes = {
	name: PropTypes.string,
	element: PropTypes.string,
	id: PropTypes.number,
	img:PropTypes.string,

} */}
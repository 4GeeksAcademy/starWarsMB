import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions}= useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					Star Wars <br></br>
					
					<i class="fab fa-jedi-order"></i>
					
					</span>
			</Link>
			<div className="ml-auto">
			{/* Boton de Favoritos */}
			<div className="btn-group">
			<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Favorites
  			</button>
			<ul className="dropdown-menu">
				{store.favorites.map((element, index)=>{
					return (
						<li key={index}>{element}</li>

					)
				})}
				
		
			</ul>
			</div>
			</div>
		</nav>
	);
};



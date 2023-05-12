import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// import { Link } from "react-router-dom";

export const Pages = ({ element }) => {

	const { store, actions } = useContext(Context)
	const [pages, setPages] = useState(0)
	const [records, setRecords] = useState(0)
	const [ searchParams, setSearchParams] = useSearchParams()

useEffect(()=>{actions.fetchStarWars(element).then(results=>{
	setPages(results.pages)
	setRecords(results.records)
})}, [])

function changePage(pageNumber) {
	setSearchParams({page: pageNumber})
	{actions.fetchStarWars(element, pageNumber).then(results=>{
		setPages(results.pages)
		setRecords(results.records)
	})}

}

function imgError(e) {
	e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
}

	return (
		<div>
			<div className="overflow-auto d-flex w-100">
				<h5>Total Recors: {records}</h5>
				{store[element] && store[element].length >0 && store[element].map(item => (
					<div key={item.uid} className="card mx-1" style={{ width: "100rem" , background:"black"}}>
						<div className="card-body">
							<img src={item.img} onError={imgError} className="card-img-top" alt="..."></img>
							<h5 className="card-title">{item.name}</h5>
						</div>
						<div className="card-footer" >
							<Link to={`/${element}/${item.uid}`}>
							<button type="button" className="card-link btn btn-light">Learn More!</button>
							</Link>
							<button className="card-link btn btn-light" onClick={() => {actions.addFavorite(item.name) }}>
								<i class="bi bi-heart-fill"></i>
							</button>
						</div>
					</div>

				)) || <p> Cargando {element}</p>

				}

				{/* Paginacion: */}

				<nav aria-label="...">
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link" href="#" tabindex="-1">Previous</a>
					</li>
					{
					new Array(pages).fill("").map((item,index)=>
					<li key={index+1} className={`page-item ${searchParams.get("page")==index+1?"active":""}`}>
					<button className="page-link" onClick={()=>changePage(index+1)}>{index+1} </button></li>)}
					
					<li className="page-item">
						<a className="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>
			<h3>Pagina{searchParams.get("page")}</h3>


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
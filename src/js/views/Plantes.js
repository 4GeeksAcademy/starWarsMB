import React, { useState } from "react";

import "../../styles/home.css";

import { useSearchParams} from "react-router-dom";
import { Pages } from "../component/pages";


export const Planets = () => {


// const [searchParams, setSearchParams] = useSearchParams()
// const [pages, setPages] = useState(10)


	return (


		<div className="text-center mt-5">


			< Pages element="planets" />
			<br></br>

			{/* <nav aria-label="...">
				<ul className="pagination">
					<li className="page-item">
						<a className="page-link" href="#" tabindex="-1">Previous</a>
					</li>
					{
					new Array(pages).fill("").map((item,index)=>
					<li key={index+1} className={`page-item ${searchParams.get("page")==index+1?"active":""}`}>
					<Link className="page-link" to={`/planets?page=${index+1}`}>{index+1} </Link></li>)}
					<li className="page-item">
						<a className="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav>
			<h3>Pagina{searchParams.get("page")}</h3> */}
		</div>

	);
}
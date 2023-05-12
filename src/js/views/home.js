import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Detail } from "../component/detail";

export const Home = () => {
	
	const {store,actions} = useContext(Context)

	// useEffect(()=>{
	// 	actions.fetchStarWars("planets")
	// 	actions.fetchStarWars("people")
	// 	actions.fetchStarWars("vehicles")
	// },[])

	
	
	return (
		
	
	<div className="text-center mt-5">

			< Card element="people"/>
			<br></br>
			< Card element="vehicles"/>
			<br></br>
			< Card element="planets"/>
			<br></br>
			
			<Detail/>
	{/* // 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a> */}
	</div>
	// </div>
);
}
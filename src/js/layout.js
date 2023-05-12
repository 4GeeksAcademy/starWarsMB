import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/Plantes";
import { PlanetDetail } from "./views/PlanetsDetail";
import { VehicleDetail } from "./views/VehicleDetail";
import { PeopleDetail } from "./views/PeopleDetail";





//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planetId" element={<PlanetDetail />} />
						<Route path="/vehicles/:vehicleId" element={<VehicleDetail />}/>
						<Route path="/people/:peopleId" element={<PeopleDetail/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Card /> */}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

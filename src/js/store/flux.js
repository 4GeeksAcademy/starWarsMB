import { element } from "prop-types"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet:[],
			favorites: [],
			vehicle:[],
			people:[], 
			// pages:[],
			// records:[]
			
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars: async (element, page = 1, limit = 10) => {
				let baseUrl = `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`
				try {
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status

					let data = await response.json()
					let obj = {}
					obj[element] = data.results.map(id => ({
						...id,
						img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters":element}/${id.uid}.jpg`
					}))
					setStore(obj)
					return {
						pages: data.total_pages || 0,
						records : data.total_records || 0
					}
					

				} catch (error) {
					console.error(error)

				}


			},

			addFavorite: (element) => {
				const favorite = getStore().favorites;
				if (favorite.includes(element) == false) {
					const newFavorites = favorite.concat(element);
					setStore({ favorites: newFavorites })
					console.log(getStore().favorites)
				}

			},

			deleteFavorite: (element) => {

				const favorite = getStore().favorites;	
				let newFavorites = [...favorite]
				newFavorites.splice(element, 1);
				console.log("favorite")
				console.log(newFavorites)
				setStore({ favorites: newFavorites })
			},

			detailPlanet: async (id) => {
				console.log(id)
				let baseUrl = `https://www.swapi.tech/api/planets/${id}`
				console.log(baseUrl)
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status

					let data = await response.json()
					
					console.log(data.result.properties)
					// setStore(obj)

					setStore({planet: data.result})
					// let detailPlanet= ({planet: data.result, img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` })
					// // console.log("detailplanet")
					console.log(getStore().planet)
					
				} catch (error) {
					console.error(error)

				}
			},

			
			detailVehicle: async (id) => {
				console.log(id)
				let baseUrl = `https://www.swapi.tech/api/vehicles/${id}`
				console.log(baseUrl)
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status

					let data = await response.json()
					
					console.log(data.result.properties)
					// setStore(obj)

					setStore({vehicle: data.result})
					// let detailPlanet= ({planet: data.result, img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` })
					// // console.log("detailplanet")
					console.log(getStore().vehicle)
					
				} catch (error) {
					console.error(error)

				}
			},

			detailPeople: async (id) => {
				console.log(id)
				let baseUrl = `https://www.swapi.tech/api/people/${id}`
				console.log(baseUrl)
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status

					let data = await response.json()
					
					console.log(data.result.properties)
					// setStore(obj)

					setStore({people: data.result})
					// let detailPlanet= ({planet: data.result, img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` })
					// // console.log("detailplanet")
					console.log(getStore().people)
					
				} catch (error) {
					console.error(error)

				}
			}


		}
	}
};


export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet:[],
			favorites: []
			
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
					obj[element] = data.results.map(item => ({
						...item,
						img: `https://starwars-visualguide.com/assets/img/${element=="people"?"characters":element}/${item.uid}.jpg`
					}))
					setStore(obj)

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

			detailPlanet: async (id, element) => {
				console.log(id)
				let baseUrl = `https://www.swapi.tech/api/planets/${id}`
				console.log(baseUrl)
				try {
					let response = await fetch(baseUrl)
					console.log(response)
					if (!response.ok) return response.status

					let data = await response.json()
					let obj = {}
					obj[element] = data.result.map(id => ({...plantet}))
					// obj[element] = data.results.map(id => ({
					// 	...id,
					// 	img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
					// }))
					// console.log(data)
					// setStore({planet: data.result})
					// console.log("detailplanet")
					console.log(getStore().planet)
					
				} catch (error) {
					console.error(error)

				}
			}


		}
	}
};


export default getState;

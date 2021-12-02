import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Pet from "../Pet/Pet";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";


const Categories = () => {
	const params = useParams();
	const { category } = params;
	const [pets, setPets] = useState([]);


	useEffect(() => {
		let queryString;
		if (category && category != 'all') {
			queryString = `?category=${category}`;
		} else {
			queryString = '';
		}

		fetch(`http://localhost:5000/pets${queryString}`)
			.then(res => res.json())
			.then((petsFetched) => {
				setPets(petsFetched)
			})
			.catch(error => console.log(error));
	}, [category]);

	return (
		<section className="dashboard">
			<h1>Dashboard</h1>
			<CategoryNavigation currentCategory={category} />
			<ul className="other-pets-list">
				{pets.map(p => <Pet key={p.id} {...p} />)}
			</ul>
		</section>
	);
};

export default Categories;

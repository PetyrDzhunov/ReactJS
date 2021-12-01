import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const PetDetails = () => {
	const params = useParams();
	const { petId } = params;
	let [pet, setPet] = useState({});

	useEffect(() => {
		fetch(`http://localhost:5000/pets/${petId}`)
			.then(res => res.json())
			.then((petFetched) => {
				setPet(petFetched)
			})
			.catch(error => console.log(error));
	}, [petId]);

	return (
		<section class="detailsOtherPet">
			<h3>{pet.name}</h3>
			<p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
				Pet</button></a>
			</p>
			<p class="img"><img alt="img" src={pet.imageURL} /></p>
			<p class="description">{pet.description}</p>
			<div class="pet-info">
				<Link to={`/pets/details/${petId}/edit`}><button class="button">Edit</button></Link>
				<Link to="#"><button class="button">Delete</button></Link>
			</div>
		</section>
	);
};

export default PetDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
	}, []);

	return (
		<section class="detailsOtherPet">
			<h3>{pet.name}</h3>
			<p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
				Pet</button></a>
			</p>
			<p class="img"><img src={pet.imageURL} /></p>
			<p class="description">{pet.description}</p>
		</section>
	);
};

export default PetDetails;
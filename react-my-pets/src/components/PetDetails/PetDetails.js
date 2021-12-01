import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as petsService from '../../services/petService';
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

	const onPetButtonClickHandler = (e) => {
		let incrementedLikes = Number(pet.likes) + 1;
		petsService.pet(petId, incrementedLikes)
			.then((updatedPet) => {
				setPet((state) => ({ ...state, likes: Number(updatedPet.likes) }));
			});
	};


	return (
		<section className="detailsOtherPet">
			<h3>{pet.name}</h3>
			<p>Pet counter: {pet.likes}
				<button className="button" onClick={onPetButtonClickHandler}>
					<i className="fas fa-heart"></i>Pet
				</button>
			</p>
			<p className="img"><img alt="img" src={pet.imageURL} /></p>
			<p className="description">{pet.description}</p>
			<div className="pet-info">
				<Link to={`/pets/details/${petId}/edit`}><button className="button">Edit</button></Link>
				<Link to="#"><button className="button">Delete</button></Link>
			</div>
		</section>
	);
};

export default PetDetails;
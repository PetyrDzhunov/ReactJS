import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as petsService from '../../services/petService';
import InputError from '../Shared/InputError/InputError';

const EditPetDetails = () => {
	const [pet, setPet] = useState({});
	const [errorMessage, setErrorMessage] = useState('');

	const { petId } = useParams();
	useEffect(() => {
		petsService.getOne(petId)
			.then(res => res.json())
			.then((petFetched) => setPet(petFetched));
	}, [petId]);

	const onEditSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	const onDescriptionChangeHandler = (e) => {
		const description = e.target.value;
		if (description.length < 10) {
			setErrorMessage('Description too short!');
		} else {
			setErrorMessage('');
		}
	};

	return (
		<section className="detailsMyPet">
			<h3>{pet.name}</h3>
			<p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
			<p className="img"><img alt="parrotPicture" src={pet.imageURL} /></p>
			<form onSubmit={onEditSubmitHandler}>
				<textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
				<InputError>{errorMessage}</InputError>
				<button className="button">Save</button>
			</form>
		</section>
	);
};

export default EditPetDetails;

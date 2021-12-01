import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as petsService from '../../services/petService';

import PetFormView from "../PetFormView/PetFormView";

const EditPet = () => {
	const { petId } = useParams();
	const [pet, setPet] = useState({});
	useEffect(() => {
		petsService.getOne(petId)
			.then((pet) => setPet(pet));

	}, []);
	const onEditSubmitHandler = (e) => {
		console.log(e);
	};

	return (
		<PetFormView onSubmit={onEditSubmitHandler}
			petName={pet}
			setPetName={setPet}
		/>
	);
};

export default EditPet;

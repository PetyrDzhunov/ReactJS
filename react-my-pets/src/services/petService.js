const url = 'http://localhost:5000/pets';

export const create = (petName, description, imageURL, category) => {
	let newPet = {
		name: petName,
		description,
		imageURL,
		category,
		likes: 0,
	};

	return fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newPet)
	})
};

export const getOne = (id) => {
	return fetch(`${url}/${id}`)
}

export const update = (petId, pet) => {
	return fetch(`${url}/${petId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(pet)
	});
};

export const pet = (petId, likes) => {
	return fetch(`${url}/${petId}`, {
		method: "PATCH",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ likes })
	})
		.then(res => res.json());
};

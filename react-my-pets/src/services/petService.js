const url = 'http://localhost:5000/pets';

export const create = (petName, description, imageURL, category) => {
	let newPet = {
		name: petName,
		description,
		imageURL,
		category
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

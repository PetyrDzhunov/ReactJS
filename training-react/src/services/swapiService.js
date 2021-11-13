
let getPeople = async (count) => {
	let people = [];
	for (let i = 1; i <= count; i++) {
		let personJSON = await fetch(`https://swapi.dev/api/people/${i}`);
		let personData = await personJSON.json();
		let key = personData.height + personData.mass + personData.gender + personData.eye_color;
		personData.key = key;
		people.push(personData);
	};
	return people;
};

export default {
	getPeople
}
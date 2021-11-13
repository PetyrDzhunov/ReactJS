
import React from 'react';
import swapiService from '../services/swapiService';
import Person from './Person'



class PeopleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.count = 5;
	};

	componentDidMount() {
		swapiService.getPeople(this.count)
			.then((res) => {
				this.setState(() => ({ ...res }));
			})
			.catch(err => console.log(err));
	};


	render() {
		return (
			<ul>
				{Object.values(this.state).map((person) => {
					return (
						<Person name={person.name}
							height={person.height}
							hairColor={person.hair_color}
							key={person.key}
						/>
					)
				})}
			</ul>
		)
	};
}

export default PeopleList
import React from "react";
import style from './Person.module.css';

class Person extends React.Component {


	render() {
		return (
			<li className={this.props.height > 170 ? style.tallPerson : style.defaultPerson} >Name:{this.props.name} || Hair-color : {this.props.hairColor}, ||  Height : {this.props.height}</li>
		)
	};
}

export default Person;
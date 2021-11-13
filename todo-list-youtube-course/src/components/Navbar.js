import React, { Component } from 'react';

export class Navbar extends Component {
	constructor(props) {
		super(props)
	};

	render = () => (
		<div className="col-12">
			<h2 className="bg-primary text-white text-center p2">
				{this.props.name}'s To do List
			</h2>
		</div>
	);
}


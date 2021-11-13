import React, { Component } from 'react';

export class TodoRows extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	};


	render = () => (

		<tr>
			<td>{this.props.item.action}</td>
			<td>
				<input type="checkbox"
					checked={this.props.item.done}
					onChange={() => this.props.callback(this.props.item)}
				/>
			</td>
		</tr>
	);
}
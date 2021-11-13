import React, { Component } from 'react';
import { Trash } from 'react-bootstrap-icons';

export class TodoRows extends Component {
	constructor(props) {
		super(props);
	};

	render = () => (
		<tr>
			<td>{this.props.item.action}</td>
			<td>
				<input type="checkbox"
					checked={this.props.item.done}
					onChange={() => this.props.toggleDone(this.props.item)}
				/>
			</td>
			<td ><Trash onClick={() => this.props.deleteTask(this.props.item)} /></td>
		</tr>
	);
}
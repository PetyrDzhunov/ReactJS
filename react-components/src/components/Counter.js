import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 11
		};
	};
	render() {
		return (
			<div className="counter">
				<h1>Book Counter</h1>
				<span>{this.state.count}</span>
				<button onClick={(e) => this.setState({ count: this.state.count + 1 })}>+</button>
			</div>
		);
	}
};

export default Counter;

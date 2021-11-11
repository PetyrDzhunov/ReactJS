import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			collectionName: "My Books"
		};

		this.resetCounter = this.resetCounter.bind(this);
	};

	decrementCounter() {
		this.setState((prevState) => ({ count: prevState.count - 1 }));
	};

	incrementCounter() {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	resetCounter() {
		this.setState({ count: 0 })
	};

	render() {
		return (
			<div className="counter">
				<h1>{this.state.collectionName} Counter</h1>
				<button onClick={(e) => this.decrementCounter()}>-</button>
				<span>{this.state.count}</span>
				<button onClick={this.incrementCounter.bind(this)}>+</button>
				<button onClick={this.resetCounter}>Reset</button>
			</div>
		);
	}
};

export default Counter;

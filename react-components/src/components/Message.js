import React from "react";

class Message extends React.Component {
	constructor(props) {
		super(props)
		console.log("Constructor");
		this.state = {
			company: "Softuni"
		};
	};

	componentDidMount() {
		console.log('componentDidMount');
		setTimeout(() => {
			this.setState({ company: "Software University" });
		}, 2000);
	};

	componentDidUpdate() {
		console.log('ComponentDidUpdate');
	};

	componentWillUnmount() {
		console.log("ComponentWillUnmount");
	};

	render() {
		console.log('render');
		return (
			<span>{this.props.text} | {this.state.company}</span>
		)
	}

};

export default Message;
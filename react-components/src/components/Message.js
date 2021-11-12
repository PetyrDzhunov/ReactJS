import React from "react";
import './Message.css';

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
		// let classes = ['default-class'];

		// if (true) {
		// 	classes.push('selected-book');
		// };
		console.log('render');
		return (
			<span className="footer-message" >{this.props.text} | {this.state.company}</span>
		)
	}

};

export default Message;
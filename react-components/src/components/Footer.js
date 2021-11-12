import React from "react";
import refreshComponent from "../hoc/refreshComponent";
import Message from './Message';
class Footer extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		console.log(this.props.refreshCount);
		return (
			this.props.refreshCount == 0 ? <Message text="All rights reserved &copy;" /> : null
		);
	};
};

const enchancedFooter = refreshComponent(Footer);

export default enchancedFooter;
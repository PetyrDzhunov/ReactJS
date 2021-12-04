import Button from "./Button";
import React from "react";
import ThemeContext from "./ThemeContext";

class ThemedButton extends React.Component {

	componentDidMount() {
		console.log(this.context);
	}
	render() {
		return <Button
			buttonClickHandler={this.props.onChangeThemeClickHandler} />
	};
};

ThemedButton.contextType = ThemeContext;
export default ThemedButton;
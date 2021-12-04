import Toolbar from "./Toolbar";
import React from "react";
import ThemeContext from "./ThemeContext";


class AdvancedApp extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<ThemeContext.Provider value="light">
				<Toolbar
				// onChangeThemeClickHandler={this.onChangeThemeClickHandler.bind(this)}
				/>
			</ThemeContext.Provider>
		);
	};

	// onChangeThemeClickHandler() {
	// 	this.setState((oldState) => ({ currentTheme: oldState.currentTheme == 'dark' ? 'light' : 'dark' }));
	// };
};



export default AdvancedApp;
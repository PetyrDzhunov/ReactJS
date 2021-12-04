import React from 'react';

class AdvancedApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTheme: 'dark'
		};
	};
	render() {
		return <Toolbar onChangeThemeClickHandler={this.onChangeThemeClickHandler.bind(this)} theme={this.state.currentTheme} />;
	};

	onChangeThemeClickHandler() {
		this.setState((oldState) => oldState.currentTheme == 'dark' ? { currentTheme: 'light' } : { currentTheme: 'dark' });
	};
};

function Toolbar(props) {
	return (
		<div>
			<ThemedButton onChangeThemeClickHandler={props.onChangeThemeClickHandler} theme={props.theme} />
		</div>
	);
};

function Button({ theme, buttonClickHandler }) {
	console.log(theme);
	return (
		<button onClick={buttonClickHandler} style={{ backgroundColor: theme == 'dark' ? 'darkgray' : 'lightgreen' }}>{theme}</button>
	);
};

class ThemedButton extends React.Component {
	render() {
		return <Button theme={this.props.theme}
			buttonClickHandler={this.props.onChangeThemeClickHandler} />
	};
};

export default AdvancedApp;
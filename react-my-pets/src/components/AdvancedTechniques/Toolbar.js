import ThemedButton from "./ThemedButton";

function Toolbar(props) {
	return (
		<div>
			<ThemedButton onChangeThemeClickHandler={props.onChangeThemeClickHandler} />
		</div>
	);
};

export default Toolbar;
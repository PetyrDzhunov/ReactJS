
function Header(props) {

	return (
		<header className="heading">
			<h1>{props.children}</h1>
			<h2>The Best Framework Ever</h2>
		</header>
	);
}

export default Header;
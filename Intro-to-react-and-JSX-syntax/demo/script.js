const domElement = document.getElementById('root');

// const reactElement = React.createElement(
//     'header', {},
//     React.createElement('h1', {}, 'Hello from React Element'),
//     React.createElement('h2', {}, 'The Best Framework Ever'),
// );

const reactJSXElement = <h1>Hello from React JSX Element</h1>

const reactHeaderElement = (
	<header>
		<h1>Hello from React</h1>
		<h2>The Best Framework Ever</h2>
	</header>
);

ReactDOM.render(reactHeaderElement, domElement);
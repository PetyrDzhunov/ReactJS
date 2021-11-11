const Book = (props) => {
	// if (!props.title) {
	// 	return (
	// 		<article>
	// 			<p>No information provided</p>
	// 		</article>
	// 	);
	// }
	let author = props.author || "Unknown";
	return (
		<article>
			<h3 onClick={props.clickHandler}>{props.title}</h3>
			<p>{props.description}</p>
			<p>Author: {author}</p>
		</article>
	);
};

export default Book;
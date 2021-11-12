import style from './Book.module.css';

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
		<article className={style.article}>
			<h3 onClick={props.clickHandler}>{props.title}</h3>
			<p className={style.description}>{props.description}</p>
			<p className={style.author}>Author: {author}</p>
		</article>
	);
};

export default Book;
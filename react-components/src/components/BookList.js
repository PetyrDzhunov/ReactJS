
import React from 'react';
import Book from './Book';


class BookList extends React.Component {
	constructor(props) {
		super(props)
	};

	render() {
		console.log(this.props);
		return (
			<ul className="book-list">
				<h2>Our Book Collection</h2>
				{this.props.books.map(x => {
					return <Book title={x.title} description={x.description} />;
				})}
			</ul>
		)
	};
}

export default BookList
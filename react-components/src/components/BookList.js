
import React from 'react';
import Book from './Book';
import bookService from '../services/bookService';


class BookList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			books: []
		}
	};

	bookClicked(title) {
		console.log(`The book ${title}has been added to basket!`);
	};

	componentDidMount() {
		bookService.getAll()
			.then(books => {
				this.setState(() => ({ books }));
			})
	};

	render() {
		if (this.state.books.length == 0) {
			return <span>Loading books...</span>
		};
		return (
			<ul className="book-list">
				<h2>Our Book Collection</h2>
				{this.state.books.map(x => {
					return <Book
						key={x.id}
						title={x.title}
						author={x.author}
						description={x.description}
						clickHandler={this.bookClicked.bind(this, x.title)}
					/*clickHandler = {() => this.bookClicked(x.title)}*/
					/>;
				})}
			</ul>
		);
	};
};

export default BookList;
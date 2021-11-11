
import React from 'react';
import Book from './Book';


class BookList extends React.Component {
	constructor(props) {
		super(props)
	};

	bookClicked(title) {
		console.log(`The book ${title}has been added to basket!`);
	};

	render() {
		return (
			<ul className="book-list">
				<h2>Our Book Collection</h2>
				{this.props.books.map(x => {
					return <Book
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
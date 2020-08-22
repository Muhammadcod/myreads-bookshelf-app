import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
	const { shelf, books, moveToShelf } = props;

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books
						.filter((book) => book.shelf === shelf.key)
						.map((book) => (
							<Book
								key={book.id}
								book={book}
								shelf={shelf.key ? shelf.key : "none"}
								moveToShelf={moveToShelf}
							/>
						))}
				</ol>
			</div>
		</div>
	);
};

export default BookShelf;

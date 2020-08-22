import React from "react";
import Book from "./Book";

const SearchResult = (props) => {
	const { newBooks, moveToShelf, errorMessage, message } = props;
	return (
		<>
			<div className="search-books-results">
				<ol className="books-grid">
					{errorMessage && (
						<h3 className="error"> BOOK NOT FOUND </h3>
					)}
					{<h3 className="error"> {message}</h3>}
					{newBooks.map((book) => (
						<Book
							key={book.id}
							book={book}
							shelf={book.shelf ? book.shelf : "none"}
							moveToShelf={moveToShelf}
						/>
					))}
				</ol>
			</div>
		</>
	);
};

export default SearchResult;

import React from "react";
import OptionButton from "./OptionButton";
const Book = (props) => {
	const { shelf, book, moveToShelf } = props;
	return (
		<>
			<li>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,
								backgroundImage: `url(${
									book.imageLinks ? book.imageLinks.thumbnail : null
								})`,
							}}
						></div>
						<OptionButton book={book} shelf={shelf} moveToShelf={moveToShelf} />
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">
						{book.authors ? book.authors.join(", ") : null}
					</div>
					{/* https://stackoverflow.com/questions/53342040/how-to-join-in-react-if-array-doesnt-exist-initially */}
				</div>
			</li>
		</>
	);
};

export default Book;

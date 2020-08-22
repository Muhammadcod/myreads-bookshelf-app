import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";

const SearchPage = (props) => {
	const {
		newBooks,
		moveToShelf,
		onSearch,
		clear,
		errorMessage,
		message,
	} = props;
	console.log("can this be", errorMessage);
	return (
		<>
			<div className="search-books">
				<SearchBar onSearch={onSearch} clear={clear} />
				<SearchResult
					newBooks={newBooks}
					errorMessage={errorMessage}
					message={message}
					moveToShelf={moveToShelf}
				/>
			</div>
		</>
	);
};
export default SearchPage;

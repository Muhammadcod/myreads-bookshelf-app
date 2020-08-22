import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

const shelves = [
	{ key: "currentlyReading", title: "Currently Reading" },
	{ key: "wantToRead", title: "Want to Read" },
	{ key: "read", title: "Read" },
];
class BooksApp extends React.Component {
	state = {
		library: [],
		newBooks: [],

		query: "",
	};

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				library: books,
			}));
		});
	}

	findBooks = () => {
		const query = this.state.query;
		console.log("this is my query", query);

		query === ""
			? this.setState(() => ({
					newBooks: [],
			  }))
			: BooksAPI.search(query).then((result) => {
					result && !result.error
						? this.setState(() => ({
								newBooks: result,
						  }))
						: this.setState(() => ({
								newBooks: [],
						  }));
			  });
	};

	handleUpdate = (query) => {
		console.log("this is my input", query);
		this.setState(() => ({
			query,
		}));

		setTimeout(() => {
			this.findBooks();
		}, 800);
	};

	// https: //knowledge.udacity.com/questions/293047

	clear = () => {
		this.setState({
			newBooks: [],
		});
	};

	moveToShelf = (book, newShelf) => {
		BooksAPI.update(book, newShelf);
		// selected book should change from current shelf to newShelf
		book.shelf = newShelf;

		this.setState((prevState) => ({
			library: prevState.library
				.filter((li) => li.id !== book.id)
				.concat([book]),
		}));
	};

	render() {
		const { library, newBooks } = this.state;

		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<HomePage
							shelves={shelves}
							books={library}
							moveToShelf={this.moveToShelf}
						/>
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchPage
							newBooks={newBooks}
							moveToShelf={this.moveToShelf}
							onSearch={this.handleUpdate}
							clear={this.clear}
							shelves={shelves}
						/>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;

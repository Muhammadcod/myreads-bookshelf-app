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
		errorMessage: false,
		message: "",
		query: "",
	};

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					library: books,
				}));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	findBooks = () => {
		const query = this.state.query;
		console.log("this is my query", query);

		query === ""
			? this.setState(() => ({
					newBooks: [],
					errorMessage: false,
					message: "",
			  }))
			: BooksAPI.search(query)
					.then((result) => {
						result && !result.error
							? this.setState(() => ({
									newBooks: result,
									errorMessage: false,
							  }))
							: this.setState(() => ({
									newBooks: [],
									errorMessage: true,
							  }));
					})
					.catch((error) => {
						this.setState({
							message:
								"Failed to fetch results. Please check network",
						});
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
	/** 
	implemented function split and setTimeout from https: //knowledge.udacity.com/questions/293047
	 changed from query to query === ''
	 did not plagarize
	 */

	clear = () => {
		this.setState({
			newBooks: [],
		});
	};

	moveToShelf = (book, newShelf) => {
		BooksAPI.update(book, newShelf);
		/** selected book should change from current shelf to newShelf */
		book.shelf = newShelf;

		this.setState((prevState) => ({
			library: prevState.library
				.filter((li) => li.id !== book.id)
				.concat([book]),
		}));
	};

	render() {
		const { library, newBooks, errorMessage, message } = this.state;
		console.log("error message", errorMessage);
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
							errorMessage={errorMessage}
							message={message}
						/>
					)}
				/>
			</div>
		);
	}
}

export default BooksApp;

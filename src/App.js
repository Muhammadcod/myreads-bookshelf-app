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

	render() {
		const { library, newBooks } = this.state;

		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => (
						<HomePage shelves={shelves} books={library} />
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchPage
							newBooks={newBooks}
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

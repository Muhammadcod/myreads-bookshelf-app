import React from "react";
// import * as BooksAPI from './BooksAPI'
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

const shelves = [
	{ key: "CurrentlyReading", title: "Currently Reading" },
	{ key: "WantToRead", title: "Want To Read" },
	{ key: "Read", title: "Read" },
];

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
	};

	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => <HomePage shelves={shelves} />} />
				<Route path="/search" render={() => <SearchPage />} />
			</div>
		);
	}
}

export default BooksApp;

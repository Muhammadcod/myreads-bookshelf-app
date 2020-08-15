import React, { Component } from "react";
import Books from "./Books";

export default class SearchResult extends Component {
	render() {
		return (
			<>
				<div className="search-books-results">
					<ol className="books-grid">
						<Books />
					</ol>
				</div>
			</>
		);
	}
}

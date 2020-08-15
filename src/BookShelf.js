import React, { Component } from "react";
import Books from "./Books";
export default class BookShelf extends Component {
	render() {
		const { shelf } = this.props;
		console.log("this are the shelf ..", shelf.title);
		return (
			<>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{shelf.title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							<Books />
						</ol>
					</div>
				</div>
			</>
		);
	}
}

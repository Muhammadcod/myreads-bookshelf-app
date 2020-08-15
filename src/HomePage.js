import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class HomePage extends React.Component {
	render() {
		const { shelves } = this.props;
		return (
			<>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							{shelves.map((shelf) => (
								<BookShelf key={shelf.key} shelf={shelf} />
							))}
						</div>
					</div>
					<div className="open-search">
						<Link to="search">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</>
		);
	}
}
export default HomePage;

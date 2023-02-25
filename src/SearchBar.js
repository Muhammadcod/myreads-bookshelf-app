import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchBar extends Component {
	state = {
		query: "",
	};

	updateQuery = (event) => {
		const value = event.target.value;
		this.setState({ query: value }, () => {
			this.props.onSearch(value);
		});
	};

	render() {
		const { clear } = this.props;
		return (
			<>
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search" onClick={clear}>
							Close
						</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={this.updateQuery}
							autoFocus
						/>
					</div>
				</div>
			</>
		);
	}
}

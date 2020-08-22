import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class OptionButton extends Component {
	state = {
		option: this.props.shelf,
	};

	// currentstate.contact.concat([])

	handleChange = (event) => {
		this.setState({ option: event.target.value });
		this.props.moveToShelf(this.props.book, event.target.value);
	};
	render() {
		const { shelf } = this.props;
		// console.log("current shelf option", shelf);
		return (
			<>
				<div className="book-shelf-changer">
					<select value={shelf} onChange={this.handleChange}>
						<option value="move" disabled>
							Move to...
						</option>
						<option value="currentlyReading">
							Currently Reading
						</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</>
		);
	}
}

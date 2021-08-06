import React, { Component } from "react";
class ChangeBkShelf extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.shelf}
          onChange={(e) => {
            const newValue = e.target.value;

            this.props.shelfChanger(this.props.book, newValue);
          }}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ChangeBkShelf;

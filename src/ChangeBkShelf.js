import React, { Component } from "react";
class ChangeBkShelf extends Component {
  render() {
    const { book, shelfChanger } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(e) => shelfChanger(book, e.target.value)}
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

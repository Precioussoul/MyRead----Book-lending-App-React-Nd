import React, { Component } from "react";
import BookShelf from "./BookShelf";
class BookShelfContainer extends Component {
  state = {};
  render() {
    return (
      <div className="list-books-content">
        <div>
          {/* bookshelf */}
          <BookShelf />
        </div>
      </div>
    );
  }
}

export default BookShelfContainer;

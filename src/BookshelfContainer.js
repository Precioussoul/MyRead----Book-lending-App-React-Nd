import React, { Component } from "react";
import BookShelf from "./BookShelf";
class BookShelfContainer extends Component {
  render() {
    const { books } = this.props;

    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );

    const wantToRead = books.filter((book) => book.shelf === "wantToRead");

    const readme = books.filter((book) => book.shelf === "read");

    console.log("am here crd" + currentlyReading);
    console.log("am here wnt" + wantToRead);
    console.log("am here read" + readme);
    return (
      <div className="list-books-content">
        <div>
          {/* bookshelf */}
          <BookShelf books={currentlyReading} title="currently Reading" />
          <BookShelf books={wantToRead} title="Want to Read" />
          <BookShelf books={readme} title="read" />
        </div>
      </div>
    );
  }
}

export default BookShelfContainer;
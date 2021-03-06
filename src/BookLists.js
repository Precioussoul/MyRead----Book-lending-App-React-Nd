import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelfContainer from "./BookshelfContainer";
class BookLists extends Component {
  render() {
    const { books, shelfChanger } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <p>
            A web application that allows you to select and categorize books you
            have read, are currently reading, or want to read.
          </p>
        </div>
        {/* bookshelf container */}
        <BookShelfContainer books={books} shelfChanger={shelfChanger} />
        {/* add a book btn */}
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookLists;

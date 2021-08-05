import React, { Component } from "react";
import BookShelfContainer from "./BookshelfContainer";
class BookLists extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {/* bookshelf container */}
        <BookShelfContainer />
        {/* add a book btn */}
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BookLists;

import React, { Component } from "react";
import BookShelfContainer from "./BookshelfContainer";
class BookLists extends Component {
  render() {
    const { books, shelfChanger } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {/* bookshelf container */}
        <BookShelfContainer books={books} shelfChanger={shelfChanger} />
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

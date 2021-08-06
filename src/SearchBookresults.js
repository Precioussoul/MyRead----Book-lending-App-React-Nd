import React, { Component } from "react";
import Book from "./Book";

class SearchBookresults extends Component {
  render() {
    const { searchLists, shelfChanger } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {searchLists &&
            searchLists.map((book) => (
              <Book key={book.id} book={book} shelfChanger={shelfChanger} />
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchBookresults;
//

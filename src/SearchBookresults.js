import PropTypes from "prop-types";
import React, { Component } from "react";
import Book from "./Book";

class SearchBookresults extends Component {
  render() {
    const { searchLists, books, shelfChanger } = this.props;
    console.log(books);
    const newSearchlist = searchLists.map((list) => {
      books.map((book) => {
        if (book.id === list.id) {
          list.shelf = book.shelf;
        }
        return book;
      });
      return list;
    });

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {newSearchlist &&
            newSearchlist.map((book) => (
              <Book key={book.id} book={book} shelfChanger={shelfChanger} />
            ))}
        </ol>
      </div>
    );
  }
}

export default SearchBookresults;

SearchBookresults.propTypes = {
  shelfChanger: PropTypes.func.isRequired,
};

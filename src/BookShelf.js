import React, { Component } from "react";
import Book from "./Book";
class BookShelf extends Component {
  render() {
    const { books, shelf, shelfChanger } = this.props;
    const BookOnDifShelf = books.filter((book) => book.shelf === shelf.id);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {BookOnDifShelf &&
              BookOnDifShelf.map((book) => (
                <Book key={book.id} book={book} shelfChanger={shelfChanger} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

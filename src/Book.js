import React, { Component } from "react";
import ChangeBkShelf from "./ChangeBkShelf";
class Book extends Component {
  render() {
    const { book, shelfChanger } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "icons/bookcover.jpg"
                })`,
              }}
            ></div>

            <ChangeBkShelf
              book={book}
              shelf={book.shelf ? book.shelf : "none"}
              shelfChanger={shelfChanger}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors ? book.authors : "sofiyullah A.F"}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;

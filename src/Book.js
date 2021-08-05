import React, { Component } from "react";
import ChangeBkShelf from "./ChangeBkShelf";
class Book extends Component {
  render() {
    const { book } = this.props;
    console.log(book + "this is book");
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            ></div>

            <ChangeBkShelf />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;

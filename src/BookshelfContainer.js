import React, { Component } from "react";
import BookShelf from "./BookShelf";
import * as shelves from "./Shelves";
class BookShelfContainer extends Component {
  render() {
    const { books, shelfChanger } = this.props;

    return (
      <div className="list-books-content">
        <div>
          {shelves.SHELVES.map((shelf) => (
            <BookShelf
              key={shelf.id}
              shelf={shelf}
              books={books}
              shelfChanger={shelfChanger}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BookShelfContainer;

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

/*

  * bookshelf want to read 
          <BookShelf
            books={wantToRead}
            title="Want to Read"
            shelfChanger={shelfChanger}
          />
          * bookshelf read me *
          <BookShelf books={readme} title="read" shelfChanger={shelfChanger} />


           const wantToRead = books.filter((book) => book.shelf === "wantToRead");

    const readme = books.filter((book) => book.shelf === "read");

    // console.log("am here crd" + currentlyReading);
    // console.log("am here wnt" + wantToRead);
    // console.log("am here read" + readme);

*/

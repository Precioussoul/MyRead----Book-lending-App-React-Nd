import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookLists from "./BookLists";
import { debounce } from "throttle-debounce";

import Booksearch from "./Booksearch";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    myread: [],
    searchLists: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        myread: books,
      });
    });
  }
  getBookSearch = debounce(500, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        console.log(books);
        this.setState({
          searchLists: books,
        });
      });
    } else {
      this.setState({
        searchLists: [],
      });
    }
  });

  clearSearchList = () => {
    this.setState({
      searchLists: [],
    });
  };

  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) =>
      console.log("shelf changer" + books)
    );

    const updatedMyread = this.state.myread.map((read) => {
      if (read.id === book.id && shelf !== "none") {
        read.shelf = shelf;
      }
      return read;
    });

    this.setState({
      myread: updatedMyread,
    });
  };

  render() {
    const { myread, searchLists } = this.state;

    console.log(searchLists + "at App js");
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            // booklist component
            <BookLists books={myread} shelfChanger={this.shelfChanger} />
          )}
        ></Route>
        <Route
          path="/search"
          render={() => (
            // booksearch
            <Booksearch
              searchLists={searchLists}
              getBookSearch={this.getBookSearch}
              clearSearchList={this.clearSearchList}
              shelfChanger={this.shelfChanger}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default BooksApp;

import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookLists from "./BookLists";
import Booksearch from "./Booksearch";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    myread: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        myread: books,
      });
    });
  }
  shelfChanger = (book, shelf) => {
    const updatedMyread = this.state.myread.map((read) => {
      if (read.id === book.id) {
        read.shelf = shelf;
      }
      return read;
    });
    this.setState({
      myread: updatedMyread,
    });
  };

  render() {
    const { myread } = this.state;
    console.log(myread);
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
            <Booksearch />
          )}
        ></Route>
      </div>
    );
  }
}

export default BooksApp;

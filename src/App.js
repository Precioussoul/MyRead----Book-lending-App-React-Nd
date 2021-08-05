import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookLists from "./BookLists";
import Booksearch from "./Booksearch";

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

  render() {
    const { myread } = this.state;
    console.log(myread);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          // booksearch
          <Booksearch />
        ) : (
          // booklist component
          <BookLists books={myread} />
        )}
      </div>
    );
  }
}

export default BooksApp;

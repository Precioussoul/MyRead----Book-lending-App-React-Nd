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

  // after trying async and await as suggested in the code review, its started throwing errors at searchresults for some search "manage,art"

  getBookSearch = debounce(500, false, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchLists: [] });
        } else {
          this.setState({ searchLists: books });
        }
      });
    } else {
      this.setState({ searchLists: [] });
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
    let updatedMyread = [];
    updatedMyread = this.state.myread.filter((read) => read.id !== book.id);
    if (shelf !== "none") {
      book.shelf = shelf;
      updatedMyread = updatedMyread.concat(book);
    }

    this.setState({
      myread: updatedMyread,
    });
  };

  render() {
    const { myread, searchLists } = this.state;

    console.log(searchLists + "at App js");
    return (
      <div className="app">
        <Route exact path="/">
          {/* booklist component */}

          <BookLists books={myread} shelfChanger={this.shelfChanger} />
        </Route>
        <Route path="/search">
          {/* booksearch */}

          <Booksearch
            books={myread}
            searchLists={searchLists}
            getBookSearch={this.getBookSearch}
            clearSearchList={this.clearSearchList}
            shelfChanger={this.shelfChanger}
          />
        </Route>
      </div>
    );
  }
}

export default BooksApp;

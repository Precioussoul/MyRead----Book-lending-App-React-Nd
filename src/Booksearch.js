import React, { Component } from "react";
import Searchbar from "./Searchbar";

import SearchBookresults from "./SearchBookresults";

class Booksearch extends Component {
  render() {
    const { searchLists, books, getBookSearch, shelfChanger } = this.props;
    return (
      <div className="search-books">
        {/* searchbar */}
        <Searchbar getBookSearch={getBookSearch} />

        <SearchBookresults
          books={books}
          searchLists={searchLists}
          shelfChanger={shelfChanger}
        />
      </div>
    );
  }
}

export default Booksearch;

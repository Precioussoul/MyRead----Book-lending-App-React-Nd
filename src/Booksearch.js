import React, { Component } from "react";
import Searchbar from "./Searchbar";
import SearchBookresults from "./SearchBookresults";

class Booksearch extends Component {
  render() {
    return (
      <div className="search-books">
        {/* searchbar */}
        <Searchbar />

        {/* search result box */}

        <SearchBookresults />
      </div>
    );
  }
}

export default Booksearch;

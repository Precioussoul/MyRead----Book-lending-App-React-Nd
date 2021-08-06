import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchinput from "./SearchInput";

class Searchbar extends Component {
  render() {
    const { getBookSearch, clearSearchList } = this.props;
    return (
      <div className="search-books-bar">
        {/* close search btn */}
        <Link to="/" className="close-search" onClick={clearSearchList}>
          close
        </Link>
        {/* searchbook input */}
        <Searchinput getBookSearch={getBookSearch} />
      </div>
    );
  }
}

export default Searchbar;

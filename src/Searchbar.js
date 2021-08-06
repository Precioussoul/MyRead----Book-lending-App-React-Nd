import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchinput from "./SearchInput";

class Searchbar extends Component {
  render() {
    const { getBookSearch } = this.props;
    return (
      <div className="search-books-bar">
        {/* close search btn */}
        <Link to="/" className="close-search">
          close
        </Link>
        {/* searchbook input */}
        <Searchinput getBookSearch={getBookSearch} />
      </div>
    );
  }
}

export default Searchbar;

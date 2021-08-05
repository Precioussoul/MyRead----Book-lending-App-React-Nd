import React, { Component } from "react";
import Searchinput from "./SearchInput";
class Searchbar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        {/* close search btn */}
        <button
          className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}
        >
          Close
        </button>
        {/* searchbook input */}
        <Searchinput />
      </div>
    );
  }
}

export default Searchbar;

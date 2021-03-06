import React, { Component } from "react";
class Searchinput extends Component {
  state = {
    query: "",
  };

  UpdateQuery = (e) => {
    const value = e.target.value;
    this.setState({
      query: value,
    });
    this.props.getBookSearch(value);
  };
  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
        <input
          type="text"
          value={this.state.query}
          autoFocus
          onChange={this.UpdateQuery}
          placeholder="Search by title or author"
        />
      </div>
    );
  }
}

export default Searchinput;

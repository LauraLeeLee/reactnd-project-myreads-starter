import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelves from './Shelves';
import Book from './Book';
import PropTypes from 'prop-types';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      booksFound: [],
    }
    this.HandleGetInput= this.HandleGetInput.bind(this);
  }

  HandleGetInput(e) {
    this.setState({query: e.target.value});
    this.searchBooks(e.target.value);
      console.log(e.target.value);
  }

  searchBooks(query, booksFound){
    if(query !=='') {
      // query = this.state.query;

      BooksAPI.search(query)
        .then((response) => {
          this.setState({booksFound: response});
          console.log(query);
          console.log(response);
      });
    }
  }

  render() {
    console.log(this.state.query);
    console.log(this.state.booksFound);
    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"
                     onChange={this.HandleGetInput}/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">

            </ol>
          </div>
        </div>
    )
  }
}

export default Search

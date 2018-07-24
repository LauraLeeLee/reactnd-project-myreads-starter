import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI';
// import Shelves from './Shelves';
// import SelectShelf from './SelectShelf';
import Book from './Book';
import PropTypes from 'prop-types';


class Search extends Component {
  static propTypes = {
    // book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  state = {
      query: '',
      booksFound: [],
    }


  // getInput(e) {
  //   this.setState({query: e.target.value});
  //   this.searchBooks(e.target.value);
  //     console.log(this.state.query);
  // }

  searchBooks(e){
    const query = e.target.value.trim();
    this.setState({ query: query });
    if(query !=='') {
      BooksAPI.search(query)
        .then((response) => {
          this.setState({booksFound: response});
          console.log(response);
      });
    }
      console.log(this.state.booksFound);
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
              <Debounce time="500" handler="onChange">
                <input type="text"
                       placeholder="Search by title or author"
                       value={ this.state.query }
                       onChange={this.searchBooks}
                />
              </Debounce>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {// <Book
              //       books = {this.props.books}
              //       onChangeShelf={this.props.onChangeShelf}
              // />
            }

            </ol>
          </div>
        </div>
    )
  }
}

export default Search

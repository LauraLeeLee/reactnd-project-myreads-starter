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

  constructor(props) {
   super(props);
   this.state = {
      query: '',
      booksFound: [],
    }
   this.handleGetInput=this.handleGetInput.bind(this);
   this.searchBooks= this.searchBooks.bind(this);
  }


  handleGetInput(query) {
    this.setState({query: this.search.value});
    if(this.state.query && this.state.query.length > 1) {
        this.searchBooks(query);
      }
      console.log(this.state);
  }

  searchBooks(query) {

    // const query = e.target.value.trim();
    // this.setState({ query: query.trim() });
    if(query !=='') {
      BooksAPI.search(this.state.query)
        .then((response) => {
          this.setState({booksFound: response});
          console.log(response);
      });
    }
      console.log(query);
      console.log(this.state.booksFound);
  }

  render() {
    const {query, booksFound} = this.state;
    const {books, onChangeShelf } = this.props;

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
                       ref={input => this.search = input}
                       onChange={ this.handleGetInput }
                />
              </Debounce>

            </div>
          </div>
          <div className="search-books-results">
            { booksFound.length > 0 && (
            <div>
              <ol className="books-grid">
              { booksFound.map((book) => (
                <Book
                      book={ book }
                      books = {books}
                      onChangeShelf={onChangeShelf}
                      key={book.id}
                />
              ))}

              </ol>

           </div>
           )}
          </div>
        </div>
    )
  }
}

export default Search

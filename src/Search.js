import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
// import Shelves from './Shelves';
// import SelectShelf from './SelectShelf';
import Book from './Book';



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
      noResults: false
    }
   this.handleGetInput=this.handleGetInput.bind(this);
   this.searchBooks= this.searchBooks.bind(this);
  }


  handleGetInput(query) {
    this.setState({query: this.search.value});
    if(this.state.query && this.state.query.length) {
        this.searchBooks(query);
      } else {
        this.setState({booksFound:[], noResults: false});
      }
      console.log(this.state);
  }

  searchBooks(query) {
    if(query !=='') {
      BooksAPI.search(this.state.query)
        .then((response) => {
          response.length > 0 ? this.setState({booksFound: response, noResults: false}) : this.setState({booksFound: [], noResults: true});
          console.log(response);
      });
    } else  {
        this.setState({booksFound: [], noResults: false});
      }

      console.log(query);
      console.log(this.state);
  }

  render() {
    const {booksFound, noResults} = this.state;
    const {books, onChangeShelf } = this.props;

    console.log(this.state.query);
    console.log(this.state);

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
                      key={ book.id }
                />
              ))}
              </ol>
            </div>
            )}
            <div className="no-search-results">
            { noResults && (
              <div>
                 <p className="no-results">Sorry, no results found <br/>
                                          Please try your search again.</p>
               </div>
            )}
            </div>
          </div>
        </div>
    )
  }
}

export default Search

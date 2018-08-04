import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
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
      noResults: false,
      searchCategories: [
       'Android', 'Art', 'Artificial Intelligence',
       'Astronomy', 'Austen', 'Baseball', 'Basketball',
       'Bhagat', 'Biography', 'Brief', 'Business', 'Camus',
       'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
       'Cricket', 'Cycling', 'Desai', 'Design', 'Development',
       'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
       'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness',
       'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror',
       'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson',
       'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
       'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography',
       'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
       'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare',
       'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
       'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
      ]
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
    const {booksFound, noResults, query, searchCategories} = this.state;
    const {books, onChangeShelf } = this.props;

    console.log(this.state.query);
    console.log(this.state);

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
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
            {!query && (
              <div>
                <p className="category-note">
                 Search is limited to the following search terms:</p>
                <ol className="search-terms">
                {searchCategories.map(category => (
                  <li key={category} className="category">{category}</li>
                ))}
                </ol>
              </div>
            )}

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

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import SelectShelf from './SelectShelf';
import PropTypes from 'prop-types';

class  Shelves extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }



  render() {
    const bookshelves = ["currentlyReading", "wantToRead", "read"]
    const bookShelfNames = ["Currently Reading", "Want To Read", "Read"]

    return (
      <div className="list-books-content" onChange={this.props.onChangeShelf}>
        <div>
          {bookshelves.map((shelf, index) =>
            <div key={index} className="bookshelf">
              <h2 className="bookshelf-title">{bookShelfNames[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                     {this.props.books.filter(book => book.shelf === shelf)
                       .map(book => (
                      <li key={book.id}>
                        <Book book={book}
                              onChangeShelf={this.props.onChangeShelf}/>
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Shelves

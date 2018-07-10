import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class  Shelves extends Component {

  render() {
    const bookshelves = ["currentlyReading", "wantToRead", "read"]
    const bookShelfNames = ["Currently Reading", "Want To Read", "Read"]

    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf, index) =>
            <div key={index} className="bookshelf">
              <h2 className="bookshelf-title">{bookShelfNames[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                     {this.props.books.map(book => (
                      <li key={book.id}>
                        <Book />
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

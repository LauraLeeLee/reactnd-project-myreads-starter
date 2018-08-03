import React, {Component} from 'react';
import SelectShelf from './SelectShelf';
import PropTypes from 'prop-types';
import noImage from './icons/noImage.png';
import Dashboard from './Dashboard';


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  render () {
    const { book, onChangeShelf, books } = this.props;
    // const { authors, title, shelf, imageLinks } = book;
    // console.log(book, authors, title, shelf);
    // console.log(imageLinks.thumbnail)

  // const { book } = this.props;
  // const bookProps = this.props;
  // console.log(book, bookProps);

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                          backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noImage})` }}>
          </div>
          <SelectShelf  book={book}
                        books={ books }
                        onChangeShelf={ onChangeShelf } />
        </div>
        <div className="book-info-box">
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.map(author=>( <p className="authors-list" key={author}>{author} </p>)): undefined}</div>
          <Dashboard   book={book}
                        books={ books } />
        </div>
      </div>
    )
  }
}

export default Book

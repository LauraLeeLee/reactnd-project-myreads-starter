import React, {Component} from 'react';
import SelectShelf from './SelectShelf';
import PropTypes from 'prop-types';


class  Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
}

  // constructor(props) {
  //   super(props);
  //   state: {
  //     bookshelf: " "
  //   }
  // }


  render () {
    const { book } = this.props;
    console.log(book.shelf);
    // const { authors, title, shelf, imageLinks } = book;
    // console.log(book, authors, title, shelf);
    // console.log(imageLinks.thumbnail)

  // const { book } = this.props;
  // const bookProps = this.props;
  // console.log(book, bookProps);

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <SelectShelf />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book

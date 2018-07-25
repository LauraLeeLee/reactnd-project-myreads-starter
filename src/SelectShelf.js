import React, {Component} from 'react';
import PropTypes from 'prop-types';


class  SelectShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  constructor(props) {
   super(props);
   this.state = {shelf: this.props.book.shelf};
   this.handleChange= this.handleChange.bind(this);
   // console.log(this.state);
 }

  handleChange(e) {
    const book = this.props.book;
    const selectedShelf = e.target.value;
    this.props.onChangeShelf(book, selectedShelf);
    this.setState({ shelf: this.props.book.shelf });
    console.log(selectedShelf);
  }

// value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}

  render () {
    const {shelf} = this.state;
    const {book, books, onChangeShelf } = this.props;

    //sets default value for all books in search page
    let currentShelf = 'none';

    // //adds a shelf value for the search page books and to set shelf value with any books on shelves.
    for(let currentBook of books) {
      if(currentBook.id === book.id) {
        // currentBook.shelf = book.shelf;
        currentShelf = currentBook.shelf;
      }
    }

    // console.log(currentShelf);

    return (
      <div className="book-shelf-changer">
        <select  defaultValue={currentShelf}
                 onChange={this.handleChange} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none" >None</option>
        </select>
      </div>
    )
  }
}

export default SelectShelf

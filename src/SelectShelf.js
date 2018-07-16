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
   console.log(this.state);
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
    return (
      <div className="book-shelf-changer">
        <select  value={this.props.book.shelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default SelectShelf

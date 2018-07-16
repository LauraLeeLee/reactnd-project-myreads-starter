import React, {Component} from 'react';
import PropTypes from 'prop-types';


class  SelectShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  handleChange(e) {
    const book = this.props.book;
    const selectedShelf = e.target.value;
    this.props.onChangeShelf(selectedShelf, book);
  }

  constructor(props) {
   super(props);

   this.handleChange= this.handleChange.bind(this);
 }

// value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}

  render () {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange}>
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

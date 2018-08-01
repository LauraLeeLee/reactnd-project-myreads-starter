import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookDetails extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }

  constructor(props) {
   super(props);

 }

  render() {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className="about-book { showHideClassName }">
        <div className="book-info">
          <h2 className="about-title">
            {book.title}
          </h2>

          {book.description ? book.description.length !== 0 && (
            <div className="book-description">
              <span>{book.description}</span>
            </div>
          ) : "No description available"}
          <button onClick={ handleClose }>X</button>
        </div>
      </div>
    )
  }

}

export default BookDetails

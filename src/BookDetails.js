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
    const {book, books, show, handleClose } = this.props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className="{ showHideClassName }">
        <div className="about-book">
          <div className="book-info">
            <h2 className="about-title">
              {book.title}
            </h2>

            {book.description ? book.description.length !== 0 && (
              <div className="book-description">
                <span>{book.description}</span>
              </div>
            ) : "No description available"}
            <button onClick={ this.handleClose }>X</button>
          </div>
        </div>
      </div>
    )
  }

}

export default BookDetails

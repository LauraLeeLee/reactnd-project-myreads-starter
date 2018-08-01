import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  render() {
    const {book, books, show, handleClose } = this.props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={`about-book ${ showHideClassName }`}>
          <div className="book-info">
          <button className="details-close" onClick={ handleClose }>Close</button>
            <h2 className="about-title">
              {book.title}
            </h2>

            {book.description ? book.description.length !== 0 && (
              <div className="book-description">
                <span>{book.description}</span>
              </div>
            ) : "No description available"}
          </div>
        </div>

    )
  }

}

export default BookDetails

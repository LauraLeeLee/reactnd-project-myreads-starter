import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noImage from './icons/noImage.png';

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
            <h3 className="about-subtitle">
              {book.subtitle ? book.subtitle : undefined }
            </h3>
            <h4 className="about-authors">
             {book.authors ? book.authors: undefined}
            </h4>
            <div className="book-cover details-cover"
              style={{width: 128, height: 193, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noImage})`
              }}>
            </div>
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

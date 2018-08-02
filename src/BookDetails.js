import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noImage from './icons/noImage.png';

class BookDetails extends Component {
  render() {
    const {book, books, show, handleClose } = this.props;
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    let author= 'Author';
    if(book.authors.length > 1){
      author += 's';
    }
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
            <div >
              <div className="book-cover details-cover"
                style={{width: 128, height: 193, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                  backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noImage})`
                }}>
              </div>
              <h4 className="about-authors">
              {author}: {book.authors ? book.authors.map(author=>( <p className="authors-list" key={author}>{author} </p>)): undefined}
              </h4>
            </div>

            <div className="book-description">
            {book.description ? book.description.length !== 0 && (
                <span>{book.description}</span>
            ) : "No description available"}
            </div>
          </div>
        </div>

    )
  }

}

export default BookDetails

import React, {Component} from 'react';

class  Shelves extends Component {

  render() {
    const bookshelves = ["currentlyReading", "wantToRead", "read"]
    const bookShelfNames = ["Currently Reading", "Want To Read", "Read"]

    return (
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf, index) =>
            <div key={index} className="bookshelf">
              <h2 className="bookshelf-title">{bookShelfNames[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>

                  </li>
                
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>

    )
  }
}

export default Shelves
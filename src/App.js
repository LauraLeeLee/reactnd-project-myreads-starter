import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header';
import Shelves from './Shelves';
import Book from './Book';
import SelectShelf from './SelectShelf';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    screen: 'list', //list or search
    books: [],
    shelf: '',
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(this.state.shelf);
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
              <Header/>
              <Shelves books={this.state.books}
                       onChangeShelf={this.changeShelf}  />
          </div>
        )}/>

        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp

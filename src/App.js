import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header';
import Shelves from './Shelves';
import Book from './Book';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    screen: 'list', //list or search
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.screen === 'list' && (
          <div className="list-books">
              <Header/>
              <Shelves books={this.state.books}/>

            <div className="open-search">
              <a href='#search' onClick={() => this.setState({ screen: 'search' })}>Add a book</a>
            </div>
          </div>
        )}
          {this.state.screen === 'search' && (
            <Search />
          )}
      </div>
    )
  }
}

export default BooksApp

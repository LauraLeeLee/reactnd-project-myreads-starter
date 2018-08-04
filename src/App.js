import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Header from './Header';
import Shelves from './Shelves';
import Search from './Search';


class BooksApp extends React.Component {
  state = {
    screen: 'list', //list or search
    books: [],
  }

  //get all books from API after component mounts
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({ books })
    });
  }

  //function to change book on shelf and add new book from search via choosing a shelf
  changeShelf = (changeBook, shelf) => {
    console.log("changeShelf fired");
    //updates anything with the BooksAPI
    BooksAPI.update(changeBook, shelf)
    .then((response) => {
      console.log('update response', response);
      //sets shelf chosen to be property of the book to move
       changeBook.shelf = shelf;
       //removes moved book from books array
      var movedBooks = this.state.books.filter(movedBook => movedBook.id !== changeBook.id)
      //adds the moved book to new array of books
      movedBooks.push(changeBook);
      //sets state of books to be the new array of books
      this.setState({ books: movedBooks });
      console.log(this.state.books);
    });
  }

  render() {
    const { books, shelf } = this.state;
    // console.log(books);
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
              <Header/>
              <Shelves books={ books }
                       shelf={ shelf }
                       onChangeShelf={this.changeShelf}
              />
          </div>
        )}/>

        <Route path='/search'
              render={(props) => (
              <Search books={ books }
                    onChangeShelf={this.changeShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp

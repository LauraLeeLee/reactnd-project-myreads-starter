import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';

class Dashboard extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }

  constructor(props) {
   super(props);
   this.state = {show: false};
 }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
    console.log('hideModal clicked');
    console.log(this.state);
  }

  render() {
    const {book, books } = this.props;
    return (
      <div>
        <BookDetails  book={book}
                      books={ books }
                      show={ this.state.show }
                      handleClose={ this.hideModal }/>
        <button className="about-button" onClick = {this.showModal}>About</button>
     </div>
    )
  }
}

export default Dashboard

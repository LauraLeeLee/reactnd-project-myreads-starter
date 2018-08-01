import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    this.state({ show: true });
  }

  hideModal = () => {
    this.state({ show: false });
  }

  render() {
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

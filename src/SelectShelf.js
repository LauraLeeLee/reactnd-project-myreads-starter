import React, {Component} from 'react';


class  SelectShelf extends Component {

  handleChange(e) {
    const selectedShelf = e.target.value;
    this.props.onChangeShelf(selectedShelf);
  }

  constructor(props) {
   super(props);

   this.handleChange= this.handleChange.bind(this);
 }
 
  render () {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default SelectShelf

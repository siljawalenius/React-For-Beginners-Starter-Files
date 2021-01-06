import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  //save an empty ref object to grab input form text 
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  }

  goToStore = event => {
    //default event refreshes the page. We don't want that! 
    //1. stop form from submitting
    event.preventDefault();
    //2. get text from input
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    //3. change page to /store/entered name
    this.props.history.push(`/store/${storeName}`)

  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type = "text" 
          ref = {this.myInput}
          required 
          placeholder = "Store Name" 
          defaultValue = { getFunName() }>
        </input>
        <button type = "submit" >Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;

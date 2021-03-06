import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    //? 1. Stop the from from submitting
    e.preventDefault();
    //? 2. Get the text from that input
    const storeName = this.myInput.current.value;
    //? 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`); //! push state (react router)
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* comment */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;

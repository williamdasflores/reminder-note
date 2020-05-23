import React, { Component } from "react";

class AddNote extends Component {
  state = { text: "" };

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)} className="ui form">
          <div className="ui action input">
            <div style={{ width: "600px" }}>
              <input
                type="text"
                onChange={(e) => this.setState({ text: e.target.value })}  
                value={this.state.text}
                placeholder="Add Note..."
              />
            </div>
            <div style={{ paddingLeft: "15px" }}>
              <button 
                type="submit" 
                className="ui primary button">ADD</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNote;

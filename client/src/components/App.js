import React, { Component } from "react";
// import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions";
import AddNote from "./AddNote";
import NoteList from "./NoteList";

class App extends Component {
  state = { notes: [] };

  async componentDidMount() {
   /*  console.log("calling");
    const list = this.props.fetchList();
    if (list) console.log("called", list); */
    const response = await axios.get("http://localhost:4000/api/");
    this.setState({ notes: response.data });
  }

  onSubmitNote = async (note) =>  {
    await axios.post("http://localhost:4000/api/create", {
      title: note
    });
    const response = await axios.get("http://localhost:4000/api/");
    this.setState({ notes: response.data });
    
  };

  removeNote = async(title) => {
    await axios.delete(`http://localhost:4000/api/${title}`)
    const response = await axios.get("http://localhost:4000/api/");
    this.setState({ notes: response.data });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <div className="ui compact segment">
          <AddNote onSubmit={this.onSubmitNote} />
          <NoteList notes={this.state.notes} removeNote={this.removeNote}/>
        </div>
      </div>
    );
  }
}

export default App;
//export default connect(null, actions)(App);

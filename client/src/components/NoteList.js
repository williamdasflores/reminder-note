import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";

class NoteList extends Component {
  render() {
    const noteTitle = this.props.notes.map( note => {
      return (
        <div key={note._id}>
          {note.title} 
        </div>
      );
    });

    return <div>{noteTitle}</div>;
  }
}

export default NoteList;

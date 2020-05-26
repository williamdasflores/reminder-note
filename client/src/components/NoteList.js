import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions";

class NoteList extends Component {
  render() {
    const noteTitle = this.props.notes.map(note => {
      return (
        <div key={note._id} className="ui card">
          <div className="content">
            <i class="right floated window close icon"></i>
            <div className="header">
              {note.title} 
            </div>
            <div className="meta">
              {note.dateInsertion}
            </div>
            <div className="description">
              {note.description}
            </div>
          </div>
        </div>
      );
    });

    return <div>{noteTitle}</div>;
  }
}

export default NoteList;

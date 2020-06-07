import React, { Component } from "react";
import moment from 'moment';

class NoteList extends Component {


  render() {
    const noteTitle = this.props.notes.map(note => {
      return (
        <div key={note._id} className="ui card">
          <div className="content">
            <i class="right floated window close icon" 
              onClick={() => this.props.removeNote(note.title)}>
            </i>
            <div className="header">
              {note.title} 
            </div>
            <div className="meta">
              {moment(note.dateInsertion).format("DD/MM/YYYY")}
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

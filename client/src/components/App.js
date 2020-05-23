import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AddNote from './AddNote';

class App extends Component {
    componentDidMount() {
        console.log('calling');
        const list = this.props.fetchList();
        if (list) console.log('called', list);
    }

    onSubmitNote(noteText) {
        console.log(noteText);
    }

    render() {
        return (
          <div className="ui container" style={{ marginTop: "50px" }}>
            <div className="ui compact segment">
              <AddNote onSubmit={this.onSubmitNote}/>
            </div>
          </div>
        );
    }
};

export default connect(null, actions)(App);
import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentDidMount() {
        console.log('calling');
        const list = this.props.fetchList();
        if (list) console.log('called', list);
    }

    render() {
        return <div><h2>Hello William</h2></div>;
    }
};

export default connect(null, actions)(App);
import React from 'react';
import { Component } from 'react';

import Todolist from './Todolist.jsx';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Todolist />
      </div>
    )
  }
}

export default App;
import React, {Component} from 'react';
import NoteTakingApp from './compos/note';
import './compos/note.css'

class App extends Component {
  render() {
    return (
      <div className="note-taking">
        <NoteTakingApp/>
      </div>
    );
  }
}

export default App;

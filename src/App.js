import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Gallery from './displays/Gallery.js';
import Upload from './displays/Upload.js';

function App() {
  return (
    <div className='App'>
      <Router>
          <nav className='nav'>
            
            <ul className='nav-items'>
              <li className='nav-item'><Link to='/upload'>Upload</Link></li>
              <li className ='nav-item'><Link to='/'>Gallery</Link></li>
            </ul>
          </nav>
        <Switch>
          <Route path='/' exact component={Gallery} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

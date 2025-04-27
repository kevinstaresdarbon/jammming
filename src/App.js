import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.png';
import Search from './components/Search/Search';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {

  async function handleSearchSubmit() {

  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <figure className='App-logo-container'>
            <img src={logo} className="App-logo" alt="logo: A spinning star" />
          </figure>
          <Search />
          <nav>
            <ul>
              <li><a href='#'>Login with Spotify</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;

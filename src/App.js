import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.png';
import Search from './components/Search/Search';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {

  async function handleSearchSubmit(e) {
    e.preventDefault();
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <figure className='App-logo-container'>
            <img src={logo} className="App-logo" alt="logo: A spinning star" />
          </figure>
          <Search handleSearchSubmit={handleSearchSubmit} />
          <nav>
            <ul>
              <li><a href='https://jammin_api.unchained.vip/api/login'>Login with Spotify</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

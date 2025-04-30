import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkAuth = async () => {
      try {
        const res = await axios.get('https://jammin_api.unchained.vip/api/me', {
          withCredentials: true,
        });
        setProfile(res.data.profile);
      } catch (err) {
        // redirect to login if token expired or non existent
        if (err.response?.status === 401){
          window.location.href = 'https://jammin_api.unchained.vip/api/login';
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

  }, []);

  return (
    <Router>
      <div className="app_Container">
        <Header profile={profile} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard profile={profile} isAppLoading={loading} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import './css/reset.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPost/MyPosts'
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
          <Header/>
          <div className="container">
              <div className="main_content_wrapper">
                  <Navbar/>
                  <div className="social_page">
                    <Route exact path="/dialogs" component={Dialogs} />
                    <Route exact path="/profile" component={Profile} />
                  </div>
              </div>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;

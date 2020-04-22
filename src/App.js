import React from 'react';
import './App.css';
import './css/reset.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPost/MyPosts'
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
          <Header/>
          <div className="container">
              <div className="main_content_wrapper">
                  <Navbar/>
                  <div className="social_page">
                     <Route exact path="/dialogs" render={ () => <Dialogs dialogsData= {props.dialogsData} /> } />
                      <Route exact path="/profile" render={ () => <Profile posts = {props.posts} /> }/>
                  </div>
              </div>
          </div>
      </div>
      </BrowserRouter>
  );
}

export default App;

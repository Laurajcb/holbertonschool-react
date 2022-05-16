import React, { Component } from 'react'
import { Notifications } from "../Notifications/Notifications";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Login } from "../Login/Login";
import CourseList from '../CourseList/CourseList';
/* Proptypes */
import { bool } from 'prop-types';

function App({isLoggedIn}) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: bool,
};

App.defaultProps = {
  isLoggedIn: true,
};

export default App;

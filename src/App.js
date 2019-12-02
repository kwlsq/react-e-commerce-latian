import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import landingPage from './pages/landingPage';
import login from './pages/login'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Route path="/" component={landingPage} exact/>
        <Route path="/login" component={login} exact/>
      </div>
    )
  }
}

export default App;

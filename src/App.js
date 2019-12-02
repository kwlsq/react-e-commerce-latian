import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import landingPage from './pages/landingPage';
import register from './pages/register';
import login from './pages/login';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={landingPage} exact />
          <Route path="/login" component={login} exact />
          <Route path="/register" component={register} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

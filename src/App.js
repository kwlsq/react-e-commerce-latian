import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Route } from 'react-router-dom';
import landingPage from './pages/landingPage';
import register from './pages/register';
import login from './pages/login';
import Belajar from './pages/belajarRedux';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={landingPage} exact />
          <Route path="/login" component={login}  />
          <Route path="/register" component={register}  />
          <Route path="/belajar" component={Belajar}  />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

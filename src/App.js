import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Header from './components/Header'
import HomeView from './components/HomeView';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

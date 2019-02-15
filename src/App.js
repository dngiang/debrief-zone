import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard'
import CaseDetails from './components/cases/CaseDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateCase from './components/cases/CreateCase'
import CaseList from './components/cases/CaseList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/case/:id' component={CaseDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateCase} />
            <Route path='/' component={CaseList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

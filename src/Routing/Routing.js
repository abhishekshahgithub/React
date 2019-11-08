import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Home from '../Components/Home'

class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Home" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default Routing;

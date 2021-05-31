import React from "react";
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Buyer from './pages/Buyer';
import Terminals from './pages/Terminals';
import Layout from './pages/Layout';
import Buyers from './pages/Buyers';
import Helper from './pages/Helper';
import NoMatch from './pages/NoMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Helper} ></Route>
          <Route exact path="/auth" component={Auth} ></Route>
          <Route path="/home" component={Home} ></Route>
          <Route exact path="/buyer/:id" component={Buyer} ></Route>
          <Route exact path='/layout' component={Layout} />
          <Route path='/terminals' component={Terminals} />
          <Route path='/buyers' component={Buyers} />
          <Route component={NoMatch} status={404}/>
        </Switch>
      </Router>
    )
  }
}

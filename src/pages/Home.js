import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Buyers from './Buyers';
import Terminals from './Terminals';
import Layout from './Layout';
import Navbar from '../components/Navbar';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        let STATUS_LOGGED = true;
        let key = this.props.location.key;
        if (key == undefined) {
            STATUS_LOGGED = false;
        }
        this.state = {
            loggedIn: STATUS_LOGGED,
            avatarUrl: localStorage.getItem("avatarUrl")
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/auth" ></Redirect>
        }
        return (
            <Router>
                <Navbar avatarUrl={this.state.avatarUrl} />
                <Switch>
                    <Route exact path='/layout' component={Layout} />
                    <Route path='/terminals' component={Terminals} />
                    <Route path='/buyers' component={Buyers} />
                </Switch>
            </Router>
        )
    }
}

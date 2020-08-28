import React from "react";
import { Redirect } from "react-router-dom";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        
        let STATUS_LOGGED = true;
        let key = this.props.location.key;
        if (key == undefined) {
            STATUS_LOGGED = false;
        }
        this.state = {
            loggedIn: STATUS_LOGGED
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            //to="/auth"
            return <Redirect to="/auth" ></Redirect>
        }
        return (
            <div>
                <h1>Layout page</h1>
            </div>
        )
    }
}
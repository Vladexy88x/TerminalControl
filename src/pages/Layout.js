import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    let STATUS_LOGGED = true;
    const { key } = this.props.location;
    if (key == undefined) {
      STATUS_LOGGED = false;
    }
    this.state = {
      loggedIn: STATUS_LOGGED,
    };
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/auth" />;
    }
    return (
      <div>
        <h1>Layout page</h1>
      </div>
    );
  }
}

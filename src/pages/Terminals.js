import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  InputGroup, FormControl, Form, Button,
} from 'react-bootstrap';
import TodoTerminalList from '../components/TodoTerminalList';
import { Redirect } from 'react-router-dom';

export default class Terminals extends React.Component {
  constructor(props) {
    super(props);
      
    let STATUS_LOGGED = true;
      
    const { key } = this.props.location;
    if (key == undefined) {
      STATUS_LOGGED = false;
    }
    this.state = {
      loggedIn: STATUS_LOGGED,
      isAdded: false,
      nameTerminal: '',
      descriptionTerminal: '',
      items: [],
      isDelete: false
    };
  }

    handleNameTerminal = (e) => {
      this.setState({ nameTerminal: e.target.value });
    }

    handleDescriptionTerminal = (e) => {
      this.setState({ descriptionTerminal: e.target.value });
    }

    handleAddedTerminals = (e) => {
      e.preventDefault();
      if (this.state.nameTerminal.length === 0) {
        return;
      }

      const newItem = {
        nameTerminal: this.state.nameTerminal,
        descriptionTerminal: this.state.descriptionTerminal,
      };
      this.setState((state) => ({
        items: state.items.concat(newItem),
        nameTerminal: '',
        descriptionTerminal: '',
      }));
      this.setState({ isAdded: true, isDelete: false });
    }

    handleDelete = (e) => {
      this.setState({ isDelete: true });
      const lastElem = this.state.items.length;
      this.state.items.splice(lastElem - 1, lastElem);
    }

    render() {
      if (this.state.loggedIn === false) {
        // to="/auth"
        return <Redirect to="/auth" />;
      }
      return (
        <div>
          <Form style={{ paddingLeft: '250px', paddingRight: '250px' }} onSubmit={this.handleAddedTerminals}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Название терминала</Form.Label>
              <Form.Control onChange={this.handleNameTerminal} value={this.state.nameTerminal} type="text" />
            </Form.Group>
            <InputGroup>
              <Form.Label>Описание терминала</Form.Label>
              <FormControl onChange={this.handleDescriptionTerminal} value={this.state.descriptionTerminal} as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button variant="primary" type="submit">Добавить</Button>

            <Button onClick={this.handleDelete} variant="danger" type="button">Удалить</Button>
            <TodoTerminalList items={this.state.items} />
          </Form>
        </div>
      );
    }
}

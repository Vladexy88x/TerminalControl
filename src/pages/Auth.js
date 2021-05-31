import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            loggedIn: false,
            isValidPassword: false,
            userInfo: '',
            avatarUrl: '',
            isValidUsername: false
        }
    }

    CheckLogin = () => {
        const { login } = this.state;
        fetch(`https://api.github.com/search/users?q=${login}`)
            .then(res => res.json())
            .then(res => {
                //avatar_url
                if (res.total_count != 0) {
                    this.setState({
                        isValidUsername: true,
                        userInfo: res.items[0],
                        avatarUrl: res.items[0].avatar_url
                    })
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    checkValidated = () => {
        if (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(this.state.password)) {
            this.setState({
                isValidPassword: true
            })
        } else {
            this.setState({
                isValidPassword: false
            })
        }
    }

    handleLogin = (e) => {
        this.setState({ login: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleResult = (e) => {
        e.preventDefault();
        localStorage.setItem("avatarUrl", this.state.avatarUrl);
        this.setState({
            loggedIn: true
        })
        const { isValidPassword, isValidUsername } = this.state;
        if (isValidUsername && isValidPassword) {
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        const CheckPassword = () => {
            if (this.state.isValidPassword) {
                return <Form.Text className="text-success">Password validate</Form.Text>
            }
            return <Form.Text className="text-danger">Password invalidate</Form.Text>
        }
        const UserAvatar = () => {
            if (this.state.isValidUsername) {
                return (<Image src={this.state.avatarUrl} roundedCircle width="120" height="120"></Image>)
            }
            return <Form.Text className="text-muted">Avatar empty</Form.Text>
        }
        if (this.state.loggedIn) {
            return <Redirect to="/home"></Redirect>
        }
        return (
            <Container fluid>
                <Row>
                    <Col md={2} >
                        <Form onSubmit={this.handleResult}>
                            <div style={{ paddingLeft: "50px" }} >
                                <UserAvatar />
                            </div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onBlur={this.CheckLogin} onChange={this.handleLogin} value={this.state.login} type="text" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    We'll never share your username with anyone else.
                               </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={this.checkValidated} onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" />
                                <CheckPassword />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

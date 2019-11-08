import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        error: null,
        users: null
    };

    componentDidMount() {
        const users = localStorage.getItem("users");
        this.setState({ users: JSON.parse(users) })
    }

    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });

    handleSignUp = event => {
        event.preventDefault()

        const { username, password, users } = this.state;
        if (!username.length || !password.length) {
            this.setState({ error: "please fill out all the details" })
            return false;
        } else {
            // eslint-disable-next-line
            users ? users.filter(user => {
                if (user.username !== username || user.password !== password) {
                    this.setState({ error: "Invalid creadetials" })
                } else {
                    const json = JSON.stringify(user);
                    localStorage.setItem("currentUser", json);
                    this.props.history.push("/Home");
                    window.location.reload();
                }
            }) : this.setState({ error: "no user found" })
        }
    };

    render() {
        const { username, password, error } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card card-body py-3 mb-3">
                                <div className="text-center mb-3"><i className="fa fa-user fa-2x text-primary"></i></div>
                                <h3 className="text-center mb-4">Log In</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form onSubmit={this.handleSignUp}>

                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="username">Username :</label>

                                                <input
                                                    type="username"
                                                    id="username"
                                                    className="form-control"
                                                    placeholder="username"
                                                    name="username"
                                                    onChange={this.handleOnchange}
                                                    value={username}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="password">Password:</label>

                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="password"
                                                    name="password"
                                                    autoComplete=''
                                                    onChange={this.handleOnchange}
                                                    value={password}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-primary btn-block">LogIn</button>
                                            </div>
                                        </form>
                                        {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-footer">
                                <Link to="/Register">Register</Link>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        )
    }
}

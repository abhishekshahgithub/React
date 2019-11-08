import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            contactNumber: '',
            email: '',
            username: '',
            password: '',
            error: null,
            users: [],
            loading: false
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("users")
            const users = JSON.parse(json);
            if (users) {
                this.setState(() => ({ users }))
            }
        } catch (e) {
        }
    };

    componentDidUpdate(prevState, prevProps) {
        if (prevProps.users.length !== this.state.users.length) {
            const json = JSON.stringify(this.state.users);
            localStorage.setItem("users", json);
        }
    }

    handleOnchange = e => this.setState({ [e.target.name]: e.target.value });

    handleSignUp = event => {
        event.preventDefault()
        this.setState({ loading: true });
        const { name, username, contactNumber, email, password } = this.state;
        if (!name.length || !username.length || !contactNumber.length || !email.length || !password.length) {
            this.setState({ error: "please fill out all the details", loading: false })
            return false;
        } else if (password.length < 6) {
            this.setState({ error: "password should contain atleast 6 charecters", loading: false })
            return false;
        } else {
            const regesterData = {
                name: name,
                username: username,
                contactNumber: contactNumber,
                email: email,
                password: password
            };

            this.setState({
                error: "",
                name: "",
                username: "",
                contactNumber: "",
                email: "",
                password: "",
                users: this.state.users.concat(regesterData)
            });
            setTimeout(() => {
                this.props.history.push("/")
                this.setState({ loading: false })
            }, 1000)
        }
    };


    render() {
        const { name, username, contactNumber, email, password, error, loading } = this.state;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card card-body py-3 mb-3">
                                <div className="text-center mb-3"><i className="fa fa-user fa-2x text-primary"></i></div>
                                <h3 className="text-center mb-4">Sign up</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form onSubmit={this.handleSignUp}>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="name">Name:</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    autoFocus
                                                    className="form-control"
                                                    placeholder="name"
                                                    name="name"
                                                    onChange={this.handleOnchange}
                                                    value={name}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="username">Username:</label>
                                                <input
                                                    id="username"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="username"
                                                    name="username"
                                                    onChange={this.handleOnchange}
                                                    value={username}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="contactNumber">Contact Number:</label>
                                                <input
                                                    id="contactNumber"
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="contact number"
                                                    name="contactNumber"
                                                    onChange={this.handleOnchange}
                                                    value={contactNumber}
                                                />

                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="font-weight-bold small" htmlFor="email">Email:</label>

                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="email"
                                                    name="email"
                                                    onChange={this.handleOnchange}
                                                    value={email}
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
                                                <button disabled={loading} className="btn btn-primary btn-block">SignUp</button>
                                            </div>
                                        </form>
                                        {error && <p className="text-danger mt-3 mb-2 text-center">{error}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-footer">
                                <span className="text-center small">Have an account ? <Link to="/">Login</Link></span>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </React.Fragment>
        )
    }
}
export default Register;

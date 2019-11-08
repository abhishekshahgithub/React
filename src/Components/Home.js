import React, { Component } from 'react'

export default class Dashboard extends Component {
  state = {
    currentUser: null
  }
  componentDidMount() {
    this.setCurrentUser()
  }
  setCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    this.setState({ currentUser: JSON.parse(user) })
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div >
        <div className="container">
          <h1 className="text-center mt-4">Home Page</h1>
          {currentUser && (
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div className="card card-body">
                  <ul>
                    <li><b>Name:</b> {currentUser.name}</li>
                    <li><b>Username:</b> {currentUser.username}</li>
                    <li><b>Email:</b> {currentUser.email}</li>
                    <li><b>Contact Number:</b> {currentUser.contactNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

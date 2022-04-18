import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };
  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users/");

    this.setState({ users: response.data.data, isLoading: false });
  }
  render() {
    return (
      <>
        <button
          className='m-2 btn btn-lg btn-primary'
          onClick={this.handleCreate}>
          Create
        </button>
        <div className='row'>
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user, index) => {
              return (
                <div key={index} className='col-4 text-center p-5'>
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100%" }}
                  />
                  <h4>{user.first_name}</h4>
                  <h4>{user.last_name}</h4>
                  <span>{user.email}</span>
                  <div className='row'>
                    <div className='col-6'>
                      <button
                        onClick={this.handleUpdate}
                        className='btn btn-sm btn-info '>
                        Update
                      </button>
                    </div>
                    <div className='col-6'>
                      <button
                        onClick={this.handleDelete}
                        className='btn btn-sm btn-danger '>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handleCreate = () => {};
  handleUpdate = (user) => {};
  handleDelete = (user) => {};
}

export default Users;

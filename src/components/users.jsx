import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";
import { Link } from "react-router-dom";

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
                    alt=''
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100%" }}
                  />
                  <Link to={`/users/${user.id}`} key={user.id}>
                    <h4>{user.first_name}</h4>
                    <h4>{user.last_name}</h4>
                  </Link>
                  <span>{user.email}</span>
                  <div className='row'>
                    <div className='col-6'>
                      <button
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                        className='btn btn-sm btn-info '>
                        Update
                      </button>
                    </div>
                    <div className='col-6'>
                      <button
                        onClick={() => {
                          this.handleDelete(user);
                        }}
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
  handleCreate = async () => {
    const newUser = {
      first_name: "hadi",
      last_name: "Behmanesh",
      email: "hadibehmanesh@gmail.com",
      avatar: "",
    };
    await axios.post("https://reqres.in/api/users/", newUser);

    this.setState({ users: [...this.state.users, newUser] });
  };
  handleUpdate = async (user) => {
    user.first_name = "updated";
    await axios.put(`https://reqres.in/api/users/${user.id}`, user);
    const updatedUsers = [...this.state.users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = { ...user };
    this.setState({ users: updatedUsers });
  };
  handleDelete = async (user) => {
    await axios.delete(`https://reqres.in/api/users/${user.id}`);
    const newUsers = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users: newUsers });
    //console.log(response);
  };
}

export default Users;

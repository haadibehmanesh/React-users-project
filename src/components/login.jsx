import React, { Component } from "react";
import Input from "./input";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='email'
            label='Email'
            value={email}
            onChange={this.handleChange}
            className='form-control'
            type='text'
          />
          <Input
            name='password'
            label='Password'
            value={password}
            onChange={this.handleChange}
            className='form-control'
            type='password'
          />

          <button className='m-3 btn btn-primary' type='submit'>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;

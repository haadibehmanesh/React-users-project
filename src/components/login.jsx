import React, { Component } from "react";
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
    alert("A name was submitted: " + this.state.value);
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='m-3'>
            <div className='mb-3'>
              <label htmlFor='email'>Email:</label>
              <input
                onChange={this.handleChange}
                value={email}
                name='email'
                id='email'
                className='form-control'
                type='text'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password:</label>
              <input
                onChange={this.handleChange}
                value={password}
                name='password'
                id='password'
                className='form-control'
                type='password'></input>
            </div>
            <button className='btn btn-primary' type='submit'>
              Login
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;

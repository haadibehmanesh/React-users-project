import axios from "axios";
import React, { Component, createRef } from "react";
class Login extends Component {
  email = createRef();
  password = createRef();
  handleSubmit = async (e) => {
    e.preventDefault();

    const account = {
      email: this.email.current.value,
      passwrod: this.password.current.value,
    };
    if (account.email && account.passwrod) {
      const response = await axios.post(`https://reqres.in/api/login`, account);
      console.log(response);
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='m-3'>
            <div className='mb-3'>
              <label htmlFor='email'>Email:</label>
              <input
                ref={this.email}
                id='email'
                className='form-control'
                type='text'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password:</label>
              <input
                ref={this.password}
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

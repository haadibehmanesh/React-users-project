import React, { Component } from "react";
import Input from "./input";
import * as yup from "yup";
import axios from "axios";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
  };
  schema = yup.object().shape({
    email: yup
      .string()
      .email("Email format is not valid")
      .required("Email field is mandatory"),
    password: yup.string().min(4, "use at least 4 characters"),
  });

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const result = await this.validate();
    if (result) {
      try {
        this.setState({ sending: true });

        const response = await axios.post(
          `https://reqres.in/api/login`,
          result
        );
        this.setState({ sending: false });
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: ["Email or password is wrong"] });
      }
    }
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <div className='m-3'>
          {this.state.errors.length !== 0 && (
            <div className='alert alert-danger'>
              <ul>
                {this.state.errors.map((e, i) => {
                  return <li key={i}> {e}</li>;
                })}
              </ul>
            </div>
          )}
        </div>

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

          <button
            disabled={this.state.sending}
            className='m-3 btn btn-primary'
            type='submit'>
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;

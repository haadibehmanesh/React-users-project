import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import Input from "../input";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [account, setAccount] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAccount((values) => ({ ...values, [name]: value }));
  };

  const [errors, setErrors] = useState([]);
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().email(),
    password: yup.string().min(4, "use at least 4 characters"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await validate();
    if (result) {
      try {
        setSending(true);

        const response = await axios.post(
          `https://reqres.in/api/login`,
          result
        );

        localStorage.setItem("token", response.data.token);
        //this.setState({ redirect: true });
        navigate("/dashboard");

        setSending(false);
      } catch (error) {
        setSending(false);
        setErrors(["Email or password is wrong"]);
      }
    }
  };
  const validate = async () => {
    try {
      const result = await schema.validate(account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      setErrors(error.errors);
    }
  };

  return (
    <>
      <div className='m-3'>
        {errors.length !== 0 && (
          <div className='alert alert-danger'>
            <ul>
              {errors.map((e, i) => {
                return <li key={i}> {e}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          name='email'
          label='Email'
          value={account.email || ""}
          onChange={handleChange}
          className='form-control'
          type='text'
        />
        <Input
          name='password'
          label='Password'
          value={account.password || ""}
          onChange={handleChange}
          className='form-control'
          type='password'
        />

        <button
          disabled={sending}
          className='m-3 btn btn-primary'
          type='submit'>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

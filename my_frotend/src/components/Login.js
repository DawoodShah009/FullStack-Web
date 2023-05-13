import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import {SliderData} from './components/SliderData'
import {useGlobalState, setGlobalState} from './Globalstates'

function Login() {
  document.title = "LogIn";
  setGlobalState('infostate',false)
  const nav = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("/login", body)
      .then(response => {
        console.log(response)
        alert(response.data.message)
        setGlobalState('homestate',true)
        nav('/home')
      })
      .catch(error=> {
        console.log(error)
        alert(error.response.data.message);
      })
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Log In</h1>
        <form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email && (
              <small style={{ color: "red" }}> Email is Required</small>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors.password && (
              <small style={{ color: "red" }}>
                {" "}
                Password must contain atleast 5 digits
              </small>
            )}
          </Form.Group>

          <Form.Group>
            <Button as="sub" variant="primary" onClick={handleSubmit(onSubmit)}>
              {" "}
              Log In
            </Button>
          </Form.Group>
          <br></br>
          <Form.Group>
            <small>
              Don't have an account <Link to="/signup">Create One!</Link>
            </small>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}
export default Login;

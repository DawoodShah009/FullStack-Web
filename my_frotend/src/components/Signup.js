import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useGlobalState, setGlobalState} from './Globalstates'

function Signup() {
  document.title = "SignUp";
  setGlobalState('infostate',false)
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const onSubmit = (data) => {
    if (data.password === data.confirm_password) {
      const body = {
        username: data.user_name,
        email: data.email,
        password: data.password,
      };
      axios
        .post("/signup", body)
        .then((response) => {
          console.log(response.data.message);
          setMessage(response.data.message+"Go to Login!");
          setVariant("success");
          setShow(true);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setMessage(error.response.data.message);
          setVariant("danger");
          setShow(true);
        });
    } else {
      setMessage("Password does not  matched!");
      setVariant("warning");
      setShow(true);
    }
  };
  return (
    <div className="container">
      <div className="form">
        {show ? (
          <>
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{message}</Alert.Heading>
            </Alert>
            <h1>SignUp</h1>
          </>
        ) : (
          <h1>SignUp</h1>
        )}

        <form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter UserName"
              {...register("user_name", { required: true, maxLength: 20 })}
            />
            {errors.user_name && (
              <small style={{ color: "red" }}> UserName is Required</small>
            )}
          </Form.Group>

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
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...register("confirm_password", {
                required: true,
                minLength: 5,
              })}
            />
            {errors.confirm_password && (
              <small style={{ color: "red" }}>
                {" "}
                Confirm Password must contain atleast 5 digits
              </small>
            )}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Button as="sub" variant="primary" onClick={handleSubmit(onSubmit)}>
              {" "}
              SignUp
            </Button>
          </Form.Group>
          <br></br>
          <Form.Group>
            <Link to="/login"> Already have an account!</Link>
          </Form.Group>
        </form>
      </div>
    </div>
  );
}
export default Signup;

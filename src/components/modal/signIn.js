import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Button, Form, Alert} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import styles from './Modal.module.css';
//todo get Api from config
import { API } from "../../config/api";

const SignIn = (props) => {
    const title = "Login";
    document.title = "WOW | " + title;

    //? Process useNavigate
    let navigate = useNavigate()

    //? process state useContext
    const [state, dispatch] = useContext(UserContext)
    const [message, setMessage] = useState(null);

    //? process state inputan login
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

const { email, password } = form;
const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create Configuration Content-type here ...
            // Content-type: application/json
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
       
            //convert data to string
            const body = JSON.stringify(form);

            //insert data user for login here
            const response = await API.post('/login', body, config)
            console.log(response);

           // Checking Process
            if (response?.status == 201) {
              
                  // Status check
            if (response.data.data.role == "Admin") {
                navigate('/transaction')
            } else {
                navigate('/landingPage')
                }
                  // send data to use context
                  dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                });

            const alert = (
                <Alert variant="success" className="py-1">
                    Login success
                </Alert>
                );
                setMessage(alert);
          }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Login failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
        }
    };

    return (
        <Form className="formContainer" onSubmit={handleSubmit}>
            <h1 className="formText">Sign In</h1>
            {message && message}
            <Form.Group className="mb-3 ">
                <Form.Control
                    className="formGroup"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    className="formGroup"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-1">
            <Button className="btn-danger" type="submit" >
                Sign In
            </Button>
            </div>
            
            <Form.Group>
                <div className="textMuted">
                    Don't have an account ? Klik <span onClick={props.onClick}>Here</span>
                </div>
            </Form.Group>
        </Form>
    )
}

export default SignIn;
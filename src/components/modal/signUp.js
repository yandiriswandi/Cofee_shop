import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Button, Form, Alert } from 'react-bootstrap';

//Todo get API Config
import {API} from '../../config/api'

const SignUp = (props) => {

    //? change title web to register
    const title = 'Register';
    document.title = 'WOW | ' + title;

    //? process useContext
  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  
    //? store data with useState
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    });

  const { fullName, email, password } = form; 
  
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
    
          // Convert form data object to string here ...
          const body = JSON.stringify(form)
    
          // Insert data user to database here ...
          const response = await API.post('/register', body, config);
          console.log(response);
    
          // Notification
          if (response.data.status == "success") {
            const alert = (
              <Alert variant="success" className="py-1">
                Acount success create
              </Alert>
            );
            setMessage(alert);
          } else {
            const alert = (
              <Alert variant="danger" className="py-1">
                Failed create Acount
              </Alert>
            );
            setMessage(alert);
          }
        } catch (error) {
          const alert = (
            <Alert variant="danger" className="py-1">
              Failed server
            </Alert>
          );
          setMessage(alert);
          console.log(error);
        }
      };

    return (
        <Form className="formContainer" onSubmit={handleSubmit}>
        <h1 className="formText">Sign Up</h1>
        {message && message}
            <Form.Group className="mb-3">
          <Form.Control className="formGroup"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
            </Form.Group>

            <Form.Group className="mb-3">
          <Form.Control
            className="formGroup"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            />
            </Form.Group>
            <Form.Group className="mb-3">
          <Form.Control
            className="formGroup"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={handleChange}
            value={fullName}
          />
            </Form.Group>
            <div className="d-grid gap-1">
                <Button className="btn-danger" variant="danger" type="submit" onClick={props.loginUser}>
                    Sign Up
                </Button>
            </div>
            <Form.Group>
                <div className="textMuted">
                    Already have an account ? Klik <span style={{ color:'black'}} onClick={props.onClick}>Here</span>
                </div>
            </Form.Group>
        </Form>
    )
}

export default SignUp;
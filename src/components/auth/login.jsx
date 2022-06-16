import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap'

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';
// Import useMutation
//import { useMutation } from "react-query";

// Import API config
import { API } from "../../config/api";

function Login(props) {

  const title = "Login";
  document.title = "WaysBeans | " + title;

  let navigate = useNavigate();
  let api = API();

  const [state, dispatch] = useContext(UserContext);


  const [form, setForm] = useState({
    email: "",
    password: "",
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

      // Data body
      const body = JSON.stringify(form);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data for login process
      const response = await api.post("/login", config);

      console.log(response);

      // Checking process
      if (response.status === "success") {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });

        // Status check
        if (response.data.status === "admin") {
          navigate("/complain-admin");
        } else {
          navigate("/");
        }

          alert('sukses')
      } else {
        alert("Are you oke")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      {...props}
      centered
      onHide={props.handleClose}
      dialogClassName='custom-modal'
    >
      <Modal.Body >
      <Form >
            <h1 className="form-title my-3">Login</h1>
            <Form.Group className="mb-3 ">
                <Form.Control
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-1 mb-3">
            <Button className="btn-form" type="submit" >
                Login
            </Button>
            </div>
            
            <Form.Group>
                <div className="textMuted">
                    Don't have an account ? Klik <span className='click-here' onClick={props.toggle}>Here</span>
                </div>
            </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login

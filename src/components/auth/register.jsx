import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap'

function Register(props) {
  const title = "Register";
  document.title = "WaysBeans | " + title;

  const navigate = useNavigate();
  return (
    <Modal
      {...props}
    onHide= {props.handleClose}
      centered
    >
      <Modal.Body>
      <Form>
            <h1 className="form-title my-3">Register</h1>
            <Form.Group className="mb-3">
          <Form.Control className="form-input"
            type="email"
            placeholder="Email"
            name="email"
          />
            </Form.Group>

            <Form.Group className="mb-3">
          <Form.Control
            className="form-input"
            type="password"
            placeholder="Password"
            name="password"
            />
            </Form.Group>
            <Form.Group className="mb-3">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Full Name"
            name="fullName"
          />
            </Form.Group>
            <div className="d-grid gap-1 mb-3">
            <Button className="btn-form" type="submit"  >
                Register
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

export default Register

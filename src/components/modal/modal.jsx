import { useState, useContext } from 'react';
import { Modal, Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

import styles from './Modal.module.css';


import SignIn from './signIn';
import SignUp from './signUp';


function Auth() {
    let navigate = useNavigate();
    const [state] = useContext(UserContext)
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const handleSignUp = () => {
        setShowSignUp(true)
        setShowSignIn(false)
    }

    const handleSignIn = () => {
        setShowSignIn(true)
        setShowSignUp(false)
    }

    // const checkAuth = () => {
    //     if (state.isLogin === true) {
    //         navigate('/landingPage')
    //     }
    // };
    // checkAuth()

    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <Button className={styles.btnSignUp} onClick={() => setShowSignUp(true)} variant="danger">Sign Up</Button>
                <Button className={styles.btnSignIn} onClick={() => setShowSignIn(true)}>Sign In</Button>
            </Stack>

            <Modal
                show={showSignUp}
                onHide={() => setShowSignUp(false)}
                aria-labelledby="ShowSignUp"
            >
                <Modal.Body>
                    <SignUp onClick={handleSignIn}
                    />
                </Modal.Body>
            </Modal>
            <Modal
                show={showSignIn}
                onHide={() => setShowSignIn(false)}
                aria-labelledby="ShowSignIn"
            >
                <Modal.Body>
                    <SignIn
                        onClick={handleSignUp}
                    />
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Auth;
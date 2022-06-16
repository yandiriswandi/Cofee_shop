import React from "react";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap'



function PopUpg() {

    const [show, setShow] = useState(false);

    const popup = () => {
        setShow(true)   
    }
    const active = () => {
        popup()
    }

    return (
        <>
            <Button variant="danger" onClick={() => active()}>
                Send
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-40w"
                centered
            >

                <Modal.Body>
                    <p style={{ color: 'green' }}>
                        Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default PopUpg;
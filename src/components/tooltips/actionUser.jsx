import React, { useState, useRef } from "react";

import { Overlay, Tooltip } from "react-bootstrap";



import arrow from './../../assets/arrow.png'

export default function ActionUser(props) {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const handleApprove = () => {
        const data = {
            remainingActive: '30 hari',
            statusUser: 'Active',
            statusPayment: 'Approve'
        }
        fetch('/transaction', data)
    }

    // const handleApprove = async (id) => {
    //     try {
    //       const config = {
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //       };

    //       let approve = {
    //         paymentStatus: "Approve",
    //       };

    //       await API.patch(/transaction/${id}, approve, config);

    //       const gettras = await API.get(/transaction/${id});
    //       console.log(gettras);

    //       let appSub = {
    //         isSub: "true",
    //       };

    //       const updateUser = await API.patch(
    //         /user/${gettras.data.data.user.user.id},
    //         appSub,
    //         config
    //       );
    //       console.log(id);

    //       console.log(updateUser);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     setAction(!action);
    //   };

    //   const handleCancel = async (id) => {
    //     try {
    //       const config = {
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //       };

    //       let cancel = {
    //         paymentStatus: "Cancel",
    //       };

    //       const res = await API.patch(/transaction/${id}, cancel, config);

    //       console.log(res);
    //       setAction(!action);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    return (
        <>
            <img
                src={arrow}
                alt="Icon Arrow"
                ref={target}
                onClick={() => setShow(!show)}
            />

            <Overlay style={{
                width: 295,
                height: 218,

                background: 'white',
                borderRadius: 10
            }} target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        <div className="d-flex  flex-column"  >
                            <h6 style={{ color: 'green' }}>Approve</h6>
                            <h6 style={{ color: 'red' }}>Cancel</h6>
                        </div>
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}

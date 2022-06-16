import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Overlay, Tooltip } from "react-bootstrap";

import iconAddBook from './../../assets/addbook.png'
import iconLogout from './../../assets/logout.png'
import profile from './../../assets/profile.png'
import { UserContext } from '../../context/userContext';

function ActiveProfile() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
    const [show, setShow] = useState(false);
    const target = useRef(null);


    const addBook = () => {

        navigate('/addbook')
    }

    const bookList = () => {
        navigate('/productBook')
    }

    const logout = () => {
        console.log(state);
        dispatch({
            type: "LOGOUT",
        });
        navigate("/")
    }


    return (
        <>
            <img
                src={profile}
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
                        <div className="d-flex flex-column justify-content-center" style={{
                            width: 130,
                            height: 200,
                            borderRadius: 14
                        }} >
                            <div onClick={() => addBook()}>
                                <img
                                    src={iconAddBook}
                                    alt='icon Add Book'
                                    width={30}
                                    height={30}
                                />
                                <h5>Add Book</h5>
                            </div>
                            <div onClick={() => bookList()}>
                                <img src={iconAddBook}
                                    alt='icon Add Book'
                                    width={30}
                                    height={30}
                                />
                                <h5>Books</h5>
                            </div>
                            <div onClick={logout}>
                                <img
                                    src={iconLogout}
                                    alt='icon Add Book'
                                    width={30}
                                    height={30}
                                />
                                <h5> Logout</h5>
                            </div>
                        </div>
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}

export default ActiveProfile;
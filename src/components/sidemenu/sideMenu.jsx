import React, { useContext, useEffect, useState } from 'react'
import style from './SideMenu.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap'

import fp from './../../assets/User.png';
import userMenu from './../../assets/user1.png';
import billMenu from './../../assets/bill1.png';
import logoutMenu from './../../assets/logout.png';
import { UserContext } from '../../context/userContext';

import { API } from "../../config/api"


function SideMenu(props) {


    const navigate = useNavigate
    const [state, dispatch] = useContext(UserContext);

    //store data to array
    const [profile, setProfile] = useState([]);

    //function get data profile
    const getProfile = async () => {
        try {
            const response = await API.get('/user')
            setProfile(response.data.data.user)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    const logout = () => {
        console.log(state);
        dispatch({
            type: "LOGOUT",
        });
        navigate("/")
    }

    return (
        <Col md={2}>
            <div className="sideMenu">
                <div className="profile d-flex flex-column justify-content-center">
                    <img src={fp}
                        alt="icon WOW"
                        className='rounded'
                    />
                    <h2 className={style.name}>ilham</h2>
                    <span style={props.active}>{props.status} </span>
                    <hr />
                </div>
                <div className="d-flex flex-column ">
                    <div className="listMenu d-flex mb-4">
                        <img src={userMenu} alt="icon menu profile" />
                        <span > <Link className={`ms-3 ${style.list}`} style={props.colore} to={'/profile'}>Profile </Link></span>
                    </div>
                    <div className="listMenu d-flex mb-4">
                        <img src={billMenu} alt="icon menu subcribe" />
                        <span><Link className={`ms-3 ${style.list}`} style={props.colorSub} to={'/subcribe'}> Subcribe</Link></span>
                    </div>
                    <hr />
                    <div className="listMenu d-flex ">
                        <img src={logoutMenu} alt="icon menu logout" />
                        <span className={`ms-3 ${style.list}`} onClick={logout} >Logout</span>
                    </div>
                </div>
            </div>
        </Col >
    )
}

export default SideMenu;
import React,{useState,useRef} from "react";
import { Row, Container, Col, Image, Overlay, Tooltip } from "react-bootstrap";

import jumbotron from "../../assets/jumbotron.png";
import profile from "../../assets/profile.png";
import CardProduct from "../../components/cards/CardProduct";
import NavbarUser from "../../components/Navbars/NavbarUser";

import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <NavbarUser
        cart={<BsCart4 style={{ color: "#613D2B" }} size={35} />}
        profile={
          <>
          <Image rounded src={profile} height={40} width={40} ref={target}
                onClick={() => setShow(!show)} />
          <Overlay style={{
  width: 295,
  height: 218,
  backgroundColor: 'white',
  borderRadius: 10
}} target={target.current} show={show} placement="bottom">
  {(props) => (
      <Tooltip id="overlay-example" {...props}>
          <div className="d-flex flex-column justify-content-center" style={{
              width: 130,
              height: 200,
              borderRadius: 14
          }} >
              <div>
                  <img
                      alt='icon Add Book'
                      width={30}
                      height={30}
                  />
                  <h5>Add Book</h5>
              </div>
              <div >
                  <img 
                      alt='icon Add Book'
                      width={30}
                      height={30}
                  />
                  <h5>Books</h5>
              </div>
              <div onClick={()=>alert('logout ya')}>
                  <img
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
        </>}
      />
      <Container className="mt-4 90vh" style={{ border: "1px solid red" }}>
        <Row className="40vh">
          <Col>
            <img src={jumbotron} height="400" alt="jumbotron image" />
          </Col>
        </Row>
        <Row className="40vh mt-4">
          <Col lg={12}>
            <CardProduct click={() => navigate("/detailProduct")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

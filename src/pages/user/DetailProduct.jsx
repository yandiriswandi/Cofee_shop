import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import NavbarUser from "../../components/Navbars/NavbarUser";

import image from "../../assets/Product1Big.png";
import { BsCart4 } from "react-icons/bs";
import profile from "../../assets/profile.png";

function DetailProduct() {
  return (
    <>
      <NavbarUser
       cart={<BsCart4 style={{ color: "#613D2B" }} size={35} />}
       profile={<Image rounded src={profile} height={40} width={40} />}
      />
      <Container className="mt-4 90vh" style={{ border: "1px solid red" }}>
        <Row className="60vh">
          <Col lg={6} md={6} style={{ border: "1px solid red" }} className='ms-4'>
            <Image src={image} width={436} height={555} fluid/>
          </Col>
          <Col lg={6} md={6} className='my-4 form-product' style={{ border: "2px solid blue" }}>
              <h1 className="text-product mb-3">Guetamala Beans</h1>
              <div className="stock-product mb-3">Stock : 500</div>
              <div className="detail-product mb-3">
                <p>
                  Hampir semua referensi sepakat mengatakan bahwa kopi pertama
                  kali ditemukan di Ethiopia, meskipun ada juga beberapa protes
                  yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama
                  kali di bagian selatan Sudan. Karena para gembala Ethiopia
                  adalah manusia pertama yang mengonsumsi kopi—walau saat itu
                  mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan
                  tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.
                </p>
              </div>
              <div className="price-product mb-5">Rp 300.900</div>
              <div className="d-grid gap-1 mb-3">
              <Button className='btn-product'>Add Cart</Button>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailProduct;

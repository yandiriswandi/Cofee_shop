import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import NavbarAdmin from '../../components/Navbars/NavbarAdmin'

function HomeAdmin() {
  return (
    <>
      <NavbarAdmin />
      <Container>
        <Row>
          <Col>
            <h1>Income Transaction            </h1>
            <Table>
              <thead>
                <th>no</th>
                <th>Name</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Product Order</th>
                <th>Status</th>
                <th>Action</th>
              </thead>
              <tbody>

              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeAdmin
import React from 'react'
import product1 from "../../assets/product1.png";
import {Card} from 'react-bootstrap'

export default function CardProduct({click}) {
  return (
    <Card style={{ width: "200px", backgroundColor: "#F7E6DA",cursor:"pointer" }} onClick={click}>
      <Card.Img variant="top" src={product1} />
      <Card.Body>
        <Card.Title>RWANDA Beans</Card.Title>
        <Card.Text>Rp.299.900</Card.Text>
        <Card.Text>Stock 200</Card.Text>
      </Card.Body>
    </Card>
  )
}
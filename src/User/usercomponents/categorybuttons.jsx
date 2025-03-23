import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHotel, FaCar, FaGlobe } from "react-icons/fa"; // Icons for buttons
import "../userstyles/categorybuttons.css";

const CategoryButtons = () => {
  return (
    <Container className="category-buttons" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={4} className="text-center">
          <Button variant="dark" className="category-btn">
            <FaHotel className="icon" /> Hotels
          </Button>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <Button variant="dark" className="category-btn">
            <FaCar className="icon" /> Car Hire
          </Button>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <Button variant="dark" className="category-btn">
            <FaGlobe className="icon" /> Explore Everywhere
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryButtons;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactImg from "../../Assets/contact.svg";
import { CgMail, CgSmartphone } from "react-icons/cg";
import {ImLocation} from "react-icons/im"

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">Get in Touch With Me</strong>
            </h1>
            <p className="home-about-body">
                <CgMail /> Email : shivambhadani19@gmail.com
                <br />
                <br />
                <CgSmartphone /> Mobile : +91 7004682009
                <br />
                <br />
                <ImLocation /> Address : D234, Hall 3, IIT Kanpur
                <br />
                <br />
            </p>


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ContactImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Contact;

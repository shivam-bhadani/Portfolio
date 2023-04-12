import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import ContactImg from "../../Assets/contact.svg";
import { CgMail } from "react-icons/cg";
import {ImLocation} from "react-icons/im";
import {AiOutlineMail} from "react-icons/ai"

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get in Touch With <strong className="purple">Me</strong>
            </h1>

            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <ul>

                    <li className="about-activity">
                      <AiOutlineMail /> Email : <a className="purple" style={{ "textDecoration": "none" }} href="mailto:shivambhadani19@gmail.com" target={"_blank"}>shivambhadani19@gmail.com</a>
                      <br />
                      <br />
                    </li>

                    <li className="about-activity">
                      <ImLocation /> Address : D234, Hall 3, IIT Kanpur
                    </li>

                  </ul>
                </blockquote>
              </Card.Body>
            </Card>


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ContactImg} alt="contact" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Contact;

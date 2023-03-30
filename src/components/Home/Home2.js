import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a 3rd year undergraduate at IIT Kanpur
              <br />
              <br />
              I will be joining <b className="purple">Codenation (Trilogy Innovations)</b> as a <b className="purple">SDE Intern</b> for the upcoming summer 2023.
              <br />
              <br />
              I love <a className="purple" style={{ "textDecoration": "none" }} href="https://www.stopstalk.com/user/profile/shivambhadani_" target={"_blank"}>problem solving</a> and doing competitive programming.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              I am a <b className="purple">tech geek</b> and always learn and explore things related to <i><b className="purple">Technology and Softwares</b></i>.
              <br />
              <br />
              I also have knowledge of <i><b className="purple">Web3, Cryptography and Blockchain</b></i>.
              <br />
              <br />
              Currently I'm learning different <i><b className="purple">System Design Concepts</b></i> to make an application fast and scalable.
              <br />
              <br />
              My hobbies are watching movies, <a className="purple" style={{ "textDecoration": "none" }} href="https://anilist.co/user/shivambhadani/animelist" target={"_blank"}>anime and reading manga</a>.
              <br />
              <br />
              You can connect with me one to one on Topmate - <a className="purple" style={{ "textDecoration": "none" }} href="https://topmate.io/shivambhadani" target={"_blank"}>https://topmate.io/shivambhadani</a>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shivam-bhadani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivambhadani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shivambhadani_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shivambhadani_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

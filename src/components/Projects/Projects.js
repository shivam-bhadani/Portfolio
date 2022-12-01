import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cfstress from "../../Assets/Projects/cfstress.png";
import bookstation from "../../Assets/Projects/bookstation.png";
import blog from "../../Assets/Projects/blog.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import tictac from "../../Assets/Projects/tictac.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cfstress}
              isBlog={false}
              title="CF Stress"
              description="Community driven, highly customizable, no-code tool to stress test Codeforces problems. Capable of generating the smallest possible counter-example for the failing submission, with 90% accuracy. Techstack consisted of HTML, Tailwind CSS, JavaScript, React.js, Go Lang, MongoDB."
              ghLink="https://github.com/shivam-bhadani/CF-Stress-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstation}
              isBlog={false}
              title="The Book Station"
              description="Developed a secured well-versed platform to buy and sell used books with NodeJS, Express and MongoDB. Used EJS template engine to generate HTML markup with plain JavaScript and passportjs for authentication. Implemented CRUD operations on database using the Mongoose and used SendGrid API to send mails."
              ghLink="https://github.com/shivam-bhadani/The-Book-Station"
              demoLink="https://the-book-station.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Website"
              description="Built Blog website with secure authenticated admin pannel where admin can perform CRUD operation. Used Passport.js, Express-session for authentication and bcrypt library to hash and salt passwords securely. Backend is built in Node.js, Express.js, DataBase is MongoDB and Frontend using HTML, CSS and JavaScript."
              ghLink="https://github.com/shivam-bhadani/Blog-Website"
              demoLink="https://shivamblogwebsite.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Realtime Chatbot"
              description="Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Performed authentication for admin using passport.js, express-session and bcrypt enabling the authoritative privileges to perform CRUD operations on selective segments. It was a freelancing project and I procured positive feedback from Client and also received 5 stars contingent to on-time delivery of the product."
              ghLink="https://github.com/shivam-bhadani/Chatbot"
              demoLink="https://shivamchatbotwebsite.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Developed a Tic Tac Toe Game while I was Learning HTML, CSS, JavaScript."
              ghLink="https://github.com/shivam-bhadani/Tic-Tac-Toed"
              demoLink = "https://shivam-bhadani.github.io/Tic-Tac-Toe/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

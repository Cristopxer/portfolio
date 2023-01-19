import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import CertificateCard from "../CertificateCard/CertificateCard";
import { projects } from "../../Constants";

function Projects() {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              optio alias harum voluptas assumenda molestias, similique quasi
              maiores sunt, iure fuga ducimus deleniti rerum, reprehenderit sed
              suscipit. Fugit, et minus.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certifications</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="scrollable-row">
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="scrollable-row">
                    <CertificateCard />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;

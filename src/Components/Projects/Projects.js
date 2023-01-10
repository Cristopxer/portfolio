import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import projectImg1 from "../../Assets/Images/project-img1.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import CertificateCard from "../CertificateCard/CertificateCard";

function Projects() {
  const projects = [
    {
      title: "1st project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempora voluptatibus voluptas voluptatem asperiores. Repellat soluta modi repellendus voluptatem animi et voluptatum excepturi quibusdam reprehenderit nisi a molestias iure placeat, dolorum suscipit? Neque ipsa ducimus harum consequatur iure accusantium facere minima, deleniti obcaecati aliquam aspernatur, cupiditate qui sed vel iusto.",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
    {
      title: "2st project",
      description: "xdxdxd",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
    {
      title: "3st project",
      description: "xdxdxd",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
    {
      title: "4st project",
      description: "xdxdxd",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
    {
      title: "4st project",
      description: "xdxdxd",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
    {
      title: "4st project",
      description: "xdxdxd",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "",
      imgUrl: projectImg1,
    },
  ];

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
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
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

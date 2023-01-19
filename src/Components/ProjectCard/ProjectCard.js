import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import navIcon2 from "../../Assets/Images/nav-icon2.svg";
import "./ProjectCard.css";

function ProjectCard({ title, description, imgUrl, technologies, githubUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <Row className="mx-1 mt-3">
            <Col>
              {technologies?.map((technology, idx) => (
                <Badge key={idx} className="mx-1 mt-1" bg="light" text="dark">
                  {technology}
                </Badge>
              ))}
            </Col>
            <span className="mt-3">{description}</span>
          </Row>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Row className="mx-5 mt-3">
              <Badge
                bg="light"
                text="dark"
                className="mt-1"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={navIcon2}
                  alt="github"
                  style={{ width: 20, height: 20 }}
                />
              </Badge>
            </Row>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;

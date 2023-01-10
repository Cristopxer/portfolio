import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import navIcon2 from "../../Assets/Images/nav-icon2.svg";
import "./ProjectCard.css";

function ProjectCard({ title, description, imgUrl, technologies }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <Row className="mx-1">
            <Col>
              {technologies?.map((technology, idx) => (
                <Badge key={idx} className="mx-1 mt-1" bg="light" text="dark">
                  {technology}
                </Badge>
              ))}
            </Col>
            <span>{description}</span>
          </Row>
          <Row className="mx-5">
            <Badge bg="light" text="dark" className="mt-1">
              <img
                src={navIcon2}
                alt="github"
                style={{ width: 20, height: 20 }}
              />
            </Badge>
          </Row>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;

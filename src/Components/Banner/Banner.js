import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../Assets/Images/happy-robot.png";
import "./Banner.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web", "Data", "Cloud", "Automation"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={9}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hey! I'm Cristopher `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Mid-level full stack developer combining experiences on cloud
              computing, automation, data analytics and data
              visualization and a special curiosity on artifitial intelligence.
              Strong experience working under Agile methodologies, SCRUM,
              Kanban and XP.
            </p>
          </Col>
          <Col xs={4} md={6} xl={3}>
            <img src={headerImg} alt="header_image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

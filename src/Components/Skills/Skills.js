import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import data from '../../Assets/Images/data.png'
import cloud from '../../Assets/Images/cloud.png'
import automation from '../../Assets/Images/automation.png'
import web from '../../Assets/Images/web.png'
import "react-multi-carousel/lib/styles.css"
import "./Skills.css"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const skills = [
        {
            skill_name: "Web Development",
            img: web
        },
        {
            skill_name: "Data Science",
            img: data
        },
        {
            skill_name: "Cloud",
            img: cloud
        },
        {
            skill_name: "Automation",
            img: automation
        }
    ]
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, nemo impedit nobis vitae consequuntur fugit accusamus quam ab expedita saepe cupiditate officia, consectetur ullam aut voluptas dolor cum voluptates.</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                {skills.map((skill => (
                                    <div className="item" key={skill.skill_name}>
                                        <img src={skill.img} alt="Skill_image" />
                                        <h5>{skill.skill_name}</h5>
                                    </div>
                                )))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp} alt="skill_backgroud" className="background-image-left" /> */}
        </section>
    )
}

export default Skills
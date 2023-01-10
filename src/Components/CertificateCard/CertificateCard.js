import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";
import { certifications } from "../../Constants";
import "./CertificateCard.css";

const CertificateCard = () => {
  const [openSlider, setOpenSlider] = useState(false);
  const [imageSlider, setImageSlider] = useState("");

  const handleOpenSlider = (img) => {
    window.scrollTo(0, 2700)    
    setOpenSlider(true);
    setImageSlider(img);
  };

  return (
    <>
      {openSlider && (
        <div className="slider">
          <div className="sliderWrapper">
            <XCircleFill
              className="close-icon"
              onClick={() => setOpenSlider(false)}
            />
            <ArrowLeftCircleFill className="arrow-icon" />
            <img src={imageSlider} alt="" className="sliderImg" />
            <ArrowRightCircleFill className="arrow-icon" />
          </div>
        </div>
      )}
      {certifications.map((field, fidx) => {
        return (
          <div key={fidx} className="mb-4">
            <h3>{field.field}</h3>
            <Row>
              {field.certfications.map((certificate, cidx) => (
                <Col sm={6} md={4} key={cidx}>
                  <img
                    className="cert-img"
                    src={certificate.imgUrl}
                    alt={`Certificate_${certificate.title}`}
                    onClick={() => handleOpenSlider(certificate.imgUrl)}
                  />
                </Col>
              ))}
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default CertificateCard;

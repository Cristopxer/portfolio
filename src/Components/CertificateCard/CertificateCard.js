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
  const [imageSlider, setImageSlider] = useState(0);
  const [imageSliderField, setImageSliderField] = useState(0);

  const handleOpenSlider = (fieldIdx, certificationIdx) => {
    setOpenSlider(true);
    setImageSliderField(fieldIdx);
    setImageSlider(certificationIdx);
  };

  const handleArrows = (dir) => {
    // Move right
    if (dir === "r") {
      if (
        certifications[imageSliderField].certfications.length >
        imageSlider + 1
      ) {
        setImageSlider((prev) => prev + 1);
      } else if (certifications.length > imageSliderField + 1) {
        setImageSliderField((prev) => prev + 1);
        setImageSlider(0);
      }
      // Move left
    } else {
      if (imageSlider === 0 && imageSliderField !== 0) {
        let imageSliderFieldAux = imageSliderField - 1;
        setImageSlider(
          certifications[imageSliderFieldAux].certfications.length - 1
        );
        setImageSliderField((prev) => prev - 1);
      } else if (imageSlider !== 0) {
        setImageSlider((prev) => prev - 1);
      }
    }
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
            <ArrowLeftCircleFill
              className={`arrow-icon ${
                imageSlider === 0 && imageSliderField === 0
                  ? "disabled-icon"
                  : ""
              }`}
              onClick={() => handleArrows("l")}
            />
            <img
              src={
                certifications[imageSliderField].certfications[imageSlider]
                  .imgUrl
              }
              alt={`cert_${certifications[imageSliderField].certfications[imageSlider].title}`}
              className="sliderImg"
            />
            <ArrowRightCircleFill
              className={`arrow-icon ${
                imageSliderField === certifications.length - 1 &&
                imageSlider ===
                  certifications[imageSliderField].certfications.length - 1
                  ? "disabled-icon"
                  : ""
              }`}
              onClick={() => handleArrows("r")}
            />
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
                    onClick={() => handleOpenSlider(fidx, cidx)}
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

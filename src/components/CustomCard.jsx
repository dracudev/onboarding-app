import "./CustomCard.css";
import Card from "react-bootstrap/Card";
import arrowRight from "../assets/arrowRight.webp";
import arrowLeft from "../assets/arrowLeft.svg";
import { Indicator } from "./Indicator";

export function CustomCard({
  title,
  description,
  bgColor,
  image,
  nextStep,
  prevStep,
  step,
  setStep,
  dataLength,
}) {
  return (
    <Card className="card">
      <Card.Img
        className="cardImage"
        variant="top"
        src={image}
        alt={title}
        style={{ backgroundColor: bgColor }}
      />
      <Card.Body className="cardBody">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="cardFooter">
          <Indicator 
          step={step} 
          dataLength={dataLength} 
          setStep={setStep}
          />
          <div className="cardButton">
            <button
              className={`${step === 0 ? "dNone" : ""}`}
              onClick={prevStep}
            >
              <img src={arrowLeft} alt="Left arrow" />
            </button>
            <button
              className={`${step == dataLength - 1 ? "dNone" : ""}`}
              onClick={nextStep}
            >
              <img src={arrowRight} alt="Right arrow" />
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

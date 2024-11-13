import "./CustomCard.css";
import Card from "react-bootstrap/Card";
import arrowRight from "../assets/arrowRight.webp";
import arrowLeft from "../assets/arrowLeft.svg";
import { Indicator } from "./Indicator";
import { useState } from "react";

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

  const [animationClass, setAnimationClass] = useState('');

  const handleNextStep = () => {
    setAnimationClass('card-out-next');
    setTimeout(() => {
      nextStep();
      setAnimationClass('card-in-next');
    }, 700);
  };

  const handlePrevStep = () => {
    setAnimationClass('card-out-prev');
    setTimeout(() => {
      prevStep();
      setAnimationClass('card-in-prev');
    }, 700);
  };

  return (
    <Card className={`card ${animationClass}`}>
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
          setAnimationClass={setAnimationClass}
          />
          <div className="cardButton">
            <button
              className={`${step === 0 ? "dNone" : ""}`}
              onClick={handlePrevStep}
            >
              <img src={arrowLeft} alt="Left arrow" />
            </button>
            <button
              className={`${step == dataLength - 1 ? "dNone" : ""}`}
              onClick={handleNextStep}
            >
              <img src={arrowRight} alt="Right arrow" />
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

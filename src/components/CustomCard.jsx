import "./CustomCard.css";
import Card from "react-bootstrap/Card";
import arrowRight from "../assets/arrowRight.webp";

export function CustomCard({
  title,
  description,
  bgColor,
  image,
  nextStep,
  step,
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
          <div className="dotsContainer">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`dot ${index === step ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <button className="cardButton" onClick={nextStep}>
            <img src={arrowRight} alt="Right arrow" />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

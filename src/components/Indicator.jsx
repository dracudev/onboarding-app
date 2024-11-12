import "./Indicator.css"

export function Indicator({step, dataLength}) {
    return (
        <div className="dotsContainer">
            {Array.from({length: dataLength}).map((_, index) => (
              <div
                key={index}
                className={`dot ${index === step ? "active" : ""}`}
              ></div>
            ))}
          </div>
    )
}
import { useState } from "react";
import { CustomCard } from "./components/CustomCard";
import tutorialData from "./data/tutorialData.json";

export default function App() {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep((currentStep) => currentStep + 1);
  }

  function prevStep() {
    setStep((currentStep) => currentStep - 1);
  }

  return (
    <CustomCard
      title={tutorialData[step].title}
      description={tutorialData[step].description}
      bgColor={tutorialData[step].bgColor}
      image={tutorialData[step].image}
      nextStep={nextStep}
      prevStep={prevStep}
      step={step}
      tutorialData={tutorialData}
      setStep={setStep}
    />
  );
}

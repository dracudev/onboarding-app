import { useState } from "react";
import { CustomCard } from "./components/customCard";
import meditationImage from "./assets/meditation.svg";
import programmingImage from "./assets/programming.svg";
import timeManagementImage from "./assets/time_managment.svg";

export default function App() {
  const [step, setStep] = useState(0);

  const tutorialData = [
    {
      title: "Dedicate many hours",
      description:
        "A minimum of 30 hours a week. It's not enough, you'll have to dedicate more hours to it. At first it seems impossible, but you'll notice an improvement quickly.",
      bgColor: "#4da2a9",
      image: timeManagementImage,
    },
    {
      title: "Program own projects",
      description:
        "10 hours working on your own projects is better than 10 hours watching tutorials. Motivation and involvement in the project will help speed up your learning.",
      bgColor: "#d3d4d9",
      image: programmingImage,
    },
    {
      title: "Try to rest",
      description:
        "Getting a good rest and disconnecting are vital. This way you will reduce stress and anxiety. You will improve your concentration and consolidate your learning.",
      bgColor: "#ffd167",
      image: meditationImage,
    },
  ];
  const dataLength = tutorialData.length;

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
      dataLength={dataLength}
      setStep={setStep}
    />
  );
}

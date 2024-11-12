import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'

export default function App() {
  const [step, setStep] = useState(0);

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. No en tens prou, harás de dedicar-li més hores. Al principi sembla impossible, però notarás una millora ràpidament.",
      bgColor: "",
      image: ""
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballan en projectes propis, que 10 hores mirant tutorials. La motivació y la implicació en el porjecte ajudará a accelerar el teu aprenentatge.",
      bgColor: "",
      image: ""
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconectar són vitals. D'aquesta manera reduirás l'estrès i l'ansietat. Millorarás la teva concentració i consolidarás el teu aprenentatge.",
      bgColor: "",
      image: ""
    }
  ]
  
  function nextStep() {
    setStep((prevStep) => (prevStep + 1) % tutorialData.length);
  }


  return (
    <Card 
      title={tutorialData[step].title} 
      description={tutorialData[step].description} 
      bgColor={tutorialData[step].bgColor} 
      image={tutorialData[step].image} 
      nextStep={nextStep}
    />
  )
  
}
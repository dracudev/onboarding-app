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
    }
  ]
  


  return (
    <Card 
      title={tutorialData[step].title} 
      description={tutorialData[step].description} 
      bgColor={tutorialData[step].bgColor} 
      image={tutorialData[step].image} 
    />
  )
  
}
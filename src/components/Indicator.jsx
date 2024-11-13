import styled from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 5px;
  transition: width 0.3s, height 0.3s;
  cursor: pointer;

  &.active {
    width: 20px;
    height: 10px;
    background-color: black;
    border-radius: 5px;
    cursor: default;
  }
`;

export function Indicator({ step, dataLength, setStep, setAnimationClass }) {

  function goToDot(index, step) {
    if (step === index)
      return;
    if (step < index){
      setAnimationClass('card-out-next');
      setTimeout(() => {
      setStep(index);
      setAnimationClass('card-in-next');
    }, 700);
    }
    else {
      setAnimationClass('card-out-prev');
      setTimeout(() => {
      setStep(index);
      setAnimationClass('card-in-prev');
    }, 700);
    }
    
  }

  return (
    <DotsContainer>
      {Array.from({ length: dataLength }).map((_, index) => (
        <Dot key={index} className={index === step ? "active" : ""} onClick={() => goToDot(index, step)} />
      ))}
    </DotsContainer>
  );
}

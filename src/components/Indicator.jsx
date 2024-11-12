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

  &.active {
    width: 20px;
    height: 10px;
    background-color: black;
    border-radius: 5px;
  }
`;

export function Indicator({ step, dataLength }) {
  return (
    <DotsContainer>
      {Array.from({ length: dataLength }).map((_, index) => (
        <Dot key={index} className={index === step ? "active" : ""} />
      ))}
    </DotsContainer>
  );
}

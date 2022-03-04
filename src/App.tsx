/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(prop) => prop.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

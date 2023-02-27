import styled from "styled-components";
import Body from "./components/Body";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <Container>
      <Wrapper>
        <SideBar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Body selectedPage={selectedPage} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: #eaeaea;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export default App;

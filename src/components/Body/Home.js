import styled from "styled-components";
import Header from "./Header";
import RecommendedUpper from "./Recommended/RecommendedUpper";
import RecommendedBelow from "./Recommended/RecommendedBelow";
import { useState } from "react";
import ExploreApps from "./App/App";

export default function Home() {
  const [explorePage, setExplorePage] = useState(0);

  return (
    <Container>
      <Header explorePage={explorePage} setExplorePage={setExplorePage} />
      {explorePage == 0 && (
        <div>
          <RecommendedUpper />
          <RecommendedBelow />
        </div>
      )}
      {explorePage == 2 && <ExploreApps />}
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  flex: 1 1 auto;
  overflow: auto;

  @media screen and (max-width: 700px) {
    padding 0;
  }
`;

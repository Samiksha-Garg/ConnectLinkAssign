import styled from "styled-components";
import Header from "./Header";
import RecommendedUpper from "./Recommended/RecommendedUpper";
import RecommendedBelow from "./Recommended/RecommendedBelow";
import Home from "./Home";

export default function Body(props) {
  return props.selectedPage == 0 ? <Home /> : <div />;
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

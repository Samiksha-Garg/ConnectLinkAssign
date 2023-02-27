import styled from "styled-components";
import search from "../../assets/images/search.svg";
import freelancers from "../../assets/images/Freelancers.svg";
import jobs from "../../assets/images/Jobs.svg";
import events from "../../assets/images/Events.svg";
import services from "../../assets/images/Services.svg";
import apps from "../../assets/images/Apps.svg";
import marketplace from "../../assets/images/Marketplace-2.svg";
import appsSelected from "../../assets/images/Apps-selected.svg";

export default function Header(props) {
  return (
    <Container>
      <Title>Explore</Title>
      <SearchBar>
        <Search></Search>
        <Input placeholder="Search"></Input>
      </SearchBar>
      <Navigation>
        <img
          onClick={() => {
            props.setExplorePage(1);
          }}
          src={freelancers}
        ></img>
        <img
          onClick={() => {
            props.setExplorePage(2);
          }}
          src={props.explorePage == 2 ? appsSelected : apps}
        ></img>
        <img
          onClick={() => {
            props.setExplorePage(3);
          }}
          src={services}
        ></img>
        <img
          onClick={() => {
            props.setExplorePage(4);
          }}
          src={events}
        ></img>
        <img
          onClick={() => {
            props.setExplorePage(5);
          }}
          src={jobs}
        ></img>
        <img
          onClick={() => {
            props.setExplorePage(6);
          }}
          src={marketplace}
        ></img>
      </Navigation>
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(to right, #0052d4, #4364f7, #6fb1fc);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    border-radius: 0;
    padding: 10px;
  }
`;

const Title = styled.p`
  margin: 32px 0 27px 0;
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

const SearchBar = styled.div`
  padding: 10px 14px;
  border: 2px solid #d0d5dd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0 0 27px 0;
  background-color: white;
  width: 40%;

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

const Search = styled.img.attrs({
  src: `${search}`,
})`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const Input = styled.input`
  flex-grow: 1;
  min-width: 0;
  width: 80%
  height: 24px;
  border: none;
  font-size: 16px;
  color: EAEAEA;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }

`;

const Navigation = styled.div`
  width: 60%;
  display: flex !important;
  margin-bottom: 32px;
  justify-content: space-evenly;

  @media screen and (max-width: 700px) {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      margin-right: 32px;
      display: inline-block;
    }
  }
`;

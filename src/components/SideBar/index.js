import styled from "styled-components";
import logo from "../../assets/brand/Logo.svg";
import search from "../../assets/images/search.svg";
import NavigationLinks from "./Navigation";
import Footer from "./Footer";

export default function SideBar(props) {
  return (
    <Container>
      <Logo></Logo>
      <SearchBar>
        <Search></Search>
        <Input placeholder="Search"></Input>
      </SearchBar>
      <ContentWrapper>
        <NavigationLinks
          selectedPage={props.selectedPage}
          setSelectedPage={props.setSelectedPage}
        />
        <Footer />
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  position: -webkit-sticky;
  left: 0;
  top: 0;
  min-width: 268px;
  background-color: #ffffff;
  padding: 16px 16px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 8px;
    height: auto;
    position: relative;
  }
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 188px;
  height: 52px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  padding: 10px 14px;
  border: 2px solid #d0d5dd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 16px 0;

  @media screen and (max-width: 700px) {
    display: none;
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
  height: 24px;
  border: none;
  font-size: 16px;
  font-color: EAEAEA;

  &:focus {
    outline: none;
  }
`;

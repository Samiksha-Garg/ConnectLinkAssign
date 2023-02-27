import styled from "styled-components";
import sort from "../../../assets/images/sort.svg";

export default function Heading() {
  return (
    <Container>
      <Title>Popular apps</Title>
      <Filter>
        <Image />
        <Text>Sort By</Text>
      </Filter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`;

const Title = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Filter = styled.div`
  padding: 8px 12px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const Image = styled.img.attrs({
  src: `${sort}`,
})`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
`;

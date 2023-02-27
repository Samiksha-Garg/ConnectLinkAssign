import styled from "styled-components";
import Grid from "@mui/material/Grid";
import image1 from "../../../assets/images/Image1.svg";

export default function RecBelowCard(props) {
  return (
    <Grid item md={12} lg={6}>
      <Container>
        <Image url={props.image} />
        <div>
          <Author>Olivia Rhye • 20 Jan 2022</Author>
          <Title>UX review presentations</Title>
          <Intro>
            How do you create compelling presentations that wow your...
          </Intro>
          <Tags color="#F9F5FF" fontColor="#6941C6">
            Design
          </Tags>
          <Tags color="#EEF4FF" fontColor="#3538CD">
            Research
          </Tags>
        </div>
      </Container>
    </Grid>
  );
}

const Container = styled.div`
  position: relative;
  width: inherit;
  margin: 0;
  display: flex;
`;

const Image = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 40%;
  border-radius: 15px 0 0 15px;
  margin-right: 10px;
  object-fit: cover;
`;

const Author = styled.p`
  color: #6941c6;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 12px;
  padding: 0;
  margin-top: 10px;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  color: #101828;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Intro = styled.p`
  margin: 0;
  padding: 0;
  color: #667085;
  font-size: 16px;
  font-weight: 400px;
  margin-bottom: 15px;
`;

const Tags = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  margin-right: 8px;
  padding: 2px 10px;
  border-radius: 16px;
  margin-bottom: 10px;
`;

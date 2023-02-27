import styled from "styled-components";
import Grid from "@mui/material/Grid";
import RemUpperCard from "./RecommendedUpperCard";
import image1 from "../../../assets/images/Image1.svg";
import image2 from "../../../assets/images/Image2.svg";
import image3 from "../../../assets/images/Image3.svg";
import image4 from "../../../assets/images/Image4.svg";

export default function RecommendedUpper() {
  return (
    <Container>
      <Title>Recommended for you</Title>
      <Grid container spacing={2} justify="space-evenly">
        <RemUpperCard image={image1} />
        <RemUpperCard image={image2} />
        <RemUpperCard image={image3} />
        <RemUpperCard image={image4} />
      </Grid>
    </Container>
  );
}

export const Title = styled.p`
  color: #101828;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

export const Container = styled.div`

position : relative;
margin-bottom : 20px;

@media screen and (max-width: 700px) {
  padding 0 16px;
}
`;

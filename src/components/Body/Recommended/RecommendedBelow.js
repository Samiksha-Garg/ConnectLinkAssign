import { Container, Title } from "./RecommendedUpper";
import Grid from "@mui/material/Grid";
import RecBelowCard from "./RecommendedBelowCard";
import image1 from "../../../assets/images/Image1.svg";
import image5 from "../../../assets/images/Image5.svg";

export default function RecommendedBelow() {
  return (
    <div>
      <Container>
        <Title>Recommended for you</Title>
        <Grid container spacing={2} justify="space-evenly">
          <RecBelowCard image={image1} />
          <RecBelowCard image={image5} />
        </Grid>
      </Container>
    </div>
  );
}

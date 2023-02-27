import styled from "styled-components";
import Grid from "@mui/material/Grid";
import image1 from "../../../assets/images/Avatar-app1.svg";

export default function AppCard(props) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Container>
        <Image url={props.image}></Image>
        <div>
          <Name>{props.name}</Name>
          <Desc>{props.desc}</Desc>
        </div>
      </Container>
    </Grid>
  );
}

const Container = styled.div`
  position: relative;
  width: inherit;
  margin: 0;
  padding: 16px 0;
  display: flex;
  align-items: center;
`;

const Image = styled.img.attrs((props) => ({
  src: props.url,
}))`
  margin-right: 8px;
`;

const Name = styled.p`
  margin: 0;
  padding: 0;
  color: #101828;
  font-size: 14px;
  font-weight: 500;
`;

const Desc = styled.p`
  margin: 0;
  padding: 0;
  color: #667085;
  font-size: 14px;
  font-weight: 400;
`;

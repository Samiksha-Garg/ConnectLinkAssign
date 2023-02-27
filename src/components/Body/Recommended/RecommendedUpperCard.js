import styled from "styled-components";
import image1 from "../../../assets/images/Image1.svg";
import Grid from "@mui/material/Grid";
import arrow from "../../../assets/images/arrow-up-right.svg";

export default function RemUpperCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Container>
        <Image url={props.image}></Image>
        <ImageText>
          <div style={{ marginLeft: "16px" }}>
            <Name>Olivia Rhye</Name>
            <Date>20 Jan 2022</Date>
          </div>
          <Name style={{ marginRight: "16px" }}>Design</Name>
        </ImageText>
      </Container>
      <PostTitle>Lorem ipsum dolor sit amet</PostTitle>
      <PostContent>
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </PostContent>
      <div style={{ display: "flex" }}>
        <ReadPost>Read post</ReadPost>
        <img src={arrow}></img>
      </div>
    </Grid>
  );
}

const Container = styled.div`
  position: relative;
  width: inherit;
  margin: 0;
`;

const Image = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: -webkit-fill-available;
  border-radius: 15px;
`;

const ImageText = styled.div`
  display: flex;
  width: -webkit-fill-available;
  padding: 16px 0;
  justify-content: space-between;
  align-items: start;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  backdrop-filter: blur(5px);
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

const Name = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const Date = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const PostTitle = styled.p`
  margin: 20px 0px 12px;
  padding: 0;
  color: #101828;
  font-size: 20px;
  font-weight: 600;
`;

const PostContent = styled.p`
  padding: 0;
  color: #667085;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ReadPost = styled.p`
  padding: 0;
  margin: 0;
  color: #004aad;
  font-weight: 400;
  font-size: 16px;
  margin-right: 8px;
`;

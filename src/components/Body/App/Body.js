import Grid from "@mui/material/Grid";
import AppCard from "./AppCard";
import image1 from "../../../assets/images/Avatar-app1.svg";
import image2 from "../../../assets/images/Avatar-app2.svg";
import image3 from "../../../assets/images/Avatar-app3.svg";
import image4 from "../../../assets/images/Avatar-app4.svg";
import image5 from "../../../assets/images/Avatar-app5.svg";
import image6 from "../../../assets/images/Avatar-app6.svg";
import image7 from "../../../assets/images/Avatar-app7.svg";

export default function PopularAppsBody() {
  return (
    <Grid container spacing={1} justify="space-evenly">
      <AppCard
        name="Catalog"
        image={image1}
        desc="Brings all your news into one place"
      />
      <AppCard
        name="Circooles"
        image={image2}
        desc="Super lightweight design app"
      />
      <AppCard
        name="Command+R"
        image={image3}
        desc="AI and machine learning data"
      />
      <AppCard
        name="Hourglass"
        image={image4}
        desc="Time management and productivity"
      />
      <AppCard
        name="Layers"
        image={image5}
        desc="Connect web apps seamlessly"
      />
      <AppCard
        name="Quotient"
        image={image6}
        desc="Web-based sales doc management"
      />
      <AppCard
        name="Sisyphus"
        image={image7}
        desc="Time tracking, invoicing and expenses"
      />
    </Grid>
  );
}

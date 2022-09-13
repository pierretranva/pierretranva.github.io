import * as React from "react";
import { Card,Typography,CardContent,CardHeader,Link,Divider} from "@material-ui/core";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import "./Projects.css";

function ItemCard(
  CardTitle: string | string[],
  CardText: string | string[],
  CardLink: string | string[],
  TechnologiesList: string | string[]
) {
  let temp: string = "https://pierretranva.github.io";
  if (typeof CardLink === "string") {
    temp = CardLink;
  }
  return (
    <div>
      <Card
        elevation={3}
        variant="outlined"
        className="ItemCard__main"
        sx={{ backgroundColor: "#86A8E7" }}
      >
        <CardHeader
          action={
            <Link
              className="ItemCard__main-header-link"
              href={temp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchRoundedIcon />
            </Link>
          }
          title={<Typography variant="subtitle1"color={'#25449f'}>{CardTitle}</Typography>}
        />
        <div className="ItemCard__main-content">
          <CardContent>
            <div className="ItemCard__main-content-text">
              <Typography variant="body2">{CardText}</Typography>
            </div>

            <div className="ItemCard__main-content-list">
              <Typography variant="body2">{TechnologiesList}</Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
function generateCards() {
  const info = {
    "Obscurity Labs": [
      "Build a cybersecurity cli application, api, and databse to extract and store all Windows OS files' metadata",
      "https://github.com/obscuritylabs",
      ["Python ", "MongoDB ", "FastAPI ", "Docker "],
    ],
    "Machine Learning Project": [
      "Create a neural network and K-Nearest-Neighbor algorithm from strach to classify flower types",
      "https://github.com/pierretranva/machineLearningProject",
      ["Java "],
    ],
    "Linked Web Data Structure": [
      "Custom data structure where each node in the structure has pointer to the neighbors",
      "google.com",
      ["Java"],
    ],
    "Pastimer": [
      "Develop a desktop application to help with productivity. Based on the Pomodoro technique.",
      "https://github.com/thomasltran/pastimer",
      ["Python ", "MongoDB ", "FastAPI ", "Docker"],
    ],
    "Portfolio Website": [
      "You're here right now!",
      "https://github.com/pierretranva/pierretranva.github.io",
      ["React ", "Typescript ", "MUI ", "Docker "],
    ],
    "More to come in the future!": ["", "", [""]],
  };
  return Object.entries(info).map(([key, value]) =>
    ItemCard(key, value[0], value[1], value[2])
  );
}

const Projects = () => {
  return (
    <div className="projects__main" id="projects">
      <div className="projects__main-title">
        <Divider textAlign="center" role="presentation">
          <Typography align="center" variant="h6">
            Projects
          </Typography>
        </Divider>
      </div>
      <div className="projects__main-grid">{generateCards()}</div>
    </div>
  );
};

export default Projects;
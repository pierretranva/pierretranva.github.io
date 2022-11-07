import * as React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ArrowRightSharp } from "@material-ui/icons";
import picture from "../../assets/picture.jpeg";
import "./About.css";
function generateListItem() {
  const technologies: Array<String> = [
    "Python",
    "Java",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "SQL",
    "Bash",
  ];
  return technologies.map((value) => (
    <ListItem>
      <ListItemIcon>
        <ArrowRightSharp />
      </ListItemIcon>
      <ListItemText
        primary={value}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  ));
}

const About = () => {
  return (
    <div className="about__main" id="about">
      <div className="about__main-text">
        <div className="about__main-title">
          <Divider textAlign="center" role="presentation">
            <Typography align="center" variant="h6">
              About Me
            </Typography>
          </Divider>
        </div>

        <div className="about__main-body">
          <Typography align="left" variant="body2" paragraph={true}>
            Hello! My name is Pierre and I am an aspiring Software Engineer. I
            am currently studying computer science at Virginia Tech. I love to
            learn new things and I'm open to explore anything related to
            computer science.
          </Typography>
          <Typography align="left" variant="body2" paragraph={true}>
            My current experiences in computer science come from classes,
            personal projects, undergraduate reseach, and a summer internship at
            Obscurity Labs.{" "}
          </Typography>
        </div>
        <div className="about__main-tech">
          <Typography align="center" variant="body2">
            Heres a few programming languages I've worked with in the past:{" "}
          </Typography>
          <div className="about__main-tech_list">
            <List
              dense={true}
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {generateListItem()}
            </List>
          </div>
        </div>
      </div>
      <div className="about__main-image">
        <img src={picture} alt="Pierre Tran" className="image" />
      </div>
    </div>
  );
};

export default About;

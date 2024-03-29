import * as React from "react";
import { Card, Typography, CardContent, CardHeader, Link, Divider, Paper } from "@material-ui/core";
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
				elevation={1}
				variant="outlined"
				className="ItemCard__main"
				sx={{ backgroundColor: "rgba(134, 168, 231, .4)" }}
			>
				<CardHeader
					action={
						<Link className="ItemCard__main-header-link" href={temp} target="_blank" rel="noopener noreferrer">
							<LaunchRoundedIcon />
						</Link>
					}
					title={
						<Typography variant="subtitle1" color={"#25449f"}>
							{CardTitle}
						</Typography>
					}
				/>
				<div className="ItemCard__main-content">
					<CardContent>
						<div className="ItemCard__main-content-text">
							<Typography variant="body2">{CardText}</Typography>
						</div>
					</CardContent>
					<div className="techWrapper">
						<div className="ItemCard__main-content-list">{generatePaperList(TechnologiesList)}</div>
					</div>
				</div>
			</Card>
		</div>
	);
}
function generateCards() {
	const info = {
		"Obscurity Labs": [
			"Build a cybersecurity cli application, api, and database to extract and store all Windows OS files' metadata",
			"https://github.com/obscuritylabs/darkmoon",
			["Python", "MongoDB", "FastAPI", "Docker"],
		],
		"Machine Learning Project": [
			"Create a neural network and K-Nearest-Neighbor algorithm from scratch to classify flower types. KNN model: 100% accuracy   Neural Network: 80% accuracy",
			"https://github.com/pierretranva/machineLearningProject",
			["Java"],
		],
		"CO2 Emissions Visualization": [
			"VTHacks22 project. Developed a full-stack application to visualize over 2.5 million data points into an interactive map. Used K-Means Clustering to find CO2 hotspots by density and sum.",
			"https://github.com/pierretranva/Hackathon",
			["React", "Flask", "Sklearn", "Python"],
		],
		FemTech: [
			"HackViolet23 project. A creative twist on Windows 95 to support women in STEM. Click the link above to try the website for yourself!",
			"https://pierretranva.github.io/hackviolet23/",
			["Vue", "Javascript", "Interact.js"],
		],
		"Portfolio Website": [
			"You're here right now!",
			"https://github.com/pierretranva/pierretranva.github.io",
			["React ", "Typescript ", "MUI ", "Docker "],
		],
		"Undergraduate Research": [
			"Data Freshness and Age of Information Optimization. Focused on utilizing non-linear functions to analyze and optimize data network packet transfer for accuracy of data collection and visualization.",
			"https://github.com/pierretranva/Fall22-AgeOfInformation",
			["Python"],
		],
		"My Virtual Wardrobe": [
			"Third Place Overall HackViolet24. A full-stack computer vision application that displays custom clothing on a user's body in real time. Detects key points on body to accurately place clothing on the user's body.",
			"https://github.com/pierretranva/hackviolet24",
			["OpenCV", "React", "Express", "MongoDB"],
		],
		"Housify": [
			"VTHacks23 project that allows users to search for houses based on their preferences. The application tinder to streamline the process for both the sellers and buyers.",
			"https://pierretranva.github.io/housify/",
			["React", "FramerMotion", "MUI"],
		],
		"CrisLine.org": [
			"Project for cloud software development class to help connect crisis volunteers with those in need. The application features an interactive map where people can either post a crisis or volunteer to help.",
			"https://github.com/pierretranva/cloud-project",
			["React", "Express", "MongoDB", "Node.js", "MUI"],
		],
	};
	return Object.entries(info).map(([key, value]) => ItemCard(key, value[0], value[1], value[2]));
}
function generatePaperList(technologies: string | String[]) {
	{
		if (typeof technologies === "string") {
			return generatePaper(technologies);
		} else if (typeof technologies != "string") {
			return generatePapers(technologies);
		}
	}
}
function generatePapers(list: String[]) {
	for (let i = 0; i < list.length; i++) {
		return Object.entries(list).map(([key, value]) => generatePaper(value));
	}
}
function generatePaper(word: String) {
	return (
		<Paper variant="elevation" elevation={1}>
			<Typography variant="body2" className="techlist">
				{word}
			</Typography>
		</Paper>
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

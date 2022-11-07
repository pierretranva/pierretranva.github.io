import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ConstructionIcon from "@mui/icons-material/Construction";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://pierretranva.github.io/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function StickyFooter() {
	return (
		<div className="footer-main">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100px",
				}}
			>
				<Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="sm">
					<Typography variant="h5">
						<ConstructionIcon className="construction" />
						Website is Currently Under Construction
						<ConstructionIcon className="construction" />
					</Typography>
				</Container>
				<Box
					component="footer"
					sx={{
						py: 3,
						px: 2,
						mt: "auto",
						backgroundColor: (theme) =>
							theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
					}}
				>
					<Container maxWidth="sm">
						<Typography variant="body1">Thank You for looking at my website!</Typography>
						<Copyright />
					</Container>
				</Box>
			</Box>
		</div>
	);
}

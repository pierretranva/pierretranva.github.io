import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LinkedIn, Instagram, GitHub } from "@material-ui/icons";
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
					<div className="footer-bottom">
						<Container maxWidth="sm">
							<div className="links">
								<Link href="https://www.linkedin.com/in/pierretranva/" target="_blank" rel="noopener noreferrer">
									<LinkedIn className="header__main-links_linkedin" />
								</Link>
								<Link href="https://www.instagram.com/p_tran1/" target="_blank" rel="noopener noreferrer">
									<Instagram className="header__main-links_instagram" />
								</Link>
								<Link href="https://github.com/pierretranva" target="_blank" rel="noopener noreferrer">
									<GitHub className="header__main-links_github" />
								</Link>
							</div>
							<div className="footer-text">
								<Typography variant="body1">Thanks for visiting my website!</Typography>
								<Copyright />
							</div>
						</Container>
					</div>
				</Box>
			</Box>
		</div>
	);
}

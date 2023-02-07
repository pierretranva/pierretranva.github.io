import * as React from 'react';
import { Button, Typography, Link } from '@material-ui/core';
import pie_icon from "../../assets/pie.png"
import './Navbar.css'


const Navbar = () => {

    return (
        <div className="navbar__main" id="home">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <img src={pie_icon} alt="Pie Logo" id="pie_icon"/>
                </div>
                <div className="navbar__main-links_container">
                    <a href="#home"><Typography variant= "h6" paragraph ={true} color= "#25449f">Home</Typography></a>
                    <a href="#about"><Typography variant= "h6" paragraph ={true} color= "#25449f">About Me</Typography></a>
                    <a href="#projects"><Typography variant= "h6" paragraph ={true} color= "#25449f">Projects</Typography></a>
                    <a href="#timeline"><Typography variant= "h6" paragraph ={true} color= "#25449f">Timeline</Typography></a>
                </div>
            </div>
            <div className="navbar__main-sign">
                <Link href="https://drive.google.com/file/d/1tXfNRxq5Rifl4JseDvPmY_qtCvHcvBs7/view?usp=sharing" target="_blank"><Button className="resume_button"variant="contained">Resume</Button></Link>
            </div>
            <div className="navbar__main-menu">
            </div>

        </div>
    )
}

export default Navbar

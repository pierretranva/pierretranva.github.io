import * as React from 'react';
import { Button, Typography, Link } from '@material-ui/core';
import icon_128 from "../../assets/icon_128.png"
import './Navbar.css'


const Navbar = () => {

    return (
        <div className="navbar__main" id="home">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <img src={icon_128} alt="Pie Logo"/>
                </div>
                <div className="navbar__main-links_container">
                    <a href="#home"><Typography variant= "h6" paragraph ={true}>Home</Typography></a>
                    <a href="#about"><Typography variant= "h6" paragraph ={true}>About Me</Typography></a>
                    <a href="#projects"><Typography variant= "h6" paragraph ={true}>Projects</Typography></a>
                    <a href="#timeline"><Typography variant= "h6" paragraph ={true}>Timeline</Typography></a>
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

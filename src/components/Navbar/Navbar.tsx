import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import icon_128 from "../../assets/icon_128.png"
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar__main">
            <div className="navbar__main-links">
                <div className="navbar__main-links_logo">
                    <img src={icon_128} alt="Pie Logo"/>
                </div>
                <div className="navbar__main-links_container">
                    <a href="#home"><Typography variant= "h1" paragraph ={true}>Home</Typography></a>
                    <a href="#home"><Typography variant= "h1" paragraph ={true}>About Me</Typography></a>
                    <a href="#home"><Typography variant= "h1" paragraph ={true}>Projects</Typography></a>
                    <a href="#home"><Typography variant= "h1" paragraph ={true}>Timeline</Typography></a>
                </div>
            </div>
            <div className="navbar__main-sign">
                <Button className="resume_button"variant="contained">Contact</Button>
            </div>
            <div className="navbar__main-menu">
            </div>

        </div>
    )
}

export default Navbar

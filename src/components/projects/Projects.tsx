import * as React from 'react';
import { Card, Grid, CardActionArea, Typography, CardContent, CardHeader, Link, Box, Divider,ListItem, List, ListItemText} from '@material-ui/core';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

import './Projects.css'
import { maxWidth } from '@material-ui/system';

function generateListItem(TechList: string[]) {
   
    return TechList.map((value) =>
        <ListItem>
            <ListItemText
                primary={value}
                primaryTypographyProps={{ variant: "body2" }}
            />

        </ListItem>,
    );
}

function ItemCard(CardTitle: (string | string[]), CardText: (string | string[]), CardLink: (string | string[]), TechnologiesList: (string | string[])) {
    let temp: string = "https://pierretranva.github.io";
    if(typeof CardLink === 'string'){
     temp = CardLink;
    }
    return (
        <div>
            
            <Card elevation={3} variant='outlined' className="ItemCard__main" sx={{backgroundColor:'#86A8E7'}}  >
            <CardHeader
                action= {
                    <Link className ='ItemCard__main-header-link' href={temp} target="_blank" rel="noopener noreferrer"><LaunchRoundedIcon/></Link>
                }
                title={<Typography variant="subtitle1" >{CardTitle}</Typography>
            }
            />
            <div className= 'ItemCard__main-content'>
            <CardContent >
            <div className= 'ItemCard__main-content-text'>
                <Typography variant='body2'>{CardText}</Typography>  
            </div>

                <div className= 'ItemCard__main-content-list'>
                    <Typography variant='body2'>{TechnologiesList}</Typography> 
                </div>
            </CardContent> 
            
            </div>
    

            </Card>
          
        </div>
        
    )
}
function generateCards() {
    const info = {
        "Obscurity Labs": ["Build a cybersecurity cli application with a databse to extract and store all windows files metadata","https://github.com/obscuritylabs", ["Python ", "MongoDB ", "FastAPI ","Docker "]],
        "Machine Learning Project": ["Create a neural network and K-Nearest-Neighbor algorithm from strach to classify flower types","https://github.com/pierretranva/machineLearningProject", ["Java "]],
        "Linked Web Data Structure": ["Custom data structure where each node in the structure has pointer to the neighbors","google.com", ["Java"]],
        "Pastimer": ["Develop a desktop application to help with productivity. Based on the Pomodoro technique.","https://github.com/thomasltran/pastimer", ["Python ", "MongoDB ", "FastAPI ","Docker"]],
        "Portfolio Website":["You're here right now!","https://github.com/pierretranva/pierretranva.github.io", ["React ", "Typescript ", "MUI ","Docker "]],
        "More to come in the future!": ["","", [""]],
    }
    return Object.entries(info).map(([key, value]) => 
        ItemCard(key, value[0], value[1], value[2])
       
    );

}

const Projects = () => {

    return (
        <div className="projects__main">
            <div className="projects__main-title">
                     <Divider textAlign="center" role="presentation" >
                         <Typography align="center" variant="h6">Projects</Typography>
                     </Divider>
            </div>
            <div className='projects__main-grid'>
           
                {generateCards()}
           
            </div>
        </div>
        // <div
        // <div className="projects__main-title">
        //             <Divider textAlign="center" role="presentation" >
        //                 <Typography align="center" variant="h6">Projects</Typography>
        //             </Divider>
        //         </div>
        // <div className = "projects__main">
              
                
              
        // <Box className='theBox' component= "span" sx={{ alignContent: 'center', display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', mx: '2px', borderColor: 'rgba(255,105,180,0.8)', rowGap:'10px', columnGap:'10px' }}>
    
        //        {generateCards()}
        // </Box>
        // </div>
        // </div>
    )
}

export default Projects;

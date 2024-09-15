import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from "../../Media/Images/Logo.png";
import Logo360 from "../../Media/Media_Image/360Logo.PNG";
import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';



const CourseDescriptionMobileHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);


  return (
    <>
    <AppBar position="fixed" className="AppHeader-CourseDescriptionMobileHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

         <Link to="/web">
         <img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='logo-CourseDescriptionMobileHeader' />
         </Link> 

          <Typography className="hiSheikh">
            Hi, Sheikh
            <MenuIcon sx={{fontSize:"4rem"}}/>
          </Typography>

          
        </Toolbar>
      </Container>
    </AppBar>

  
     </>
  );
}
export default CourseDescriptionMobileHeader;

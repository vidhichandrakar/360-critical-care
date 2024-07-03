import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../Media/Images/Logo.png";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "./NestedMenu";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" className="AppHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{  display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="Hamburger"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className="menuSize"
            >
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Inter !important" }}
              >
                <DropDown variant="null" icon={<KeyboardArrowRightIcon className="allCoursesIcon"/>}/>
              </MenuItem>
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Inter !important" }}
              > 
                <Link to="/About-us" style={{ color: 'inherit', textDecoration: 'none'}}> 
                  <Typography
                    textAlign="center"
                    
                    className="menuText"
                  >
                    About Us
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                style={{ fontFamily: "Inter !important" }}
              >
                <Link to="/Contact-us" style={{ color: 'inherit', textDecoration: 'none'}}>
                  {" "}
                  <Typography
                    textAlign="center"
                    className="menuText"
                  >
                    Contact Us
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
         <Link to="/Critical-Care"><img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='logo'  /></Link> 
        
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "3%",
            }}
          >
            <Box>
              <DropDown  variant="outlined" icon={<KeyboardArrowDownIcon className="allCoursesIcon"  />}/>
            </Box>
            <Typography
              key={"2"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontFamily: "Inter",
                fontWeight: "600",
                marginLeft: "2%",
                fontSize: "1.1em",
                marginTop: "0.4%",
              }}
            >
              <Link
                to="/About-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                About Us{" "}
              </Link>
            </Typography>
            <Typography
              key={"3"}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontFamily: "Inter",
                fontWeight: "600",
                marginLeft: "2%",
                fontSize: "1.1em",
                marginTop: "0.4%",
              }}
            >
              <Link
                to="/Contact-us"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                Contact Us
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }} className="loginContainer">
            <Button variant="contained" className="LoginButton">
              Login / Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
